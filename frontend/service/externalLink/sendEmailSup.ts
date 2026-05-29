import api from '../config';
import { getToken } from '../token';

interface SendEmailSupPayload {
  EMAIL: string;
  NAME: string;
  PHONE: string;
  MESSAGE: string;
  PHOTOS?: File[];
}

export async function sendEmailSup(payload: SendEmailSupPayload): Promise<any> {
  try {

    const token = getToken();

    if (!token) {
      throw new Error('Token não encontrado');
    }

    
    const formData = new FormData();
    formData.append('EMAIL', payload.EMAIL);
    formData.append('NAME', payload.NAME);
    formData.append('PHONE', payload.PHONE);
    formData.append('MESSAGE', payload.MESSAGE);
    if (payload.PHOTOS && payload.PHOTOS.length > 0) {
    payload.PHOTOS.forEach((file) => {
      formData.append('PHOTOS', file);
    });
  }
  const response = await api.post('/send-email-sup', formData, {
    headers: {
        Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;

  } catch (error) {
    console.error('Erro ao enviar email para suporte:', error);
    throw error;
  }

  
}

