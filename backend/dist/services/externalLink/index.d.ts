import type { createExternalLink } from '../../@types/interface/externalLink';
declare class ExternalLinkService {
    existsById(id: string): Promise<void>;
    deleteExternalLinkForCampaign(campaignId: string): Promise<void>;
    createExternalLinkWithCampaign(campaignId: string, body: createExternalLink): Promise<{
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
    } | undefined>;
    updateExternalLinkForClick(id: string, testAB: boolean): Promise<void>;
    updateExternalLinkForClearTestAB(id: string): Promise<void>;
}
export declare const externalLinkService: ExternalLinkService;
export {};
//# sourceMappingURL=index.d.ts.map