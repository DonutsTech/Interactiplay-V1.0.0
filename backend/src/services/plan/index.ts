import { StatusCodes } from 'http-status-codes';
import type { createPlan } from '../../@types/interface/plan';
import { CustomError } from '../../error';
import type { Plan } from '../../generated/prisma/client';
import { planModel } from '../../models/plan';

class PlanService {
  async existsById(id: string) {
    if (!(await planModel.count({ ID: id }))) {
      throw new CustomError(
        'Plano não encontrado, por favor verifique o seu  email',
        StatusCodes.NOT_FOUND,
      );
    }
  }

  async getPlans(): Promise<Plan[]> {
    try {
      const plan = await planModel.findMany({});
      return plan;
    } catch (error) {
      throw error;
    }
  }

  async getPlansByStatusTrue(): Promise<Plan[]> {
    try {
      const plans = await planModel.findMany({ where: { STATUS: true } });
      return plans;
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

  async showId(id: string): Promise<Plan> {
    try {
      const plan = await planModel.findBy({ where: { ID: id } });

      if (!plan) {
        throw new CustomError('Plano não encontrado', StatusCodes.NOT_FOUND);
      }

      return plan;
    } catch (error) {
      throw error;
    }
  }

  async countPlans(): Promise<number> {
    try {
      const count = await planModel.count({});
      return count;
    } catch (error) {
      throw error;
    }
  }

  async createPlan(data: createPlan): Promise<Plan> {
    try {
      const plan = await planModel.create({ data });
      return plan;
    } catch (error) {
      throw error;
    }
  }

  async getPlanByFree(): Promise<Plan | null> {
    try {
      const plan = await planModel.findBy({ where: { PLAN: 'Grátis' } });
      return plan;
    } catch (error) {
      throw error;
    }
  }

  async getPlanByUserId(userId: string): Promise<Plan | null> {
    try {
      const plan = await planModel.findBy({
        where: { users: { some: { ID: userId } } },
      });
      return plan;
    } catch (error) {
      throw error;
    }
  }
}

export const planService = new PlanService();
