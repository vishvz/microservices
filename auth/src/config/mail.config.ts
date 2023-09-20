import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import getEnv from './env.config';

type Props = {
  toMail: string;
  template: string;
  subject?: string;
  from?: string;
};

/**
 * 
 * @param toMail Address to send an email to.
 * @param template Email template to send.
 * @param subject Email subject.
 * @returns info
 */

const sendMail: (props: Props) => Promise<SMTPTransport.SentMessageInfo> = async ({
  toMail,
  template,
  from,
  subject,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      host: String(getEnv('SMTP_EMAIL_HOST')),
      port: Number(getEnv('SMTP_EMAIL_PORT')),
      secure: true,
      auth: {
        user: getEnv('SMTP_EMAIL_ADDRESS'),
        pass: getEnv('SMTP_EMAIL_PASSWORD'),
      },
    });

    const info = await transporter.sendMail({
      from: from ?? `<${String(getEnv('SMTP_EMAIL_ADDRESS'))}>`,
      to: toMail,
      subject: subject ?? 'Hi',
      html: template,
    });
    return info;
  } catch (error) {
    return error;
  }
};

export default sendMail;
