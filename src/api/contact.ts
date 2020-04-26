interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}

async function contactSubmit(submission: ContactSubmission) {
  const response = await fetch(`/.netlify/functions/contact-submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submission),
  });

  if (!response.ok) {
    throw new Error(response.statusText || response.status.toString());
  }

  return response;
}

export { contactSubmit, ContactSubmission };
