import { modelPlayModel } from '../../models/modelPlay';

class ModelPlayService {
  async deleteModelPlayForCampaign(campaignId: string) {
    try {
      if (await modelPlayModel.count({ ANALYTICS: { CAMPAIGN_ID: campaignId } })) {
        await modelPlayModel.deleteMany({
          ANALYTICS: { CAMPAIGN_ID: campaignId },
        });
      }
    } catch (error) {
      throw error;
    }
  }
}

export const modelPlayService = new ModelPlayService();
