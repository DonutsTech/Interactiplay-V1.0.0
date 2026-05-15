import { planService } from "../../services/plan";
class PlanController {
    async getPlansByStatusTrue(request, response, next) {
        try {
            const getPlans = await planService.getPlansByStatusTrue();
            return response.status(200).json(getPlans);
        }
        catch (error) {
            next(error);
        }
    }
}
export const planController = new PlanController();
//# sourceMappingURL=index.js.map