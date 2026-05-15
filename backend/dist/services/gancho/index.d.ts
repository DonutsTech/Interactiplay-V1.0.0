import type { createGancho } from '../../@types/interface/ganho';
declare class GanchoService {
    deleteGanchoForCampaign(campaignId: string): Promise<void>;
    createGanchoWithCampaign(campaignId: string, body: createGancho): Promise<{
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
    } | undefined>;
}
export declare const ganchoService: GanchoService;
export {};
//# sourceMappingURL=index.d.ts.map