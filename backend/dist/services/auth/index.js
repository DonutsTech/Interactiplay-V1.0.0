import bcrypt from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { CustomError } from '../../error';
import { userModel } from '../../models/user';
import { createPortalCustomer, createStripeCustomer, generatedCheckout, handleSubscriptionFinishedTrial, } from '../../utils/stripe';
import { validateEmail } from '../../utils/validate';
import { mailService } from '../mail';
import { planService } from '../plan';
import { userService } from '../user';
class AuthService {
    createToken(user) {
        return jwt.sign({ ID: user.ID, ROLE: user.ROLE }, process.env.JWT_SECRET_KEY, {
            subject: user.ID,
            expiresIn: '7d',
        });
    }
    checkingToken(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            return decoded;
        }
        catch (error) {
            throw new CustomError('Token inválido', StatusCodes.UNAUTHORIZED);
        }
    }
    generateRandom4DigitNumber() {
        const randomNumber = Math.floor(Math.random() * 10000);
        return randomNumber.toString().padStart(4, '0');
    }
    async register(data) {
        try {
            const user = await userModel.findBy({ where: { EMAIL: data.EMAIL } });
            if (user) {
                throw new CustomError('Parece que você já possui uma conta. Por favor, acesse usando seu login.', StatusCodes.CONFLICT);
            }
            const stripe = await createStripeCustomer(data.EMAIL, data.NAME);
            const create = await userService.create({ ...data, ...stripe });
            if (!(create.STRIPE_SUBSCRIPTION_STATUS === '')) {
                throw new CustomError('Parece que você já possui uma conta. Por favor, acesse usando seu login.', StatusCodes.CONFLICT);
            }
            const token = this.createToken(create);
            await mailService.sendValidateEmail({ EMAIL: create.EMAIL, TOKEN: token });
            return create;
        }
        catch (error) {
            throw error;
        }
    }
    async verificationStripedSubscription(user) {
        try {
            if (user.STRIPE_SUBSCRIPTION_STATUS === '' || user.STRIPE_SUBSCRIPTION_STATUS === '') {
                throw new CustomError('Assinatura não encontrada, por favor realize a assinatura para acessar o conteúdo', StatusCodes.FORBIDDEN, { ...user, PORTAL_URL: '' });
            }
            const portal = await createPortalCustomer(user.STRIPE_CUSTOMER_ID);
            if (!(user.STRIPE_SUBSCRIPTION_STATUS === 'active' ||
                user.STRIPE_SUBSCRIPTION_STATUS === 'trialing')) {
                throw new CustomError('Assinatura inativa, por favor realize a assinatura para acessar o conteúdo', StatusCodes.PAYMENT_REQUIRED, { ...user, PORTAL_URL: portal.PORTAL_URL });
            }
            const token = this.createToken(user);
            user = await userService.update(user.ID, { HASHED_TOKEN: token });
            return token;
        }
        catch (error) {
            throw error;
        }
    }
    async login(body) {
        try {
            await validateEmail(body.EMAIL);
            let user = await userModel.findBy({ where: { EMAIL: body.EMAIL } });
            if (!user) {
                throw new CustomError('Email ou senha incorretos', StatusCodes.UNAUTHORIZED);
            }
            if (!(await bcrypt.compare(body.HASHED_PASSWORD, user.HASHED_PASSWORD))) {
                throw new CustomError('Email ou senha incorretos', StatusCodes.UNAUTHORIZED);
            }
            const token = await this.verificationStripedSubscription(user);
            return { ACCESTOKEN: token, USER: user };
        }
        catch (error) {
            throw error;
        }
    }
    async me(id) {
        try {
            const user = await userService.showId(id);
            if (!user) {
                throw new CustomError('Usuário não encontrado', StatusCodes.NOT_FOUND);
            }
            return { USER: { ...user } };
        }
        catch (error) {
            throw error;
        }
    }
    async validateEmail(id) {
        try {
            await userService.existsById(id);
            const user = await userService.update(id, { VALIDATION_EMAIL: true });
            return { USER: user };
        }
        catch (error) {
            throw error;
        }
    }
    async forgotPassword(email) {
        try {
            await validateEmail(email);
            const user = await userService.showEmail(email);
            if (!user) {
                throw new CustomError('Email não encontrado', StatusCodes.NOT_FOUND);
            }
            const token = this.createToken(user);
            const randomNumeber = this.generateRandom4DigitNumber();
            await userService.update(user.ID, { HASHED_TOKEN: randomNumeber });
            await mailService.sendForgetPasswordEmail({
                CODE: randomNumeber,
                EMAIL: email,
                TOKEN: token,
            });
            return { MESSAGE: 'Email de recuperação enviado com sucesso' };
        }
        catch (error) {
            throw error;
        }
    }
    async resetPassword({ CODE, HASHED_PASSWORD, ID }) {
        try {
            const user = await userService.showId(ID);
            if (user && user.HASHED_TOKEN && !(await bcrypt.compare(CODE, user.HASHED_TOKEN))) {
                throw new CustomError('Código de verificação inválido', StatusCodes.CONFLICT);
            }
            await userService.update(ID, { HASHED_PASSWORD, HASHED_TOKEN: '' });
            await mailService.sendResetPasswordEmail(user.EMAIL);
            return { MESSAGE: 'Senha alterada com sucesso' };
        }
        catch (error) {
            throw error;
        }
    }
    async sendEmailForValidateEmail(id) {
        try {
            const user = await userService.showId(id);
            const token = this.createToken(user);
            await mailService.sendValidateEmail({ EMAIL: user.EMAIL, TOKEN: token });
            return { MESSAGE: 'Email de validação enviado com sucesso' };
        }
        catch (error) {
            throw error;
        }
    }
    async paymentCheckout(data) {
        try {
            const plan = await planService.showId(data.ID_PLAN);
            const user = await userService.showId(data.ID_USER);
            const token = this.createToken(user);
            await userService.update(user.ID, { HASHED_TOKEN: token });
            const stripe = await generatedCheckout({
                email: user.EMAIL,
                planId: plan.ID,
                token,
                userId: user.ID,
                price: plan.STRIPE_PLAN_PRICE,
            });
            if (!stripe) {
                throw new CustomError('Não conseguimos completar sua ação. Tente outra vez', StatusCodes.INTERNAL_SERVER_ERROR);
            }
            return stripe;
        }
        catch (error) {
            throw error;
        }
    }
    async paymentPlanForActivateSubscription(ID) {
        try {
            const user = await userService.showId(ID);
            if (!user) {
                throw new CustomError('Usuário não encontrado', StatusCodes.NOT_FOUND);
            }
            if (user.STRIPE_SUBSCRIPTION_STATUS === 'active') {
                throw new CustomError('Assinatura já ativa', StatusCodes.CONFLICT);
            }
            if (user.STRIPE_SUBSCRIPTION_ID === '' || user.STRIPE_SUBSCRIPTION_STATUS === '') {
                throw new CustomError('Assinatura não encontrada', StatusCodes.FORBIDDEN);
            }
            await handleSubscriptionFinishedTrial({
                email: user.EMAIL,
                userId: user.ID,
                planId: user.PLAN_ID,
                stripeSubscriptionId: user.STRIPE_SUBSCRIPTION_ID,
                price: '',
            });
            return { MESSAGE: 'Assinatura em processamento de ativação' };
        }
        catch (error) {
            throw error;
        }
    }
    async paymentPortal(userId) {
        try {
            const user = await userService.showId(userId);
            if (!user) {
                throw new CustomError('Usuário não encontrado', StatusCodes.NOT_FOUND);
            }
            if (user.STRIPE_SUBSCRIPTION_ID === '' || user.STRIPE_CUSTOMER_ID === '') {
                throw new CustomError('Assinatura não encontrada', StatusCodes.FORBIDDEN);
            }
            const portal = await createPortalCustomer(user.STRIPE_CUSTOMER_ID);
            if (!portal) {
                throw new CustomError('Não conseguimos completar sua ação. Tente outra vez', StatusCodes.INTERNAL_SERVER_ERROR);
            }
            return portal;
        }
        catch (error) {
            throw error;
        }
    }
}
export const authService = new AuthService();
//# sourceMappingURL=index.js.map