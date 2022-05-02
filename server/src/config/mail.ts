import nodemailer from 'nodemailer';

export const send = async (
  targetAddress: string | string[],
  subject: string,
  text: string,
  html: string = ''
) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    let info = await transporter.sendMail({
      from: process.env.MAIL_USER,
      bcc: targetAddress,
      subject,
      text,
      html,
    });

    console.log(info);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  } catch (e) {
    console.log('Loi khi gui mail');
  }
};

export default send;
