import { autoPlayController } from '../../controllers/autoPlay';
import { isAuthenticateTokenDb, schemaValidator } from '../../middleware';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';
class AutoPlayRouter {
    static create(router) {
        router.post('/user/campaigns/:id/auto-play', isAuthenticateTokenDb, isValidateUserPlan, schemaValidator('autoPlay/create'), autoPlayController.createAutoPlayWithCampaign);
    }
}
export default AutoPlayRouter;
//# sourceMappingURL=index.js.map