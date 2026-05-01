import { analyticsModel } from '../../models/analytics';
import { campaignService } from '../campaign';
import { modelPlayService } from '../modelPlay';
import { modelTimeService } from '../modelTime';

class AnalyticsService {
  async existById(id: string) {
    if (!(await analyticsModel.count({ ID: id }))) {
      throw new Error('Analytics não encontrado, por favor verifique o id');
    }
  }

  async deleteAnalyticsForCampaign(campaignId: string) {
    try {
      if (await analyticsModel.count({ CAMPAIGN: { ID: campaignId } })) {
        await analyticsModel.deleteMany({
          CAMPAIGN: { ID: campaignId },
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async incrementPlayForAnalytics(id: string, isFirstPlay: boolean) {
    try {
      await this.existById(id);

      await analyticsModel.updateBy({
        where: { ID: id },
        data: {
          ...(isFirstPlay ? { TOTAL_PLAYS: { increment: 1 } } : {}),
          TOTAL_PLAYS: { increment: 1 },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async incrementPlayBlockForAnalytics(id: string) {
    try {
      await this.existById(id);

      await analyticsModel.updateBy({
        where: { ID: id },
        data: {
          TOTAL_PLAY_BLOCK: { increment: 1 },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async incrementViewAnalytics(id: string) {
    try {
      await this.existById(id);

      await analyticsModel.updateBy({
        where: { ID: id },
        data: {
          TOTAL_VIEWS: { increment: 1 },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async getAnalyticsForCampaign(campaignId: string) {
    try {
      const campaign = await campaignService.campaignAnalyticsForUser(campaignId);

      if (!campaign) {
        throw new Error('Campanha não encontrada, por favor verifique o id');
      }

      const analytics = await analyticsModel.findBy({
        where: { CAMPAIGN: { ID: campaignId } },
        select: {
          TOTAL_PLAY_BLOCK: true,
          TOTAL_PLAYS: true,
          TOTAL_VIEWS: true,
          TOTAL_PLAY_UNIQUE: true,
        },
      });

      if (!analytics) {
        throw new Error('Analytics não encontrado para a campanha, por favor verifique o id');
      }

      const modelPlays = await modelPlayService.agrupmentoModelPlayByAnalytics(analytics.ID);

      const modelTime = await modelTimeService.modelTimeAgrupByTime(analytics.ID);

      return {
        CAMPAIGN: campaign,
        ANALYTICS: analytics,
        MODEL_PLAYS: modelPlays,
        MODEL_TIME: modelTime,
      };
    } catch (error) {
      throw error;
    }
  }
}

export const analyticsService = new AnalyticsService();
