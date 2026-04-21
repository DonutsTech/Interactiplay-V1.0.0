import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../../error';
import { thumbModel } from '../../models/thumb';
import { featuresService } from '../features';
import { photoService } from '../photo';

class TumbService {
  async existsById(id: string) {
    if (!(await thumbModel.count({ ID: id }))) {
      throw new CustomError(
        'Thumb não encontrado, por favor verifique o id do thumb',
        StatusCodes.NOT_FOUND,
      );
    }
  }
  async deleteThumbForCampaign(campaignId: string) {
    try {
      if (await thumbModel.count({ FEATURE: { CAMPAIGN: { ID: campaignId } } })) {
        const featuresWithCampaign = await featuresService.findFeaturesByCampaign(campaignId);

        if (featuresWithCampaign.length === 0) {
          throw new CustomError(
            'Não é possível deletar os Thumbs, pois existem features associadas a esta campanha',
            StatusCodes.BAD_REQUEST,
          );
        }

        const featuresIds = featuresWithCampaign[0]?.THUMB_ID;

        if (!featuresIds) {
          throw new CustomError(
            'Não é possível deletar os Thumbs, pois existem features associadas a esta campanha',
            StatusCodes.BAD_REQUEST,
          );
        }

        const thumb = await thumbModel.findBy({
          where: {
            ID: featuresIds,
            FEATURE: { CAMPAIGN: { ID: campaignId } },
          },
        });

        if (!thumb) {
          throw new CustomError(
            'Thumb não encontrado, por favor verifique o id do thumb',
            StatusCodes.NOT_FOUND,
          );
        }

        if (thumb.IMAGE_URL !== '') {
          await photoService.deleteImageFile(thumb.IMAGE_URL);
        }

        await thumbModel.deleteMany({
          FEATURE: { CAMPAIGN: { ID: campaignId } },
        });
      }
    } catch (error) {
      throw new CustomError(
        'Erro ao deletar Thumbs para a campanha',
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

export const thumbService = new TumbService();
