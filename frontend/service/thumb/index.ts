import { ErrorMessage } from '@/@types/error';
import { messageError } from '@/utils/error';
import api from '../config';
import { getToken } from '../token';

interface DeleteResponse {
  MESSAGE: string;
}

interface ThumbResponse {
  ID: string;
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
  IMAGE_URL: string;
}

export const postCampaignThumb = async (
  campaignId: string,
  file: File
): Promise<ThumbResponse | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      throw new Error('Token não encontrado');
    }

    const formData = new FormData();
    formData.append('image', file);

    const { data } = await api.post<ThumbResponse>(
      `/user/campaigns/${campaignId}/thumb`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return data;
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
};

export const deleteCampaignThumb = async (
  idThumb: string
): Promise<DeleteResponse | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      throw new Error('Token não encontrado');
    }

    const { data } = await api.delete<DeleteResponse>(
      `/user/campaigns/thumb/${idThumb}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
};
