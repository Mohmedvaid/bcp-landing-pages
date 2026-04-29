import { siteConfig } from '@/config/site'

export function buildCanonical(path: string): string {
  const normalized = path.endsWith('/') ? path : `${path}/`
  return `${siteConfig.url}${normalized}`
}

export function buildPageTitle(title: string, suffix?: string): string {
  const siteSuffix = suffix ?? siteConfig.name
  return `${title} | ${siteSuffix}`
}

export function buildOGImage(path?: string): string {
  if (path) return `${siteConfig.url}${path}`
  return `${siteConfig.url}/images/og-default.jpg`
}
