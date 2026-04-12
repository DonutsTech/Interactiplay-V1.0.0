import { StatusCodes } from "http-status-codes";
import { CustomError } from "../../error";
import type { Prisma } from "../../generated/prisma/client";
import { historyPlaysModel } from "../../models/historyPlays";


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
}

export const historyPlaysService = new HistoryPlaysService();
