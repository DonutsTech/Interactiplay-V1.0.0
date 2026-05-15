import { ganchoService } from '../../services/gancho';
class GanhoController {
    async createGanchoWithCampaign(request, response, next) {
        try {
            const { id } = request.params;
            const body = request.body;
            const result = await ganchoService.createGanchoWithCampaign(id, body);
            return response.status(201).json(result);
        }
        catch (error) {
            next(error);
        }
    }
}
export const ganchoController = new GanhoController();
//# sourceMappingURL=index.js.map