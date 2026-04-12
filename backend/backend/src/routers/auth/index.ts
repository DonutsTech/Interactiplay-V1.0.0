import type { Router } from "express";
import { authController } from "../../controllers/auth";
import { isAuthenticateToken, isAuthenticateTokenDb, schemaValidator } from "../../middleware";

class AuthRouter {
  public static create(router: Router): void {
    router.post("/register",
      schemaValidator('auth/register'),
      authController.register);
    router.post("/login", authController.login);
    router.get("/me", isAuthenticateTokenDb, authController.me);
    router.get("/validate-email", isAuthenticateToken, authController.validateEmail);
    router.post("/forgot-password", schemaValidator('auth/forget'), authController.forgotPassword);
    router.post("/reset-password", isAuthenticateTokenDb, schemaValidator('auth/reset'), authController.resetPassword);
    router.post("/payment-checkout", schemaValidator('auth/payment'), authController.paymentCheckout);
    router.post("/send-email-validate-email", isAuthenticateTokenDb, authController.sendEmailForValidateEmail);
  }
}

export default AuthRouter;
