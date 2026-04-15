import type { Router } from 'express';
import { campaignController } from '../../controllers/campaign';

class CampaignPublicRouter {
  public static create(router: Router): void {
    router.get('/campaigns/:id/embed', campaignController.getCapamignsByEmbedForId);
  }
}

export default CampaignPublicRouter;
