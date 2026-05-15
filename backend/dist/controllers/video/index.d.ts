import type { NextFunction, Request, Response } from 'express';
declare class VideoController {
    getVideosAllForUser(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getVideoByIdForUser(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getVideosAll(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getVideoById(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    createVideoForUser(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    putVideoForUser(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    deleteVideoForUser(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export declare const videoController: VideoController;
export {};
//# sourceMappingURL=index.d.ts.map