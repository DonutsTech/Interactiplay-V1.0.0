import type { NextFunction, Request, Response } from 'express';
declare class TimelineController {
    createPixelWithCampaign(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export declare const timelineController: TimelineController;
export {};
//# sourceMappingURL=index.d.ts.map