import { ErrorMessage } from '@/@types/error';
import { MeResponse } from '@/@types/auth';
import { messageError } from '@/utils/error';
import api from '../config';
import { getToken } from '../token';

export const URL_UPDATE_USER = '/user';
export const URL_UPLOAD_IMAGE = '/user/upload-image';

interface UpdateUserTextData {
  NAME?: string;
  PHONE?: string;
}

/**
 * Atualiza dados textuais do usuário (nome, telefone)
 * Permite atualização parcial
 */
export const updateUserData = async (body: UpdateUserTextData) => {
  try {
    const token = getToken();

    if (!token) {
      throw new Error('Token não encontrado');
    }

    const { data } = await api.patch<MeResponse>(URL_UPDATE_USER, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
};

/**
 * Faz upload do avatar do usuário
 */
export const updateUserAvatar = async (file: File) => {
  try {
    const token = getToken();

    if (!token) {
      throw new Error('Token não encontrado');
    }

    const formData = new FormData();
    formData.append('image', file);

    const { data } = await api.post<MeResponse>(URL_UPLOAD_IMAGE, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
};