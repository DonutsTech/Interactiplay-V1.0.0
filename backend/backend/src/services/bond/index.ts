import { bondModel } from '../../models/bond';

class BondService {
  async deleteBondForCampaign(campaignId: string) {
    try {
      if (
        await bondModel.count({
          BOND_VIDEOS: { every: { CAMPAIGN_VIDEOS: { CAMPAIGN_ID: campaignId } } },
        })
      ) {
        await bondModel.deleteMany({
          BOND_VIDEOS: { every: { CAMPAIGN_VIDEOS: { CAMPAIGN_ID: campaignId } } },
        });
      }
    } catch (error) {
      throw error;
    }
  }
}

export const bondService = new BondService();
