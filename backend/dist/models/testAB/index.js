import { handlePrismaError } from "../../error";
import { prisma } from "../../prisma";
class TestABModel {
    async create(params) {
        try {
            return await prisma.test_AB.create(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findMany(params) {
        try {
            return await prisma.test_AB.findMany(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async findBy(find) {
        try {
            return await prisma.test_AB.findFirst(find);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteBy(where) {
        try {
            return await prisma.test_AB.delete({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async deleteMany(where) {
        try {
            return await prisma.test_AB.deleteMany({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async updateBy(params) {
        try {
            return await prisma.test_AB.update(params);
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
    async count(where) {
        try {
            return await prisma.test_AB.count({
                where,
            });
        }
        catch (error) {
            handlePrismaError(error);
        }
    }
}
export const testABModel = new TestABModel();
//# sourceMappingURL=index.js.map