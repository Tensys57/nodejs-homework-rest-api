const nodemailer = require("nodemailer");
require("dotenv").config();

const { MAIN_PASS } = process.env;

const nodemailerConfig = {
  service: "gmail",
  auth: {
    user: "tensys57@gmail.com",
    pass: MAIN_PASS,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  await transporter
    .sendMail({ ...data, from: "tensys57@gmail.com" })
    .then(() => console.log("Email sent successfully"))
    .catch((error) => console.log(error.message));
  return true;
};

module.exports = sendEmail;
