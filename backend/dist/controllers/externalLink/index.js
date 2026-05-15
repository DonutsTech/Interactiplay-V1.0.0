import { externalLinkService } from '../../services/externalLink';
class ExternalLinkController {
    async createExternalLinkWithCampaign(request, response, next) {
        try {
            const { id } = request.params;
            const body = request.body;
            const result = await externalLinkService.createExternalLinkWithCampaign(id, body);
            return response.status(201).json(result);
        }
        catch (error) {
            next(error);
        }
    }
}
export const externalLinkController = new ExternalLinkController();
//# sourceMappingURL=index.js.map