import type { NextFunction, Request, Response } from 'express';
import type { CreateCampaign, UpdateCampaign } from '../../@types/interface/campaign';
import { campaignService } from '../../services/campaign';

class CampaignController {
  async getCampaignsAllForUser(request: Request, response: Response, next: NextFunction) {
    try {
      const { user } = request as Request & { user: { ID: string } };
      const campaigns = await campaignService.getCampaignsAllForUser(user.ID);
      return response.status(200).json(campaigns);
    } catch (error) {
      next(error);
    }
  }

  async getCampaignById(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params as { id: string };
      const campaign = await campaignService.getCampaignById(id);
      return response.status(200).json(campaign);
    } catch (error) {
      next(error);
    }
  }

  async getCampaignsAll(request: Request, response: Response, next: NextFunction) {
    try {
      const campaigns = await campaignService.getCampaignsAll();
      return response.status(200).json(campaigns);
    } catch (error) {
      next(error);
    }
  }

  async getCapamignsByEmbedForId(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params as { id: string };
      const campaign = await campaignService.getCapamignsByEmbedForId(id);
      return response.status(200).json(campaign);
    } catch (error) {
      next(error);
    }
  }

  async createCampaignForUserWithFlow(request: Request, response: Response, next: NextFunction) {
    try {
      const { user } = request as Request & { user: { ID: string } };
      const body = request.body as CreateCampaign;
      const campaign = await campaignService.createCampaignForUserWithFlow(user.ID, body);
      return response.status(201).json(campaign);
    } catch (error) {
      next(error);
    }
  }

  async putCampaignForUserWithFlow(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params as { id: string };
      const body = request.body as UpdateCampaign;
      const campaign = await campaignService.putCampaignForUserWithFlow(id, body);
      return response.status(200).json(campaign);
    } catch (error) {
      next(error);
    }
  }

  async deleteCampaignForUserWithFlow(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params as { id: string };
      const campaign = await campaignService.deleteCampaignForUserWithFlow(id);
      return response.status(200).json(campaign);
    } catch (error) {
      next(error);
    }
  }

  async updateCamapignNew(request: Request, response: Response, next: NextFunction) {
    try {
      await campaignService.updateCampaignTestABNew();
      return response.status(200).json({ message: 'Campaign updated successfully' });
    } catch (error) {
      throw error;
    }
  }
}

export const campaignController = new CampaignController();
