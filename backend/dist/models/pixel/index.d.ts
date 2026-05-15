import type { Prisma } from "../../generated/prisma/client";
declare class PixelModel {
    create(params: Prisma.PixelCreateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        NAME_META: string | null;
        ID_META: string | null;
        NAME_GOOGLE: string | null;
        ID_GOOGLE: string | null;
        LABEL_CONVERSION_GOOGLE: string | null;
        SHOOTING_EVENT_GOOGLE: string | null;
        SHOOTING_EVENT_VALUE_GOOGLE: number | null;
    }>;
    findMany(params: Prisma.PixelFindManyArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        NAME_META: string | null;
        ID_META: string | null;
        NAME_GOOGLE: string | null;
        ID_GOOGLE: string | null;
        LABEL_CONVERSION_GOOGLE: string | null;
        SHOOTING_EVENT_GOOGLE: string | null;
        SHOOTING_EVENT_VALUE_GOOGLE: number | null;
    }[]>;
    findBy(find: Prisma.PixelFindFirstArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        NAME_META: string | null;
        ID_META: string | null;
        NAME_GOOGLE: string | null;
        ID_GOOGLE: string | null;
        LABEL_CONVERSION_GOOGLE: string | null;
        SHOOTING_EVENT_GOOGLE: string | null;
        SHOOTING_EVENT_VALUE_GOOGLE: number | null;
    } | null>;
    deleteBy(where: Prisma.PixelWhereUniqueInput): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        NAME_META: string | null;
        ID_META: string | null;
        NAME_GOOGLE: string | null;
        ID_GOOGLE: string | null;
        LABEL_CONVERSION_GOOGLE: string | null;
        SHOOTING_EVENT_GOOGLE: string | null;
        SHOOTING_EVENT_VALUE_GOOGLE: number | null;
    }>;
    deleteMany(where: Prisma.PixelWhereInput): Promise<Prisma.BatchPayload>;
    updateBy(params: Prisma.PixelUpdateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        NAME_META: string | null;
        ID_META: string | null;
        NAME_GOOGLE: string | null;
        ID_GOOGLE: string | null;
        LABEL_CONVERSION_GOOGLE: string | null;
        SHOOTING_EVENT_GOOGLE: string | null;
        SHOOTING_EVENT_VALUE_GOOGLE: number | null;
    }>;
    count(where: Prisma.PixelWhereInput): Promise<number>;
}
export declare const pixelModel: PixelModel;
export {};
//# sourceMappingURL=index.d.ts.map