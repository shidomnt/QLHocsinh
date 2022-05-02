import { Controller } from '.';
import * as mail from '../config/mail';
import { HocSinhModel } from '../models';

interface BodySendMail {
  subject: string;
  text: string;
  html: string;
  listId: string[];
}

export const sendMail: Controller = async (req, res) => {
  const { subject, text, html, listId } = req.body as BodySendMail;
  const listEmail = await HocSinhModel.find()
    .where('id')
    .in(listId)
    .select('email');
  await mail.send(
    listEmail.map(({ email }) => email),
    subject,
    text,
    html
  );
  res.send("OK");
};
