// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://boldcoatpainters.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        const noSitemapPaths = [
          '/interior-quote/',
          '/exterior-quote/',
          '/cabinet-quote/',
          '/thank-you/',
        ]
        return !noSitemapPaths.some((p) => page.includes(p))
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
