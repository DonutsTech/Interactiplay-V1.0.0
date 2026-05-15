import { thumbService } from '../../services/thumb';
class ThumbController {
    async createThumbWithCampaign(request, response, next) {
        try {
            const { id } = request.params;
            const { file } = request;
            const result = await thumbService.createThumbWithCampaign(id, file);
            return response.status(201).json(result);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteThumbById(request, response, next) {
        try {
            const { id } = request.params;
            const result = await thumbService.deleteThumbById(id);
            return response.status(200).json(result);
        }
        catch (error) {
            next(error);
        }
    }
}
export const thumbController = new ThumbController();
//# sourceMappingURL=index.js.map