import type { createPlan } from '../../@types/interface/plan';
import type { Plan } from '../../generated/prisma/client';
declare class PlanService {
    existsById(id: string): Promise<void>;
    getPlans(): Promise<Plan[]>;
    getPlansByStatusTrue(): Promise<Plan[]>;
    getPlanByStripeId(stripePlanId: string): Promise<Plan | null>;
    showId(id: string): Promise<Plan>;
    countPlans(): Promise<number>;
    createPlan(data: createPlan): Promise<Plan>;
    getPlanByFree(): Promise<Plan | null>;
    getPlanByUserId(userId: string): Promise<Plan | null>;
}
export declare const planService: PlanService;
export {};
//# sourceMappingURL=index.d.ts.map