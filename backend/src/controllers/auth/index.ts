import type { NextFunction, Request, Response } from 'express';
import type { PaymentCheckout } from '../../@types/interface/auth';
import type { LoginUser, RegisterUser } from '../../@types/interface/user';
import { authService } from '../../services/auth';

class AuthController {
  async register(request: Request, response: Response, next: NextFunction) {
    try {
      console.log('teste duplicidade'); // Log the request body for debugging
      const body: RegisterUser = request.body;
      const create = await authService.register(body);
      return response.status(201).json(create);
    } catch (error) {
      next(error);
    }
  }

  async login(request: Request, response: Response, next: NextFunction) {
    try {
      const body: LoginUser = request.body;
      const login = await authService.login(body);
      return response.status(200).json(login);
    } catch (error) {
      next(error);
    }
  }

  async me(request: Request, response: Response, next: NextFunction) {
    try {
      const { user } = request as Request & { user: { ID: string } };
      const me = await authService.me(user.ID);
      return response.status(200).json(me);
    } catch (error) {
      next(error);
    }
  }

  async validateEmail(request: Request, response: Response, next: NextFunction) {
    try {
      const { user } = request as Request & { user: { ID: string } };
      const validateEmail = await authService.validateEmail(user.ID);
      return response.status(200).json(validateEmail);
    } catch (error) {
      next(error);
    }
  }

  async forgotPassword(request: Request, response: Response, next: NextFunction) {
    try {
      const body: { EMAIL: string } = request.body;
      const forgotPassword = await authService.forgotPassword(body.EMAIL);
      return response.status(200).json(forgotPassword);
    } catch (error) {
      next(error);
    }
  }

  async resetPassword(request: Request, response: Response, next: NextFunction) {
    try {
      const { user } = request as Request & { user: { ID: string } };
      const body: { HASHED_PASSWORD: string; CODE: string } = request.body;
      const resetPassword = await authService.resetPassword({ ID: user.ID, ...body });
      return response.status(200).json(resetPassword);
    } catch (error) {
      next(error);
    }
  }

  async sendEmailForValidateEmail(request: Request, response: Response, next: NextFunction) {
    try {
      const { user } = request as Request & { user: { ID: string } };
      const sendEmailForValidateEmail = await authService.sendEmailForValidateEmail(user.ID);
      return response.status(200).json(sendEmailForValidateEmail);
    } catch (error) {
      next(error);
    }
  }

  async paymentCheckout(request: Request, response: Response, next: NextFunction) {
    try {
      const body: PaymentCheckout = request.body;
      const paymentCheckout = await authService.paymentCheckout({ ...body }, true);
      return response.status(200).json(paymentCheckout);
    } catch (error) {
      next(error);
    }
  }

  async paymentCheckoutNew(request: Request, response: Response, next: NextFunction) {
    try {
      const body: PaymentCheckout = request.body;
      const paymentCheckout = await authService.paymentCheckout({ ...body }, false);
      return response.status(200).json(paymentCheckout);
    } catch (error) {
      next(error);
    }
  }

  async paymentPlanForActiveSubscription(request: Request, response: Response, next: NextFunction) {
    try {
      const { user } = request as Request & { user: { ID: string } };
      const validatePaymentCheckout = await authService.paymentPlanForActivateSubscription(user.ID);
      return response.status(200).json(validatePaymentCheckout);
    } catch (error) {
      next(error);
    }
  }

  async paymentPortal(request: Request, response: Response, next: NextFunction) {
    try {
      const { user } = request as Request & { user: { ID: string } };
      const paymentPortal = await authService.paymentPortal(user.ID);
      return response.status(200).json(paymentPortal);
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
