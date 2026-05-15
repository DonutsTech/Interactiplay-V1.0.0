import type { Prisma } from "../../generated/prisma/browser";
declare class StripeEventModel {
    create(params: Prisma.Stripe_eventsCreateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        TYPE: string;
        CUSTOMER_ID: string;
    }>;
    count(where: Prisma.Stripe_eventsWhereInput): Promise<number>;
}
export declare const stripeEventModel: StripeEventModel;
export {};
//# sourceMappingURL=index.d.ts.map