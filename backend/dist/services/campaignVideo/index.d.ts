import type { createCampaignVideo } from '../../@types/interface/campaignVideo';
import type { Campaign_Video } from '../../generated/prisma/client';
declare class CampaignVideoService {
    existsByVideoId(videoId: string): Promise<boolean>;
    existsById(id: string): Promise<void>;
    createCampaignVideoForCampaign(data: createCampaignVideo): Promise<Campaign_Video>;
    deleteCampaignVideoForCampaign(campaignId: string): Promise<void>;
    updateCampaignVideoForCTAClick(id: string, testAB: boolean): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        VIDEO_ID: string | null;
        ORDER: number;
        CTA: boolean;
        CTA_START: number;
        CTA_TEXT: string | null;
        CTA_URL: string | null;
        CTA_STYLE: string | null;
        X_POSITION: number;
        Y_POSITION: number;
        CAMPAIGN_ID: string | null;
        CTA_CLICK_CAMPAING: number;
        CTA_CLICK_TEST_AB: number;
    }>;
    updateCampaignVideoForCTA(id: string): Promise<void>;
}
export declare const campaignVideoService: CampaignVideoService;
export {};
//# sourceMappingURL=index.d.ts.map