import { timelineController } from '../../controllers/timeline';
import { isAuthenticateTokenDb, schemaValidator } from '../../middleware';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';
class TimeLineRouter {
    static create(router) {
        router.post('/user/campaigns/:id/timeline', isAuthenticateTokenDb, isValidateUserPlan, schemaValidator('timeline/create'), timelineController.createPixelWithCampaign);
    }
}
export default TimeLineRouter;
//# sourceMappingURL=index.js.map