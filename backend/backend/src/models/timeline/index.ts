import { handlePrismaError } from "../../error";
import type { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../prisma";

class TimeLineModel {
  async create(params: Prisma.TimelineCreateArgs) {
    try {
      return await prisma.timeline.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.TimelineFindManyArgs) {
    try {
      return await prisma.timeline.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy(find: Prisma.TimelineFindFirstArgs) {
    try {
      return await prisma.timeline.findFirst(find);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteBy(where: Prisma.TimelineWhereUniqueInput) {
    try {
      return await prisma.timeline.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.TimelineWhereInput) {
    try {
      return await prisma.timeline.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updateBy(params: Prisma.TimelineUpdateArgs) {
    try {
      return await prisma.timeline.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.TimelineWhereInput) {
    try {
      return await prisma.timeline.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

export const timelineModel = new TimeLineModel();
