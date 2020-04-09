import crypto from "crypto";

const { SECRET_KEY } = process.env;

function sign(text: string) {
  return crypto
    .createHmac("sha1", SECRET_KEY!)
    .update(text)
    .digest("hex");
}

function verify(text: string, hmac: string) {
  return sign(text) === hmac;
}

export { sign, verify };
