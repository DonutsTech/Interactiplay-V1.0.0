import type { NextFunction, Request, Response } from 'express';
declare class CampaignController {
    getCampaignsAllForUser(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getCampaignById(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getCampaignsAll(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getCapamignsByEmbedForId(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    createCampaignForUserWithFlow(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    putCampaignForUserWithFlow(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    deleteCampaignForUserWithFlow(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export declare const campaignController: CampaignController;
export {};
//# sourceMappingURL=index.d.ts.map