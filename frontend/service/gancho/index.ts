import { ErrorMessage } from '@/@types/error';
import { messageError } from '@/utils/error';
import api from '../config';
import { getToken } from '../token';

export interface GanchoResponse {
  ID: string;
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
  ATIVE: boolean;
  TITLE: string;
  TITLE_STYLE: string;
  SUBTITLE: string;
  SUBTITLE_ANIMATION: boolean;
  SUBTITLE_ANIMATION_TYPE: string | null;
  SUBTITLE_STYLE: string;
}

export interface GanchoRequest {
  ATIVE: boolean;
  TITLE: string;
  TITLE_STYLE: string;
  SUBTITLE: string;
  SUBTITLE_ANIMATION: boolean;
  SUBTITLE_ANIMATION_TYPE: string;
  SUBTITLE_STYLE: string;
}

export const postCampaignGancho = async (
  campaignId: string,
  body: GanchoRequest
): Promise<GanchoResponse | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      throw new Error('Token não encontrado');
    }

    const { data } = await api.post<GanchoResponse>(
      `/user/campaigns/${campaignId}/gancho`,
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
