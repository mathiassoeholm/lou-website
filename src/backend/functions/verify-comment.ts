import { Handler } from "../@types/netlify-functions";
import { verify } from "../signing";
import { createGithubHelper } from "../github";

const COMMENTS_FILE = "src/data/comments.json";

const githubHelper = createGithubHelper({
  userAgent: "lou-website",
  auth: process.env.GITHUB_ACCESS_TOKEN ?? "",
  owner: "mathiassoeholm",
  repo: "lou-website",
});

export const handler: Handler = async (event) => {
  let statusCode = 500;
  try {
    const { text, author, articleSlug, date, hmac } =
      event.queryStringParameters ?? {};

    if (!text || !author || !articleSlug || !date || !hmac) {
      statusCode = 400;
      throw new Error(
        "One or more of the required fields 'text, author, articleSlug, date, hmac' were not found in the query string parameters"
      );
    }

    if (!verify(text + author + articleSlug + date, hmac)) {
      statusCode = 401;
      throw new Error("HMAC signature does not match");
    }

    const comments = await githubHelper.getJsonFile(COMMENTS_FILE);

    const existingComment = comments?.[articleSlug]?.[hmac];

    if (existingComment !== undefined) {
      statusCode = 409;
      throw new Error("The comment already exists");
    }

    const updatedComments = JSON.stringify(
      {
        ...comments,
        [articleSlug]: [
          ...(comments[articleSlug] || []),
          {
            hmac,
            date,
            author,
            text,
          },
        ],
      },
      null,
      2
    );

    console.log(updatedComments);

    return {
      statusCode: 200,
      body: "successfully verified the comment",
    };
  } catch (e) {
    return {
      statusCode,
      body: e.message,
    };
  }
};
