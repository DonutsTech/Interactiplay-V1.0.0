import Stripe from 'stripe';
import { db } from '../../database'; // ajuste para seu caminho

class EventService {
  async createIfNotExists(event: Stripe.Event): Promise<boolean> {
    try {
      await db.stripe_events.create({
        data: {
          id: event.id,
          type: event.type,
        },
      });

      return true;
    } catch (error: any) {
      // Evento já processado
      if (error.code === 'P2002') {
        return false;
      }

      throw error;
    }
  }
}

export const eventService = new EventService();
