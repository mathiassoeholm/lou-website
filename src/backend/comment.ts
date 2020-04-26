import crypto from "crypto";
import queryString from "query-string";
import { Handler } from "./@types/netlify-functions";
import { sign } from "./utils/signing";
import { sendEmail } from "./utils/email";

export const handler: Handler = async (event) => {
  let statusCode = 500;
  try {
    if (!event.body) {
      statusCode = 400;
      throw new Error("The request should have a body");
    }

    const { text, author, articleSlug } = JSON.parse(event.body);

    if (!text || !author || !articleSlug) {
      statusCode = 400;
      throw new Error(
        "One or more of the required fields 'text, author, articleSlug' were not found in the JSON body"
      );
    }

    const date = new Date().toISOString();
    const id = crypto.randomBytes(12).toString("hex");

    const hmac = sign(text + author + articleSlug + date + id);
    const baseUrl = process.env.NETLIFY_DEV
      ? "http://localhost:8888"
      : "https://lou-website.netlify.app";

    const urlParams = queryString.stringify({
      text,
      author,
      articleSlug,
      date,
      id,
      hmac,
    });

    const link = `${baseUrl}/.netlify/functions/verify-comment?${urlParams}`;

    await sendEmail({
      to: process.env.LOUISE_EMAIL ?? "",
      from: process.env.MATHIAS_EMAIL ?? "",
      subject: `New comment on ${articleSlug}`,
      text: `There's a new comment on ${articleSlug}`,
      html: `
      <h3>Author</h3>
      <p>${author}</p>
      <h3>Comment</h3>
      <p style="white-space: pre-wrap">${text}</p>
      <a href="${link}">Click here to approve</a>
    `,
    });

    return {
      statusCode: 200,
      body: "success",
    };
  } catch (e) {
    console.error(JSON.stringify(e));

    return {
      statusCode,
      body: e.message,
    };
  }
};
