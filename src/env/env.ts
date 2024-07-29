import { z } from 'zod';

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().optional().default(3000),
  ACUMATICA_BASE_URL: z.string(),
  ACUMATICA_TENANT: z.string(),
  ACUMATICA_ENDPOINT_VERSION: z.string(),
});

export type Env = z.infer<typeof envSchema>;
