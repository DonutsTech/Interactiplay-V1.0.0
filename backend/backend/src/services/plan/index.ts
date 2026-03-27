import type { Plan } from "../../generated/prisma/client";
import { planModel } from "../../models/plan";

class PlanService {
  async getPlans(): Promise<Plan[]> {
    try {
      const plan = await planModel.findMany({});
      return plan;
    } catch (error) {
      throw error;
    }
  }

  async getPlanByStripeId(stripePlanId: string): Promise<Plan | null> {
    try {
      const plan = await planModel.findBy({
        where: {
          STRIPE_PLAN_ID: stripePlanId,
        },
      });
      return plan;
    } catch (error) {
      throw error;
    }
  }
}

export const planService = new PlanService();
