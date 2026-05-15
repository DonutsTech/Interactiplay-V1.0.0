declare class FeaturesService {
    deleteFeaturesForCampaign(campaignId: string): Promise<void>;
    findFeaturesByCampaign(campaignId: string): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        AUTO_PLAY_ID: string | null;
        THUMB_ID: string | null;
        GANCHO_ID: string | null;
        TIMELINE_ID: string | null;
        EXTERNAL_LINK_ID: string | null;
        PIXEL_ID: string | null;
    }[]>;
    createFeatureWithCampaign(campaignId: string): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        AUTO_PLAY_ID: string | null;
        THUMB_ID: string | null;
        GANCHO_ID: string | null;
        TIMELINE_ID: string | null;
        EXTERNAL_LINK_ID: string | null;
        PIXEL_ID: string | null;
    }>;
}
export declare const featuresService: FeaturesService;
export {};
//# sourceMappingURL=index.d.ts.map