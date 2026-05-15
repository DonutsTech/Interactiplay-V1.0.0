import { externalLinkController } from '../../controllers/externalLink';
import { isAuthenticateTokenDb, schemaValidator } from '../../middleware';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';
class ExternalLinkRouter {
    static create(router) {
        router.post('/user/campaigns/:id/external-link', isAuthenticateTokenDb, isValidateUserPlan, schemaValidator('externalLink/create'), externalLinkController.createExternalLinkWithCampaign);
    }
}
export default ExternalLinkRouter;
//# sourceMappingURL=index.js.map