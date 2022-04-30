import nodemailer from "nodemailer";

const testAccount = {
  user: "developerworking7@gmail.com",
  pass: "Developer123",
};

async function main() {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  let info = await transporter.sendMail({
    from: testAccount.user,
    to: "hatranquang02@gmail.com, hieudzvai@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });

  console.log(info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

export default main;
