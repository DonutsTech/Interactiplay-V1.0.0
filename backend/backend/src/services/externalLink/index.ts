import { StatusCodes } from 'http-status-codes';
import type { createExternalLink } from '../../@types/interface/externalLink';
import { CustomError } from '../../error';
import { externalLinkModel } from '../../models/externalLink';
import { campaignService } from '../campaign';
import { featuresService } from '../features';

class ExternalLinkService {
  async existsById(id: string) {
    if (!(await externalLinkModel.count({ ID: id }))) {
      throw new CustomError(
        'Link externo não encontrado, por favor verifique o id',
        StatusCodes.NOT_FOUND,
      );
    }
  }

  async deleteExternalLinkForCampaign(campaignId: string): Promise<void> {
    try {
      if (await externalLinkModel.count({ FEATURE: { CAMPAIGN: { ID: campaignId } } })) {
        await externalLinkModel.deleteMany({
          FEATURE: { CAMPAIGN: { ID: campaignId } },
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async createExternalLinkWithCampaign(campaignId: string, body: createExternalLink) {
    try {
      await campaignService.existsById(campaignId);

      const features = await featuresService.findFeaturesByCampaign(campaignId);

      if (features.length === 0) {
        const newFeature = await featuresService.createFeatureWithCampaign(campaignId);

        const externalLink = await externalLinkModel.create({
          data: {
            ...body,
            FEATURE: { connect: { ID: newFeature.ID } },
          },
        });

        return externalLink;
      }

      const feature = features[0];

      if (feature && feature.EXTERNAL_LINK_ID) {
        const externalLink = await externalLinkModel.findBy({
          where: { ID: feature.EXTERNAL_LINK_ID },
        });

        if (externalLink) {
          const updatedExternalLink = await externalLinkModel.updateBy({
            where: { ID: externalLink.ID },
            data: { ...body },
          });

          return updatedExternalLink;
        }
      }

      if (feature && feature.ID) {
        const externalLink = await externalLinkModel.create({
          data: {
            ...body,
            FEATURE: { connect: { ID: feature.ID } },
          },
        });

        return externalLink;
      }
    } catch (error) {
      throw error;
    }
  }

  async updateExternalLinkForClick(id: string, testAB: boolean) {
    try {
      await this.existsById(id);

      const update = testAB
        ? { BUTTON_CLICK_TEST_AB: { increment: 1 } }
        : {
            BUTTON_CLICK_CAMPAING: { increment: 1 },
          };

      await externalLinkModel.updateBy({
        where: { ID: id },
        data: update,
      });
    } catch (error) {
      throw error;
    }
  }

  async updateExternalLinkForClearTestAB(id: string) {
    try {
      await this.existsById(id);

      await externalLinkModel.updateBy({
        where: { ID: id },
        data: {
          BUTTON_CLICK_TEST_AB: 0,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

export const externalLinkService = new ExternalLinkService();
