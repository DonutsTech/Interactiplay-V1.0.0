import { handlePrismaError } from "../../error";
import type { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../prisma";

class UserModel {
  async create(params: Prisma.UserCreateArgs) {
    try {
      return await prisma.user.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.UserFindManyArgs) {
    try {
      return await prisma.user.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy(find: Prisma.UserFindFirstArgs) {
    try {
      return await prisma.user.findFirst(find);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteBy(where: Prisma.UserWhereUniqueInput) {
    try {
      return await prisma.user.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.UserWhereInput) {
    try {
      return await prisma.user.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updateBy(params: Prisma.UserUpdateArgs) {
    try {
      return await prisma.user.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.UserWhereInput) {
    try {
      return await prisma.user.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

export const userModel = new UserModel();
