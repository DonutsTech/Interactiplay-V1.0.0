import api from '../config';

interface SendEmailSupPayload {
  EMAIL: string;
  NAME: string;
  PHONE: string;
  MESSAGE: string;
  PHOTOS?: File[];
}

export async function sendEmailSup(payload: SendEmailSupPayload): Promise<any> {
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
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
}
