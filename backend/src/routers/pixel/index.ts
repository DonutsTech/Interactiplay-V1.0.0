import type { Router } from 'express';
import { pixelController } from '../../controllers/pixel';
import { isAuthenticateTokenDb, schemaValidator } from '../../middleware';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';

class PixelRouter {
  public static create(router: Router): void {
    router.post(
      '/user/campaigns/:id/pixel',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      schemaValidator('pixel/create'),
      pixelController.createPixelWithCampaign,
    );
  }
}

export default PixelRouter;
