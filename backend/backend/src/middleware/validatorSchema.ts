import type { NextFunction, Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import type { ObjectSchema } from 'joi';
import { CustomError } from '../error';
import schemas from '../schemas';

const supportedMethods = ['post', 'put', 'patch', 'delete'];

const validationOptions = {
  abortEarly: false,
  allowUnknown: false,
  stripUnknown: false,
};

export const schemaValidator = (path: string): RequestHandler => {
  const schema: ObjectSchema<any> | undefined = schemas[path];

  if (!schema) {
    throw new CustomError(`Schema not found for path: ${path}`);
  }

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const method = req.method.toLowerCase();

      if (!supportedMethods.includes(method)) {
        return next();
      }

      const { error, value } = await schema.validateAsync(req.body, {
        ...validationOptions,
        allowUnknown: true,
      });

      if (error) {
        const messages = error.details.map((err) =>
          err.message.replace(/"/g, '')
        );

        throw new CustomError(messages.join(', '), StatusCodes.BAD_REQUEST);
      }

      req.body = value;
      next();

    } catch (error) {
      next(error);
    }
  };
};

export default schemaValidator;
