import { handlePrismaError } from "../../error";
import { prisma } from "../../prisma";
class PlanModel {
    async create(params) {
        try {
            return await prisma.plan.create(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findMany(params) {
        try {
            return await prisma.plan.findMany(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findBy(find) {
        try {
            return await prisma.plan.findFirst(find);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteBy(where) {
        try {
            return await prisma.plan.delete({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteMany(where) {
        try {
            return await prisma.plan.deleteMany({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async updateBy(params) {
        try {
            return await prisma.plan.update(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async count(where) {
        try {
            return await prisma.plan.count({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
}
export const planModel = new PlanModel();
//# sourceMappingURL=index.js.map