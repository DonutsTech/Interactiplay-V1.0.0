import { ErrorMessage } from '@/@types/error';
import api from '../config';
import { getToken } from '../token';
import { messageError, MESSEGE_VALIDITY } from '@/utils/error';
import { ICreateTestABPayload, ITestAB } from '@/@types/testeAB';

export const TEST_AB_URL = '/user/testAB';



export const getAllTestAB = async (): Promise<ITestAB[] | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      return {
        STATUS: 401,
        MESSAGE: 'Token de autenticacao nao encontrado.',
      } as ErrorMessage;
    }

    const { data } = await api.get<ITestAB[]>(TEST_AB_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!data) {
      throw MESSEGE_VALIDITY;
    }

    return data;
  } catch (error) {
    return messageError(error) as ErrorMessage;
  }
};

export const getTestABById = async (
  testABId: string
): Promise<ITestAB | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      return {
        STATUS: 401,
        MESSAGE: 'Token de autenticacao nao encontrado.',
      } as ErrorMessage;
    }

    const { data } = await api.get<ITestAB>(`${TEST_AB_URL}/${testABId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!data) {
      throw MESSEGE_VALIDITY;
    }

    return data;
  } catch (error) {
    return messageError(error) as ErrorMessage;
  }
};

export const createTestAB = async (
  payload: ICreateTestABPayload
): Promise<ITestAB | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      return {
        STATUS: 401,
        MESSAGE: 'Token de autenticacao nao encontrado.',
      } as ErrorMessage;
    }

    const { data } = await api.post<ITestAB>(TEST_AB_URL, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!data) {
      throw MESSEGE_VALIDITY;
    }

    return data;
  } catch (error) {
    return messageError(error) as ErrorMessage;
  }
};

export const deleteTestAB = async (
  testABId: string
): Promise<null | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      return {
        STATUS: 401,
        MESSAGE: 'Token de autenticacao nao encontrado.',
      } as ErrorMessage;
    }

    await api.delete(`${TEST_AB_URL}/${testABId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return null;
  } catch (error) {
    return messageError(error) as ErrorMessage;
  }
};
