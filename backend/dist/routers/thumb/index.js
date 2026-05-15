import { imageUpload } from '../../config/multerConfig';
import { thumbController } from '../../controllers/thumb';
import { isAuthenticateTokenDb } from '../../middleware';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';
class ThumbRouter {
    static create(router) {
        router.post('/user/campaigns/:id/thumb', isAuthenticateTokenDb, isValidateUserPlan, imageUpload.single('image'), thumbController.createThumbWithCampaign);
        router.delete('/user/campaigns/thumb/:id', isAuthenticateTokenDb, isValidateUserPlan, thumbController.deleteThumbById);
    }
}
export default ThumbRouter;
//# sourceMappingURL=index.js.map