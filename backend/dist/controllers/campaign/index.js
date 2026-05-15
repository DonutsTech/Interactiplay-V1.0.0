import { campaignService } from '../../services/campaign';
class CampaignController {
    async getCampaignsAllForUser(request, response, next) {
        try {
            const { user } = request;
            const campaigns = await campaignService.getCampaignsAllForUser(user.ID);
            return response.status(200).json(campaigns);
        }
        catch (error) {
            next(error);
        }
    }
    async getCampaignById(request, response, next) {
        try {
            const { id } = request.params;
            const campaign = await campaignService.getCampaignById(id);
            return response.status(200).json(campaign);
        }
        catch (error) {
            next(error);
        }
    }
    async getCampaignsAll(request, response, next) {
        try {
            const campaigns = await campaignService.getCampaignsAll();
            return response.status(200).json(campaigns);
        }
        catch (error) {
            next(error);
        }
    }
    async getCapamignsByEmbedForId(request, response, next) {
        try {
            const { id } = request.params;
            const campaign = await campaignService.getCapamignsByEmbedForId(id);
            return response.status(200).json(campaign);
        }
        catch (error) {
            next(error);
        }
    }
    async createCampaignForUserWithFlow(request, response, next) {
        try {
            const { user } = request;
            const body = request.body;
            const campaign = await campaignService.createCampaignForUserWithFlow(user.ID, body);
            return response.status(201).json(campaign);
        }
        catch (error) {
            next(error);
        }
    }
    async putCampaignForUserWithFlow(request, response, next) {
        try {
            const { id } = request.params;
            const body = request.body;
            const campaign = await campaignService.putCampaignForUserWithFlow(id, body);
            return response.status(200).json(campaign);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteCampaignForUserWithFlow(request, response, next) {
        try {
            const { id } = request.params;
            const campaign = await campaignService.deleteCampaignForUserWithFlow(id);
            return response.status(200).json(campaign);
        }
        catch (error) {
            next(error);
        }
    }
}
export const campaignController = new CampaignController();
//# sourceMappingURL=index.js.map