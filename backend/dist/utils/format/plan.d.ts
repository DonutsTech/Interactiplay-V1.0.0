import type Stripe from "stripe";
export interface PlanStripeNew {
    PLAN: string;
    STRIPE_PLAN_ID: string;
    STRIPE_PLAN_PRICE: string;
    PLAYS: number;
    PLAYS_PRICE: number;
    PRICE: number;
    STATUS: boolean;
    VIDEO_LIMIT: number;
}
export declare function formatProductsForPlan(products: Stripe.Product[]): Promise<PlanStripeNew[]>;
//# sourceMappingURL=plan.d.ts.map