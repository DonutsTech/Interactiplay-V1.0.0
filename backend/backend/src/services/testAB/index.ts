import { testABModel } from '../../models/testAB';

class TestABService {
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
}

export const testABService = new TestABService();
