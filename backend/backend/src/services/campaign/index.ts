import { StatusCodes } from 'http-status-codes';
import type { CampaignBasic, CampaignEmbed } from '../../@types/campaignPrisma';
import type { CreateCampaign, UpdateCampaign } from '../../@types/interface/campaign';
import { CustomError } from '../../error';
import type { Prisma } from '../../generated/prisma/browser';
import { analyticsModel } from '../../models/analytics';
import { campaignModel } from '../../models/campaign';
import { formatDateBR } from '../../utils/format/data';
import { autoPlayService } from '../autoPlay';
import { bondService } from '../bond';
import { bondVideoService } from '../bondVideo';
import { campaignVideoService } from '../campaignVideo';
import { externalLinkService } from '../externalLink';
import { featuresService } from '../features';
import { ganchoService } from '../gancho';
import { modelPlayService } from '../modelPlay';
import { modelTimeService } from '../modelTime';
import { pixelService } from '../pixel';
import { testABService } from '../testAB';
import { thumbService } from '../thumb';
import { timelineService } from '../timeline';
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

const CAMPAIGN_DEFAULT_EMBED: Prisma.CampaignInclude = {
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
  USER: {
    select: {
      HISTORY_PLAYS: {
        select: {
          QTD_PLAYS: true,
          STATUS: true,
        },
      },
      STRIPE_SUBSCRIPTION_STATUS: true,
      PLAN: {
        select: {
          PLAYS: true,
        },
      },
    },
  },
};

const CAMPAIGN_DEFAULT_EMBED_ANALYTICS: Prisma.CampaignSelect = {
  CAMPAIGN_VIDEOS: {
    select: {
      ID: true,
      VIDEO: true,
      CTA_CLICK_CAMPAING: true,
      CTA_CLICK_TEST_AB: true,
      BONDS: {
        select: {
          BOND: {
            select: {
              ID: true,
              VIDEO: true,
              CONTINUITY_CAMPAING: true,
              CONTINUITY_TEST_AB: true,
              BUTTON_CLICK_CAMPAING: true,
              BUTTON_CLICK_TEST_AB: true,
            },
          },
        },
      },
    },
  },
  FEATURE: {
    select: {
      EXTERNAL_LINK: {
        select: {
          ID: true,
          BUTTON_CLICK_CAMPAING: true,
          BUTTON_CLICK_TEST_AB: true,
        },
      },
    },
  },
  ANALYTICS_ID: true,
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
      const campaign = await campaignModel.findBy<CampaignBasic>({
        where: { ID: id },
        include: CAMPAIGN_DEFAULT_INCLUDE,
      });

      if (!campaign) {
        throw new CustomError(
          'Campanha não encontrada, por favor verifique o id',
          StatusCodes.NOT_FOUND,
        );
      }

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

  async getCapamignsByEmbedForId(
    id: string,
  ): Promise<{ CAMPAIGN: Prisma.CampaignGetPayload<{ include: CampaignEmbed }> }> {
    try {
      const campaign = await campaignModel.findBy<CampaignEmbed>({
        where: { ID: id },
        include: CAMPAIGN_DEFAULT_EMBED,
      });

      if (!campaign) {
        throw new CustomError(
          'Campanha não encontrada, por favor verifique o id',
          StatusCodes.NOT_FOUND,
        );
      }

      if (campaign.USER?.HISTORY_PLAYS) {
        const found = campaign.USER.HISTORY_PLAYS.find(
          ({ STATUS }) => STATUS === 'ativo' || STATUS === 'teste',
        );

        campaign.USER.HISTORY_PLAYS = found ? [found] : [];
      }

      return { CAMPAIGN: campaign };
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

      const create = await campaignModel.create({
        data: {
          NAME:
            campaignData.NAME === 'Nome da campanha'
              ? `Campanha ${formatDateBR()}`
              : campaignData.NAME,
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
          EMBED_IFRAME: `<iframe src="http://ec2-13-219-76-98.compute-1.amazonaws.com/widget/index.html" name='{"campaign": "${create.ID}"}'></iframe>`,
          EMBED_JS: `<div id="interactiplay" data-campaign="${create.ID}"></div> <script src="http://ec2-13-219-76-98.compute-1.amazonaws.com/widget/index.mjs"></script>`,
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

      const updatedCampaign = await campaignModel.updateBy({
        where: { ID: id },
        data: {
          NAME: data.NAME,
        },
        include: CAMPAIGN_DEFAULT_INCLUDE,
      });

      return updatedCampaign;
    } catch (error) {
      throw error;
    }
  }

  async deleteCampaignForUserWithFlow(id: string) {
    try {
      await this.existsById(id);

      await autoPlayService.deleteAutoPlayForCampaign(id);
      await thumbService.deleteThumbForCampaign(id);
      await ganchoService.deleteGanchoForCampaign(id);
      await timelineService.deleteTimelineForCampaign(id);
      await externalLinkService.deleteExternalLinkForCampaign(id);
      await pixelService.deletePixelForCampaign(id);
      await featuresService.deleteFeaturesForCampaign(id);
      await bondService.deleteBondForCampaign(id);
      await bondVideoService.deleteBondVideoForCampaign(id);
      await campaignVideoService.deleteCampaignVideoForCampaign(id);
      await testABService.deleteTestABForCampaign(id);
      await modelTimeService.deleteModelTimeForCampaign(id);
      await modelPlayService.deleteModelPlayForCampaign(id);

      await campaignModel.deleteBy({ ID: id });

      return { MESSAGE: 'Campanha deletada com sucesso' };
    } catch (error) {
      throw error;
    }
  }

  async campaignAnalyticsForUser(id: string) {
    try {
      const campaign = await campaignModel.findBy({
        where: { ID: id },
        select: CAMPAIGN_DEFAULT_EMBED_ANALYTICS,
      });

      if (!campaign) {
        throw new CustomError(
          'Campanha não encontrada, por favor verifique o id',
          StatusCodes.NOT_FOUND,
        );
      }

      return campaign;
    } catch (error) {
      throw error;
    }
  }

  async updateCampaignClearTestAB(campaignId: string) {
    try {
      const campaign = await this.getCampaignById(campaignId);

      for (const cta of campaign.CAMPAIGN_VIDEOS) {
        await campaignVideoService.updateCampaignVideoForCTA(cta.ID);

        for (const bond of cta.BONDS) {
          if (bond.BOND_ID) {
            await bondService.updateBondForClearTestAB(bond.BOND_ID);
          }
        }
      }

      if (campaign.FEATURE?.EXTERNAL_LINK?.ID) {
        await externalLinkService.updateExternalLinkForClearTestAB(
          campaign.FEATURE.EXTERNAL_LINK.ID,
        );
      }
    } catch (error) {
      throw error;
    }
  }
}

export const campaignService = new CampaignService();
