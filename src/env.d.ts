/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GTM_ID?: string
  readonly PUBLIC_TURNSTILE_SITE_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
