import { ErrorMessage } from '@/@types/error';
import { messageError } from '@/utils/error';
import api from '../config';
import { getToken } from '../token';

export interface PixelResponse {
  ID: string;
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
  ATIVE: boolean;
  NAME_META: string | null;
  ID_META: string | null;
  NAME_GOOGLE: string | null;
  ID_GOOGLE: string | null;
  LABEL_CONVERSION_GOOGLE: string | null;
  SHOOTING_EVENT_GOOGLE: string | null;
  SHOOTING_EVENT_VALUE_GOOGLE: number | null;
}

export interface PixelRequest {
  ATIVE: boolean;
  NAME_META: string;
  ID_META: string;
}

export const postCampaignPixel = async (
  campaignId: string,
  body: PixelRequest
): Promise<PixelResponse | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      throw new Error('Token não encontrado');
    }

    const { data } = await api.post<PixelResponse>(
      `/user/campaigns/${campaignId}/pixel`,
      body,
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
