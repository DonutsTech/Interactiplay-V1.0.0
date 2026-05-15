import type { Campaign_Video } from '../../generated/prisma/browser';
import type { Prisma } from '../../generated/prisma/client';
declare class CampaignVideoModel {
    create(params: Prisma.Campaign_VideoCreateArgs): Promise<Campaign_Video>;
    findMany(params: Prisma.Campaign_VideoFindManyArgs): Promise<{
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
    }[]>;
    findBy(find: Prisma.Campaign_VideoFindFirstArgs): Promise<{
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
    } | null>;
    deleteBy(where: Prisma.Campaign_VideoWhereUniqueInput): Promise<{
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
    deleteMany(where: Prisma.Campaign_VideoWhereInput): Promise<Prisma.BatchPayload>;
    updateBy(params: Prisma.Campaign_VideoUpdateArgs): Promise<{
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
    count(where: Prisma.Campaign_VideoWhereInput): Promise<number>;
}
export declare const campaignVideoModel: CampaignVideoModel;
export {};
//# sourceMappingURL=index.d.ts.map