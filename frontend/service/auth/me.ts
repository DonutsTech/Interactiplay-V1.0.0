
import { ErrorMessage } from "@/@types/error";
import { getToken } from "../token";
import api from "../config";
import { messageError, MESSEGE_VALIDITY } from "@/utils/error";
import { MeResponse } from "@/@types/auth";


export const URL_ME = '/me';


export const getMe = async (): Promise<MeResponse | ErrorMessage> => {
  try {
    const token = getToken(); 

    if (!token) {
      return {
        STATUS: 401,
        MESSAGE: 'token de autenticação não encontrado'
      } as ErrorMessage;
    }

    const { data } = await api.get(URL_ME, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!data) {
      throw MESSEGE_VALIDITY;
    }

    return data;
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
};