import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../../error';
import { planModel } from '../../models/plan';
class PlanService {
    async existsById(id) {
        if (!(await planModel.count({ ID: id }))) {
            throw new CustomError('Plano não encontrado, por favor verifique o seu  email', StatusCodes.NOT_FOUND);
        }
    }
    async getPlans() {
        try {
            const plan = await planModel.findMany({});
            return plan;
        }
        catch (error) {
            throw error;
        }
    }
    async getPlansByStatusTrue() {
        try {
            const plans = await planModel.findMany({ where: { STATUS: true } });
            return plans;
        }
        catch (error) {
            throw error;
        }
    }
    async getPlanByStripeId(stripePlanId) {
        try {
            const plan = await planModel.findBy({
                where: {
                    STRIPE_PLAN_ID: stripePlanId,
                },
            });
            return plan;
        }
        catch (error) {
            throw error;
        }
    }
    async showId(id) {
        try {
            const plan = await planModel.findBy({ where: { ID: id } });
            if (!plan) {
                throw new CustomError('Plano não encontrado', StatusCodes.NOT_FOUND);
            }
            return plan;
        }
        catch (error) {
            throw error;
        }
    }
    async countPlans() {
        try {
            const count = await planModel.count({});
            return count;
        }
        catch (error) {
            throw error;
        }
    }
    async createPlan(data) {
        try {
            const plan = await planModel.create({ data });
            return plan;
        }
        catch (error) {
            throw error;
        }
    }
    async getPlanByFree() {
        try {
            const plan = await planModel.findBy({ where: { PLAN: 'Grátis' } });
            return plan;
        }
        catch (error) {
            throw error;
        }
    }
    async getPlanByUserId(userId) {
        try {
            const plan = await planModel.findBy({
                where: { users: { some: { ID: userId } } },
            });
            return plan;
        }
        catch (error) {
            throw error;
        }
    }
}
export const planService = new PlanService();
//# sourceMappingURL=index.js.map