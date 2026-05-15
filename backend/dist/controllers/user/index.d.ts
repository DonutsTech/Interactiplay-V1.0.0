import type { NextFunction, Request, Response } from 'express';
declare class UserController {
    updateUser(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    uploadImage(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    fristLogin(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export declare const userController: UserController;
export {};
//# sourceMappingURL=index.d.ts.map