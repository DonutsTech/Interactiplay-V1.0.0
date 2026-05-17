
import { ErrorMessage } from '@/@types/error';
import { getToken } from '../token';
import api from '../config';
import { messageError, MESSEGE_VALIDITY } from '@/utils/error';

export const VIDEO_URL = '/user/videos';

const MVHD_HEADER = [0x6d, 0x76, 0x68, 0x64]; // "mvhd"
const MVHD_SCAN_BYTES = 2 * 1024 * 1024;

const findHeaderIndex = (bytes: Uint8Array, header: number[]): number => {
  for (let i = 0; i <= bytes.length - header.length; i += 1) {
    let matched = true;

    for (let j = 0; j < header.length; j += 1) {
      if (bytes[i + j] !== header[j]) {
        matched = false;
        break;
      }
    }

    if (matched) return i;
  }

  return -1;
};

export const getMp4DurationFromMvhd = async (video: File): Promise<number | null> => {
  try {
    const chunk = await video.slice(0, MVHD_SCAN_BYTES).arrayBuffer();
    const bytes = new Uint8Array(chunk);
    const view = new DataView(chunk);

    const headerIndex = findHeaderIndex(bytes, MVHD_HEADER);
    if (headerIndex < 0) return null;

    const version = bytes[headerIndex + 4];
    let timeScaleOffset = headerIndex + 16;
    let durationOffset = headerIndex + 20;

    if (version === 1) {
      timeScaleOffset = headerIndex + 24;
      durationOffset = headerIndex + 28;
    }

    if (durationOffset + 4 > bytes.length) return null;

    const timeScale = view.getUint32(timeScaleOffset, false);
    if (timeScale <= 0) return null;

    const duration = view.getUint32(durationOffset, false);
    const videoLength = Math.floor((duration / timeScale) * 1000) / 1000;

    return Number.isFinite(videoLength) && videoLength > 0 ? videoLength : null;
  } catch {
    return null;
  }
};

export const getVideoDimensions = async (
  video: File
): Promise<{ width: number; height: number } | null> => {
  return new Promise((resolve) => {
    const videoElement = document.createElement('video');
    const objectUrl = URL.createObjectURL(video);

    const onMetadataLoaded = () => {
      cleanup();

      const width = Number(videoElement.videoWidth);
      const height = Number(videoElement.videoHeight);

      if (width > 0 && height > 0) {
        resolve({ width, height });
        return;
      }

      resolve(null);
    };

    const onError = () => {
      cleanup();
      resolve(null);
    };

    const cleanup = () => {
      URL.revokeObjectURL(objectUrl);
      videoElement.removeEventListener('loadedmetadata', onMetadataLoaded);
      videoElement.removeEventListener('error', onError);
    };

    videoElement.preload = 'metadata';
    videoElement.addEventListener('loadedmetadata', onMetadataLoaded, { once: true });
    videoElement.addEventListener('error', onError, { once: true });
    videoElement.src = objectUrl;
  });
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
