import type { createTimeLine } from '../../@types/interface/timeline';
declare class TimelineService {
    deleteTimelineForCampaign(campaignId: string): Promise<void>;
    createTimelineWithCampaign(campaignId: string, body: createTimeLine): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        HEIGHT: number;
        COR: string;
    } | undefined>;
}
export declare const timelineService: TimelineService;
export {};
//# sourceMappingURL=index.d.ts.map