import type { Router } from "express";
import { planController } from "../../controllers/plan";

class PlanRouter {
  public static create(router: Router): void {
    router.get("/plans", planController.getPlansByStatusTrue);
  }
}

export default PlanRouter;
