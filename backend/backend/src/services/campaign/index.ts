import { StatusCodes } from 'http-status-codes';
import type { CampaignBasic } from '../../@types/campaignPrisma';
import type { CreateCampaign, UpdateCampaign } from '../../@types/interface/campaign';
import { CustomError } from '../../error';
import type { Prisma } from '../../generated/prisma/browser';
import { analyticsModel } from '../../models/analytics';
import { campaignModel } from '../../models/campaign';
import { bondService } from '../bond';
import { bondVideoService } from '../bondVideo';
import { campaignVideoService } from '../campaignVideo';
import { userService } from '../user';

const CAMPAIGN_DEFAULT_INCLUDE: Prisma.CampaignInclude = {
  CAMPAIGN_VIDEOS: {
    include: {
      BONDS: {
        include: {
          BOND: true,
        },
      },
      VIDEO: true,
    },
  },
  FEATURE: {
    include: {
      AUTO_PLAY: true,
      THUMB: true,
      EXTERNAL_LINK: true,
      TIMELINE: true,
      PIXEL: true,
      GANCHO: true,
    },
  },
};

const EMBED_IFRAME: { EMBED_IFRAME: string; EMBED_JS: string } = {
  EMBED_IFRAME: `<iframe src="https://interactiplay.com/player/{VIDEO_ID}?campaignId={CAMPAIGN_ID}" width="640" height="360" frameborder="0" allowfullscreen></iframe>`,
  EMBED_JS: `<div id="interactiplay-player-{VIDEO_ID}" data-campaign-id="{CAMPAIGN_ID}"></div><script src="https://interactiplay.com/player.js" async></script>`,
};

class CampaignService {
  async existsById(id: string) {
    if (!(await campaignModel.count({ ID: id }))) {
      throw new CustomError(
        'Campanha não encontrada, por favor verifique o id',
        StatusCodes.NOT_FOUND,
      );
    }
  }

  async getCampaignsAllForUser(userId: string) {
    try {
      await userService.existsById(userId);

      const campaigns = await campaignModel.findMany<CampaignBasic>({
        where: { USER_ID: userId },
        include: CAMPAIGN_DEFAULT_INCLUDE,
      });

      return campaigns;
    } catch (error) {
      throw error;
    }
  }

  async getCampaignById(id: string) {
    try {
      await this.existsById(id);

      const campaign = await campaignModel.findBy<CampaignBasic>({
        where: { ID: id },
        include: CAMPAIGN_DEFAULT_INCLUDE,
      });

      return campaign;
    } catch (error) {
      throw error;
    }
  }

  async getCampaignsAll() {
    try {
      const campaigns = await campaignModel.findMany<CampaignBasic>({
        include: CAMPAIGN_DEFAULT_INCLUDE,
      });

      return campaigns;
    } catch (error) {
      throw error;
    }
  }

  async createCampaignAll(id: string, campaignData: CreateCampaign) {
    for (const video of campaignData.CAMPAIGN_VIDEOS) {
      const { BONDS, ...res } = video;

      const campaignVideo = await campaignVideoService.createCampaignVideoForCampaign({
        ...res,
        idCampaign: id,
      });

      if (BONDS && BONDS.length > 0) {
        for (const bond of BONDS) {
          await bondVideoService.createBondVideoForCampaign({
            idVideoCampaign: campaignVideo.ID,
            ...bond,
          });
        }
      }
    }
  }

  async createCampaignForUserWithFlow(userId: string, campaignData: CreateCampaign) {
    try {
      await userService.existsById(userId);

      let create = await campaignModel.create({
        data: {
          NAME: campaignData.NAME,
          USER: {
            connect: {
              ID: userId,
            },
          },
        },
      });

      await this.createCampaignAll(create.ID, campaignData);

      await analyticsModel.create({
        data: { CAMPAIGN: { connect: { ID: create.ID } }, CAMPAIGN_ID: create.ID },
      });

      await campaignModel.updateBy({
        where: { ID: create.ID },
        data: {
          ...EMBED_IFRAME,
        },
      });

      const campaign = await this.getCampaignById(create.ID);

      return campaign;
    } catch (error) {
      throw error;
    }
  }

  async putCampaignForUserWithFlow(id: string, data: UpdateCampaign) {
    try {
      await this.existsById(id);
      await bondService.deleteBondForCampaign(id);
      await bondVideoService.deleteBondVideoForCampaign(id);
      await campaignVideoService.deleteCampaignVideoForCampaign(id);

      await this.createCampaignAll(id, data);
    } catch (error) {
      throw error;
    }
  }
}

export const campaignService = new CampaignService();
