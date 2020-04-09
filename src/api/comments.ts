interface NewComment {
  author: string;
  text: string;
  articleSlug: string;
}

async function comment(newComment: NewComment) {
  const response = await fetch(`/.netlify/functions/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newComment),
  });

  if (!response.ok) {
    throw new Error(response.statusText || response.status.toString());
  }

  return response;
}

export { comment, NewComment };
