import { StatusCodes } from 'http-status-codes';
import type { createAutoPlay } from '../../@types/interface/autoPlay';
import { CustomError } from '../../error';
import { autoPlayModel } from '../../models/autoPlay';
import { campaignService } from '../campaign';
import { featuresService } from '../features';

class AutoPlayService {
  async deleteAutoPlayForCampaign(campaignId: string) {
    try {
      if (await autoPlayModel.count({ FEATURE: { CAMPAIGN: { ID: campaignId } } })) {
        await autoPlayModel.deleteMany({
          FEATURE: { CAMPAIGN: { ID: campaignId } },
        });
      }
    } catch (error) {
      throw new CustomError(
        'Erro ao deletar AutoPlay para a campanha',
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createAutoPlayWithCampaign(campaignId: string, body: createAutoPlay) {
    try {
      await campaignService.existsById(campaignId);

      const features = await featuresService.findFeaturesByCampaign(campaignId);

      if (features.length === 0) {
        const newFeature = await featuresService.createFeatureWithCampaign(campaignId);

        const newAutoPlay = await autoPlayModel.create({
          data: {
            ...body,
            FEATURE: { connect: { ID: newFeature.ID } },
          },
        });

        return newAutoPlay;
      }

      const feature = features[0];

      if (feature && feature.AUTO_PLAY_ID) {
        const autoPlayId = await autoPlayModel.findBy({ where: { ID: feature.AUTO_PLAY_ID } });

        if (autoPlayId) {
          const updatedAutoPlay = await autoPlayModel.updateBy({
            where: { ID: autoPlayId.ID },
            data: { ...body },
          });
          return updatedAutoPlay;
        }
      }

      if (feature && feature.ID) {
        const autoPlay = await autoPlayModel.create({
          data: {
            ...body,
            FEATURE: { connect: { ID: feature.ID } },
          },
        });

        return autoPlay;
      }
    } catch (error) {
      throw error;
    }
  }
}

export const autoPlayService = new AutoPlayService();
