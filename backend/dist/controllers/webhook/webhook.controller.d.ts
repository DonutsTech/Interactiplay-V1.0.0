import type { NextFunction, Request, Response } from 'express';
declare class WebhookController {
    webhook(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export declare const webhookController: WebhookController;
export {};
//# sourceMappingURL=webhook.controller.d.ts.map