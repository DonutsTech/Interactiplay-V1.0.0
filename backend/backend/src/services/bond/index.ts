import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../../error';
import { bondModel } from '../../models/bond';
import { campaignService } from '../campaign';

class BondService {
  async existsById(id: string) {
    if (!(await bondModel.count({ ID: id }))) {
      throw new CustomError('Bond não encontrado, por favor verifique o id', StatusCodes.NOT_FOUND);
    }
  }

  async deleteBondForCampaign(campaignId: string) {
    try {
      if (
        await bondModel.count({
          BOND_VIDEOS: { every: { CAMPAIGN_VIDEOS: { CAMPAIGN_ID: campaignId } } },
        })
      ) {
        await bondModel.deleteMany({
          BOND_VIDEOS: { every: { CAMPAIGN_VIDEOS: { CAMPAIGN_ID: campaignId } } },
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async updateBondForBondClick(id: string, testAB: boolean) {
    try {
      await this.existsById(id);

      const update = testAB
        ? { BUTTON_CLICK_TEST_AB: { increment: 1 } }
        : { BUTTON_CLICK_CAMPAING: { increment: 1 } };

      await bondModel.updateBy({
        where: { ID: id },
        data: update,
      });
    } catch (error) {
      throw error;
    }
  }

  async updateBondForContinutyClick(id: string, testAB: boolean) {
    try {
      await this.existsById(id);

      const update = testAB
        ? { CONTINUITY_TEST_AB: { increment: 1 } }
        : { CONTINUITY_CAMPAING: { increment: 1 } };

      await bondModel.updateBy({
        where: { ID: id },
        data: update,
      });
    } catch (error) {
      throw error;
    }
  }

  async updateBondForClearTestAB(id: string) {
    try {
      await this.existsById(id);

      await bondModel.updateBy({
        where: { ID: id },
        data: {
          CONTINUITY_TEST_AB: 0,
          BUTTON_CLICK_TEST_AB: 0,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

export const bondService = new BondService();
