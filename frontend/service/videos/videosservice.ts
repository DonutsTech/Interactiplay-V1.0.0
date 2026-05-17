
import { ErrorMessage } from '@/@types/error';
import { getToken } from '../token';
import api from '../config';
import { messageError, MESSEGE_VALIDITY } from '@/utils/error';

export const VIDEO_URL = '/user/videos';

const getVideoMetadata = async (video: File): Promise<{ duration: number; width: number; height: number } | null> => {
  return new Promise((resolve) => {
    const videoElement = document.createElement('video');
    const objectUrl = URL.createObjectURL(video);

    const cleanup = () => {
      URL.revokeObjectURL(objectUrl);
      videoElement.onloadedmetadata = null;
      videoElement.ontimeupdate = null;
      videoElement.onerror = null;
    };

    const resolveMetadata = () => {
      const duration = Number(videoElement.duration);
      const width = Number(videoElement.videoWidth);
      const height = Number(videoElement.videoHeight);

      cleanup();

      if (!Number.isFinite(duration) || duration <= 0 || width <= 0 || height <= 0) {
        resolve(null);
        return;
      }

      resolve({
        duration: Math.floor(duration * 1000) / 1000,
        width,
        height
      });
    };

    videoElement.preload = 'metadata';
    videoElement.onloadedmetadata = () => {
      if (videoElement.duration === Infinity) {
        videoElement.currentTime = 1e101;
        videoElement.ontimeupdate = () => {
          videoElement.ontimeupdate = null;
          resolveMetadata();
        };

        return;
      }

      resolveMetadata();
    };

    videoElement.onerror = () => {
      cleanup();
      resolve(null);
    };

    videoElement.src = objectUrl;
    videoElement.load();
  });
};

export const getMp4DurationFromMvhd = async (video: File): Promise<number | null> => {
  const metadata = await getVideoMetadata(video);
  return metadata?.duration ?? null;
};

export const getVideoDimensions = async (
  video: File
): Promise<{ width: number; height: number } | null> => {
  const metadata = await getVideoMetadata(video);

  if (!metadata) {
    return null;
  }

  return {
    width: metadata.width,
    height: metadata.height
  };
};


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

    const duration = await getMp4DurationFromMvhd(video);
    if (duration !== null) {
      formData.append('DURATION', String(duration));
    }

    const dimensions = await getVideoDimensions(video);
    if (dimensions) {
      formData.append('WIDTH', String(dimensions.width));
      formData.append('HEIGHT', String(dimensions.height));
    }

    console.log('Metadados enviados no upload:', {
      DURATION: formData.get('DURATION'),
      WIDTH: formData.get('WIDTH'),
      HEIGHT: formData.get('HEIGHT')
    });

    
    const { data } = await api.post(VIDEO_URL, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    if (!data) {
      throw MESSEGE_VALIDITY;
    }

    console.log('Resposta do upload:', data);

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
