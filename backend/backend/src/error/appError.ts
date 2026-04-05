import { StatusCodes } from "http-status-codes";

export class CustomError<T> extends Error {
  public readonly statusCode: number;
  public readonly data: T | undefined;

  constructor(message: string, statusCode = StatusCodes.INTERNAL_SERVER_ERROR, data: T | undefined = undefined) {
    super(message);
    this.statusCode = statusCode;
    this.data = data;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}
