import { z } from 'zod'

interface Env {
  TURNSTILE_SECRET_KEY?: string
  DRIPJOBS_WEBHOOK_URL?: string
  ZOHO_SMTP_HOST?: string
  ZOHO_SMTP_PORT?: string
  ZOHO_SMTP_USER?: string
  ZOHO_SMTP_PASS?: string
  ZOHO_FROM_EMAIL?: string
  ZOHO_TO_EMAIL?: string
}

const leadSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(7, 'Valid phone number is required'),
  message: z.string().optional(),
  _formId: z.string().min(1, 'Form ID is required'),
  _turnstileToken: z.string().optional(),
})

const envSchema = z.object({
  TURNSTILE_SECRET_KEY: z.string().min(1).optional(),
  DRIPJOBS_WEBHOOK_URL: z.string().url().optional(),
  ZOHO_SMTP_HOST: z.string().min(1).optional(),
  ZOHO_SMTP_PORT: z.string().optional(),
  ZOHO_SMTP_USER: z.string().email().optional(),
  ZOHO_SMTP_PASS: z.string().min(1).optional(),
  ZOHO_FROM_EMAIL: z.string().email().optional(),
  ZOHO_TO_EMAIL: z.string().email().optional(),
})

async function verifyTurnstile(token: string, secret: string, ip: string): Promise<boolean> {
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token, remoteip: ip }),
  })
  const result = (await response.json()) as { success: boolean }
  return result.success
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context
  const origin = request.headers.get('Origin') ?? ''
  const allowedOrigin = origin.includes('boldcoatpainters.com') ? origin : ''

  const corsHeaders: Record<string, string> = {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  try {
    const runtimeEnv = envSchema.parse(env)

    let body: unknown
    try {
      body = await request.json()
    } catch {
      return Response.json(
        { success: false, error: 'Invalid JSON body' },
        { status: 400, headers: corsHeaders },
      )
    }

    const parsed = leadSchema.safeParse(body)
    if (!parsed.success) {
      return Response.json(
        {
          success: false,
          error: 'Validation failed',
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400, headers: corsHeaders },
      )
    }

    const data = parsed.data

    if (runtimeEnv.TURNSTILE_SECRET_KEY && data._turnstileToken) {
      const ip = request.headers.get('CF-Connecting-IP') ?? ''
      const valid = await verifyTurnstile(data._turnstileToken, runtimeEnv.TURNSTILE_SECRET_KEY, ip)
      if (!valid) {
        return Response.json(
          { success: false, error: 'Turnstile verification failed' },
          { status: 400, headers: corsHeaders },
        )
      }
    }

    console.log('[lead]', JSON.stringify({ formId: data._formId, name: data.name, email: data.email, phone: data.phone }))

    // TODO (Phase 2): POST to DripJobs webhook
    // TODO (Phase 2): Send email via Zoho SMTP

    return Response.json(
      { success: true, message: 'Lead received' },
      { status: 200, headers: corsHeaders },
    )
  } catch (err) {
    console.error('[lead] Server error:', err)
    return Response.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: corsHeaders },
    )
  }
}
