import type { MulterS3File } from '../../@types/file';
declare class TumbService {
    existsById(id: string): Promise<void>;
    deleteThumbForCampaign(campaignId: string): Promise<void>;
    createThumbWithCampaign(campaignId: string, file: MulterS3File): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        IMAGE_URL: string;
    } | undefined>;
    deleteThumbById(thumbId: string): Promise<{
        MESSAGE: string;
    }>;
}
export declare const thumbService: TumbService;
export {};
//# sourceMappingURL=index.d.ts.map