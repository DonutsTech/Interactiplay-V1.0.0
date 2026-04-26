import { ErrorMessage } from '@/@types/error';
import { messageError } from '@/utils/error';
import api from '../config';
import { getToken } from '../token';

export interface ExternalLinkResponse {
  ID: string;
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
  ATIVE: boolean;
  TEXT: string | null;
  STYLE_TEXT: string | null;
  BUTTON_TEXT: string | null;
  BUTTON_STYLE: string | null;
  LINK_URL: string | null;
  BUTTON_CLICK_CAMPAING: number;
  BUTTON_CLICK_TEST_AB: number;
}

export interface ExternalLinkRequest {
  ATIVE: boolean;
  TEXT: string;
  STYLE_TEXT: string;
  BUTTON_TEXT: string;
  BUTTON_STYLE: string;
  LINK_URL: string;
}

export const postCampaignExternalLink = async (
  campaignId: string,
  body: ExternalLinkRequest
): Promise<ExternalLinkResponse | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      throw new Error('Token não encontrado');
    }

    const { data } = await api.post<ExternalLinkResponse>(
      `/user/campaigns/${campaignId}/external-link`,
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
