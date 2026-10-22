class MetaPixelService {
  async trackEvent(body: any) {
    try {
      const META_PIXEL_ID = process.env.META_PIXEL_ID;
      const ACCESS_TOKEN = process.env.META_PIXEL_ACCESS_TOKEN;
      const result = await fetch(`https://graph.facebook.com/${META_PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await result.json();
      console.log(data);
      return {
        success: data.success,
        event_id: data.event_id
      };
    } catch (error) {
     throw error;
    }
  }
}

export const metaPixelService = new MetaPixelService();
