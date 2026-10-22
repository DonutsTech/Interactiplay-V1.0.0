export interface createMetaPixelEvent {
  event_name: string;
  event_time: number;
  event_id: string;
  event_source_url: string;
  action_source: string;
  user_data: {
    client_ip_address?:string;
    client_user_agent?:string;
    em?: string[];
    ph?: string[];
    fn?: string[];
    ln?: string[];
    ct?: string[];
    st?: string[];
    zp?: string[];
    country?: string[];
    db?: string[];
    fbc?: string;
    fbp?: string;
    external_id?: string[];
  }
  custom_data?: {
    value?: number;
    currency?: string;
    content_name?: string;
    content_category?: string;
    content_ids?: string[];
    content_type?: string;
    contents?: Array<{
      id: string;
      quantity?: number;
      item_price?: number;
    }>;
    order_id?: string;
    search_string?: string;
  }
}
