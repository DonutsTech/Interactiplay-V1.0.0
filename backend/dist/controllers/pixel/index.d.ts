import type { NextFunction, Request, Response } from 'express';
declare class PixelController {
    createPixelWithCampaign(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export declare const pixelController: PixelController;
export {};
//# sourceMappingURL=index.d.ts.map