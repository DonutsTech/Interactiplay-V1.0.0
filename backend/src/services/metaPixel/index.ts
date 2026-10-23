class MetaPixelService {
  async trackEvent(body: any) {
    try {
      const META_PIXEL_ID = `1889709742190868`;
      const ACCESS_TOKEN = `EAAiiP0SQZBT4BS1h7zjDZAgiFjLpPmCuSxoOCwnWjfxZAQw7liWkDkOHZBqkIuoMOgZBUWmVVUJtWoSw2F3HOxZA1hVFWWAM6E1kUhLIvR4qXrd2PjlFrZBhW17vri2x9jeLGbxZAhRN0A12s6jTPQARVvU6fvZAQjIykTQ5V7liZADzryjImYIXNkvaHsgr0bKacB2K4STZBgSbycRUikiR5kkx4KTbxkRYJZAUhOZBICiZC8XH9PoGxk8CaS327zYw48wC2ZBZCUSUWwKURpHaMjWsfY1C23FnFDAvqBaZCH19O7B0MQ42ZAZAoZBGxVZAgBMV8ZAkz5kORL`;
      const result = await fetch(`https://graph.facebook.com/v26.0/${META_PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [body],
          test_event_code: "TEST5843"
        })
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
