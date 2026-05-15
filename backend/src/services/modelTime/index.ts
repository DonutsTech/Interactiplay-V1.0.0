import type { ClientPublic } from '../../@types/interface/socket';
import { modelTimeModel } from '../../models/modelTime';
import { prisma } from '../../prisma';

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

  async incrementTimeVideo(data: ClientPublic, number: number) {
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
          TIMESCREEN: number,
        },
      });

      console.log(`ModelTime with ID ${modelTime.ID} incremented TIMESCREEN by ${number}`);

      return { ...data, ID_MODEL_TIME: modelTime.ID };
    } catch (error) {
      throw error;
    }
  }

  async modelTimeAgrupByTime(analyticsId: string) {
    try {
      const value = await prisma.model_Play.findMany({
        where: {
          ANALYTICS_ID: analyticsId,
        },
        include: {
          MODEL_TIME: true,
        },
      });

      const objectAgrupDate: { [key: string]: number } = {};
      const objectAgrup: { [key: string]: number } = {};
      let totalTimescreen: number = 0;

      for (const modelPlay of value) {
        for (const modelTime of modelPlay.MODEL_TIME) {
          totalTimescreen += modelTime.TIMESCREEN;
          const objectKey = `${modelTime.TIMESCREEN}`;
          if (objectAgrup[objectKey]) {
            objectAgrup[objectKey] += 1;
          } else {
            objectAgrup[objectKey] = 1;
          }

          if (modelTime.CREATED_AT) {
            const dateKey = new Date(modelTime.CREATED_AT).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            });

            if (objectAgrupDate[dateKey]) {
              objectAgrupDate[dateKey] += 1;
            } else {
              objectAgrupDate[dateKey] = 1;
            }
          }
        }
      }

      return { TIME: objectAgrup, TOTAL_TIMESCREEN: totalTimescreen, AGRUP_DATE: objectAgrupDate };
    } catch (error) {
      throw error;
    }
  }
}

export const modelTimeService = new ModelTimeService();
