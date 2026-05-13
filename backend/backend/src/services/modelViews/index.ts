import { StatusCodes } from 'http-status-codes';
import type { ModelViewPrisma } from '../../@types/interface/modelVIew';
import type { ClientPublic } from '../../@types/interface/socket';
import { CustomError } from '../../error';
import { modelViewsModel } from '../../models/modelView';
import { modelPlayService } from '../modelPlay';

class ModelViewsService {
  async createModelViewSocketView(data: ClientPublic): Promise<ClientPublic> {
    try {
      const modelView = await modelViewsModel.create({
        data: {
          BROWSER: data.BROWSER,
          DEVICE: data.DEVICE,
          OS: data.OS,
          COUNTRY: data.COUNTRY,
          CITY: data.CITY,
          REGION: data.REGION,
        },
      });

      const modelPlay = await modelPlayService.createModelPlaySocketPlay({
        ...data,
        BROWSER: data.BROWSER,
        DEVICE: data.DEVICE,
        OS: data.OS,
        COUNTRY: data.COUNTRY,
        CITY: data.CITY,
        REGION: data.REGION,
        ID_MODEL_VIEW: modelView.ID,
      });

      return modelPlay;
    } catch (error) {
      throw error;
    }
  }

  async getModelViewByIdSocket(data: ClientPublic): Promise<ClientPublic> {
    try {
      if (!data.ID_MODEL_VIEW) {
        throw new CustomError(
          'ID_MODEL_VIEW é obrigatório para buscar o modelo de view',
          StatusCodes.BAD_REQUEST,
        );
      }

      if (!data.ID_ANALYTICS) {
        throw new CustomError(
          'ID_ANALYTICS é obrigatório para buscar o modelo de view',
          StatusCodes.BAD_REQUEST,
        );
      }

      const modelView = await modelViewsModel.findBy<ModelViewPrisma>({
        where: { ID: data.ID_MODEL_VIEW },
        include: {
          MODEL_PLAYS: {
            where: { ANALYTICS_ID: data.ID_ANALYTICS },
          },
        },
      });

      if (!modelView) {
        const createModelView = await this.createModelViewSocketView(data);

        return createModelView;
      }

      const view = {
        ID_MODEL_VIEW: modelView.ID,
        BROWSER: modelView.BROWSER,
        DEVICE: modelView.DEVICE,
        OS: modelView.OS,
        COUNTRY: modelView.COUNTRY,
        CITY: modelView.CITY,
        REGION: modelView.REGION,
      };

      if (modelView.MODEL_PLAYS.length === 0) {
        const createModelPlay = await modelPlayService.createModelPlaySocketPlay({
          ...data,
          ...view,
        });

        return createModelPlay;
      }

      const modelPlay = await modelPlayService.getModelPlayByIdSocket({
        ...data,
        ...view,
      });

      return modelPlay;
    } catch (error) {
      throw error;
    }
  }
}

export const modelViewsService = new ModelViewsService();
