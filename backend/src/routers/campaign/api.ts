import type { Router } from 'express';
import { campaignController } from '../../controllers/campaign';
import { isAuthenticateTokenDb, schemaValidator } from '../../middleware';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';

class CampaignApiRouter {
  public static create(router: Router): void {
    router.get(
      '/user/campaigns',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      campaignController.getCampaignsAllForUser,
    );
    router.get(
      '/user/campaigns/:id',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      campaignController.getCampaignById,
    );
    router.get(
      '/campaigns',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      campaignController.getCampaignsAll,
    );
    router.post(
      '/user/campaigns',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      schemaValidator('campaign/create'),
      campaignController.createCampaignForUserWithFlow,
    );
    router.put(
      '/user/campaigns/:id',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      campaignController.putCampaignForUserWithFlow,
    );
    router.delete(
      '/user/campaigns/:id',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      campaignController.deleteCampaignForUserWithFlow,
    );
  }
}

export default CampaignApiRouter;
