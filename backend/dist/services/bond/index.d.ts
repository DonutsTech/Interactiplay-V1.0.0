declare class BondService {
    existsById(id: string): Promise<void>;
    deleteBondForCampaign(campaignId: string): Promise<void>;
    updateBondForBondClick(id: string, testAB: boolean): Promise<void>;
    updateBondForContinutyClick(id: string, testAB: boolean): Promise<void>;
    updateBondForClearTestAB(id: string): Promise<void>;
}
export declare const bondService: BondService;
export {};
//# sourceMappingURL=index.d.ts.map