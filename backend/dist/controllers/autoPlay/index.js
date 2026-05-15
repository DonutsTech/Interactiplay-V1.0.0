import { autoPlayService } from '../../services/autoPlay';
class AutoPlayController {
    async createAutoPlayWithCampaign(request, response, next) {
        try {
            const { id } = request.params;
            const body = request.body;
            const result = await autoPlayService.createAutoPlayWithCampaign(id, body);
            return response.status(201).json(result);
        }
        catch (error) {
            next(error);
        }
    }
}
export const autoPlayController = new AutoPlayController();
//# sourceMappingURL=index.js.map