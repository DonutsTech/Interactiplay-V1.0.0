import { StatusCodes } from 'http-status-codes';
import type { CreateTestAB } from '../../@types/interface/testAB';
import { CustomError } from '../../error';
import { analyticsModel } from '../../models/analytics';
import { testABModel } from '../../models/testAB';
import { campaignService } from '../campaign';
import { userService } from '../user';

class TestABService {
  async campaignsExistsTestAB(campaignIdA: string, campaignIdB: string) {
    if (
      await testABModel.count({
        OR: [{ CAMPAIGN_A: { ID: campaignIdA } }, { CAMPAIGN_B: { ID: campaignIdB } }],
      })
    ) {
      throw new CustomError(
        'Já existe um teste A/B para uma das campanhas informadas',
        StatusCodes.CONFLICT,
      );
    }
  }
  async deleteTestABForCampaign(campaignId: string) {
    try {
      if (
        await testABModel.count({
          OR: [{ CAMPAIGN_A: { ID: campaignId } }, { CAMPAIGN_B: { ID: campaignId } }],
        })
      ) {
        await testABModel.deleteMany({
          OR: [{ CAMPAIGN_A: { ID: campaignId } }, { CAMPAIGN_B: { ID: campaignId } }],
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async getTestABAllForUser(userId: string) {
    try {
      await userService.existsById(userId);

      const results = await testABModel.findMany({
        where: {
          USER: { ID: userId },
        },
      });

      return results;
    } catch (error) {
      throw error;
    }
  }

  async getTestABByIdForUser(id: string) {
    try {
      const result = await testABModel.findBy({
        where: {
          ID: id,
        },
      });

      if (!result) {
        throw new CustomError('TestAB não encontrado', StatusCodes.NOT_FOUND);
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getTestABAll() {
    try {
      const results = await testABModel.findMany({});
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getTestABByEmbedForId(id: string) {
    try {
    } catch (error) {
      throw error;
    }
  }

  async createTestABForUser(userId: string, body: CreateTestAB) {
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
          EMBED_IFRAME: `<iframe src="http://ec2-13-219-76-98.compute-1.amazonaws.com/widget/index.html" name='{"campaign": "${result.ID}"}'></iframe>`,
          EMBED_JS: `<div id="interactiplay" data-campaign="${result.ID}"></div> <script src="http://ec2-13-219-76-98.compute-1.amazonaws.com/widget/index.mjs"></script>`,
          ANALYTICS_A: { connect: { ID: analyticsA.ID } },
          ANALYTICS_B: { connect: { ID: analyticsB.ID } },
        },
      });

      return result;
    } catch (error) {
      throw error;
    }
  }
}

export const testABService = new TestABService();
