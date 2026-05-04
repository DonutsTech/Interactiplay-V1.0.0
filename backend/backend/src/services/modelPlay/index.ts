import { StatusCodes } from 'http-status-codes';
import type { ClientPublic } from '../../@types/interface/socket';
import { CustomError } from '../../error';
import { modelPlayModel } from '../../models/modelPlay';
import { prisma } from '../../prisma';
import { transformModelPlayToClient } from '../../utils/format/modelPlay';
import { analyticsService } from '../analytics';
import { historyPlaysService } from '../historyPlays';

class ModelPlayService {
  async deleteModelPlayForCampaign(campaignId: string) {
    try {
      if (await modelPlayModel.count({ ANALYTICS: { CAMPAIGN_ID: campaignId } })) {
        await modelPlayModel.deleteMany({
          ANALYTICS: { CAMPAIGN_ID: campaignId },
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async getModelPlayByIdSocket(data: ClientPublic): Promise<ClientPublic> {
    try {
      if (!data.ID_MODEL_PLAY) {
        throw new CustomError(
          'ID_MODEL_PLAY é obrigatório para buscar o modelo de play',
          StatusCodes.BAD_REQUEST,
        );
      }

      const modelPlay = await modelPlayModel.findBy({
        where: { ID: data.ID_MODEL_PLAY },
      });

      console.log('Modelo de play encontrado para o cliente:', modelPlay);
      console.log('Dados do cliente para buscar o modelo de play:', data);

      if (!modelPlay || modelPlay.ANALYTICS_ID !== data.ID_ANALYTICS) {
        const createModelPlay = await this.createModelPlaySocketPlay(data);
        console.log('Modelo de play criado para o cliente:', createModelPlay);

        return createModelPlay;
      }

      console.log('Modelo de play encontrado para o cliente:', modelPlay);

      return transformModelPlayToClient(modelPlay, data.ID_USER || '');
    } catch (error) {
      throw error;
    }
  }

  async createModelPlaySocketPlay(data: ClientPublic) {
    try {
      await analyticsService.existById(data.ID_ANALYTICS || '');

      const modelPlay = await modelPlayModel.create({
        data: {
          BROWSER: data.BROWSER,
          DEVICE: data.DEVICE,
          OS: data.OS,
          COUNTRY: data.COUNTRY,
          CITY: data.CITY,
          REGION: data.REGION,
          PLAY_UNIQUE: 0,
          PLAY: 0,
          VIEW: 0,
          ANALYTICS: { connect: { ID: data.ID_ANALYTICS || '' } },
        },
      });

      return transformModelPlayToClient(modelPlay, data.ID_USER || '');
    } catch (error) {
      throw error;
    }
  }

  async incrementPlayModelPlay(data: ClientPublic) {
    try {
      if (!data.ID_MODEL_PLAY) {
        throw new CustomError(
          'ID_MODEL_PLAY é obrigatório para atualizar o modelo de play',
          StatusCodes.BAD_REQUEST,
        );
      }

      if (!data.ID_USER) {
        throw new CustomError(
          'ID_USER é obrigatório para atualizar o modelo de play',
          StatusCodes.BAD_REQUEST,
        );
      }

      if (!data.ID_ANALYTICS) {
        throw new CustomError(
          'ID_ANALYTICS é obrigatório para atualizar o modelo de play',
          StatusCodes.BAD_REQUEST,
        );
      }

      const modelPlay = await modelPlayModel.findBy({
        where: { ID: data.ID_MODEL_PLAY },
      });

      if (!modelPlay) {
        throw new CustomError(
          'Modelo de play não encontrado, por favor verifique o id',
          StatusCodes.NOT_FOUND,
        );
      }

      await historyPlaysService.updateHistoryPlayForUser(data.ID_USER);

      await analyticsService.incrementPlayForAnalytics(data.ID_ANALYTICS, modelPlay.PLAY === 0);

      await modelPlayModel.updateBy({
        where: { ID: modelPlay.ID },
        data: {
          PLAY_UNIQUE: 1,
          PLAY: { increment: 1 },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async incrementPlayModelPlayBlock(data: ClientPublic) {
    try {
      if (!data.ID_MODEL_PLAY) {
        throw new CustomError(
          'ID_MODEL_PLAY é obrigatório para atualizar o modelo de play',
          StatusCodes.BAD_REQUEST,
        );
      }

      await analyticsService.incrementPlayBlockForAnalytics(data.ID_ANALYTICS || '');

      await modelPlayModel.updateBy({
        where: { ID: data.ID_MODEL_PLAY },
        data: { PLAY_BLOCK: { increment: 1 } },
      });
    } catch (error) {
      throw error;
    }
  }

  async incrementViewModelPlay(data: ClientPublic) {
    try {
      if (!data.ID_MODEL_PLAY) {
        throw new CustomError(
          'ID_MODEL_PLAY é obrigatório para atualizar o modelo de play',
          StatusCodes.BAD_REQUEST,
        );
      }

      if (!data.ID_ANALYTICS) {
        throw new CustomError(
          'ID_ANALYTICS é obrigatório para atualizar o modelo de play',
          StatusCodes.BAD_REQUEST,
        );
      }

      await analyticsService.incrementViewAnalytics(data.ID_ANALYTICS);

      await modelPlayModel.updateBy({
        where: { ID: data.ID_MODEL_PLAY },
        data: { VIEW: { increment: 1 } },
      });
    } catch (error) {
      throw error;
    }
  }

  async agrupmentoModelPlayByAnalytics(analyticsId: string) {
    try {
      const test = await modelPlayModel.findMany({
        where: { ANALYTICS_ID: analyticsId },
      });

      const result = await prisma.model_Play.groupBy({
        where: {
          ANALYTICS_ID: analyticsId,
        },
        by: ['DEVICE'],
        _sum: {
          PLAY: true,
        },
      });

      return result;
    } catch (error) {
      throw error;
    }
  }

  async modelPlayEmbed(data: ClientPublic) {
    let modelPlay = undefined;

    if (data.ID_MODEL_PLAY === "" || data.ID_MODEL_PLAY === undefined) {
      modelPlay = await this.createModelPlaySocketPlay(data);
    } else {
      modelPlay = await this.getModelPlayByIdSocket(data);
    }

    if (!modelPlay) {
      throw new CustomError(
        'Modelo de play não encontrado para o cliente',
        StatusCodes.NOT_FOUND,
      );
    }

    return modelPlay;
  }

}

export const modelPlayService = new ModelPlayService();
