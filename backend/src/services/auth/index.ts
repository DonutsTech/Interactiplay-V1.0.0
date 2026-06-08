import bcrypt from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import type { PaymentCheckout, ResetPassword } from '../../@types/interface/auth';
import type { LoginUser, RegisterUser } from '../../@types/interface/user';
import type { Payload } from '../../@types/payload';
import { CustomError } from '../../error';
import type { User } from '../../generated/prisma/client';
import { userModel } from '../../models/user';
import {
  createPortalCustomer,
  createStripeCustomer,
  generatedCheckout,
  handleSubscriptionFinishedTrial,
} from '../../utils/stripe';
import { validateEmail } from '../../utils/validate';
import { mailService } from '../mail';
import { planService } from '../plan';
import { userService } from '../user';

class AuthService {
  createToken(user: User) {
    return jwt.sign({ ID: user.ID, ROLE: user.ROLE }, process.env['JWT_SECRET_KEY'] as string, {
      subject: user.ID,
      expiresIn: '7d',
    });
  }

  checkingToken(token: string): Payload {
    try {
      const decoded = jwt.verify(token, process.env['JWT_SECRET_KEY'] as string) as Payload;

      return decoded;
    } catch (error) {
      throw new CustomError('Token inválido', StatusCodes.UNAUTHORIZED);
    }
  }

  generateRandom4DigitNumber() {
    const randomNumber = Math.floor(Math.random() * 10000);

    return randomNumber.toString().padStart(4, '0');
  }

  async register(data: RegisterUser) {
    try {
      const user = await userModel.findBy({ where: { EMAIL: data.EMAIL } });

      if (user) {
        throw new CustomError(
          'Parece que você já possui uma conta. Por favor, acesse usando seu login.',
          StatusCodes.CONFLICT,
        );
      }

      const stripe = await createStripeCustomer(data.EMAIL, data.NAME);

      const create = await userService.create({ ...data, ...stripe });

      if (!(create.STRIPE_SUBSCRIPTION_STATUS === '')) {
        throw new CustomError(
          'Parece que você já possui uma conta. Por favor, acesse usando seu login.',
          StatusCodes.CONFLICT,
        );
      }

      const token = this.createToken(create);

      await mailService.sendValidateEmail({ EMAIL: create.EMAIL, TOKEN: token });

      return create;
    } catch (error) {
      throw error;
    }
  }

  async verificationStripedSubscription(user: User): Promise<string> {
    try {
      if (user.STRIPE_SUBSCRIPTION_STATUS === '' || user.STRIPE_SUBSCRIPTION_STATUS === '') {
        throw new CustomError<User & { PORTAL_URL: string }>(
          'Assinatura não encontrada, por favor realize a assinatura para acessar o conteúdo',
          StatusCodes.FORBIDDEN,
          { ...user, PORTAL_URL: '' },
        );
      }

      if (user.STRIPE_SUBSCRIPTION_STATUS === 'canceled') {
        throw new CustomError<User & { PORTAL_URL: string }>(
          'Assinatura cancelada, por favor realize uma nova assinatura para acessar o conteúdo',
          StatusCodes.PARTIAL_CONTENT,
          { ...user, PORTAL_URL: '' },
        );
      }

      const portal = await createPortalCustomer(user.STRIPE_CUSTOMER_ID as string);

      if (
        !(
          user.STRIPE_SUBSCRIPTION_STATUS === 'active' ||
          user.STRIPE_SUBSCRIPTION_STATUS === 'trialing'
        )
      ) {
        throw new CustomError<User & { PORTAL_URL: string }>(
          'Assinatura inativa, por favor realize a assinatura para acessar o conteúdo',
          StatusCodes.PAYMENT_REQUIRED,
          { ...user, PORTAL_URL: portal.PORTAL_URL },
        );
      }

      const token = this.createToken(user);

      user = await userService.update(user.ID, { HASHED_TOKEN: token });

      return token;
    } catch (error) {
      throw error;
    }
  }

  async login(body: LoginUser) {
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
    } catch (error) {
      throw error;
    }
  }

  async me(id: string) {
    try {
      const user = await userService.showId(id);

      if (!user) {
        throw new CustomError('Usuário não encontrado', StatusCodes.NOT_FOUND);
      }

      return { USER: { ...user } };
    } catch (error) {
      throw error;
    }
  }

  async validateEmail(id: string) {
    try {
      await userService.existsById(id);

      const user = await userService.update(id, { VALIDATION_EMAIL: true });

      return { USER: user };
    } catch (error) {
      throw error;
    }
  }

  async forgotPassword(email: string) {
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
    } catch (error) {
      throw error;
    }
  }

  async resetPassword({ CODE, HASHED_PASSWORD, ID }: ResetPassword) {
    try {
      const user = await userService.showId(ID);

      if (user && user.HASHED_TOKEN && !(await bcrypt.compare(CODE, user.HASHED_TOKEN))) {
        throw new CustomError('Código de verificação inválido', StatusCodes.CONFLICT);
      }

      await userService.update(ID, { HASHED_PASSWORD, HASHED_TOKEN: '' });

      await mailService.sendResetPasswordEmail(user.EMAIL);

      return { MESSAGE: 'Senha alterada com sucesso' };
    } catch (error) {
      throw error;
    }
  }

  async sendEmailForValidateEmail(id: string) {
    try {
      const user = await userService.showId(id);

      const token = this.createToken(user);

      await mailService.sendValidateEmail({ EMAIL: user.EMAIL, TOKEN: token });

      return { MESSAGE: 'Email de validação enviado com sucesso' };
    } catch (error) {
      throw error;
    }
  }

  async paymentCheckout(data: PaymentCheckout, trivial: boolean) {
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
        trivial,
      });

      if (!stripe) {
        throw new CustomError(
          'Não conseguimos completar sua ação. Tente outra vez',
          StatusCodes.INTERNAL_SERVER_ERROR,
        );
      }

      return stripe;
    } catch (error) {
      throw error;
    }
  }

  async paymentPlanForActivateSubscription(ID: string) {
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
        planId: user.PLAN_ID as string,
        stripeSubscriptionId: user.STRIPE_SUBSCRIPTION_ID as string,
        price: '',
      });

      return { MESSAGE: 'Assinatura em processamento de ativação' };
    } catch (error) {
      throw error;
    }
  }

  async paymentPortal(userId: string) {
    try {
      const user = await userService.showId(userId);

      if (!user) {
        throw new CustomError('Usuário não encontrado', StatusCodes.NOT_FOUND);
      }

      if (user.STRIPE_SUBSCRIPTION_ID === '' || user.STRIPE_CUSTOMER_ID === '') {
        throw new CustomError('Assinatura não encontrada', StatusCodes.FORBIDDEN);
      }

      const portal = await createPortalCustomer(user.STRIPE_CUSTOMER_ID as string);

      if (!portal) {
        throw new CustomError(
          'Não conseguimos completar sua ação. Tente outra vez',
          StatusCodes.INTERNAL_SERVER_ERROR,
        );
      }

      return portal;
    } catch (error) {
      throw error;
    }
  }
}

export const authService = new AuthService();
