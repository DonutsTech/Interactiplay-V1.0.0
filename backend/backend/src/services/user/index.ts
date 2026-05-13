import * as bycrpt from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';
import type { MulterS3File } from '../../@types/file';
import { CustomError } from '../../error';
import type { Prisma } from '../../generated/prisma/client';
import type { UserGetPayload } from '../../generated/prisma/models';
import { userModel } from '../../models/user';
import { photoService } from '../photo';

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
        !(user.AVATAR === 'https://interacti-uploads.s3.us-east-1.amazonaws.com/images/padrao.png')
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

      if (user.FIRST_ACESS) {
        throw new CustomError('Primeiro login já realizado', StatusCodes.BAD_REQUEST);
      }

      const updatedUser = await this.update(id, { FIRST_ACESS: true });

      return updatedUser;
    } catch (error) {
      throw new CustomError('Erro ao realizar o primeiro login', StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}

export const userService = new UserService();
