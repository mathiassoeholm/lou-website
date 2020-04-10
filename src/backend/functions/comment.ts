import sgMail from "@sendgrid/mail";
import queryString from "query-string";
import { Handler } from "../@types/netlify-functions";
import { sign } from "../signing";

sgMail.setApiKey(process.env.SEND_GRID_API_KEY ?? "");

// Temporarily disable sending e-mails
(sgMail as any).send = function() {
  console.log("sgMail.send", arguments);
};

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

    const hmac = sign(text + author + articleSlug + date);
    const baseUrl = process.env.NETLIFY_DEV
      ? "http://localhost:8888"
      : "https://lou-website.netlify.com";

    const urlParams = queryString.stringify({
      text,
      author,
      articleSlug,
      date,
      hmac,
    });

    const link = `${baseUrl}/.netlify/functions/verify-comment?${urlParams}`;

    console.log("link", link);

    const message = {
      to: "mathiassoeholm@gmail.com",
      from: "mathiassoeholm@gmail.com",
      subject: "A new comment",
      text: `There's a new comment, you should totally approve it! `,
      html: `
      <strong>There's a new comment, you should totally approve it!/strong>
      <a href="https://lou-website.netlify.com/">Approve</a>
    `,
    };

    await sgMail.send(message);

    console.log("Sent email:", message);

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
