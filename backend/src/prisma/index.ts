import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import { getSecret } from '../config/load';
import { PrismaClient } from '../generated/prisma/client';

const connectionString = `${process.env.DATABASE_URL || getSecret('DATABASE_URL')}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };
