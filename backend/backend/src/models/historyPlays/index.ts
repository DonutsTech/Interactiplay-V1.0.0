import { handlePrismaError } from "../../error";
import type { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../prisma";

class HistoryPlaysModel {
  async create(params: Prisma.History_PlaysCreateArgs) {
    try {
      return await prisma.history_Plays.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.History_PlaysFindManyArgs) {
    try {
      return await prisma.history_Plays.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy(find: Prisma.History_PlaysFindFirstArgs) {
    try {
      return await prisma.history_Plays.findFirst(find);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteBy(where: Prisma.History_PlaysWhereUniqueInput) {
    try {
      return await prisma.history_Plays.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.History_PlaysWhereInput) {
    try {
      return await prisma.history_Plays.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updateBy(params: Prisma.History_PlaysUpdateArgs) {
    try {
      return await prisma.history_Plays.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.History_PlaysWhereInput) {
    try {
      return await prisma.history_Plays.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}
