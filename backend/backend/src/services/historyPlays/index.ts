import { StatusCodes } from "http-status-codes";
import { CustomError } from "../../error";
import type { Prisma } from "../../generated/prisma/client";
import { historyPlaysModel } from "../../models/historyPlays";
// import { advanceTestClock } from "../../utils/stripe";
import { userService } from "../user";


class HistoryPlaysService {
  async existsById(id: string) {
    if (!(await historyPlaysModel.count({ ID: id }))) {
      throw new CustomError('Histórico não encontrado, por favor verifique o ID', StatusCodes.NOT_FOUND)
    }
  }

  async create(data: Prisma.History_PlaysCreateInput) {
    try {
      const historyPlay = await historyPlaysModel.create({
        data
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

  async testUpdate(id: string) {
    try {
      await this.existsById(id);

      const historyPlay = await historyPlaysModel.updateBy({
        where: { ID: id },
        data: {
          QTD_PLAYS: 70000,
        },
      });

      return historyPlay;
    } catch (error) {
      throw error;
    }
  }

  // async testClock() {
  //   try {
  //     const stripe = advanceTestClock('clock_1TLV5GHs4q3jg2YIfvnEZAAl');

  //     console.log('advanceTestClock ?', stripe);

  //   } catch (error) {
  //     throw error;
  //   }
  // }
}

export const historyPlaysService = new HistoryPlaysService();
