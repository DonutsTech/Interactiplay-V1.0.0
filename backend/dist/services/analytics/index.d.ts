declare class AnalyticsService {
    existById(id: string): Promise<void>;
    deleteAnalyticsForCampaign(campaignId: string): Promise<void>;
    incrementPlayForAnalytics(id: string, isFirstPlay: boolean): Promise<void>;
    incrementPlayBlockForAnalytics(id: string): Promise<void>;
    incrementViewAnalytics(id: string): Promise<void>;
    getAnalyticsForCampaign(campaignId: string): Promise<{
        CAMPAIGN: {} & {
            ID: string;
            NAME: string;
            CREATED_AT: Date | null;
            UPDATED_AT: Date | null;
            USER_ID: string | null;
            EMBED_JS: string | null;
            EMBED_IFRAME: string | null;
            CORS: string;
            FEATURE_ID: string | null;
            ANALYTICS_ID: string | null;
        };
        ANALYTICS: {
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
        };
        MODEL_PLAYS: Record<string, number>;
        MODEL_TIME: {
            TIME: {
                [key: string]: number;
            };
            TOTAL_TIMESCREEN: number;
            AGRUP_DATE: {
                [key: string]: number;
            };
        };
    }>;
    getAnalyticsForTestAB(testABId: string): Promise<{
        ANALYTICS_A: {
            CAMPAIGN: {} & {
                ID: string;
                NAME: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                USER_ID: string | null;
                EMBED_JS: string | null;
                EMBED_IFRAME: string | null;
                CORS: string;
                FEATURE_ID: string | null;
                ANALYTICS_ID: string | null;
            };
            ANALYTICS: {
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
            };
            MODEL_PLAYS: Record<string, number>;
            MODEL_TIME: {
                TIME: {
                    [key: string]: number;
                };
                TOTAL_TIMESCREEN: number;
                AGRUP_DATE: {
                    [key: string]: number;
                };
            };
        };
        ANALYTICS_B: {
            CAMPAIGN: {} & {
                ID: string;
                NAME: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                USER_ID: string | null;
                EMBED_JS: string | null;
                EMBED_IFRAME: string | null;
                CORS: string;
                FEATURE_ID: string | null;
                ANALYTICS_ID: string | null;
            };
            ANALYTICS: {
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
            };
            MODEL_PLAYS: Record<string, number>;
            MODEL_TIME: {
                TIME: {
                    [key: string]: number;
                };
                TOTAL_TIMESCREEN: number;
                AGRUP_DATE: {
                    [key: string]: number;
                };
            };
        };
    }>;
}
export declare const analyticsService: AnalyticsService;
export {};
//# sourceMappingURL=index.d.ts.map