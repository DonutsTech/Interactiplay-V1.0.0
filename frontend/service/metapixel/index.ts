import api from "../config";

export interface MetaPixelUserData {
  client_ip_address?: string;
  client_user_agent?: string;
  em?: string;
  ph?: string;
  fn?: string;
  ln?: string;
  ct?: string;
  st?: string;
  zp?: string;
  country?: string;
  db?: string;
  fbc?: string;
  fbp?: string;
  external_id?: string;
  subscription_id?: string;
}

export interface MetaCustomData {
  value?: string;
  currency?: string;
  content_name?: string;
  content_category?: string;
  contents_ids?: string[];
  content_type?: string;
  contents?: Array<{
    id?: string;
    quantity?: number;
    item_price?: number;
  }>;
  order_id?: string;
  search_string?: string;
}

export interface MetaPixelResponse {
  event_name: string;
  event_time: string;
  event_id: string;
  event_source_url: string;
  action_source: string;
  user_data: MetaPixelUserData;
  custom_data?: MetaCustomData;
}

export const postMetaPixelEvent = async (body: MetaPixelResponse) => {
  try {
    const { data } = await api.post('/meta-pixel', body);
    return data;
  } catch (error) {
    console.error('Error posting Meta Pixel event:', error);
    throw error;
  }
};
