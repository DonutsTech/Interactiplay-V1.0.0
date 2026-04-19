
import { ErrorMessage } from "@/@types/error";
import { getToken } from "../token";
import api from "../config";
import { messageError, MESSEGE_VALIDITY } from "@/utils/error";
import { MeResponse } from "@/@types/auth";


export const URL_ME = '/me';
export const URL_UPDATE_USER = '/user'

interface UpdateUserData {
  NAME?: string;
  PHONE?: string;
}


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

export const updateUser = async (body: UpdateUserData): Promise<MeResponse | ErrorMessage> => {

  try {
    const token = getToken();

    if (!token) {
      return {
        STATUS: 401,
        MESSAGE: 'token de autenticação não encontrado'
      } as ErrorMessage;
    };

    const { data } = await api.patch(URL_UPDATE_USER, body, {
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

