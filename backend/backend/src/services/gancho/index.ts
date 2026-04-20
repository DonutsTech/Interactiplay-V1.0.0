import { ganchoModel } from '../../models/gancho';

class GanchoService {
  async deleteGanchoForCampaign(campaignId: string): Promise<void> {
    try {
      if (await ganchoModel.count({ FEATURE: { CAMPAIGN: { ID: campaignId } } })) {
        await ganchoModel.deleteMany({
          FEATURE: { CAMPAIGN: { ID: campaignId } },
        });
      }
    } catch (error) {
      throw error;
    }
  }
}

export const ganchoService = new GanchoService();
