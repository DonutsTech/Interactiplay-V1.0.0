import type { NextFunction, Request, Response } from 'express';
declare class GanhoController {
    createGanchoWithCampaign(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export declare const ganchoController: GanhoController;
export {};
//# sourceMappingURL=index.d.ts.map