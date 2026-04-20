import { analyticsModel } from '../../models/analytics';

class AnalyticsService {
  async deleteAnalyticsForCampaign(campaignId: string) {
    try {
      if (await analyticsModel.count({ CAMPAIGN: { ID: campaignId } })) {
        await analyticsModel.deleteMany({
          CAMPAIGN: { ID: campaignId },
        });
      }
    } catch (error) {
      throw error;
    }
  }
}

export const analyticsService = new AnalyticsService();
