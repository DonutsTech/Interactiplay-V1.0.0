import { planService } from "../services/plan";
import { getStripeProducts } from "./stripe";

export async function initPlan() {
  try {
    const count = await planService.countPlans();

    if (count === 0) {
      const products = await getStripeProducts();

      if (products.length > 0) {
        for (const product of products) {
          await planService.createPlan(product);
        }
      }
    }

  } catch (error) {
    console.error('Error ao verificar a tabela de produtos', error);
  }
}
