
import { ErrorMessage } from '@/@types/error';
import { getToken } from '../token';
import api from '../config';
import { messageError, MESSEGE_VALIDITY } from '@/utils/error';

export const VIDEO_URL = '/user/videos';


export const getVideos = async (): Promise<{ STATUS: number; MESSAGE: string; VIDEOS: any[] } | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      return {
        STATUS: 401,
        MESSAGE: 'token de autenticação não encontrado'
      } as ErrorMessage;
    }

    const { data } = await api.get(VIDEO_URL, {
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

export const getVideoById = async (videoId: string): Promise<{ STATUS: number; MESSAGE: string; VIDEO: any } | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      return {
        STATUS: 401,
        MESSAGE: 'token de autenticação não encontrado'
      } as ErrorMessage;
    }

    const { data } = await api.get(`${VIDEO_URL}/${videoId}`, {
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

export const uploadVideo = async (video: File): Promise<{ STATUS: number; MESSAGE: string } | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      return {
        STATUS: 401,
        MESSAGE: 'token de autenticação não encontrado'
      } as ErrorMessage;
    }

    const formData = new FormData();
    formData.append('video', video);
    
    const { data } = await api.post(VIDEO_URL, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
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

export const deleteVideo = async (videoId: string): Promise<{ STATUS: number; MESSAGE: string } | ErrorMessage> => {

  try {
    const token = getToken();

    if (!token) {
      return {
        STATUS: 401,
        MESSAGE: 'token de autenticação não encontrado'
      } as ErrorMessage;
    }

    const { data } = await api.delete(`${VIDEO_URL}/${videoId}`, {
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

export const updateVideoName = async (
  videoId: string,
  newName: string
): Promise<{ STATUS: number; MESSAGE: string } | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      return {
        STATUS: 401,
        MESSAGE: 'token de autenticação não encontrado'
      } as ErrorMessage;
    }

    const { data } = await api.put(`${VIDEO_URL}/${videoId}`, { NAME: newName }, {
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
