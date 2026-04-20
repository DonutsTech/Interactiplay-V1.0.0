import { modelTimeModel } from '../../models/modelTime';

class ModelTimeService {
  async deleteModelTimeForCampaign(campaignId: string) {
    try {
      if (await modelTimeModel.count({ MODEL_PLAYS: { ANALYTICS: { CAMPAIGN_ID: campaignId } } })) {
        await modelTimeModel.deleteMany({
          MODEL_PLAYS: { ANALYTICS: { CAMPAIGN_ID: campaignId } },
        });
      }
    } catch (error) {
      throw error;
    }
  }
}

export const modelTimeService = new ModelTimeService();
