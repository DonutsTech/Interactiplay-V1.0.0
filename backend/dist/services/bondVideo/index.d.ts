import type { createBondVideo } from '../../@types/interface/bondVideo';
import type { Bond_Video } from '../../generated/prisma/browser';
declare class BondVideoService {
    createBondVideoForCampaign(data: createBondVideo): Promise<Bond_Video>;
    deleteBondVideoForCampaign(campaignId: string): Promise<void>;
}
export declare const bondVideoService: BondVideoService;
export {};
//# sourceMappingURL=index.d.ts.map