import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';
import * as dotenv from 'dotenv'; // 1. Import dotenv

dotenv.config(); // 2. Load the environment variables

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set')
}

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL.includes('supabase')
        ? { rejectUnauthorized: false }
        : false,
})

export const db = drizzle(pool, { schema });