import nodemailer from 'nodemailer';
export declare const transporterContact: nodemailer.Transporter<import("nodemailer/lib/smtp-pool").SentMessageInfo, import("nodemailer/lib/smtp-pool").Options>;
export declare const transporterSupport: nodemailer.Transporter<import("nodemailer/lib/smtp-pool").SentMessageInfo, import("nodemailer/lib/smtp-pool").Options>;
export declare const transporterInfo: nodemailer.Transporter<import("nodemailer/lib/smtp-pool").SentMessageInfo, import("nodemailer/lib/smtp-pool").Options>;
export declare const loadTemplate: (templateName: string, variables: Record<string, string>) => string;
//# sourceMappingURL=nodemailer.d.ts.map