import type { NextFunction, Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import type { ObjectSchema } from 'joi';
import { CustomError } from '../error';
import schemas from '../schemas';
import { customJoiAsync } from '../schemas/customJoi';

const supportedMethods = ['post', 'put', 'patch', 'delete'];

const validationOptions = {
  abortEarly: true,
  allowUnknown: false,
  stripUnknown: false,
};

export const schemaValidator = (path: string): RequestHandler => {
  const schema: ObjectSchema<any> | undefined = schemas[path];

  if (!schema) {
    // throw new CustomError(`Schema not found for path: ${path}`);
    console.warn(`Schema not found for path: ${path}. Skipping validation.`);
  }

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const method = req.method.toLowerCase();

      if (!supportedMethods.includes(method)) {
        return next();
      }

      if (!schema) {
        return next();
      }

      const { error, value } = schema.validate(req.body, validationOptions);

      if (error) {
        const messages = error.details.map((err: any) => err.message.replace(/"/g, ''));

        throw new CustomError(messages.join(', '), StatusCodes.BAD_REQUEST);
      }

      const { errors } = await customJoiAsync(value);

      if (errors) {
        throw new CustomError(errors, StatusCodes.BAD_REQUEST);
      }

      req.body = value;

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default schemaValidator;
