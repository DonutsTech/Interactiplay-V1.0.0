import type { BondClient } from '../../@types/interface/campaign';
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

  async updateBondForClient(bondId: string, data: BondClient) {
    try {
      await bondModel.updateBy({
        where: { ID: bondId },
        data: {
          BUTTON_CLICK_CAMPAING: { increment: data.BUTTON_CLICK_CAMPAING },
          BUTTON_CLICK_TEST_AB: { increment: data.BUTTON_CLICK_TEST_AB },
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

export const bondService = new BondService();
