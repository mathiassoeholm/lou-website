import sgMail from "@sendgrid/mail";
import crypto from "crypto";
import queryString from "query-string";
import { Handler } from "./@types/netlify-functions";
import { sign } from "./utils/signing";

sgMail.setApiKey(process.env.SEND_GRID_API_KEY ?? "");

// Uncomment to disable sending e-mails
// (sgMail as any).send = function() {
//   console.log("sgMail.send", arguments);
// };

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
      : "https://lou-website.netlify.com";

    const urlParams = queryString.stringify({
      text,
      author,
      articleSlug,
      date,
      id,
      hmac,
    });

    const link = `${baseUrl}/.netlify/functions/verify-comment?${urlParams}`;

    const message = {
      to: "mathiassoeholm@gmail.com",
      from: "mathiassoeholm@gmail.com",
      subject: `New comment on ${articleSlug}`,
      text: `There's a new comment on ${articleSlug}`,
      html: `
      <h3>Author</h3>
      <p>${author}</p>
      <h3>Comment</h3>
      <p>${text}</p>
      <a href="${link}">Click here to approve</a>
    `,
    };

    await sgMail.send(message);

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
