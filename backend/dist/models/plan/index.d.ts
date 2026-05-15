import type { Prisma } from "../../generated/prisma/client";
declare class PlanModel {
    create(params: Prisma.PlanCreateArgs): Promise<{
        ID: string;
        PLAN: string;
        STATUS: boolean;
        STRIPE_PLAN_ID: string;
        STRIPE_PLAN_PRICE: string;
        PRICE: number;
        PLAYS: number;
        PLAYS_PRICE: number;
        VIDEO_LIMIT: number;
    }>;
    findMany(params: Prisma.PlanFindManyArgs): Promise<{
        ID: string;
        PLAN: string;
        STATUS: boolean;
        STRIPE_PLAN_ID: string;
        STRIPE_PLAN_PRICE: string;
        PRICE: number;
        PLAYS: number;
        PLAYS_PRICE: number;
        VIDEO_LIMIT: number;
    }[]>;
    findBy(find: Prisma.PlanFindFirstArgs): Promise<{
        ID: string;
        PLAN: string;
        STATUS: boolean;
        STRIPE_PLAN_ID: string;
        STRIPE_PLAN_PRICE: string;
        PRICE: number;
        PLAYS: number;
        PLAYS_PRICE: number;
        VIDEO_LIMIT: number;
    } | null>;
    deleteBy(where: Prisma.PlanWhereUniqueInput): Promise<{
        ID: string;
        PLAN: string;
        STATUS: boolean;
        STRIPE_PLAN_ID: string;
        STRIPE_PLAN_PRICE: string;
        PRICE: number;
        PLAYS: number;
        PLAYS_PRICE: number;
        VIDEO_LIMIT: number;
    }>;
    deleteMany(where: Prisma.PlanWhereInput): Promise<Prisma.BatchPayload>;
    updateBy(params: Prisma.PlanUpdateArgs): Promise<{
        ID: string;
        PLAN: string;
        STATUS: boolean;
        STRIPE_PLAN_ID: string;
        STRIPE_PLAN_PRICE: string;
        PRICE: number;
        PLAYS: number;
        PLAYS_PRICE: number;
        VIDEO_LIMIT: number;
    }>;
    count(where: Prisma.PlanWhereInput): Promise<number>;
}
export declare const planModel: PlanModel;
export {};
//# sourceMappingURL=index.d.ts.map