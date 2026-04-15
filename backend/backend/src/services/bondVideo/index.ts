import type { createBondVideo } from '../../@types/interface/bondVideo';
import type { Bond_Video } from '../../generated/prisma/browser';
import { bondVideoModel } from '../../models/bondVideo';

class BondVideoService {
  async createBondVideoForCampaign(data: createBondVideo): Promise<Bond_Video> {
    try {
      const bondVideo = await bondVideoModel.create({
        data: {
          BOND: {
            create: {
              VIDEO: { connect: { ID: data.BOND.VIDEO_ID } },
              BUTTON: data.BOND.BUTTON,
              BUTTON_TEXT: data.BOND.BUTTON_TEXT,
              BUTTON_STYLE: data.BOND.BUTTON_STYLE,
              BUTTON_START: data.BOND.BUTTON_START,
              X_POSITION: data.BOND.X_POSITION,
              Y_POSITION: data.BOND.Y_POSITION,
            },
          },
          CAMPAIGN_VIDEOS: {
            connect: { ID: data.idVideoCampaign },
          },
        },
      });

      return bondVideo;
    } catch (error) {
      throw error;
    }
  }

  async deleteBondVideoForCampaign(campaignId: string) {
    try {
    } catch (error) {
      throw error;
    }
  }
}

export const bondVideoService = new BondVideoService();
