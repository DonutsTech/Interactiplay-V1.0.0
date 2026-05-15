import type { Prisma } from '../../generated/prisma/client';
declare class ModelPlayModel {
    create(params: Prisma.Model_PlayCreateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ANALYTICS_ID: string | null;
        MODEL_VIEWS_ID: string | null;
        PLAY_UNIQUE: number;
        PLAY_BLOCK: number;
        PLAY: number;
        VIEW: number;
    }>;
    findMany(params: Prisma.Model_PlayFindManyArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ANALYTICS_ID: string | null;
        MODEL_VIEWS_ID: string | null;
        PLAY_UNIQUE: number;
        PLAY_BLOCK: number;
        PLAY: number;
        VIEW: number;
    }[]>;
    findBy(find: Prisma.Model_PlayFindFirstArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ANALYTICS_ID: string | null;
        MODEL_VIEWS_ID: string | null;
        PLAY_UNIQUE: number;
        PLAY_BLOCK: number;
        PLAY: number;
        VIEW: number;
    } | null>;
    deleteBy(where: Prisma.Model_PlayWhereUniqueInput): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ANALYTICS_ID: string | null;
        MODEL_VIEWS_ID: string | null;
        PLAY_UNIQUE: number;
        PLAY_BLOCK: number;
        PLAY: number;
        VIEW: number;
    }>;
    deleteMany(where: Prisma.Model_PlayWhereInput): Promise<Prisma.BatchPayload>;
    updateBy(params: Prisma.Model_PlayUpdateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ANALYTICS_ID: string | null;
        MODEL_VIEWS_ID: string | null;
        PLAY_UNIQUE: number;
        PLAY_BLOCK: number;
        PLAY: number;
        VIEW: number;
    }>;
    count(where: Prisma.Model_PlayWhereInput): Promise<number>;
}
export declare const modelPlayModel: ModelPlayModel;
export {};
//# sourceMappingURL=index.d.ts.map