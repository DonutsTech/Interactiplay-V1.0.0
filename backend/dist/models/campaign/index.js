import { handlePrismaError } from '../../error';
import { prisma } from '../../prisma';
class Campaign {
    async create(params) {
        try {
            return await prisma.campaign.create(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findMany(params) {
        try {
            return (await prisma.campaign.findMany(params));
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findBy(find) {
        try {
            return (await prisma.campaign.findFirst(find));
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteBy(where) {
        try {
            return await prisma.campaign.delete({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteMany(where) {
        try {
            return await prisma.campaign.deleteMany({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async updateBy(params) {
        try {
            return await prisma.campaign.update(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async count(where) {
        try {
            return await prisma.campaign.count({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
}
export const campaignModel = new Campaign();
//# sourceMappingURL=index.js.map