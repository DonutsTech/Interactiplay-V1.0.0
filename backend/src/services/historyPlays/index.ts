import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../../error';
import type { Prisma } from '../../generated/prisma/client';
import { historyPlaysModel } from '../../models/historyPlays';
// import { advanceTestClock } from "../../utils/stripe";
import { planService } from '../plan';
import { userService } from '../user';
import { mailService } from '../mail';
import { Notice } from '../../@types/interface/mail';

class HistoryPlaysService {
  async existsById(id: string) {
    if (!(await historyPlaysModel.count({ ID: id }))) {
      throw new CustomError(
        'Histórico não encontrado, por favor verifique o ID',
        StatusCodes.NOT_FOUND,
      );
    }
  }

  async create(data: Prisma.History_PlaysCreateInput) {
    try {
      const historyPlay = await historyPlaysModel.create({
        data,
      });

      return historyPlay;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, data: Prisma.History_PlaysUpdateInput) {
    try {
      await this.existsById(id);

      const historyPlay = await historyPlaysModel.updateBy({
        where: { ID: id },
        data,
      });
      return historyPlay;
    } catch (error) {
      throw error;
    }
  }

  async getHistoryPlaysByUserId(userId: string) {
    try {
      await userService.existsById(userId);

      const historyPlays = await historyPlaysModel.findMany({
        where: {
          USER_ID: userId,
        },
        orderBy: { STATUS: 'asc' },
      });
      return historyPlays;
    } catch (error) {
      throw error;
    }
  }

  async historyPlayExistsByUserId(userId: string) {
    try {
      await userService.existsById(userId);

      const plan = await planService.getPlanByUserId(userId);

      const historyPlay = await historyPlaysModel.findBy({
        where: {
          USER_ID: userId,
          STATUS: { in: ['ativo', 'teste'] },
        },
      });

      if (!historyPlay) {
        throw new CustomError(
          'Histórico de plays não encontrado para este usuário, por favor verifique o ID',
          StatusCodes.NOT_FOUND,
        );
      }

      return (plan?.PLAYS || 0) >= historyPlay.QTD_PLAYS + 1;
    } catch (error) {
      throw error;
    }
  }

  async updateHistoryPlayForUser(userId: string) {
    try {
      await userService.existsById(userId);

      const historyPlay = await historyPlaysModel.findBy({
        where: {
          USER_ID: userId,
          STATUS: { in: ['ativo', 'teste'] },
        },
      });

      if (!historyPlay) {
        throw new CustomError(
          'Histórico de plays não encontrado para este usuário, por favor verifique o ID',
          StatusCodes.NOT_FOUND,
        );
      }

      const updatedHistoryPlay = await historyPlaysModel.updateBy({
        where: { ID: historyPlay.ID },
        data: {
          QTD_PLAYS: { increment: 1 },
        },
      });

      const user = await userService.showId(userId);

      const plan = await planService.getPlanByUserId(userId);

      const planTotalPlays = plan?.PLAYS || 0;
      const plays75Percent = Math.ceil(planTotalPlays * 0.75);
      const value = updatedHistoryPlay.QTD_PLAYS - planTotalPlays;

      const noticePlan: Notice = {
        EMAIL: user.EMAIL,
        NAME: user.NAME,
      };

      if (historyPlay.STATUS === 'teste' && updatedHistoryPlay.QTD_PLAYS === 1000 && user) {
        await mailService.sendNoticePlanTest(noticePlan);
      }

      if (historyPlay.STATUS === 'ativo' && plays75Percent === updatedHistoryPlay.QTD_PLAYS && user) {
        await mailService.sendNoticePlan75(noticePlan);
      }

      if (historyPlay.STATUS === 'ativo' && updatedHistoryPlay.QTD_PLAYS === planTotalPlays && user) {
        await mailService.sendNoticePlan100(noticePlan);
      }

      if (historyPlay.STATUS === 'ativo' && value % 1000 === 0 && user) {
        await mailService.sendNoticePlanTest(noticePlan);
      }

      return updatedHistoryPlay;
    } catch (error) {
      throw error;
    }
  }

  async deleteByUserId(userId: string) {
    try {
      await userService.existsById(userId);

      const historyPlays = await historyPlaysModel.deleteMany({
        USER_ID: userId,
      });

      return historyPlays;
    } catch (error) {
      throw error;
    }
  }
}

export const historyPlaysService = new HistoryPlaysService();
