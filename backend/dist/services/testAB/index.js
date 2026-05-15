import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../../error';
import { analyticsModel } from '../../models/analytics';
import { testABModel } from '../../models/testAB';
import { analyticsService } from '../analytics';
import { campaignService } from '../campaign';
import { userService } from '../user';
const CAMPAIN_TEST_AB_INCLUDE = {
    CAMPAIGN_A: {
        select: {
            NAME: true,
        },
    },
    CAMPAIGN_B: {
        select: {
            NAME: true,
        },
    },
};
class TestABService {
    async existsById(id) {
        if (!(await testABModel.count({ ID: id }))) {
            throw new CustomError('TestAB não encontrado, por favor verifique o id', StatusCodes.NOT_FOUND);
        }
    }
    async campaignsExistsTestAB(campaignIdA, campaignIdB) {
        if (await testABModel.count({
            OR: [{ CAMPAIGN_A: { ID: campaignIdA } }, { CAMPAIGN_B: { ID: campaignIdB } }],
        })) {
            throw new CustomError('Já existe um teste A/B para uma das campanhas informadas', StatusCodes.CONFLICT);
        }
    }
    async deleteTestABForCampaign(campaignId) {
        try {
            if (await testABModel.count({
                OR: [{ CAMPAIGN_A: { ID: campaignId } }, { CAMPAIGN_B: { ID: campaignId } }],
            })) {
                await testABModel.deleteMany({
                    OR: [{ CAMPAIGN_A: { ID: campaignId } }, { CAMPAIGN_B: { ID: campaignId } }],
                });
            }
        }
        catch (error) {
            throw error;
        }
    }
    async getTestABAllForUser(userId) {
        try {
            await userService.existsById(userId);
            const results = await testABModel.findMany({
                where: {
                    USER: { ID: userId },
                },
                include: CAMPAIN_TEST_AB_INCLUDE,
            });
            return results;
        }
        catch (error) {
            throw error;
        }
    }
    async getTestABByIdForUser(id) {
        try {
            const result = await testABModel.findBy({
                where: {
                    ID: id,
                },
                include: CAMPAIN_TEST_AB_INCLUDE,
            });
            if (!result) {
                throw new CustomError('TestAB não encontrado', StatusCodes.NOT_FOUND);
            }
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async getTestABAll() {
        try {
            const results = await testABModel.findMany({});
            return results;
        }
        catch (error) {
            throw error;
        }
    }
    randomChoice(campaignA, campaignB) {
        return Math.random() < 0.5 ? campaignA : campaignB;
    }
    async getTestABByEmbedForId(id) {
        try {
            const testAB = await testABModel.findBy({
                where: { ID: id },
            });
            if (!testAB) {
                throw new CustomError('TestAB não encontrado', StatusCodes.NOT_FOUND);
            }
            const chosenCampaign = this.randomChoice(testAB.CAMPAIGN_ID_A, testAB.CAMPAIGN_ID_B);
            if (!chosenCampaign) {
                throw new CustomError('Campanha do TestAB não encontrada', StatusCodes.NOT_FOUND);
            }
            let analyticsId = null;
            if (chosenCampaign === testAB.CAMPAIGN_ID_A) {
                analyticsId = testAB.ANALYTICS_ID_A;
            }
            else if (chosenCampaign === testAB.CAMPAIGN_ID_B) {
                analyticsId = testAB.ANALYTICS_ID_B;
            }
            if (!analyticsId) {
                throw new CustomError('Analytics do TestAB não encontrado', StatusCodes.NOT_FOUND);
            }
            const campaign = await campaignService.getCapamignsByEmbedForId(chosenCampaign);
            if (!campaign) {
                throw new CustomError('Campanha do TestAB não encontrada', StatusCodes.NOT_FOUND);
            }
            campaign.CAMPAIGN.ANALYTICS_ID = analyticsId;
            return campaign;
        }
        catch (error) {
            throw error;
        }
    }
    async createTestABForUser(userId, body) {
        try {
            await userService.existsById(userId);
            await campaignService.existsById(body.campaignIdA);
            await campaignService.existsById(body.campaignIdB);
            await this.campaignsExistsTestAB(body.campaignIdA, body.campaignIdB);
            let result = await testABModel.create({
                data: {
                    USER: { connect: { ID: userId } },
                    CAMPAIGN_A: { connect: { ID: body.campaignIdA } },
                    CAMPAIGN_B: { connect: { ID: body.campaignIdB } },
                },
            });
            const analyticsA = await analyticsModel.create({
                data: {
                    TEST_AB_A: { connect: { ID: result.ID } },
                },
            });
            const analyticsB = await analyticsModel.create({
                data: {
                    TEST_AB_B: { connect: { ID: result.ID } },
                },
            });
            result = await testABModel.updateBy({
                where: { ID: result.ID },
                data: {
                    EMBED_IFRAME: `<iframe src="https://testeinteractiplay.duckdns.org/widget/index.html" name='{"testab": "${result.ID}"}'></iframe>`,
                    EMBED_JS: `<div interactiplay data-testab="${result.ID}"></div> <script src="https://testeinteractiplay.duckdns.org/widget/index.mjs"></script>`,
                    ANALYTICS_A: { connect: { ID: analyticsA.ID } },
                    ANALYTICS_B: { connect: { ID: analyticsB.ID } },
                },
            });
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteTestABForUser(id) {
        try {
            await this.existsById(id);
            const result = await testABModel.findBy({
                where: { ID: id },
            });
            if (!result) {
                throw new CustomError('TestAB não encontrado', StatusCodes.NOT_FOUND);
            }
            if (result.ANALYTICS_ID_A) {
                await analyticsService.deleteAnalyticsForCampaign(result.ANALYTICS_ID_A);
            }
            if (result.ANALYTICS_ID_B) {
                await analyticsService.deleteAnalyticsForCampaign(result.ANALYTICS_ID_B);
            }
            if (result.CAMPAIGN_ID_A) {
                await campaignService.updateCampaignClearTestAB(result.CAMPAIGN_ID_A);
            }
            if (result.CAMPAIGN_ID_B) {
                await campaignService.updateCampaignClearTestAB(result.CAMPAIGN_ID_B);
            }
            await testABModel.deleteBy({ ID: id });
            return { message: 'Teste A/B deletado com sucesso' };
        }
        catch (error) {
            throw error;
        }
    }
    async getTestABById(id) {
        try {
            const result = await testABModel.findBy({
                where: { ID: id },
            });
            if (!result) {
                throw new CustomError('TestAB não encontrado', StatusCodes.NOT_FOUND);
            }
            return result;
        }
        catch (error) {
            throw error;
        }
    }
}
export const testABService = new TestABService();
//# sourceMappingURL=index.js.map