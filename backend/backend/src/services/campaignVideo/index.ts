import { StatusCodes } from 'http-status-codes';
import type { CampaignVideoClient } from '../../@types/interface/campaign';
import type { createCampaignVideo } from '../../@types/interface/campaignVideo';
import { CustomError } from '../../error';
import type { Campaign_Video } from '../../generated/prisma/client';
import { campaignVideoModel } from '../../models/campaignVideo';

class CampaignVideoService {
  async existsByVideoId(videoId: string): Promise<boolean> {
    if (await campaignVideoModel.count({ VIDEO_ID: videoId })) {
      return true;
    }

    return false;
  }

  async existsById(id: string) {
    if (!(await campaignVideoModel.count({ ID: id }))) {
      throw new CustomError(
        'Vídeo da campanha não encontrado, por favor verifique o id',
        StatusCodes.NOT_FOUND,
      );
    }
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

  async updateCampaignVideoForClient(data: CampaignVideoClient) {
    try {
      await this.existsById(data.ID);

      const campaignVideo = await campaignVideoModel.updateBy({
        where: { ID: data.ID },
        data: {
          CTA_CLICK_CAMPAING: { increment: data.CTA_CLICK_CAMPAING },
          CTA_CLICK_TEST_AB: { increment: data.CTA_CLICK_TEST_AB },
        },
      });

      return campaignVideo;
    } catch (error) {
      throw error;
    }
  }
}

export const campaignVideoService = new CampaignVideoService();
