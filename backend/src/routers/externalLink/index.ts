import type { Router } from 'express';
import { externalLinkController } from '../../controllers/externalLink';
import { isAuthenticateTokenDb, schemaValidator } from '../../middleware';
import { isValidateUserPlan } from '../../middleware/isValidateUserPlan';

class ExternalLinkRouter {
  public static create(router: Router): void {
    router.post(
      '/user/campaigns/:id/external-link',
      isAuthenticateTokenDb,
      isValidateUserPlan,
      schemaValidator('externalLink/create'),
      externalLinkController.createExternalLinkWithCampaign,
    );
  }
}

export default ExternalLinkRouter;
