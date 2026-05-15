import type { UpdateVideo } from '../../@types/interface/video';
declare class VideoService {
    createVideoForUser(userId: string, file: Express.Multer.File): Promise<{
        ID: string;
        NAME: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        HEIGHT: number;
        SIZE: number;
        FORMAT: string;
        DURATION: number;
        ORIENTATION: string;
        WIDTH: number;
        URL: string;
    }>;
    deleteVideoFile(url: string): Promise<void>;
    countVideoForUser(userId: string): Promise<number>;
    existsById(videoId: string): Promise<void>;
    getVideoAllForUser(userId: string): Promise<{
        ID: string;
        NAME: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        HEIGHT: number;
        SIZE: number;
        FORMAT: string;
        DURATION: number;
        ORIENTATION: string;
        WIDTH: number;
        URL: string;
    }[]>;
    getVideoByIdForUser(userId: string, videoId: string): Promise<{
        ID: string;
        NAME: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        HEIGHT: number;
        SIZE: number;
        FORMAT: string;
        DURATION: number;
        ORIENTATION: string;
        WIDTH: number;
        URL: string;
    } | null>;
    getVideoAll(): Promise<{
        ID: string;
        NAME: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        HEIGHT: number;
        SIZE: number;
        FORMAT: string;
        DURATION: number;
        ORIENTATION: string;
        WIDTH: number;
        URL: string;
    }[]>;
    getVideoById(videoId: string): Promise<{
        ID: string;
        NAME: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        HEIGHT: number;
        SIZE: number;
        FORMAT: string;
        DURATION: number;
        ORIENTATION: string;
        WIDTH: number;
        URL: string;
    } | null>;
    putVideoForUser(id: string, data: UpdateVideo): Promise<{
        ID: string;
        NAME: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        HEIGHT: number;
        SIZE: number;
        FORMAT: string;
        DURATION: number;
        ORIENTATION: string;
        WIDTH: number;
        URL: string;
    }>;
    deleteVideoForUser(id: string): Promise<{
        MESSAGE: string;
    }>;
}
export declare const videoService: VideoService;
export {};
//# sourceMappingURL=index.d.ts.map