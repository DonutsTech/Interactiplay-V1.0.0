import type { Prisma } from "../../generated/prisma/client";
declare class VideoModel {
    create(params: Prisma.VideoCreateArgs): Promise<{
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
    findMany(params: Prisma.VideoFindManyArgs): Promise<{
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
    findBy(find: Prisma.VideoFindFirstArgs): Promise<{
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
    deleteBy(where: Prisma.VideoWhereUniqueInput): Promise<{
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
    deleteMany(where: Prisma.VideoWhereInput): Promise<Prisma.BatchPayload>;
    updateBy(params: Prisma.VideoUpdateArgs): Promise<{
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
    count(where: Prisma.VideoWhereInput): Promise<number>;
}
export declare const videoModel: VideoModel;
export {};
//# sourceMappingURL=index.d.ts.map