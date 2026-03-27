import { StatusCodes } from "http-status-codes";
import Stripe from "stripe";
import { CustomError } from "./appError";

export function handleStripeError(error: any): never {
  if (error instanceof Stripe.errors.StripeError) {
    switch (error.type) {
      case 'StripeCardError':
        throw new CustomError('Erro no cartão de crédito: ' + error.message, error.statusCode || StatusCodes.BAD_REQUEST);
      case 'StripeInvalidRequestError':
        throw new CustomError('Requisição inválida para a API Stripe: ' + error.message, error.statusCode || StatusCodes.BAD_REQUEST);
      case 'StripeAPIError':
        throw new CustomError('Erro na API Stripe: ' + error.message, error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR);
      case 'StripeConnectionError':
        throw new CustomError('Erro de conexão com a Stripe: ' + error.message, error.statusCode || StatusCodes.SERVICE_UNAVAILABLE);
      case 'StripeAuthenticationError':
        throw new CustomError('Erro de autenticação com a Stripe: ' + error.message, error.statusCode || StatusCodes.UNAUTHORIZED);
      default:
        throw new CustomError('Erro desconhecido na Stripe: ' + error.message, error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  throw error;
}
