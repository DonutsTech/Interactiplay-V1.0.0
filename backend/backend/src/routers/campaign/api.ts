import type { Router } from 'express';
import { campaignController } from '../../controllers/campaign';

class CampaignApiRouter {
  public static create(router: Router): void {
    router.get('/user/campaigns', campaignController.getCampaignsAllForUser);
    router.get('/campaigns/:id', campaignController.getCampaignById);
    router.get('/campaigns', campaignController.getCampaignsAll);
    router.post('/user/campaigns', campaignController.createCampaignForUserWithFlow);
    router.put('/user/campaigns/:id', campaignController.putCampaignForUserWithFlow);
    router.delete('/user/campaigns/:id', campaignController.deleteCampaignForUserWithFlow);
  }
}

export default CampaignApiRouter;
