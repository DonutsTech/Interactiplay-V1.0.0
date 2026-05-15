import { userModel } from "../models/user";
import { planService } from "../services/plan";
import { createStripeCustomer, createStripeFreeCustomer } from "./stripe";
export async function initAdmin() {
    try {
        const master = {
            NAME: 'Master',
            EMAIL: process.env.ADMIN_EMAIL,
            PHONE: process.env.ADMIN_PHONE,
            HASHED_PASSWORD: process.env.ADMIN_PASSWORD,
            ROLE: 'ADMIN',
            ACTIVE: true,
            VALIDATION_EMAIL: true,
        };
        const user = await userModel.findBy({ where: { EMAIL: master.EMAIL } });
        if (!user) {
            const stripe = await createStripeCustomer(master.EMAIL, master.NAME);
            const create = await userModel.create({ data: { ...master, ...stripe } });
            if (create.STRIPE_SUBSCRIPTION_STATUS === "") {
                const plan = await planService.getPlanByFree();
                if (plan) {
                    const stripe = await createStripeFreeCustomer({
                        userId: create.ID,
                        email: create.EMAIL,
                        planId: plan.ID,
                        price: plan.STRIPE_PLAN_PRICE,
                    });
                    if (stripe) {
                        console.log('Admin criado com plano gratuito:', master.EMAIL);
                    }
                }
            }
        }
        console.log('Admin já existe:', master.EMAIL);
    }
    catch (error) {
        console.error('Error ao verificar a tabela de usuários', error);
    }
}
//# sourceMappingURL=initAdmin.js.map