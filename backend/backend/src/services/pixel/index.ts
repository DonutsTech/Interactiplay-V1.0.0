import { pixelModel } from '../../models/pixel';

class PixelService {
  async deletePixelForCampaign(campaignId: string): Promise<void> {
    try {
      if (await pixelModel.count({ FEATURE: { CAMPAIGN: { ID: campaignId } } })) {
        await pixelModel.deleteMany({
          FEATURE: { CAMPAIGN: { ID: campaignId } },
        });
      }
    } catch (error) {
      throw error;
    }
  }
}

export const pixelService = new PixelService();
