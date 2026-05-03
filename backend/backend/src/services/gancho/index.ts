import type { createGancho } from '../../@types/interface/ganho';
import { ganchoModel } from '../../models/gancho';
import { campaignService } from '../campaign';
import { featuresService } from '../features';

class GanchoService {
  async deleteGanchoForCampaign(campaignId: string): Promise<void> {
    try {
      if (await ganchoModel.count({ FEATURE: { CAMPAIGN: { ID: campaignId } } })) {
        await ganchoModel.deleteMany({
          FEATURE: { CAMPAIGN: { ID: campaignId } },
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async createGanchoWithCampaign(campaignId: string, body: createGancho) {
    try {
      await campaignService.existsById(campaignId);

      const featureWithCampaign = await featuresService.findFeaturesByCampaign(campaignId);

      if (featureWithCampaign.length === 0) {
        const newFeature = await featuresService.createFeatureWithCampaign(campaignId);

        const newGancho = await ganchoModel.create({
          data: {
            ...body,
            FEATURE: { connect: { ID: newFeature.ID } },
          },
        });

        return newGancho;
      }

      const feature = featureWithCampaign[0];

      if (feature && feature.GANCHO_ID) {
        const gancho = await ganchoModel.findBy({ where: { ID: feature.GANCHO_ID } });

        if (gancho) {
          const updatedGancho = await ganchoModel.updateBy({
            where: { ID: gancho.ID },
            data: { ...body },
          });
          return updatedGancho;
        }
      }

      if (feature && feature.ID) {
        const gancho = await ganchoModel.create({
          data: {
            ...body,
            FEATURE: { connect: { ID: feature.ID } },
          },
        });

        return gancho;
      }
    } catch (error) {
      throw error;
    }
  }
}

export const ganchoService = new GanchoService();
