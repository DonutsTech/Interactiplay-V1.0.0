
import { ErrorMessage } from "@/@types/error";
import { getToken } from "../token";
import api from "../config";
import { messageError, MESSEGE_VALIDITY } from "@/utils/error";
import { MeResponse } from "@/@types/auth";


export const URL_ME = '/me';
export const URL_UPDATE_USER = '/user'
export const URL_FRIST_ACESS = '/user/frist-acess';

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

export const postFirstAccess = async (): Promise<{ STATUS: number; MESSAGE: string } | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      return {
        STATUS: 401,
        MESSAGE: 'token de autenticação não encontrado'
      } as ErrorMessage;
    }

    const response = await api({
      method: 'post',
      url: URL_FRIST_ACESS,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status >= 200 && response.status < 300) {
      if (response.data && typeof response.data === 'object') {
        return response.data as { STATUS: number; MESSAGE: string };
      }

      return {
        STATUS: response.status,
        MESSAGE: 'Primeiro acesso atualizado com sucesso.',
      };
    }

    throw MESSEGE_VALIDITY;
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
};

