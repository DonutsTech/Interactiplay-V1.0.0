import type { NextFunction, Request, Response } from 'express';
declare class ThumbController {
    createThumbWithCampaign(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    deleteThumbById(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export declare const thumbController: ThumbController;
export {};
//# sourceMappingURL=index.d.ts.map