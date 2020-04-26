import { Handler } from "./@types/netlify-functions";
import { sendEmail } from "./utils/email";

export const handler: Handler = async (event) => {
  let statusCode = 500;
  try {
    if (!event.body) {
      statusCode = 400;
      throw new Error("The request should have a body");
    }

    const { name, email, subject, message } = JSON.parse(event.body);

    if (!name || !email || !subject || !message) {
      statusCode = 400;
      throw new Error(
        "One or more of the required fields 'name, email, subject, message' were not found in the JSON body"
      );
    }

    await sendEmail({
      to: process.env.LOUISE_EMAIL ?? "",
      from: process.env.MATHIAS_EMAIL ?? "",
      subject,
      text: message,
      html: `
      <p>There's a new form submission on lou-website</p>
      <h3>Name</h3>
      <p>${name}</p>
      <h3>email</h3>
      <p>${email}</p>
      <h3>subject</h3>
      <p>${subject}</p>
      <h3>message</h3>
      <p style="white-space: pre-wrap">${message}</p>
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
