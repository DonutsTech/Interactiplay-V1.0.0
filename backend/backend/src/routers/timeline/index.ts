import type { Router } from 'express';
import { timelineController } from '../../controllers/timeline';
import { isAuthenticateTokenDb, schemaValidator } from '../../middleware';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';

class TimeLineRouter {
  public static create(router: Router): void {
    router.post(
      '/user/campaigns/:id/timeline',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      schemaValidator('timeline/create'),
      timelineController.createPixelWithCampaign,
    );
  }
}

export default TimeLineRouter;
