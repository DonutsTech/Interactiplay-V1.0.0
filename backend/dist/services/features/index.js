import { featuresModel } from '../../models/features';
class FeaturesService {
    async deleteFeaturesForCampaign(campaignId) {
        try {
            if (await featuresModel.count({ CAMPAIGN: { ID: campaignId } })) {
                await featuresModel.deleteMany({
                    CAMPAIGN: { ID: campaignId },
                });
            }
        }
        catch (error) {
            throw error;
        }
    }
    async findFeaturesByCampaign(campaignId) {
        try {
            const features = await featuresModel.findMany({
                where: { CAMPAIGN: { ID: campaignId } },
            });
            return features;
        }
        catch (error) {
            throw error;
        }
    }
    async createFeatureWithCampaign(campaignId) {
        try {
            const newFeature = await featuresModel.create({
                data: {
                    CAMPAIGN: { connect: { ID: campaignId } },
                }
            });
            return newFeature;
        }
        catch (error) {
            throw error;
        }
    }
}
export const featuresService = new FeaturesService();
//# sourceMappingURL=index.js.map