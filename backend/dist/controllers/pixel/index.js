import { pixelService } from '../../services/pixel';
class PixelController {
    async createPixelWithCampaign(request, response, next) {
        try {
            const { id } = request.params;
            const body = request.body;
            const result = await pixelService.createPixelWithCampaign(id, body);
            return response.status(201).json(result);
        }
        catch (error) {
            next(error);
        }
    }
}
export const pixelController = new PixelController();
//# sourceMappingURL=index.js.map