
import { ErrorMessage } from '@/@types/error';
import {
  ICampaign,
  ICreateCampaignPayload,
  IUpdateCampaignPayload,
} from '@/@types/campaign';
import { getToken } from '../token';
import api from '../config';
import { messageError, MESSEGE_VALIDITY } from '@/utils/error';

export const CAMPAIGN_URL = '/user/campaigns';
export const CAMPAIGN_PUBLIC_URL = '/campaigns';

interface DeleteResponse {
  STATUS: number;
  MESSAGE: string;
}

// get all
export const getCampaigns = async () : Promise<ICampaign[] | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      return {
        STATUS: 401,
        MESSAGE: 'Token de autenticação não encontrado.',
      } as ErrorMessage;
    }
    
    const { data } = await api.get<ICampaign[]>(CAMPAIGN_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!data) {
      throw MESSEGE_VALIDITY;
    };

    return data;

  } catch (error) {
    return messageError(error) as ErrorMessage;
  }
};

// getById

export const getCampaignById = async(
  campaignId: string
): Promise<ICampaign | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      return {
        STATUS: 401,
        MESSAGE: 'Token de autenticação não encontrado.',
      } as ErrorMessage;
    }

    const { data } = await api.get<ICampaign>(
      `${CAMPAIGN_URL}/${campaignId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!data) {
      throw MESSEGE_VALIDITY;
    }

    return data;

  } catch (error) {
    return messageError(error) as ErrorMessage;
  }
};

// create campaign

export const createCampaign = async (
  payload: ICreateCampaignPayload
): Promise<ICampaign | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      return {
        STATUS: 401,
        MESSAGE: 'Token de autenticação não encontrado',
      } as ErrorMessage;
    }

    const { data } = await api.post<ICampaign>(CAMPAIGN_URL, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log('Resposta da API ao criar campanha:', data);

    if (!data) {
      throw MESSEGE_VALIDITY;
    }

    return data;
  } catch (error) {
    return messageError(error) as ErrorMessage;
  }
};

// update campaign

export const updateCampaign = async (
  campaignId: string,
  payload: IUpdateCampaignPayload
): Promise<ICampaign | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      return {
        STATUS: 401,
        MESSAGE: 'Token de autenticação não encontrado',
      } as ErrorMessage;
    }

    const { data } = await api.put<ICampaign>(
      `${CAMPAIGN_URL}/${campaignId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!data) {
      throw MESSEGE_VALIDITY;
    }

    return data;
  } catch (error) {
    return messageError(error) as ErrorMessage;
  }
};

// delete campaign

export const deleteCampaign = async (
  campaignId: string
): Promise<DeleteResponse | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      return {
        STATUS: 401,
        MESSAGE: 'Token de autenticação não encontrado',
      } as ErrorMessage;
    }

    const { data } = await api.delete<DeleteResponse>(
      `${CAMPAIGN_URL}/${campaignId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!data) {
      throw MESSEGE_VALIDITY;
    }

    return data;
  } catch (error) {
    return messageError(error) as ErrorMessage;
  }
};