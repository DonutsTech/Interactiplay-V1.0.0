import { loadTemplate, transporterInfo } from "../../config/nodemailer";
class MailService {
    async sendValidateEmail({ EMAIL, TOKEN }) {
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
        }
        catch (error) {
            console.error('Error sending validation email:', error);
            return false;
        }
    }
    async sendForgetPasswordEmail({ CODE, EMAIL, TOKEN }) {
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
        }
        catch (error) {
            console.error('Error sending forget password email:', error);
            return false;
        }
    }
    async sendResetPasswordEmail(email) {
        try {
            const html = loadTemplate('template_password_changed', { email });
            await transporterInfo.sendMail({
                from: process.env.MAIL_USER_3,
                to: email,
                subject: 'Senha Alterada',
                html,
            });
            return true;
        }
        catch (error) {
            console.error('Error sending reset password email:', error);
            return false;
        }
    }
}
export const mailService = new MailService();
//# sourceMappingURL=index.js.map