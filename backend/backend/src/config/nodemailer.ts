import fs from 'fs';
import nodemailer from 'nodemailer';
import path from 'path';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const loadTemplate = (templateName: string, variables: Record<string, string>) => {
  const filePath = path.join(__dirname, 'templates', `${templateName}.html`);
  let html = fs.readFileSync(filePath, 'utf8');

  for (const key in variables) {
    const regex = new RegExp(`{{${key}}}`, 'g');
    html = html.replace(regex, variables[key] || '');
  }

  return html;
};

export default transporter;
