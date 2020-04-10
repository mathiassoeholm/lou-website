import { Octokit } from "@octokit/rest";
import { GraphQLClient } from "graphql-request";
import { print } from "graphql/language/printer";
import { Variables } from "graphql-request/dist/src/types";
import { ASTNode } from "graphql";

interface CreateCommitOptions {
  path: string;
  content: string;
  repo: string;
  owner: string;
  message: string;
  baseTreeSha: string;
  parentCommitSha: string;
  defaultBranchRef: string;
}

function createGithubClient(authToken: string, userAgent: string) {
  const graphqlClient = new GraphQLClient("https://api.github.com/graphql", {
    headers: {
      authorization: `bearer ${authToken}`,
    },
  });

  const restClient = new Octokit({
    auth: authToken,
    userAgent,
  });

  function request(query: ASTNode, variables?: Variables) {
    return graphqlClient.request(print(query), variables);
  }

  async function createCommit({
    path,
    content,
    repo,
    owner,
    message,
    baseTreeSha,
    parentCommitSha,
    defaultBranchRef,
  }: CreateCommitOptions) {
    const createTreeResponse = await restClient.git.createTree({
      owner,
      repo,
      base_tree: baseTreeSha,
      tree: [
        {
          path,
          mode: "100644",
          content,
        },
      ],
    });

    console.log("createTreeResponse", createTreeResponse);

    const newTreeSha = createTreeResponse.data.sha;

    const createCommitResponse = await restClient.git.createCommit({
      owner,
      repo,
      message,
      tree: newTreeSha,
      parents: [parentCommitSha],
    });
    console.log("createCommitResponse", createCommitResponse);

    const newCommitSha = createCommitResponse.data.sha;

    console.log("params", {
      owner,
      repo,
      sha: newCommitSha,
      ref: defaultBranchRef,
    });

    const updateRefResponse = await restClient.git.updateRef({
      owner,
      repo,
      sha: newCommitSha,
      ref: defaultBranchRef,
    });

    console.log("updateRefResponse", updateRefResponse);
  }

  return { request, createCommit };
}

export { createGithubClient };
