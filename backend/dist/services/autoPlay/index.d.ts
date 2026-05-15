import type { createAutoPlay } from '../../@types/interface/autoPlay';
declare class AutoPlayService {
    deleteAutoPlayForCampaign(campaignId: string): Promise<void>;
    createAutoPlayWithCampaign(campaignId: string, body: createAutoPlay): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        SECOND: number;
        ATIVE: boolean;
    } | undefined>;
}
export declare const autoPlayService: AutoPlayService;
export {};
//# sourceMappingURL=index.d.ts.map