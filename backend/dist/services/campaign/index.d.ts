import type { CampaignEmbed } from '../../@types/campaignPrisma';
import type { CreateCampaign, UpdateCampaign } from '../../@types/interface/campaign';
import type { Prisma } from '../../generated/prisma/browser';
declare class CampaignService {
    existsById(id: string): Promise<void>;
    getCampaignsAllForUser(userId: string): Promise<[] | ({
        CAMPAIGN_VIDEOS: ({
            BONDS: ({
                BOND: {
                    ID: string;
                    CREATED_AT: Date | null;
                    UPDATED_AT: Date | null;
                    VIDEO_ID: string | null;
                    X_POSITION: number;
                    Y_POSITION: number;
                    BUTTON: boolean;
                    BUTTON_TEXT: string | null;
                    BUTTON_STYLE: string | null;
                    BUTTON_START: number;
                    CONTINUITY_CAMPAING: number;
                    CONTINUITY_TEST_AB: number;
                    BUTTON_CLICK_CAMPAING: number;
                    BUTTON_CLICK_TEST_AB: number;
                } | null;
            } & {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                CAMPAIGN_VIDEO_ID: string | null;
                BOND_ID: string | null;
            })[];
            VIDEO: {
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
            } | null;
        } & {
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
        })[];
        FEATURE: ({
            AUTO_PLAY: {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                SECOND: number;
                ATIVE: boolean;
            } | null;
            THUMB: {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                IMAGE_URL: string;
            } | null;
            GANCHO: {
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
            } | null;
            TIMELINE: {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                ATIVE: boolean;
                HEIGHT: number;
                COR: string;
            } | null;
            EXTERNAL_LINK: {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                ATIVE: boolean;
                BUTTON_TEXT: string | null;
                BUTTON_STYLE: string | null;
                TEXT: string | null;
                STYLE_TEXT: string | null;
                LINK_URL: string | null;
                BUTTON_CLICK_CAMPAING: number;
                BUTTON_CLICK_TEST_AB: number;
            } | null;
            PIXEL: {
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
            } | null;
        } & {
            ID: string;
            CREATED_AT: Date | null;
            UPDATED_AT: Date | null;
            AUTO_PLAY_ID: string | null;
            THUMB_ID: string | null;
            GANCHO_ID: string | null;
            TIMELINE_ID: string | null;
            EXTERNAL_LINK_ID: string | null;
            PIXEL_ID: string | null;
        }) | null;
    } & {
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
    })[]>;
    getCampaignById(id: string): Promise<{
        CAMPAIGN_VIDEOS: ({
            BONDS: ({
                BOND: {
                    ID: string;
                    CREATED_AT: Date | null;
                    UPDATED_AT: Date | null;
                    VIDEO_ID: string | null;
                    X_POSITION: number;
                    Y_POSITION: number;
                    BUTTON: boolean;
                    BUTTON_TEXT: string | null;
                    BUTTON_STYLE: string | null;
                    BUTTON_START: number;
                    CONTINUITY_CAMPAING: number;
                    CONTINUITY_TEST_AB: number;
                    BUTTON_CLICK_CAMPAING: number;
                    BUTTON_CLICK_TEST_AB: number;
                } | null;
            } & {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                CAMPAIGN_VIDEO_ID: string | null;
                BOND_ID: string | null;
            })[];
            VIDEO: {
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
            } | null;
        } & {
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
        })[];
        FEATURE: ({
            AUTO_PLAY: {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                SECOND: number;
                ATIVE: boolean;
            } | null;
            THUMB: {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                IMAGE_URL: string;
            } | null;
            GANCHO: {
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
            } | null;
            TIMELINE: {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                ATIVE: boolean;
                HEIGHT: number;
                COR: string;
            } | null;
            EXTERNAL_LINK: {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                ATIVE: boolean;
                BUTTON_TEXT: string | null;
                BUTTON_STYLE: string | null;
                TEXT: string | null;
                STYLE_TEXT: string | null;
                LINK_URL: string | null;
                BUTTON_CLICK_CAMPAING: number;
                BUTTON_CLICK_TEST_AB: number;
            } | null;
            PIXEL: {
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
            } | null;
        } & {
            ID: string;
            CREATED_AT: Date | null;
            UPDATED_AT: Date | null;
            AUTO_PLAY_ID: string | null;
            THUMB_ID: string | null;
            GANCHO_ID: string | null;
            TIMELINE_ID: string | null;
            EXTERNAL_LINK_ID: string | null;
            PIXEL_ID: string | null;
        }) | null;
    } & {
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
    }>;
    getCampaignsAll(): Promise<[] | ({
        CAMPAIGN_VIDEOS: ({
            BONDS: ({
                BOND: {
                    ID: string;
                    CREATED_AT: Date | null;
                    UPDATED_AT: Date | null;
                    VIDEO_ID: string | null;
                    X_POSITION: number;
                    Y_POSITION: number;
                    BUTTON: boolean;
                    BUTTON_TEXT: string | null;
                    BUTTON_STYLE: string | null;
                    BUTTON_START: number;
                    CONTINUITY_CAMPAING: number;
                    CONTINUITY_TEST_AB: number;
                    BUTTON_CLICK_CAMPAING: number;
                    BUTTON_CLICK_TEST_AB: number;
                } | null;
            } & {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                CAMPAIGN_VIDEO_ID: string | null;
                BOND_ID: string | null;
            })[];
            VIDEO: {
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
            } | null;
        } & {
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
        })[];
        FEATURE: ({
            AUTO_PLAY: {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                SECOND: number;
                ATIVE: boolean;
            } | null;
            THUMB: {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                IMAGE_URL: string;
            } | null;
            GANCHO: {
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
            } | null;
            TIMELINE: {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                ATIVE: boolean;
                HEIGHT: number;
                COR: string;
            } | null;
            EXTERNAL_LINK: {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                ATIVE: boolean;
                BUTTON_TEXT: string | null;
                BUTTON_STYLE: string | null;
                TEXT: string | null;
                STYLE_TEXT: string | null;
                LINK_URL: string | null;
                BUTTON_CLICK_CAMPAING: number;
                BUTTON_CLICK_TEST_AB: number;
            } | null;
            PIXEL: {
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
            } | null;
        } & {
            ID: string;
            CREATED_AT: Date | null;
            UPDATED_AT: Date | null;
            AUTO_PLAY_ID: string | null;
            THUMB_ID: string | null;
            GANCHO_ID: string | null;
            TIMELINE_ID: string | null;
            EXTERNAL_LINK_ID: string | null;
            PIXEL_ID: string | null;
        }) | null;
    } & {
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
    })[]>;
    getCapamignsByEmbedForId(id: string): Promise<{
        CAMPAIGN: Prisma.CampaignGetPayload<{
            include: CampaignEmbed;
        }>;
    }>;
    createCampaignAll(id: string, campaignData: CreateCampaign): Promise<void>;
    createCampaignForUserWithFlow(userId: string, campaignData: CreateCampaign): Promise<{
        CAMPAIGN_VIDEOS: ({
            BONDS: ({
                BOND: {
                    ID: string;
                    CREATED_AT: Date | null;
                    UPDATED_AT: Date | null;
                    VIDEO_ID: string | null;
                    X_POSITION: number;
                    Y_POSITION: number;
                    BUTTON: boolean;
                    BUTTON_TEXT: string | null;
                    BUTTON_STYLE: string | null;
                    BUTTON_START: number;
                    CONTINUITY_CAMPAING: number;
                    CONTINUITY_TEST_AB: number;
                    BUTTON_CLICK_CAMPAING: number;
                    BUTTON_CLICK_TEST_AB: number;
                } | null;
            } & {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                CAMPAIGN_VIDEO_ID: string | null;
                BOND_ID: string | null;
            })[];
            VIDEO: {
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
            } | null;
        } & {
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
        })[];
        FEATURE: ({
            AUTO_PLAY: {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                SECOND: number;
                ATIVE: boolean;
            } | null;
            THUMB: {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                IMAGE_URL: string;
            } | null;
            GANCHO: {
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
            } | null;
            TIMELINE: {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                ATIVE: boolean;
                HEIGHT: number;
                COR: string;
            } | null;
            EXTERNAL_LINK: {
                ID: string;
                CREATED_AT: Date | null;
                UPDATED_AT: Date | null;
                ATIVE: boolean;
                BUTTON_TEXT: string | null;
                BUTTON_STYLE: string | null;
                TEXT: string | null;
                STYLE_TEXT: string | null;
                LINK_URL: string | null;
                BUTTON_CLICK_CAMPAING: number;
                BUTTON_CLICK_TEST_AB: number;
            } | null;
            PIXEL: {
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
            } | null;
        } & {
            ID: string;
            CREATED_AT: Date | null;
            UPDATED_AT: Date | null;
            AUTO_PLAY_ID: string | null;
            THUMB_ID: string | null;
            GANCHO_ID: string | null;
            TIMELINE_ID: string | null;
            EXTERNAL_LINK_ID: string | null;
            PIXEL_ID: string | null;
        }) | null;
    } & {
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
    }>;
    putCampaignForUserWithFlow(id: string, data: UpdateCampaign): Promise<{
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
    }>;
    deleteCampaignForUserWithFlow(id: string): Promise<{
        MESSAGE: string;
    }>;
    campaignAnalyticsForUser(id: string): Promise<{} & {
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
    }>;
    updateCampaignClearTestAB(campaignId: string): Promise<void>;
}
export declare const campaignService: CampaignService;
export {};
//# sourceMappingURL=index.d.ts.map