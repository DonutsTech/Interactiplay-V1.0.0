import { pixelController } from '../../controllers/pixel';
import { isAuthenticateTokenDb, schemaValidator } from '../../middleware';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';
class PixelRouter {
    static create(router) {
        router.post('/user/campaigns/:id/pixel', isAuthenticateTokenDb, isValidateUserPlan, schemaValidator('pixel/create'), pixelController.createPixelWithCampaign);
    }
}
export default PixelRouter;
//# sourceMappingURL=index.js.map