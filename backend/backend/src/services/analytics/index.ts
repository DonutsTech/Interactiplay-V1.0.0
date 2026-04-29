import { analyticsModel } from '../../models/analytics';

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

  async incrementPlayForAnalytics(id: string) {
    try {
      await this.existById(id);

      await analyticsModel.updateBy({
        where: { ID: id },
        data: {
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
}

export const analyticsService = new AnalyticsService();
