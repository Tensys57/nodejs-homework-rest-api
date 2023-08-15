const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "tensys@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//   to: "kinedav149@huvacliq.com",
//   from: "bogdan.lyamzin.d@meta.ua",
//   subject: "Test email",
//   html: "<p><strong>Test email</strong> from localhost:3000</p>",
// };

const sendEmail = (data) =>
  transport
    .sendMail({ ...data, from: "tensys@gmail.com" })
    .then(() => console.log("Email send success"))
    .catch((error) => console.log(error.message));

module.exports = sendEmail;
