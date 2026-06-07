import fs from 'fs';
import { cwd } from 'node:process';
import nodemailer from 'nodemailer';
import path from 'path';

export const transporterContact = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: true,
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.MAIL_USER_1,
    pass: process.env.MAIL_PASS,
  },
  connectionTimeout: 10000,
  greetingTimeout: 5000,
  socketTimeout: 10000,
} as any);

export const transporterSupport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: true,
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.MAIL_USER_2,
    pass: process.env.MAIL_PASS,
  },
  connectionTimeout: 10000,
  greetingTimeout: 5000,
  socketTimeout: 10000,
} as any);

export const transporterInfo = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: true,
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.MAIL_USER_3,
    pass: process.env.MAIL_PASS,
  },
  connectionTimeout: 10000,
  greetingTimeout: 5000,
  socketTimeout: 15000,
} as any);

export const loadTemplate = (templateName: string, variables: Record<string, string>) => {
  const filePath = path.join(cwd(), 'src', 'services', 'mail', 'templates', `${templateName}.html`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Template não encontrado: ${filePath}`);
  }

  let html = fs.readFileSync(filePath, 'utf8');

  for (const key in variables) {
    const regex = new RegExp(`{{${key}}}`, 'g');
    html = html.replace(regex, variables[key] || '');
  }

  return html;
};
