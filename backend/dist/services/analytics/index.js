import { analyticsModel } from '../../models/analytics';
import { campaignService } from '../campaign';
import { modelPlayService } from '../modelPlay';
import { modelTimeService } from '../modelTime';
import { testABService } from '../testAB';
class AnalyticsService {
    async existById(id) {
        if (!(await analyticsModel.count({ ID: id }))) {
            throw new Error('Analytics não encontrado, por favor verifique o id');
        }
    }
    async deleteAnalyticsForCampaign(campaignId) {
        try {
            if (await analyticsModel.count({ CAMPAIGN: { ID: campaignId } })) {
                await analyticsModel.deleteMany({
                    CAMPAIGN: { ID: campaignId },
                });
            }
        }
        catch (error) {
            throw error;
        }
    }
    async incrementPlayForAnalytics(id, isFirstPlay) {
        try {
            await this.existById(id);
            await analyticsModel.updateBy({
                where: { ID: id },
                data: {
                    ...(isFirstPlay ? { TOTAL_PLAY_UNIQUE: { increment: 1 } } : {}),
                    TOTAL_PLAYS: { increment: 1 },
                },
            });
        }
        catch (error) {
            throw error;
        }
    }
    async incrementPlayBlockForAnalytics(id) {
        try {
            await this.existById(id);
            await analyticsModel.updateBy({
                where: { ID: id },
                data: {
                    TOTAL_PLAY_BLOCK: { increment: 1 },
                },
            });
        }
        catch (error) {
            throw error;
        }
    }
    async incrementViewAnalytics(id) {
        try {
            await this.existById(id);
            await analyticsModel.updateBy({
                where: { ID: id },
                data: {
                    TOTAL_VIEWS: { increment: 1 },
                },
            });
        }
        catch (error) {
            throw error;
        }
    }
    async getAnalyticsForCampaign(campaignId) {
        try {
            const campaign = await campaignService.campaignAnalyticsForUser(campaignId);
            if (!campaign.ANALYTICS_ID) {
                throw new Error('Campanha não encontrada, por favor verifique o id');
            }
            const analytics = await analyticsModel.findBy({
                where: { ID: campaign.ANALYTICS_ID },
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
            const modelPlays = await modelPlayService.agrupmentoModelPlayByAnalytics(campaign.ANALYTICS_ID);
            const modelTime = await modelTimeService.modelTimeAgrupByTime(campaign.ANALYTICS_ID);
            return {
                CAMPAIGN: campaign,
                ANALYTICS: analytics,
                MODEL_PLAYS: modelPlays,
                MODEL_TIME: modelTime,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async getAnalyticsForTestAB(testABId) {
        try {
            const testAB = await testABService.getTestABById(testABId);
            if (!testAB.ANALYTICS_ID_A || !testAB.ANALYTICS_ID_B || !testAB.CAMPAIGN_ID_A || !testAB.CAMPAIGN_ID_B) {
                throw new Error('TestAB não encontrado, por favor verifique o id');
            }
            const campaignA = await campaignService.campaignAnalyticsForUser(testAB.CAMPAIGN_ID_A);
            const campaignB = await campaignService.campaignAnalyticsForUser(testAB.CAMPAIGN_ID_B);
            const analyticsA = await analyticsModel.findBy({
                where: { ID: testAB.ANALYTICS_ID_A },
                select: {
                    TOTAL_PLAY_BLOCK: true,
                    TOTAL_PLAYS: true,
                    TOTAL_VIEWS: true,
                    TOTAL_PLAY_UNIQUE: true,
                },
            });
            const analyticsB = await analyticsModel.findBy({
                where: { ID: testAB.ANALYTICS_ID_B },
                select: {
                    TOTAL_PLAY_BLOCK: true,
                    TOTAL_PLAYS: true,
                    TOTAL_VIEWS: true,
                    TOTAL_PLAY_UNIQUE: true,
                },
            });
            if (!analyticsA || !analyticsB) {
                throw new Error('Analytics não encontrado para o TestAB, por favor verifique o id');
            }
            const modelPlaysA = await modelPlayService.agrupmentoModelPlayByAnalytics(testAB.ANALYTICS_ID_A);
            const modelPlaysB = await modelPlayService.agrupmentoModelPlayByAnalytics(testAB.ANALYTICS_ID_B);
            const modelTimeA = await modelTimeService.modelTimeAgrupByTime(testAB.ANALYTICS_ID_A);
            const modelTimeB = await modelTimeService.modelTimeAgrupByTime(testAB.ANALYTICS_ID_B);
            return {
                ANALYTICS_A: {
                    CAMPAIGN: campaignA,
                    ANALYTICS: analyticsA,
                    MODEL_PLAYS: modelPlaysA,
                    MODEL_TIME: modelTimeA,
                },
                ANALYTICS_B: {
                    CAMPAIGN: campaignB,
                    ANALYTICS: analyticsB,
                    MODEL_PLAYS: modelPlaysB,
                    MODEL_TIME: modelTimeB,
                },
            };
        }
        catch (error) {
            throw error;
        }
    }
}
export const analyticsService = new AnalyticsService();
//# sourceMappingURL=index.js.map