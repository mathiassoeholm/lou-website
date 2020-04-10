import { Octokit } from "@octokit/rest";
import { Handler } from "../@types/netlify-functions";
import { verify } from "../signing";

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
  userAgent: "lou-website",
});

const COMMENTS_FILE = "src/data/comments.json";
const REPO_OWNER = "mathiassoeholm";
const REPO_NAME = "lou-website";

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

    const comments = await getComments();

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

async function getComments() {
  const response = await octokit.repos.getContents({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    path: COMMENTS_FILE,
  });

  const content = Buffer.from(
    (response.data as any).content,
    "base64"
  ).toString();

  return JSON.parse(content);
}
