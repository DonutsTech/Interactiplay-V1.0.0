import { testABService } from '../../services/testAB';
class TestABController {
    async getTestABAllForUser(request, response, next) {
        try {
            const { user } = request;
            const testABs = await testABService.getTestABAllForUser(user.ID);
            return response.status(200).json(testABs);
        }
        catch (error) {
            next(error);
        }
    }
    async getTestABByIdForUser(request, response, next) {
        try {
            const { id } = request.params;
            const testAB = await testABService.getTestABByIdForUser(id);
            return response.status(200).json(testAB);
        }
        catch (error) {
            next(error);
        }
    }
    async getTestABAll(request, response, next) {
        try {
            const testABs = await testABService.getTestABAll();
            return response.status(200).json(testABs);
        }
        catch (error) {
            next(error);
        }
    }
    async getTestABByEmbedForId(request, response, next) {
        try {
            const { id } = request.params;
            const testAB = await testABService.getTestABByEmbedForId(id);
            return response.status(200).json(testAB);
        }
        catch (error) {
            next(error);
        }
    }
    async createTestABForUser(request, response, next) {
        try {
            const { user } = request;
            const body = request.body;
            const testAB = await testABService.createTestABForUser(user.ID, body);
            return response.status(201).json(testAB);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteTestABForUser(request, response, next) {
        try {
            const { id } = request.params;
            await testABService.deleteTestABForUser(id);
            return response.status(204).send();
        }
        catch (error) {
            next(error);
        }
    }
}
export const testABController = new TestABController();
//# sourceMappingURL=index.js.map