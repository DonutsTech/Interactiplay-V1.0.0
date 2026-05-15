import type { Prisma } from "../../generated/prisma/client";
declare class TimeLineModel {
    create(params: Prisma.TimelineCreateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        HEIGHT: number;
        COR: string;
    }>;
    findMany(params: Prisma.TimelineFindManyArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        HEIGHT: number;
        COR: string;
    }[]>;
    findBy(find: Prisma.TimelineFindFirstArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        HEIGHT: number;
        COR: string;
    } | null>;
    deleteBy(where: Prisma.TimelineWhereUniqueInput): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        HEIGHT: number;
        COR: string;
    }>;
    deleteMany(where: Prisma.TimelineWhereInput): Promise<Prisma.BatchPayload>;
    updateBy(params: Prisma.TimelineUpdateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        HEIGHT: number;
        COR: string;
    }>;
    count(where: Prisma.TimelineWhereInput): Promise<number>;
}
export declare const timelineModel: TimeLineModel;
export {};
//# sourceMappingURL=index.d.ts.map