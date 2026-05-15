import type { CreateTestAB } from '../../@types/interface/testAB';
import type { Prisma } from '../../generated/prisma/browser';
declare class TestABService {
    existsById(id: string): Promise<void>;
    campaignsExistsTestAB(campaignIdA: string, campaignIdB: string): Promise<void>;
    deleteTestABForCampaign(campaignId: string): Promise<void>;
    getTestABAllForUser(userId: string): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        EMBED_JS: string | null;
        EMBED_IFRAME: string | null;
        CAMPAIGN_ID_A: string | null;
        CAMPAIGN_ID_B: string | null;
        ANALYTICS_ID_A: string | null;
        ANALYTICS_ID_B: string | null;
    }[]>;
    getTestABByIdForUser(id: string): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        EMBED_JS: string | null;
        EMBED_IFRAME: string | null;
        CAMPAIGN_ID_A: string | null;
        CAMPAIGN_ID_B: string | null;
        ANALYTICS_ID_A: string | null;
        ANALYTICS_ID_B: string | null;
    }>;
    getTestABAll(): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        EMBED_JS: string | null;
        EMBED_IFRAME: string | null;
        CAMPAIGN_ID_A: string | null;
        CAMPAIGN_ID_B: string | null;
        ANALYTICS_ID_A: string | null;
        ANALYTICS_ID_B: string | null;
    }[]>;
    randomChoice<T>(campaignA: T, campaignB: T): T;
    getTestABByEmbedForId(id: string): Promise<{
        CAMPAIGN: Prisma.CampaignGetPayload<{
            include: import("../../@types/campaignPrisma").CampaignEmbed;
        }>;
    }>;
    createTestABForUser(userId: string, body: CreateTestAB): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        EMBED_JS: string | null;
        EMBED_IFRAME: string | null;
        CAMPAIGN_ID_A: string | null;
        CAMPAIGN_ID_B: string | null;
        ANALYTICS_ID_A: string | null;
        ANALYTICS_ID_B: string | null;
    }>;
    deleteTestABForUser(id: string): Promise<{
        message: string;
    }>;
    getTestABById(id: string): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        USER_ID: string | null;
        EMBED_JS: string | null;
        EMBED_IFRAME: string | null;
        CAMPAIGN_ID_A: string | null;
        CAMPAIGN_ID_B: string | null;
        ANALYTICS_ID_A: string | null;
        ANALYTICS_ID_B: string | null;
    }>;
}
export declare const testABService: TestABService;
export {};
//# sourceMappingURL=index.d.ts.map