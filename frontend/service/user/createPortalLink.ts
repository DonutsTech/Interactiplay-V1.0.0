import { ErrorMessage } from '@/@types/error';
import { messageError } from '@/utils/error';
import api from '../config';
import { getToken } from '../token';

export const URL_CREATE_PORTAL = '/create-portal';

interface PortalLinkResponse {
  URL: string;
}

export const createPortalLink = async () => {
  try {
    const token = getToken();

    if (!token) {
      throw new Error('Token não encontrado');
    }

    const { data } = await api.get<PortalLinkResponse>(URL_CREATE_PORTAL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.URL;
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
};