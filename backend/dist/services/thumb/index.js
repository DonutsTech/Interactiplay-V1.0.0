import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../../error';
import { thumbModel } from '../../models/thumb';
import { campaignService } from '../campaign';
import { featuresService } from '../features';
import { photoService } from '../photo';
class TumbService {
    async existsById(id) {
        if (!(await thumbModel.count({ ID: id }))) {
            throw new CustomError('Thumb não encontrado, por favor verifique o id do thumb', StatusCodes.NOT_FOUND);
        }
    }
    async deleteThumbForCampaign(campaignId) {
        try {
            if (await thumbModel.count({ FEATURE: { CAMPAIGN: { ID: campaignId } } })) {
                const featuresWithCampaign = await featuresService.findFeaturesByCampaign(campaignId);
                if (featuresWithCampaign.length === 0) {
                    throw new CustomError('Não é possível deletar os Thumbs, pois existem features associadas a esta campanha', StatusCodes.BAD_REQUEST);
                }
                const featuresIds = featuresWithCampaign[0]?.THUMB_ID;
                if (!featuresIds) {
                    throw new CustomError('Não é possível deletar os Thumbs, pois existem features associadas a esta campanha', StatusCodes.BAD_REQUEST);
                }
                const thumb = await thumbModel.findBy({
                    where: {
                        ID: featuresIds,
                        FEATURE: { CAMPAIGN: { ID: campaignId } },
                    },
                });
                if (!thumb) {
                    throw new CustomError('Thumb não encontrado, por favor verifique o id do thumb', StatusCodes.NOT_FOUND);
                }
                if (thumb.IMAGE_URL !== '') {
                    await photoService.deleteImageFile(thumb.IMAGE_URL);
                }
                await thumbModel.deleteMany({
                    FEATURE: { CAMPAIGN: { ID: campaignId } },
                });
            }
        }
        catch (error) {
            throw new CustomError('Erro ao deletar Thumbs para a campanha', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
    async createThumbWithCampaign(campaignId, file) {
        try {
            await campaignService.existsById(campaignId);
            const featureWithCampaign = await featuresService.findFeaturesByCampaign(campaignId);
            if (featureWithCampaign.length === 0) {
                const newFeature = await featuresService.createFeatureWithCampaign(campaignId);
                const newThumb = await thumbModel.create({
                    data: {
                        IMAGE_URL: file.location,
                        FEATURE: { connect: { ID: newFeature.ID } },
                    },
                });
                return newThumb;
            }
            const feature = featureWithCampaign[0];
            if (feature && feature.THUMB_ID) {
                const thumb = await thumbModel.findBy({ where: { ID: feature.THUMB_ID } });
                if (thumb) {
                    if (thumb.IMAGE_URL !== '') {
                        await photoService.deleteImageFile(thumb.IMAGE_URL);
                    }
                    const updatedThumb = await thumbModel.updateBy({
                        where: { ID: thumb.ID },
                        data: { IMAGE_URL: file.location },
                    });
                    return updatedThumb;
                }
            }
            if (feature && feature.ID) {
                const thumb = await thumbModel.create({
                    data: {
                        IMAGE_URL: file.location,
                        FEATURE: { connect: { ID: feature.ID } },
                    },
                });
                return thumb;
            }
        }
        catch (error) {
            throw new CustomError('Erro ao criar o Thumb para a campanha', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteThumbById(thumbId) {
        try {
            const thumb = await thumbModel.findBy({ where: { ID: thumbId } });
            if (!thumb) {
                throw new CustomError('Thumb não encontrado, por favor verifique o id do thumb', StatusCodes.NOT_FOUND);
            }
            if (thumb.IMAGE_URL !== '') {
                await photoService.deleteImageFile(thumb.IMAGE_URL);
            }
            await thumbModel.deleteBy({ ID: thumbId });
            return { MESSAGE: 'Thumb deletado com sucesso' };
        }
        catch (error) {
            throw error;
        }
    }
}
export const thumbService = new TumbService();
//# sourceMappingURL=index.js.map