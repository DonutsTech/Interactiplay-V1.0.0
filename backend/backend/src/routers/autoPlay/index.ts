import type { Router } from 'express';
import { autoPlayController } from '../../controllers/autoPlay';
import { isAuthenticateTokenDb, schemaValidator } from '../../middleware';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';

class AutoPlayRouter {
  public static create(router: Router): void {
    router.post(
      '/user/campaigns/:id/auto-play',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      schemaValidator('autoPlay/create'),
      autoPlayController.createAutoPlayWithCampaign,
    );
  }
}

export default AutoPlayRouter;
