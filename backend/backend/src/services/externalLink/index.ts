import type { createExternalLink } from '../../@types/interface/externalLink';
import { externalLinkModel } from '../../models/externalLink';
import { campaignService } from '../campaign';
import { featuresService } from '../features';

class ExternalLinkService {
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
}

export const externalLinkService = new ExternalLinkService();
