import type { createGancho } from '../../@types/interface/ganho';
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

  async createGanchoWithCampaign(campaignId: string, body: createGancho) {
    try {
    } catch (error) {}
  }
}

export const ganchoService = new GanchoService();
