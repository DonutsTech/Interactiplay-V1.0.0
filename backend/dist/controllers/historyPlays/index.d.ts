import type { NextFunction, Request, Response } from 'express';
declare class HistoryPlaysController {
    getHistoryPlaysByUserId(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    testUpdate(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export declare const historyPlaysController: HistoryPlaysController;
export {};
//# sourceMappingURL=index.d.ts.map