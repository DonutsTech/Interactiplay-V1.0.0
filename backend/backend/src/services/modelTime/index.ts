import type { ClientPublic } from '../../@types/interface/socket';
import { modelTimeModel } from '../../models/modelTime';

class ModelTimeService {
  async deleteModelTimeForCampaign(campaignId: string) {
    try {
      if (await modelTimeModel.count({ MODEL_PLAYS: { ANALYTICS: { CAMPAIGN_ID: campaignId } } })) {
        await modelTimeModel.deleteMany({
          MODEL_PLAYS: { ANALYTICS: { CAMPAIGN_ID: campaignId } },
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async incrementTimeVideo(data: ClientPublic) {
    try {
      if (!data.ID_MODEL_PLAY) {
        throw new Error('ID_MODEL_PLAY is required to increment time video');
      }

      const id = data.ID_MODEL_TIME;
      let modelTime;

      if (!id) {
        modelTime = await modelTimeModel.create({
          data: {
            MODEL_PLAYS: {
              connect: {
                ID: data.ID_MODEL_PLAY,
              },
            },
          },
        });
      } else {
        modelTime = await modelTimeModel.findBy({ where: { ID: id } });

        if (!modelTime) {
          throw new Error('ModelTime not found for the provided ID_MODEL_TIME');
        }
      }

      await modelTimeModel.updateBy({
        where: { ID: modelTime.ID },
        data: {
          TIMESCREEN: { increment: 1 },
        },
      });

      console.log(`ModelTime with ID ${modelTime.ID} incremented TIMESCREEN by 1`);

      return { ...data, ID_MODEL_TIME: modelTime.ID };
    } catch (error) {
      throw error;
    }
  }
}

export const modelTimeService = new ModelTimeService();
