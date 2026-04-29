import { z } from 'zod'

const envSchema = z.object({
  PUBLIC_GTM_ID: z
    .string()
    .regex(/^GTM-[A-Z0-9]+$/)
    .optional(),
  PUBLIC_TURNSTILE_SITE_KEY: z.string().min(1).optional(),
})

export const env = envSchema.parse(import.meta.env)
export type Env = z.infer<typeof envSchema>
