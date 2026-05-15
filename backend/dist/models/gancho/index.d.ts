import type { Prisma } from "../../generated/prisma/client";
declare class GanchoModel {
    create(params: Prisma.GanchoCreateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        TITLE: string;
        TITLE_STYLE: string;
        SUBTITLE: string;
        SUBTITLE_ANIMATION: boolean;
        SUBTITLE_ANIMATION_TYPE: string | null;
        SUBTITLE_STYLE: string;
    }>;
    findMany(params: Prisma.GanchoFindManyArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        TITLE: string;
        TITLE_STYLE: string;
        SUBTITLE: string;
        SUBTITLE_ANIMATION: boolean;
        SUBTITLE_ANIMATION_TYPE: string | null;
        SUBTITLE_STYLE: string;
    }[]>;
    findBy(find: Prisma.GanchoFindFirstArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        TITLE: string;
        TITLE_STYLE: string;
        SUBTITLE: string;
        SUBTITLE_ANIMATION: boolean;
        SUBTITLE_ANIMATION_TYPE: string | null;
        SUBTITLE_STYLE: string;
    } | null>;
    deleteBy(where: Prisma.GanchoWhereUniqueInput): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        TITLE: string;
        TITLE_STYLE: string;
        SUBTITLE: string;
        SUBTITLE_ANIMATION: boolean;
        SUBTITLE_ANIMATION_TYPE: string | null;
        SUBTITLE_STYLE: string;
    }>;
    deleteMany(where: Prisma.GanchoWhereInput): Promise<Prisma.BatchPayload>;
    updateBy(params: Prisma.GanchoUpdateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        TITLE: string;
        TITLE_STYLE: string;
        SUBTITLE: string;
        SUBTITLE_ANIMATION: boolean;
        SUBTITLE_ANIMATION_TYPE: string | null;
        SUBTITLE_STYLE: string;
    }>;
    count(where: Prisma.GanchoWhereInput): Promise<number>;
}
export declare const ganchoModel: GanchoModel;
export {};
//# sourceMappingURL=index.d.ts.map