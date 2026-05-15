import { handlePrismaError } from "../../error";
import type { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../prisma";

class VideoModel {
  async create(params: Prisma.VideoCreateArgs) {
    try {
      return await prisma.video.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.VideoFindManyArgs) {
    try {
      return await prisma.video.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy(find: Prisma.VideoFindFirstArgs) {
    try {
      return await prisma.video.findFirst(find);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteBy(where: Prisma.VideoWhereUniqueInput) {
    try {
      return await prisma.video.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.VideoWhereInput) {
    try {
      return await prisma.video.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updateBy(params: Prisma.VideoUpdateArgs) {
    try {
      return await prisma.video.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.VideoWhereInput) {
    try {
      return await prisma.video.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

export const videoModel = new VideoModel();
