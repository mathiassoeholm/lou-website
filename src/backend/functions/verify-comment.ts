import gql from "graphql-tag";
import { Handler } from "../@types/netlify-functions";
import { verify } from "../signing";
import { createGithubClient } from "../github";

const COMMENTS_FILE = "src/data/comments.json";
const REPO_NAME = "lou-website";
const REPO_OWNER = "mathiassoeholm";

const { request, createCommit } = createGithubClient(
  process.env.GITHUB_ACCESS_TOKEN ?? "",
  "lou-website"
);

export const handler: Handler = async (event) => {
  let statusCode = 500;
  try {
    const { text, author, articleSlug, date, id, hmac } =
      event.queryStringParameters ?? {};

    if (!text || !author || !articleSlug || !date || !id || !hmac) {
      statusCode = 400;
      throw new Error(
        "One or more of the required fields 'text, author, articleSlug, date, id, hmac' were not found in the query string parameters"
      );
    }

    if (!verify(text + author + articleSlug + date + id, hmac)) {
      statusCode = 401;
      throw new Error("HMAC signature does not match");
    }

    const data = await request(
      gql`
        query commentsData(
          $repoName: String!
          $repoOwner: String!
          $filePath: String!
        ) {
          repository(name: $repoName, owner: $repoOwner) {
            object(expression: $filePath) {
              ... on Blob {
                text
              }
            }
            defaultBranchRef {
              name
              prefix
              target {
                ... on Commit {
                  oid
                  tree {
                    oid
                  }
                }
              }
            }
          }
        }
      `,
      {
        repoName: REPO_NAME,
        repoOwner: REPO_OWNER,
        filePath: `master:${COMMENTS_FILE}`,
      }
    );

    console.log("data", data);

    const comments = JSON.parse(data.repository.object.text);
    const existingComment = (comments?.[articleSlug] as any[])?.find(
      (c) => c.id === id
    );

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
            id,
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

    const { defaultBranchRef } = data.repository;

    await createCommit({
      path: COMMENTS_FILE,
      content: updatedComments,
      repo: REPO_NAME,
      owner: REPO_OWNER,
      message: `[api-commit] Add comment by ${author}`,
      baseTreeSha: defaultBranchRef.target.tree.oid,
      parentCommitSha: defaultBranchRef.target.oid,
      defaultBranchRef: `heads/${defaultBranchRef.name}`,
    });

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
