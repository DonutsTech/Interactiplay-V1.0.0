import type Stripe from "stripe";
declare class StripeEventService {
    existById(id: string): Promise<false | undefined>;
    createIfNotExists(event: Stripe.Event): Promise<boolean>;
}
export declare const stripeEventService: StripeEventService;
export {};
//# sourceMappingURL=index.d.ts.map