import type { ForgetPassword, validateEmail } from "../../@types/interface/mail";
import transporter, { loadTemplate } from "../../config/nodemailer";

class MailService {
  async sendValidateEmail({EMAIL, TOKEN}: validateEmail): Promise<boolean> {
    try {
      const link = `${process.env.FRONTEND_URL}/acess/validate?token=${TOKEN}`;

      const html = loadTemplate('template_validate_email', { link, email: EMAIL });

      transporter.sendMail({
        from: process.env.MAIL_USER,
        to: EMAIL,
        subject: 'Validação de Email',
        html,
      });

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

      transporter.sendMail({
        from: process.env.MAIL_USER,
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

      transporter.sendMail({
        from: process.env.MAIL_USER,
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
}

export const mailService = new MailService();
