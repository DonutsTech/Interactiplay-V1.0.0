import { ganchoController } from '../../controllers/gancho';
import { isAuthenticateTokenDb, schemaValidator } from '../../middleware';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';
class GanchoRouter {
    static create(router) {
        router.post('/user/campaigns/:id/gancho', isAuthenticateTokenDb, isValidateUserPlan, schemaValidator('gancho/create'), ganchoController.createGanchoWithCampaign);
    }
}
export default GanchoRouter;
//# sourceMappingURL=index.js.map