import type { createTimeLine } from '../../@types/interface/timeline';
import { timelineModel } from '../../models/timeline';
import { campaignService } from '../campaign';
import { featuresService } from '../features';

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

  async createTimelineWithCampaign(campaignId: string, body: createTimeLine) {
    try {
      await campaignService.existsById(campaignId);

      const featureWithCampaign = await featuresService.findFeaturesByCampaign(campaignId);

      if (featureWithCampaign.length === 0) {
        const newFeature = await featuresService.createFeatureWithCampaign(campaignId);

        const newTimeline = await timelineModel.create({
          data: {
            ...body,
            FEATURE: { connect: { ID: newFeature.ID } },
          },
        });

        return newTimeline;
      }

      const feature = featureWithCampaign[0];

      if (feature && feature.TIMELINE_ID) {
        const timeline = await timelineModel.findBy({ where: { ID: feature.TIMELINE_ID } });

        if (timeline) {
          const updatedTimeline = await timelineModel.updateBy({
            where: { ID: timeline.ID },
            data: { ...body },
          });
          return updatedTimeline;
        }
      }

      if (feature && feature.ID) {
        const timeline = await timelineModel.create({
          data: {
            ...body,
            FEATURE: { connect: { ID: feature.ID } },
          },
        });

        return timeline;
      }
    } catch (error) {
      throw error;
    }
  }
}

export const timelineService = new TimelineService();
