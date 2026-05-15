import { handlePrismaError } from "../../error";
import { prisma } from "../../prisma";
class HistoryPlaysModel {
    async create(params) {
        try {
            return await prisma.history_Plays.create(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findMany(params) {
        try {
            return await prisma.history_Plays.findMany(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findBy(find) {
        try {
            return await prisma.history_Plays.findFirst(find);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteBy(where) {
        try {
            return await prisma.history_Plays.delete({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteMany(where) {
        try {
            return await prisma.history_Plays.deleteMany({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async updateBy(params) {
        try {
            return await prisma.history_Plays.update(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async count(where) {
        try {
            return await prisma.history_Plays.count({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
}
export const historyPlaysModel = new HistoryPlaysModel();
//# sourceMappingURL=index.js.map