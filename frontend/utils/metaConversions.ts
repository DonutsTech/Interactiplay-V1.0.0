type MetaUserData = {
  email?: string;
  phone?: string;
};

type MetaCapiEventPayload = {
  eventName: string;
  eventId: string;
  customData?: Record<string, string | number | boolean>;
  userData?: MetaUserData;
  eventSourceUrl?: string;
};

const META_CAPI_ENDPOINT = '/api/meta/conversions';

export const postMetaCapiEvent = async (
  payload: MetaCapiEventPayload
): Promise<void> => {
  try {
    await fetch(META_CAPI_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch {
    // Falha silenciosa para nao impactar a experiencia do usuario.
  }
};
