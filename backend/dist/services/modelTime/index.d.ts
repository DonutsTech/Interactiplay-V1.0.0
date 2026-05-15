import type { ClientPublic } from '../../@types/interface/socket';
declare class ModelTimeService {
    deleteModelTimeForCampaign(campaignId: string): Promise<void>;
    incrementTimeVideo(data: ClientPublic, number: number): Promise<{
        ID_MODEL_TIME: string;
        ID_MODEL_VIEW: string | undefined;
        ID_CAMPAIGN: string | undefined;
        ID_ANALYTICS: string | undefined;
        ID_USER: string | undefined;
        ID_MODEL_PLAY: string | undefined;
        BROWSER: string;
        DEVICE: string;
        OS: string;
        COUNTRY: string;
        CITY: string;
        REGION: string;
        PLAY: number;
        VIEW: number;
        TIMESCREEN: number;
    }>;
    modelTimeAgrupByTime(analyticsId: string): Promise<{
        TIME: {
            [key: string]: number;
        };
        TOTAL_TIMESCREEN: number;
        AGRUP_DATE: {
            [key: string]: number;
        };
    }>;
}
export declare const modelTimeService: ModelTimeService;
export {};
//# sourceMappingURL=index.d.ts.map