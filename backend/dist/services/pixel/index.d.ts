import type { createPixel } from '../../@types/interface/pixel';
declare class PixelService {
    deletePixelForCampaign(campaignId: string): Promise<void>;
    createPixelWithCampaign(campaignId: string, body: createPixel): Promise<{
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
    } | undefined>;
}
export declare const pixelService: PixelService;
export {};
//# sourceMappingURL=index.d.ts.map