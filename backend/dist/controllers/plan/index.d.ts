import type { NextFunction, Request, Response } from "express";
declare class PlanController {
    getPlansByStatusTrue(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export declare const planController: PlanController;
export {};
//# sourceMappingURL=index.d.ts.map