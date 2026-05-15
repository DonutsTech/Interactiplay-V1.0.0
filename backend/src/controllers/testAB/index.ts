import type { NextFunction, Request, Response } from 'express';
import { testABService } from '../../services/testAB';
import type { CreateTestAB } from '../../@types/interface/testAB';

class TestABController {
  async getTestABAllForUser(request: Request, response: Response, next: NextFunction) {
    try {
      const { user } = request as Request & { user: { ID: string } };
      const testABs = await testABService.getTestABAllForUser(user.ID);
      return response.status(200).json(testABs);
    } catch (error) {
      next(error);
    }
  }

  async getTestABByIdForUser(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params as { id: string };
      const testAB = await testABService.getTestABByIdForUser(id);
      return response.status(200).json(testAB);
    } catch (error) {
      next(error);
    }
  }

  async getTestABAll(request: Request, response: Response, next: NextFunction) {
    try {
      const testABs = await testABService.getTestABAll();
      return response.status(200).json(testABs);
    } catch (error) {
      next(error);
    }
  }

  async getTestABByEmbedForId(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params as { id: string };
      const testAB = await testABService.getTestABByEmbedForId(id);
      return response.status(200).json(testAB);
    } catch (error) {
      next(error);
    }
  }

  async createTestABForUser(request: Request, response: Response, next: NextFunction) {
    try {
      const { user } = request as Request & { user: { ID: string } };
      const body = request.body as CreateTestAB;
      const testAB = await testABService.createTestABForUser(user.ID, body);
      return response.status(201).json(testAB);
    } catch (error) {
      next(error);
    }
  }

  async deleteTestABForUser(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params as { id: string };
      await testABService.deleteTestABForUser(id);
      return response.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export const testABController = new TestABController();
