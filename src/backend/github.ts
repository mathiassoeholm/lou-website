import { Octokit } from "@octokit/rest";

interface Options {
  userAgent: string;
  auth: string;
  owner: string;
  repo: string;
}

export function createGithubHelper({ auth, userAgent, owner, repo }: Options) {
  const octokit = new Octokit({
    auth,
    userAgent,
  });

  async function getJsonFile(path: string) {
    const response = await octokit.repos.getContents({
      owner,
      repo,
      path,
    });

    const content = Buffer.from(
      (response.data as any).content,
      "base64"
    ).toString();

    return JSON.parse(content);
  }

  return { getJsonFile };
}
