import e from "express";
import type { ForgetPassword, MailPages, Notice, validateEmail } from "../../@types/interface/mail";
import { loadTemplate, transporterInfo } from "../../config/nodemailer";
import { CustomError } from "../../error";

class MailService {
  async sendNewContactRequestEmail({ EMAIL, MESSAGE, NAME, PHONE }: MailPages): Promise<{ MESSAGE: string }> {
    try {
      const html = loadTemplate('template_new_request', { type: 'Contato', email: EMAIL, name: NAME, phone: PHONE, message: MESSAGE });

      await transporterInfo.sendMail({
        from: process.env.MAIL_USER_3,
        to: process.env.MAIL_USER_1,
        subject: 'Nova Solicitação de Contato',
        html,
      });

      const htmlUser = loadTemplate('template_received_your_request', { type: 'Contato', email: EMAIL, name: NAME });

      await transporterInfo.sendMail({
        from: process.env.MAIL_USER_3,
        to: EMAIL,
        subject: 'Recebemos sua solicitação de contato',
        html: htmlUser,
      });

      return { MESSAGE: 'Email enviado com sucesso!' };
    } catch (error) {
      console.error('Error sending new contact request email:', error);
      throw new CustomError('Erro ao enviar email', 500);
    }
  }

  async sendPhotosRequestEmail({ EMAIL, MESSAGE, NAME, PHONE }: MailPages, files: Express.Multer.File[] | undefined): Promise<{ MESSAGE: string }> {
    try {
      const html = loadTemplate('template_new_request', { type: 'Sugestões', email: EMAIL, name: NAME, phone: PHONE, message: MESSAGE });

      const attachments = files?.map(file => ({
        filename: file.originalname,
        content: file.buffer,
      }));

      await transporterInfo.sendMail({
        from: process.env.MAIL_USER_3,
        to: process.env.MAIL_USER_1,
        subject: 'Nova Solicitação do usuario',
        html,
        ...(attachments ? { attachments } : {}),
      });

      const htmlUser = loadTemplate('template_received_your_request', { type: 'Sugestões', email: EMAIL, name: NAME });

      await transporterInfo.sendMail({
        from: process.env.MAIL_USER_3,
        to: EMAIL,
        subject: 'Recebemos sua solicitação',
        html: htmlUser,
      });

      return { MESSAGE: 'Email enviado com sucesso!' };
    } catch (error) {
      console.error('Error sending photos request email:', error);
      throw new CustomError('Erro ao enviar email', 500);
    }
  }

  async sendValidateEmail({EMAIL, TOKEN}: validateEmail): Promise<boolean> {
    console.log(`🚀 Sending validation email to: ${EMAIL} at ${new Date().toISOString()}`);

    try {
      const link = `${process.env.FRONTEND_URL}/acess/validate?token=${TOKEN}`;

      const html = loadTemplate('template_validation_email', { link, email: EMAIL });


      await transporterInfo.sendMail({
        from: process.env.MAIL_USER_3,
        to: EMAIL,
        subject: 'Validação de Email',
        html,
      });

      console.log(`✅ Email sent successfully to: ${EMAIL}`);
      return true;
    } catch (error) {
      console.error('Error sending validation email:', error);
      return false;
    }
  }

  async sendForgetPasswordEmail({CODE, EMAIL, TOKEN}: ForgetPassword): Promise<boolean> {
    try {
      const link = `${process.env.FRONTEND_URL}/acess/reset-password?token=${TOKEN}`;

      const html = loadTemplate('template_reset_password', { link, email: EMAIL, code: CODE });

      await transporterInfo.sendMail({
        from: process.env.MAIL_USER_3,
        to: EMAIL,
        subject: 'Redefinição de Senha',
        html,
      });

      return true;
    } catch (error) {
      console.error('Error sending forget password email:', error);
      return false;
    }
  }

  async sendResetPasswordEmail(email: string): Promise<boolean> {
    try {
      const html = loadTemplate('template_password_changed', { email });

      await transporterInfo.sendMail({
        from: process.env.MAIL_USER_3,
        to: email,
        subject: 'Senha Alterada',
        html,
      });

      return true;
    } catch (error) {
      console.error('Error sending reset password email:', error);
      return false;
    }
  }

  async sendNoticePlan75({ EMAIL, NAME }: Notice): Promise<boolean> {
    try {
      const html = loadTemplate('template_notice_plan_75', { name: NAME });

      await transporterInfo.sendMail({
        from: process.env.MAIL_USER_3,
        to: EMAIL,
        subject: 'Aviso de uso 75% dos plays',
        html,
      });

      return true;
    } catch (error) {
      console.error('Error sending notice plan email:', error);
      return false;
    }
  }

  async sendNoticePlan100({ EMAIL, NAME }: Notice): Promise<boolean> {
    try {
      const html = loadTemplate('template_notice_plan_100', { name: NAME });

      await transporterInfo.sendMail({
        from: process.env.MAIL_USER_3,
        to: EMAIL,
        subject: 'Aviso de uso 100% dos plays',
        html,
      });

      return true;
    } catch (error) {
      console.error('Error sending notice plan email:', error);
      return false;
    }
  }

  async sendNoticePlanTest({ EMAIL, NAME }: Notice): Promise<boolean> {
    try {
      const html = loadTemplate('template_notice_plan_test', { name: NAME });

      await transporterInfo.sendMail({
        from: process.env.MAIL_USER_3,
        to: EMAIL,
        subject: 'Aviso de Uso do Plano - Teste',
        html,
      });

      return true;
    } catch (error) {
      console.error('Error sending notice plan test email:', error);
      return false;
    }
  }

  async sendNoticePlays({ EMAIL, NAME }: Notice): Promise<boolean> {
    try {
      const html = loadTemplate('template_notice_plays', { name: NAME });

      await transporterInfo.sendMail({
        from: process.env.MAIL_USER_3,
        to: EMAIL,
        subject: `Você acumulou mais 1.000 plays extras`,
        html,
      });

      return true;
    } catch (error) {
      console.error('Error sending custom notice plan email:', error);
      return false;
    }
  }

  async sendWelcomeEmail({ EMAIL, NAME }: Notice): Promise<boolean> {
    try {
      const html = loadTemplate('template_welcome_email', { name: NAME, suporte: process.env.MAIL_USER_2 || "", ano: `${new Date().getFullYear()}` });

      await transporterInfo.sendMail({
        from: process.env.MAIL_USER_3,
        to: EMAIL,
        subject: 'Sua assinatura está ativa! Bem-vindo oficialmente!',
        html,
      });

      return true;
    } catch (error) {
      console.error('Error sending welcome email:', error);
      return false;
    }
  }

  async sendCancelSubscriptionEmail({ EMAIL, NAME }: Notice): Promise<boolean> {
    try {
      const html = loadTemplate('template_cancel', { name: NAME });

      await transporterInfo.sendMail({
        from: process.env.MAIL_USER_3,
        to: EMAIL,
        subject: 'Sua assinatura foi cancelada',
        html,
      });

      return true;

    } catch (error) {
      console.error('Error sending cancel subscription email:', error);
      return false;
    }
  }

  async sendPaymentEmail({ EMAIL, NAME }: Notice): Promise<boolean> {
    try {
      const html = loadTemplate('template_payment', { name: NAME });

      await transporterInfo.sendMail({
        from: process.env.MAIL_USER_3,
        to: EMAIL,
        subject: 'Pagamento confirmado',
        html,
      });

      return true;
    } catch (error) {
      console.error('Error sending payment email:', error);
      return false;
    }
  }
}

export const mailService = new MailService();
