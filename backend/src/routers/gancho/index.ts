import type { Router } from 'express';
import { ganchoController } from '../../controllers/gancho';
import { isAuthenticateTokenDb, schemaValidator } from '../../middleware';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';

class GanchoRouter {
  public static create(router: Router): void {
    router.post(
      '/user/campaigns/:id/gancho',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      schemaValidator('gancho/create'),
      ganchoController.createGanchoWithCampaign,
    );
  }
}

export default GanchoRouter;
