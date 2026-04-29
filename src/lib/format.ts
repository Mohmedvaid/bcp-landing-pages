import type { SiteConfig } from '@/config/site'

export function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '')
  const local = digits.startsWith('1') ? digits.slice(1) : digits
  if (local.length !== 10) return raw
  return `(${local.slice(0, 3)}) ${local.slice(3, 6)}-${local.slice(6)}`
}

export function phoneToTel(raw: string): string {
  const digits = raw.replace(/\D/g, '')
  return digits.startsWith('1') ? `+${digits}` : `+1${digits}`
}

export function formatHours(hours: SiteConfig['hours']): string {
  const days = Object.entries(hours) as [string, string][]
  return days
    .map(([day, time]) => `${day.charAt(0).toUpperCase()}${day.slice(1)}: ${time}`)
    .join('\n')
}
