import { planController } from "../../controllers/plan";
class PlanRouter {
    static create(router) {
        router.get("/plans", planController.getPlansByStatusTrue);
    }
}
export default PlanRouter;
//# sourceMappingURL=index.js.map