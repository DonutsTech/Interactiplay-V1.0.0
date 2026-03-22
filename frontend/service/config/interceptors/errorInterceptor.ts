import { ErrorMessage } from "@/@types/error";
import { AxiosError } from "axios";

export const errorInterceptor = async (
  error: AxiosError
): Promise<ErrorMessage> => {
  if (error.message === "Network Error") {
    return {
      STATUS: 500,
      MESSAGE: "Network Error. Please check your connection.",
    };
  }

  const data = error.response?.data as ErrorMessage;

  return {
    STATUS: data?.STATUS || error.response?.status || 500,
    MESSAGE: data?.MESSAGE || "O servidor está temporariamente indisponível. Tente novamente em alguns minutos ou entre em contato com o suporte.",
  };
}
