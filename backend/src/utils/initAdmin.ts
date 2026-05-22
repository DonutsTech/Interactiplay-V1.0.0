import { User } from "../generated/prisma/browser";
import type { UserCreateInput } from "../generated/prisma/models";
import { userModel } from "../models/user";
import { planService } from "../services/plan";
import { userService } from "../services/user";
import { createStripeCustomer, createStripeFreeCustomer } from "./stripe";

const createPlanStripeFreeCustomer = async (data: User) => {
  const planFree = await planService.getPlanByFree();

  if (planFree) {
    const stripe = await createStripeFreeCustomer({
      userId: data.ID,
      email: data.EMAIL,
      planId: planFree.ID,
      price: planFree.STRIPE_PLAN_PRICE,
    });

    if (stripe) {
      await userService.update(data.ID, stripe);
      console.log('Admin criado com plano gratuito:', data.EMAIL);
    }
  }
}

const createUserStripeFreeCustomer = async (data: UserCreateInput) => {
  const stripe = await createStripeCustomer(data.EMAIL, data.NAME);

  const create = await userService.create({ ...data, ...stripe });

  if (create.STRIPE_SUBSCRIPTION_STATUS === "") {
    await createPlanStripeFreeCustomer(create);
  }

  return create;
}

export async function initAdmin() {
  try {
    const master: UserCreateInput = {
      NAME: 'Matheus Master',
      EMAIL: process.env.ADMIN_EMAIL as string,
      PHONE: process.env.ADMIN_PHONE as string,
      HASHED_PASSWORD: process.env.ADMIN_PASSWORD as string,
      ROLE: 'ADMIN',
      VALIDATION_EMAIL: true,
    }

    const donuts: UserCreateInput = {
      NAME: 'Donuts Master',
      EMAIL: process.env.ADMIN_EMAIL_DONUTS as string,
      PHONE: process.env.ADMIN_PHONE_DONUTS as string,
      HASHED_PASSWORD: process.env.ADMIN_PASSWORD_DONUTS as string,
      ROLE: 'ADMIN',
      VALIDATION_EMAIL: true,
    }

    const userMaster = await userModel.findBy({ where: { EMAIL: master.EMAIL } });

    if (!userMaster) {
      await createUserStripeFreeCustomer(master);

      console.log('Admin criado:', master.EMAIL);
    }

    const userDonuts = await userModel.findBy({ where: { EMAIL: donuts.EMAIL } });

    if (!userDonuts) {
      await createUserStripeFreeCustomer(donuts);

      console.log('Admin Donuts criado:', donuts.EMAIL);
    }

    console.log('Admin já existe:', master.EMAIL);
    console.log('Admin Donuts já existe:', donuts.EMAIL);
  } catch (error) {
    console.error('Error ao verificar a tabela de usuários', error);
  }
}
