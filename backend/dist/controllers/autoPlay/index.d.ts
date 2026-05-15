import type { NextFunction, Request, Response } from 'express';
declare class AutoPlayController {
    createAutoPlayWithCampaign(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export declare const autoPlayController: AutoPlayController;
export {};
//# sourceMappingURL=index.d.ts.map