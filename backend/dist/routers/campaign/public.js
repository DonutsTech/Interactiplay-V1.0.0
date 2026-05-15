import { campaignController } from '../../controllers/campaign';
class CampaignPublicRouter {
    static create(router) {
        router.get('/campaigns/:id/embed', campaignController.getCapamignsByEmbedForId);
    }
}
export default CampaignPublicRouter;
//# sourceMappingURL=public.js.map