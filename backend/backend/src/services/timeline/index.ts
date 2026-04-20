import { timelineModel } from '../../models/timeline';

class TimelineService {
  async deleteTimelineForCampaign(campaignId: string): Promise<void> {
    try {
      if (await timelineModel.count({ FEATURE: { CAMPAIGN: { ID: campaignId } } })) {
        await timelineModel.deleteMany({
          FEATURE: { CAMPAIGN: { ID: campaignId } },
        });
      }
    } catch (error) {
      throw error;
    }
  }
}

export const timelineService = new TimelineService();
