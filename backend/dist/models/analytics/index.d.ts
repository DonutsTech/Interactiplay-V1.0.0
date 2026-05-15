import type { Prisma } from "../../generated/prisma/client";
declare class AnalyticsModel {
    create(params: Prisma.AnalyticsCreateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        CAMPAIGN_ID: string | null;
        TEST_AB_ID_A: string | null;
        TEST_AB_ID_B: string | null;
        TOTAL_PLAYS: number;
        TOTAL_VIEWS: number;
        TOTAL_PLAY_BLOCK: number;
        TOTAL_PLAY_UNIQUE: number;
    }>;
    findMany(params: Prisma.AnalyticsFindManyArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        CAMPAIGN_ID: string | null;
        TEST_AB_ID_A: string | null;
        TEST_AB_ID_B: string | null;
        TOTAL_PLAYS: number;
        TOTAL_VIEWS: number;
        TOTAL_PLAY_BLOCK: number;
        TOTAL_PLAY_UNIQUE: number;
    }[]>;
    findBy(find: Prisma.AnalyticsFindFirstArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        CAMPAIGN_ID: string | null;
        TEST_AB_ID_A: string | null;
        TEST_AB_ID_B: string | null;
        TOTAL_PLAYS: number;
        TOTAL_VIEWS: number;
        TOTAL_PLAY_BLOCK: number;
        TOTAL_PLAY_UNIQUE: number;
    } | null>;
    deleteBy(where: Prisma.AnalyticsWhereUniqueInput): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        CAMPAIGN_ID: string | null;
        TEST_AB_ID_A: string | null;
        TEST_AB_ID_B: string | null;
        TOTAL_PLAYS: number;
        TOTAL_VIEWS: number;
        TOTAL_PLAY_BLOCK: number;
        TOTAL_PLAY_UNIQUE: number;
    }>;
    deleteMany(where: Prisma.AnalyticsWhereInput): Promise<Prisma.BatchPayload>;
    updateBy(params: Prisma.AnalyticsUpdateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        CAMPAIGN_ID: string | null;
        TEST_AB_ID_A: string | null;
        TEST_AB_ID_B: string | null;
        TOTAL_PLAYS: number;
        TOTAL_VIEWS: number;
        TOTAL_PLAY_BLOCK: number;
        TOTAL_PLAY_UNIQUE: number;
    }>;
    count(where: Prisma.AnalyticsWhereInput): Promise<number>;
}
export declare const analyticsModel: AnalyticsModel;
export {};
//# sourceMappingURL=index.d.ts.map