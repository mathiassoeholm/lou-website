import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SEND_GRID_API_KEY ?? "");

interface Email {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

// Uncomment to disable sending e-mails
// (sgMail as any).send = function () {
//   console.log("sgMail.send", arguments);
// };

export function sendEmail(email: Email) {
  return sgMail.send(email);
}
