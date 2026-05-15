import { authService } from '../../services/auth';
class AuthController {
    async register(request, response, next) {
        try {
            const body = request.body;
            const create = await authService.register(body);
            return response.status(201).json(create);
        }
        catch (error) {
            next(error);
        }
    }
    async login(request, response, next) {
        try {
            const body = request.body;
            const login = await authService.login(body);
            return response.status(200).json(login);
        }
        catch (error) {
            next(error);
        }
    }
    async me(request, response, next) {
        try {
            const { user } = request;
            const me = await authService.me(user.ID);
            return response.status(200).json(me);
        }
        catch (error) {
            next(error);
        }
    }
    async validateEmail(request, response, next) {
        try {
            const { user } = request;
            const validateEmail = await authService.validateEmail(user.ID);
            return response.status(200).json(validateEmail);
        }
        catch (error) {
            next(error);
        }
    }
    async forgotPassword(request, response, next) {
        try {
            const body = request.body;
            const forgotPassword = await authService.forgotPassword(body.EMAIL);
            return response.status(200).json(forgotPassword);
        }
        catch (error) {
            next(error);
        }
    }
    async resetPassword(request, response, next) {
        try {
            const { user } = request;
            const body = request.body;
            const resetPassword = await authService.resetPassword({ ID: user.ID, ...body });
            return response.status(200).json(resetPassword);
        }
        catch (error) {
            next(error);
        }
    }
    async sendEmailForValidateEmail(request, response, next) {
        try {
            const { user } = request;
            const sendEmailForValidateEmail = await authService.sendEmailForValidateEmail(user.ID);
            return response.status(200).json(sendEmailForValidateEmail);
        }
        catch (error) {
            next(error);
        }
    }
    async paymentCheckout(request, response, next) {
        try {
            const body = request.body;
            const paymentCheckout = await authService.paymentCheckout({ ...body });
            return response.status(200).json(paymentCheckout);
        }
        catch (error) {
            next(error);
        }
    }
    async paymentPlanForActiveSubscription(request, response, next) {
        try {
            const { user } = request;
            const validatePaymentCheckout = await authService.paymentPlanForActivateSubscription(user.ID);
            return response.status(200).json(validatePaymentCheckout);
        }
        catch (error) {
            next(error);
        }
    }
    async paymentPortal(request, response, next) {
        try {
            const { user } = request;
            const paymentPortal = await authService.paymentPortal(user.ID);
            return response.status(200).json(paymentPortal);
        }
        catch (error) {
            next(error);
        }
    }
}
export const authController = new AuthController();
//# sourceMappingURL=index.js.map