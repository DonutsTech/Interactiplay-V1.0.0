import { StatusCodes } from "http-status-codes";
import jwt from 'jsonwebtoken';
import type { RegisterUser } from "../../@types/interface/user";
import type { Payload } from "../../@types/payload";
import { CustomError } from "../../error";
import type { User } from "../../generated/prisma/client";

class AuthService {
  createToken(user: User) {
    return jwt.sign(
      { ID: user.ID, ROLE: user.ROLE},
      process.env.JWT_SECRET_KEY as string,
      {
        subject: user.ID,
        expiresIn: '7d'
      }
    )
  }

  checkingToken(token: string) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as Payload;
      return decoded;
    } catch (error) {
      return new CustomError('Invalid token', StatusCodes.UNAUTHORIZED);
    }
  }

  generateRandom4DigitNumber() {
    const randomNumber = Math.floor(Math.random() * 10000);

    return randomNumber.toString().padStart(4, '0');
  }

  async register(data: RegisterUser) {
    try {

    } catch (error) {
      throw error;
    }
  }
}
