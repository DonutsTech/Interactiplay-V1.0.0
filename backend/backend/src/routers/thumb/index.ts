import type { Router } from 'express';
import { imageUpload } from '../../config/multerConfig';
import { thumbController } from '../../controllers/thumb';
import { isAuthenticateTokenDb } from '../../middleware';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';

class ThumbRouter {
  public static create(router: Router): void {
    router.post(
      '/user/campaigns/:id/thumb',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      imageUpload.single('image'),
      thumbController.createThumbWithCampaign,
    );

    router.delete(
      '/user/campaigns/:id/thumb',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      thumbController.deleteThumbById,
    );
  }
}

export default ThumbRouter;
