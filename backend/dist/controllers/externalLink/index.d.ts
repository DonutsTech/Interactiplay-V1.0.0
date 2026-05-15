import type { NextFunction, Request, Response } from 'express';
declare class ExternalLinkController {
    createExternalLinkWithCampaign(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export declare const externalLinkController: ExternalLinkController;
export {};
//# sourceMappingURL=index.d.ts.map