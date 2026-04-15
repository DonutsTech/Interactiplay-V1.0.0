import { ErrorMessage } from "@/@types/error";

export const MESSEGE_VALIDITY: ErrorMessage = {
  STATUS: 500,
  MESSAGE: "Resposta da API inválida. Tente novamente mais tarde ou entre em contato com o suporte.",
};


export const messageError = (error: ErrorMessage | unknown): ErrorMessage => {
  if (    typeof error === "object" &&
    error !== null &&
    "STATUS" in error &&
    "MESSAGE" in error &&
    typeof (error as ErrorMessage).STATUS === "number" &&
    typeof (error as ErrorMessage).MESSAGE === "string") {
    return error as ErrorMessage;
  } else {
    return {
      STATUS: 500,
      MESSAGE: "O servidor está temporariamente indisponível. Tente novamente em alguns minutos ou entre em contato com o suporte.",
    };
  }
};

