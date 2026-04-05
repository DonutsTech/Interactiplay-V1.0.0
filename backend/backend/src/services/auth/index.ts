import bcrypt from "bcryptjs";
import { StatusCodes } from "http-status-codes";
import jwt from 'jsonwebtoken';
import type { PaymentCheckout, ResetPassword } from "../../@types/interface/auth";
import type { LoginUser, RegisterUser } from "../../@types/interface/user";
import type { Payload } from "../../@types/payload";
import { CustomError } from "../../error";
import type { User } from "../../generated/prisma/client";
import { userModel } from "../../models/user";
import { createStripeCustomer, generatedCheckout } from "../../utils/stripe";
import { mailService } from "../mail";
import { planService } from "../plan";
import { userService } from "../user";

class AuthService {
  createToken(user: User) {
    return jwt.sign(
      { ID: user.ID, ROLE: user.ROLE},
      process.env.JWT_SECRET_KEY as string,
      {
        subject: user.ID,
        expiresIn: '7d'
      }
    )
  }

  checkingToken(token: string): Payload {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as Payload;

    return decoded;
  }

  generateRandom4DigitNumber() {
    const randomNumber = Math.floor(Math.random() * 10000);

    return randomNumber.toString().padStart(4, '0');
  }

  async register(data: RegisterUser) {
    try {
      const user = await userModel.findBy({ where: { EMAIL: data.EMAIL } });

      if (user && !(user.STRIPE_SUBSCRIPTON_ID === "")) {
        throw new CustomError('Email já cadastrado, por favor utilize outro email', StatusCodes.CONFLICT);
      }

      const stripe = await createStripeCustomer(data.EMAIL, data.NAME);

      const create = await userService.create({ ...data, ...stripe});

      if (!(create.STRIPE_SUBSCRIPTON_STATUS === "")) {
        throw new CustomError('Email já cadastrado, por favor utilize outro email', StatusCodes.CONFLICT);
      }
    } catch (error) {
      throw error;
    }
  }

  async verificationStripedSubscription(user: User): Promise<string> {
    try {
      if ((user.STRIPE_SUBSCRIPTON_STATUS === "" || user.STRIPE_SUBSCRIPTON_STATUS === "")) {
        throw new CustomError<User>('Assinatura não encontrada, por favor realize a assinatura para acessar o conteúdo', StatusCodes.FORBIDDEN, { ...user});
      }

      if (!(user.STRIPE_SUBSCRIPTON_STATUS === "active" || user.STRIPE_SUBSCRIPTON_STATUS === "trialing")) {
        throw new CustomError<User>('Assinatura inativa, por favor realize a assinatura para acessar o conteúdo', StatusCodes.CONFLICT, { ...user});
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

      return { USER: user };
    } catch (error) {
      throw error;
    }
  }

  async validateEmail(id: string) {
    try {
      await userService.existsById(id);

      const user = await userService.update(id, { VALIDATION_EMAIL: true});

      return { USER: user };
    } catch (error) {
      throw error;
    }
  }

  async forgotPassword(email: string) {
    try {
      const user = await userService.showEmail(email);

      if (!user) {
        throw new CustomError('Email não encontrado', StatusCodes.NOT_FOUND);
      }

      const token = this.createToken(user);

      const randomNumeber = this.generateRandom4DigitNumber();

      await userService.update(user.ID, { HASHED_TOKEN: randomNumeber });

      await mailService.sendForgetPasswordEmail({ CODE: randomNumeber, EMAIL: email, TOKEN: token });

      return { MESSAGE: 'Email de recuperação enviado com sucesso' };
    } catch (error) {
      throw error;
    }
  }

  async resetPassword({CODE, HASHED_PASSWORD, ID} : ResetPassword) {
    try {
      const user = await userService.showId(ID);

      if (user && user.HASHED_TOKEN && !(await bcrypt.compare(CODE, user.HASHED_TOKEN)) ) {
        throw new CustomError('Código de verificação inválido', StatusCodes.UNAUTHORIZED);
      }

      await userService.update(ID, { HASHED_PASSWORD, HASHED_TOKEN: "" });

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

  async paymentCheckout(data: PaymentCheckout) {
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

    await mailService.sendValidateEmail({ EMAIL: user.EMAIL, TOKEN: token });

    return stripe;
    } catch (error) {
      throw error;
    }
  }
}

export const authService = new AuthService();
