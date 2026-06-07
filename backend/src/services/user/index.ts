import * as bycrpt from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';
import type { MulterS3File } from '../../@types/file';
import { UserUpdateEmailByAdmin } from '../../@types/interface/user';
import { CustomError } from '../../error';
import type { Prisma } from '../../generated/prisma/client';
import type { UserGetPayload } from '../../generated/prisma/models';
import { userModel } from '../../models/user';
import { campaignService } from '../campaign';
import { historyPlaysService } from '../historyPlays';
import { photoService } from '../photo';
import { videoService } from '../video';

class UserService {
  async existsByEmail(email: string) {
    if (!(await userModel.count({ EMAIL: email }))) {
      throw new CustomError(
        'Usuario não encontrado, por favor verifique o seu  email',
        StatusCodes.NOT_FOUND,
      );
    }
  }

  async existsById(id: string) {
    if (!(await userModel.count({ ID: id }))) {
      throw new CustomError(
        'Usuario não encontrado, por favor verifique o seu  email',
        StatusCodes.NOT_FOUND,
      );
    }
  }

  async create(data: Prisma.UserCreateInput) {
    try {
      data.HASHED_PASSWORD = await bycrpt.hash(data.HASHED_PASSWORD, await bycrpt.genSalt());

      const user = await userModel.create({
        data,
        include: { PLAN: true, HISTORY_PLAYS: true },
      });

      console.log('userService.create', user);

      return user;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, data: Prisma.UserUpdateInput) {
    try {
      await this.existsById(id);

      if (data.HASHED_PASSWORD) {
        data.HASHED_PASSWORD = await bycrpt.hash(
          data.HASHED_PASSWORD as string,
          await bycrpt.genSalt(),
        );
      }

      if (data.HASHED_TOKEN) {
        data.HASHED_TOKEN = await bycrpt.hash(data.HASHED_TOKEN as string, await bycrpt.genSalt());
      }

      const user = await userModel.updateBy({
        where: { ID: id },
        data,
        include: { PLAN: true, HISTORY_PLAYS: true },
      });

      return user;
    } catch (error) {
      throw new CustomError('Erro ao atualizar o usuário', StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: string) {
    try {
      await this.existsById(id);

      await userModel.deleteBy({ ID: id });
    } catch (error) {
      throw new CustomError('Erro ao deletar o usuário', StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async showId(id: string) {
    try {
      const user = await userModel.findBy({
        where: { ID: id },
        include: {
          PLAN: true,
          HISTORY_PLAYS: { where: { STATUS: { in: ['teste', 'ativo'] } } },
        },
      });

      if (!user) {
        throw new CustomError('Usuário não encontrado', StatusCodes.NOT_FOUND);
      }

      return user;
    } catch (error) {
      throw new CustomError('Erro ao buscar o usuário', StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async showStripeCustomerId(
    customerId: string,
  ): Promise<UserGetPayload<{ include: { PLAN: true; HISTORY_PLAYS: true } }> | null> {
    try {
      return (await userModel.findBy({
        where: { STRIPE_CUSTOMER_ID: customerId },
        include: { PLAN: true, HISTORY_PLAYS: true },
      })) as UserGetPayload<{ include: { PLAN: true; HISTORY_PLAYS: true } }> | null;
    } catch (error) {
      return null;
    }
  }

  async showEmail(email: string) {
    try {
      await this.existsByEmail(email);

      const user = await userModel.findBy({
        where: { EMAIL: email },
        include: { PLAN: true, HISTORY_PLAYS: true },
      });

      return user;
    } catch (error) {
      throw new CustomError('Erro ao buscar o usuário', StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async uploadImage(id: string, file: MulterS3File | undefined) {
    try {
      if (!file) {
        throw new CustomError('Nenhum arquivo enviado', StatusCodes.BAD_REQUEST);
      }

      const user = await this.showId(id);

      if (
        user &&
        !(
          user.AVATAR ===
          'https://interacti-uploads.s3.us-east-1.amazonaws.com/uploads/images/avatar.png'
        )
      ) {
        await photoService.deleteImageFile(user.AVATAR);
      }

      const updatedUser = await this.update(id, { AVATAR: file.location });

      return updatedUser;
    } catch (error) {
      throw new CustomError(
        'Erro ao atualizar a imagem do usuário',
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findByUserForPlan(id: string) {
    try {
      const user = await userModel.findBy({
        where: { ID: id },
        include: { PLAN: true },
      });

      if (!user) {
        throw new CustomError('Usuário não encontrado', StatusCodes.NOT_FOUND);
      }

      return user;
    } catch (error) {
      throw new CustomError('Erro ao buscar o usuário', StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async fristLogin(id: string) {
    try {
      const user = await this.showId(id);

      if (!user) {
        throw new CustomError('Usuário não encontrado', StatusCodes.NOT_FOUND);
      }

      if (!user.FIRST_ACESS) {
        throw new CustomError('Primeiro login já realizado', StatusCodes.BAD_REQUEST);
      }

      const updatedUser = await this.update(id, { FIRST_ACESS: false });

      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  async updateUserEmailByAdmin(data: UserUpdateEmailByAdmin) {
    try {
      const { EMAILOLD, EMAILNEW } = data;

      const user = await this.showEmail(EMAILOLD);

      if (!user) {
        throw new CustomError('Usuário não encontrado', StatusCodes.NOT_FOUND);
      }

      const existNewEmail = await userModel.count({ EMAIL: EMAILNEW });

      if (existNewEmail) {
        throw new CustomError('O email novo já está em uso', StatusCodes.BAD_REQUEST);
      }

      const updatedUser = await this.update(user.ID, { EMAIL: EMAILNEW });

      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  async deleteInfoUsers() {
    try {
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

      const users = await userModel.findMany({
        where: {
          STRIPE_SUBSCRIPTION_STATUS: {
            notIn: ['ativo', 'trivial'],
          },
          UPDATED_AT: {
            lte: sixMonthsAgo,
          },
        },
      });

      for (const user of users) {
        await campaignService.deleteCampaignForUserWithFlowAdmin(user.ID);
        await historyPlaysService.deleteByUserId(user.ID);
        await videoService.deleteByUserId(user.ID);
      }

      return { MESSAGE: 'Informações dos usuários inativos deletadas com sucesso' };
    } catch (error) {
      throw error;
    }
  }
}

export const userService = new UserService();
