import Stripe from 'stripe';
import type { FunctionCheckout, FunctionCheckoutFree, FunctionUpdateFinishTrial } from '../@types/interface/function';
import { type PlanStripeNew } from './format/plan';
export declare const stripe: Stripe;
export declare const getStripeProducts: () => Promise<PlanStripeNew[]>;
export declare const getStripeCustomerByEmail: (email: string) => Promise<Stripe.Customer | null>;
export declare const createStripeCustomer: (email: string, name: string) => Promise<{
    HISTORY_PLAYS?: {
        create: {
            QTD_PLAYS: number;
            STATUS: string;
        };
    };
    PLAN?: {
        connect: {
            ID: string;
        };
    };
    STRIPE_CUSTOMER_ID: string;
    STRIPE_SUBSCRIPTION_ID: string;
    STRIPE_SUBSCRIPTION_STATUS: Stripe.Subscription.Status;
    STRIPE_CURRENT_PERIOD_END: string | Date;
    STRIPE_CURRENT_PERIOD_START: string | Date;
    STRIPE_TRIAL_END: string | Date;
    STRIPE_TRIAL_START: string | Date;
    ACTIVE: boolean;
} | {
    STRIPE_CUSTOMER_ID: string;
    STRIPE_SUBSCRIPTION_ID: string;
    STRIPE_SUBSCRIPTION_STATUS: string;
    ACTIVE: boolean;
}>;
export declare const createStripeFreeCustomer: ({ email, planId, userId, price, }: FunctionCheckoutFree) => Promise<Stripe.Response<Stripe.Subscription>>;
export declare const generatedCheckout: ({ email, planId, token, userId, price, }: FunctionCheckout) => Promise<{
    LINK: string | null;
}>;
export declare const handleCheckoutSessionCompleted: (event: {
    data: {
        object: Stripe.Checkout.Session;
    };
}) => Promise<void>;
export declare const handleSubscriptionFinishedTrial: ({ email, stripeSubscriptionId, planId, userId, price, }: FunctionUpdateFinishTrial) => Promise<Stripe.Response<Stripe.Subscription>>;
export declare const handleSubscriptionSessionCompleted: (event: {
    data: {
        object: Stripe.Subscription & {
            current_period_start?: number;
            current_period_end?: number;
            trial_start?: number | null;
            trial_end?: number | null;
        };
    };
}) => Promise<void>;
export declare const handleCancelPlan: (event: {
    data: {
        object: Stripe.Subscription;
    };
}) => Promise<void>;
export declare const handleInvoicePaid: (event: {
    data: {
        object: Stripe.Invoice & {
            paid?: boolean;
            subscription?: string | null;
        };
    };
}) => Promise<void>;
export declare const handleInvoicePaymentFailed: (event: {
    data: {
        object: Stripe.Invoice;
    };
}) => Promise<void>;
export declare const createPortalCustomer: (idCustomer: string) => Promise<{
    PORTAL_URL: string;
}>;
//# sourceMappingURL=stripe.d.ts.map