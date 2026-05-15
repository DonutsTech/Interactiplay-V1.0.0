import type { NextFunction, Request, Response } from 'express';
declare class AuthController {
    register(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    login(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    me(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    validateEmail(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    forgotPassword(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    resetPassword(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    sendEmailForValidateEmail(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    paymentCheckout(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    paymentPlanForActiveSubscription(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    paymentPortal(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export declare const authController: AuthController;
export {};
//# sourceMappingURL=index.d.ts.map