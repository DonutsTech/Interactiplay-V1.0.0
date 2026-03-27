import type { NextFunction, Request, Response } from "express";
import type { RegisterUser } from "../../@types/interface/user";

class AuthController {
  async register(request: Request, response: Response, next: NextFunction) {
    try {
      const body: RegisterUser = request.body;
    } catch (error) {
      next(error);
    }
  }
}
