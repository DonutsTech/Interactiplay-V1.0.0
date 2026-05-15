import { pixelModel } from '../../models/pixel';
import { campaignService } from '../campaign';
import { featuresService } from '../features';
class PixelService {
    async deletePixelForCampaign(campaignId) {
        try {
            if (await pixelModel.count({ FEATURE: { CAMPAIGN: { ID: campaignId } } })) {
                await pixelModel.deleteMany({
                    FEATURE: { CAMPAIGN: { ID: campaignId } },
                });
            }
        }
        catch (error) {
            throw error;
        }
    }
    async createPixelWithCampaign(campaignId, body) {
        try {
            await campaignService.existsById(campaignId);
            const featureWithCampaign = await featuresService.findFeaturesByCampaign(campaignId);
            if (featureWithCampaign.length === 0) {
                const newFeature = await featuresService.createFeatureWithCampaign(campaignId);
                const newPixel = await pixelModel.create({
                    data: {
                        ...body,
                        FEATURE: { connect: { ID: newFeature.ID } },
                    },
                });
                return newPixel;
            }
            const feature = featureWithCampaign[0];
            if (feature && feature.PIXEL_ID) {
                const pixel = await pixelModel.findBy({ where: { ID: feature.PIXEL_ID } });
                if (pixel) {
                    const updatedPixel = await pixelModel.updateBy({
                        where: { ID: pixel.ID },
                        data: { ...body },
                    });
                    return updatedPixel;
                }
            }
            if (feature && feature.ID) {
                const pixel = await pixelModel.create({
                    data: {
                        ...body,
                        FEATURE: { connect: { ID: feature.ID } },
                    },
                });
                return pixel;
            }
        }
        catch (error) {
            throw error;
        }
    }
}
export const pixelService = new PixelService();
//# sourceMappingURL=index.js.map