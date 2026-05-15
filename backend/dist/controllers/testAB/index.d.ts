import type { NextFunction, Request, Response } from 'express';
declare class TestABController {
    getTestABAllForUser(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getTestABByIdForUser(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getTestABAll(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getTestABByEmbedForId(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    createTestABForUser(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    deleteTestABForUser(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export declare const testABController: TestABController;
export {};
//# sourceMappingURL=index.d.ts.map