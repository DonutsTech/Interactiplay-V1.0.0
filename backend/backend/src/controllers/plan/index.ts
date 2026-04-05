import type { NextFunction, Request, Response } from "express";
import { planService } from "../../services/plan";

class PlanController {
  async getPlansByStatusTrue(request: Request, response: Response, next: NextFunction) {
    try {
      const getPlans = await planService.getPlansByStatusTrue();
      return response.status(200).json(getPlans);
    } catch (error) {
      next(error);
    }
  }
}

export const planController = new PlanController();
