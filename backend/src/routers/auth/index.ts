import type { Router } from 'express';
import { authController } from '../../controllers/auth';
import { isAuthenticateToken, isAuthenticateTokenDb, schemaValidator } from '../../middleware';

class AuthRouter {
  public static create(router: Router): void {
    router.post('/register', schemaValidator('auth/register'), authController.register);
    router.post('/login', schemaValidator('auth/login'), authController.login);
    router.get('/me', isAuthenticateTokenDb, authController.me);
    router.get('/validate-email', isAuthenticateToken, authController.validateEmail);
    router.post('/forgot-password', schemaValidator('auth/forget'), authController.forgotPassword);
    router.post(
      '/reset-password',
      isAuthenticateToken,
      schemaValidator('auth/reset'),
      authController.resetPassword,
    );
    router.post(
      '/payment-checkout',
      schemaValidator('auth/payment'),
      authController.paymentCheckout,
    );
    router.post(
      '/send-email-validate-email',
      isAuthenticateTokenDb,
      authController.sendEmailForValidateEmail,
    );
    router.get(
      '/payment-active',
      isAuthenticateTokenDb,
      authController.paymentPlanForActiveSubscription,
    );
    router.get('/payment-portal', isAuthenticateTokenDb, authController.paymentPortal);
  }
}

// /create-portal - inserir essa routa de link da stripe
// criar o portal quando já tiver esta intavido

export default AuthRouter;
