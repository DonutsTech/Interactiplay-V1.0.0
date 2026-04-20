import type { createCampaignVideo } from '../../@types/interface/campaignVideo';
import type { Campaign_Video } from '../../generated/prisma/client';
import { campaignVideoModel } from '../../models/campaignVideo';

class CampaignVideoService {
  async existsByVideoId(videoId: string): Promise<boolean> {
    if (await campaignVideoModel.count({ VIDEO_ID: videoId })) {
      return true;
    }

    return false;
  }

  async createCampaignVideoForCampaign(data: createCampaignVideo): Promise<Campaign_Video> {
    try {
      const campaignVideo = await campaignVideoModel.create({
        data: {
          CAMPAIGN: { connect: { ID: data.idCampaign } },
          VIDEO: { connect: { ID: data.VIDEO_ID } },
          ORDER: data.ORDER,
          X_POSITION: data.X_POSITION,
          Y_POSITION: data.Y_POSITION,
          CTA: data.CTA,
          CTA_TEXT: data.CTA_TEXT,
          CTA_URL: data.CTA_URL,
          CTA_STYLE: data.CTA_STYLE,
          CTA_START: data.CTA_START,
        },
      });

      return campaignVideo;
    } catch (error) {
      throw error;
    }
  }

  async deleteCampaignVideoForCampaign(campaignId: string) {
    try {
      if (await campaignVideoModel.count({ CAMPAIGN: { ID: campaignId } })) {
        await campaignVideoModel.deleteMany({
          CAMPAIGN: { ID: campaignId },
        });
      }
    } catch (error) {
      throw error;
    }
  }
}

export const campaignVideoService = new CampaignVideoService();
