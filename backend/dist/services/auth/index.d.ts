import type { PaymentCheckout, ResetPassword } from '../../@types/interface/auth';
import type { LoginUser, RegisterUser } from '../../@types/interface/user';
import type { Payload } from '../../@types/payload';
import type { User } from '../../generated/prisma/client';
declare class AuthService {
    createToken(user: User): string;
    checkingToken(token: string): Payload;
    generateRandom4DigitNumber(): string;
    register(data: RegisterUser): Promise<{
        ID: string;
        NAME: string;
        EMAIL: string;
        PHONE: string;
        AVATAR: string;
        HASHED_PASSWORD: string;
        HASHED_TOKEN: string | null;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        FIRST_ACESS: boolean;
        VALIDATION_EMAIL: boolean;
        ROLE: string;
        ACTIVE: boolean;
        STRIPE_CUSTOMER_ID: string | null;
        STRIPE_SUBSCRIPTION_ID: string | null;
        STRIPE_SUBSCRIPTION_STATUS: string | null;
        STRIPE_TRIAL_END: Date | null;
        STRIPE_TRIAL_START: Date | null;
        STRIPE_CURRENT_PERIOD_START: Date | null;
        STRIPE_CURRENT_PERIOD_END: Date | null;
        PLAN_ID: string | null;
    }>;
    verificationStripedSubscription(user: User): Promise<string>;
    login(body: LoginUser): Promise<{
        ACCESTOKEN: string;
        USER: {
            ID: string;
            NAME: string;
            EMAIL: string;
            PHONE: string;
            AVATAR: string;
            HASHED_PASSWORD: string;
            HASHED_TOKEN: string | null;
            CREATED_AT: Date | null;
            UPDATED_AT: Date | null;
            FIRST_ACESS: boolean;
            VALIDATION_EMAIL: boolean;
            ROLE: string;
            ACTIVE: boolean;
            STRIPE_CUSTOMER_ID: string | null;
            STRIPE_SUBSCRIPTION_ID: string | null;
            STRIPE_SUBSCRIPTION_STATUS: string | null;
            STRIPE_TRIAL_END: Date | null;
            STRIPE_TRIAL_START: Date | null;
            STRIPE_CURRENT_PERIOD_START: Date | null;
            STRIPE_CURRENT_PERIOD_END: Date | null;
            PLAN_ID: string | null;
        };
    }>;
    me(id: string): Promise<{
        USER: {
            ID: string;
            NAME: string;
            EMAIL: string;
            PHONE: string;
            AVATAR: string;
            HASHED_PASSWORD: string;
            HASHED_TOKEN: string | null;
            CREATED_AT: Date | null;
            UPDATED_AT: Date | null;
            FIRST_ACESS: boolean;
            VALIDATION_EMAIL: boolean;
            ROLE: string;
            ACTIVE: boolean;
            STRIPE_CUSTOMER_ID: string | null;
            STRIPE_SUBSCRIPTION_ID: string | null;
            STRIPE_SUBSCRIPTION_STATUS: string | null;
            STRIPE_TRIAL_END: Date | null;
            STRIPE_TRIAL_START: Date | null;
            STRIPE_CURRENT_PERIOD_START: Date | null;
            STRIPE_CURRENT_PERIOD_END: Date | null;
            PLAN_ID: string | null;
        };
    }>;
    validateEmail(id: string): Promise<{
        USER: {
            ID: string;
            NAME: string;
            EMAIL: string;
            PHONE: string;
            AVATAR: string;
            HASHED_PASSWORD: string;
            HASHED_TOKEN: string | null;
            CREATED_AT: Date | null;
            UPDATED_AT: Date | null;
            FIRST_ACESS: boolean;
            VALIDATION_EMAIL: boolean;
            ROLE: string;
            ACTIVE: boolean;
            STRIPE_CUSTOMER_ID: string | null;
            STRIPE_SUBSCRIPTION_ID: string | null;
            STRIPE_SUBSCRIPTION_STATUS: string | null;
            STRIPE_TRIAL_END: Date | null;
            STRIPE_TRIAL_START: Date | null;
            STRIPE_CURRENT_PERIOD_START: Date | null;
            STRIPE_CURRENT_PERIOD_END: Date | null;
            PLAN_ID: string | null;
        };
    }>;
    forgotPassword(email: string): Promise<{
        MESSAGE: string;
    }>;
    resetPassword({ CODE, HASHED_PASSWORD, ID }: ResetPassword): Promise<{
        MESSAGE: string;
    }>;
    sendEmailForValidateEmail(id: string): Promise<{
        MESSAGE: string;
    }>;
    paymentCheckout(data: PaymentCheckout): Promise<{
        LINK: string | null;
    }>;
    paymentPlanForActivateSubscription(ID: string): Promise<{
        MESSAGE: string;
    }>;
    paymentPortal(userId: string): Promise<{
        PORTAL_URL: string;
    }>;
}
export declare const authService: AuthService;
export {};
//# sourceMappingURL=index.d.ts.map