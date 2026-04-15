import { handlePrismaError } from '../../error';
import type { Campaign_Video } from '../../generated/prisma/browser';
import type { Prisma } from '../../generated/prisma/client';
import { prisma } from '../../prisma';

class CampaignVideoModel {
  async create(params: Prisma.Campaign_VideoCreateArgs): Promise<Campaign_Video> {
    try {
      return await prisma.campaign_Video.create(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findMany(params: Prisma.Campaign_VideoFindManyArgs) {
    try {
      return await prisma.campaign_Video.findMany(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findBy(find: Prisma.Campaign_VideoFindFirstArgs) {
    try {
      return await prisma.campaign_Video.findFirst(find);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteBy(where: Prisma.Campaign_VideoWhereUniqueInput) {
    try {
      return await prisma.campaign_Video.delete({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async deleteMany(where: Prisma.Campaign_VideoWhereInput) {
    try {
      return await prisma.campaign_Video.deleteMany({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updateBy(params: Prisma.Campaign_VideoUpdateArgs) {
    try {
      return await prisma.campaign_Video.update(params);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async count(where: Prisma.Campaign_VideoWhereInput) {
    try {
      return await prisma.campaign_Video.count({
        where,
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}

export const campaignVideoModel = new CampaignVideoModel();
