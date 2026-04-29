# Bold Coat Painters Website

High-end residential painting company website for Bold Coat Painters (Bold Coat LLC), serving Chicago and the North Shore suburbs. Built with Astro, Tailwind CSS, and deployed on Cloudflare Pages.

**Phase 1 of 9: Foundation**

## Tech Stack

- **Framework:** Astro (static output)
- **Styling:** Tailwind CSS v4 (via @tailwindcss/vite)
- **Language:** TypeScript (strict mode)
- **Forms:** React + React Hook Form + Zod (Phase 2)
- **Hosting:** Cloudflare Pages (static + Pages Functions)
- **Email:** Zoho Mail SMTP via Nodemailer (Phase 2)
- **CRM:** DripJobs webhook (Phase 2)
- **Spam Protection:** Cloudflare Turnstile
- **Analytics:** Google Tag Manager (GA4, Google Ads, Clarity)

## Local Setup

```bash
# Clone
git clone <repo-url>
cd bcp-landing-pages

# Use correct Node version
nvm use

# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Fill in values (see Environment Variables below)

# Start dev server
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run typecheck` | TypeScript type checking |
| `npm run lint` | Lint with ESLint |
| `npm run lint:fix` | Lint and auto-fix |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check formatting |

## Environment Variables

### Build-time (in `.env` locally, set in Cloudflare Pages for production)

| Variable | Purpose | Where to Get It |
|----------|---------|-----------------|
| `PUBLIC_GTM_ID` | Google Tag Manager container ID | [GTM](https://tagmanager.google.com/) |
| `PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile widget key | [Cloudflare Dashboard](https://dash.cloudflare.com/) |

### Server-only (set in Cloudflare Pages dashboard only, never in `.env`)

| Variable | Purpose | Where to Get It |
|----------|---------|-----------------|
| `TURNSTILE_SECRET_KEY` | Turnstile server-side verification | Cloudflare Dashboard, Turnstile section |
| `DRIPJOBS_WEBHOOK_URL` | DripJobs CRM lead webhook URL | DripJobs account, integrations/webhooks |
| `ZOHO_SMTP_HOST` | SMTP server (`smtp.zoho.com`) | Zoho Mail settings |
| `ZOHO_SMTP_PORT` | SMTP port (`465` for SSL) | Zoho Mail settings |
| `ZOHO_SMTP_USER` | SMTP username (email address) | Zoho Mail settings |
| `ZOHO_SMTP_PASS` | SMTP app password (not account password) | Zoho Mail, Security, App Passwords |
| `ZOHO_FROM_EMAIL` | "From" address for emails | Your Zoho email |
| `ZOHO_TO_EMAIL` | "To" address for lead notifications | Your Zoho email |

## Deployment

Push to `main` branch. Cloudflare Pages auto-deploys.

### Cloudflare Pages Setup

1. Connect your GitHub repo in Cloudflare Pages
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Set server-only env vars in the Cloudflare Pages dashboard (Settings > Environment Variables)
5. Functions in `functions/` are auto-detected

### DripJobs Webhook Setup

1. Log into DripJobs
2. Go to Integrations or Webhooks
3. Create a new webhook endpoint
4. Copy the URL and set it as `DRIPJOBS_WEBHOOK_URL` in Cloudflare Pages env vars

### Zoho SMTP App Password

1. Log into Zoho Mail
2. Go to Settings > Security > App Passwords
3. Generate a new app password for "Website Form"
4. Set it as `ZOHO_SMTP_PASS` in Cloudflare Pages env vars

### GTM Setup

1. Create a GTM container at [tagmanager.google.com](https://tagmanager.google.com/)
2. Set the container ID (GTM-XXXXXXX) as `PUBLIC_GTM_ID`
3. Configure GA4, Google Ads, and Clarity tags inside GTM

## Folder Structure

```
.
├── functions/              # Cloudflare Pages Functions (server-side)
│   └── api/
│       └── lead.ts         # Form submission handler
├── public/                 # Static assets (served as-is)
│   ├── images/             # Image directories (hero, portfolio, trust, logo)
│   ├── robots.txt          # Search engine directives
│   └── llms.txt            # AI crawler index
├── src/
│   ├── components/
│   │   ├── analytics/      # GTM integration
│   │   ├── layout/         # BaseLayout, MarketingLayout, LandingLayout
│   │   ├── nav/            # Header, Footer
│   │   ├── seo/            # SEOHead, StructuredData (JSON-LD)
│   │   └── ui/             # Button, Container, PhoneLink
│   ├── config/             # Single source of truth for all config
│   │   ├── site.ts         # Business info, contact, hours, certs, owner
│   │   ├── theme.ts        # Design tokens (colors, fonts, spacing)
│   │   ├── routes.ts       # All routes with noindex/sitemap flags
│   │   ├── nav.ts          # Navigation structure
│   │   └── env.ts          # Zod-validated environment variables
│   ├── content/            # Astro Content Collections
│   │   ├── config.ts       # Collection schemas (blog, areas)
│   │   ├── blog/           # Blog posts (Phase 6)
│   │   ├── areas/          # Area pages (Phase 5)
│   │   └── pages/          # Per-page content (Phase 3+)
│   ├── lib/                # Utility libraries
│   │   ├── analytics.ts    # GTM dataLayer helpers
│   │   ├── format.ts       # Phone/hours formatters
│   │   ├── schema.ts       # JSON-LD schema builders
│   │   └── seo.ts          # Canonical/meta helpers
│   ├── pages/              # Astro pages (file-based routing)
│   └── styles/
│       └── global.css      # Tailwind directives + base styles
├── astro.config.mjs        # Astro configuration
├── tsconfig.json           # TypeScript configuration
└── wrangler.toml           # Cloudflare Pages configuration
```

## Adding Pages (Future Phases)

- **New page:** Create `.astro` file in `src/pages/`, add route to `src/config/routes.ts`
- **Blog post (Phase 6):** Add `.md` file to `src/content/blog/`
- **Area page (Phase 5):** Add `.md` file to `src/content/areas/`

## Phase Status

- [x] Phase 1: Foundation
- [ ] Phase 2: Components, Forms, Integrations
- [ ] Phase 3: Homepage + Service Pages Content
- [ ] Phase 4: Additional Pages
- [ ] Phase 5: Area Pages
- [ ] Phase 6: Blog
- [ ] Phase 7: Performance + SEO Polish
- [ ] Phase 8: Testing + QA
- [ ] Phase 9: Launch
