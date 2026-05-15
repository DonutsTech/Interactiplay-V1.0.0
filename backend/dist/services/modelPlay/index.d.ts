import type { ClientPublic } from '../../@types/interface/socket';
declare class ModelPlayService {
    deleteModelPlayForCampaign(campaignId: string): Promise<void>;
    getModelPlayByIdSocket(data: ClientPublic): Promise<ClientPublic>;
    createModelPlaySocketPlay(data: ClientPublic): Promise<ClientPublic>;
    incrementPlayModelPlay(data: ClientPublic): Promise<void>;
    incrementPlayModelPlayBlock(data: ClientPublic): Promise<void>;
    incrementViewModelPlay(data: ClientPublic): Promise<void>;
    agrupmentoModelPlayByAnalytics(analyticsId: string): Promise<Record<string, number>>;
    modelPlayEmbed(data: ClientPublic): Promise<ClientPublic>;
}
export declare const modelPlayService: ModelPlayService;
export {};
//# sourceMappingURL=index.d.ts.map