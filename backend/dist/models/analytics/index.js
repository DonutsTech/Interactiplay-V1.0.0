import { handlePrismaError } from "../../error";
import { prisma } from "../../prisma";
class AnalyticsModel {
    async create(params) {
        try {
            return await prisma.analytics.create(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findMany(params) {
        try {
            return await prisma.analytics.findMany(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findBy(find) {
        try {
            return await prisma.analytics.findFirst(find);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteBy(where) {
        try {
            return await prisma.analytics.delete({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteMany(where) {
        try {
            return await prisma.analytics.deleteMany({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async updateBy(params) {
        try {
            return await prisma.analytics.update(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async count(where) {
        try {
            return await prisma.analytics.count({
                where: where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
}
export const analyticsModel = new AnalyticsModel();
//# sourceMappingURL=index.js.map