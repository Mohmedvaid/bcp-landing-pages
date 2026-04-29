import { routes } from './routes'

export const mainNav = [
  routes.services.index,
  routes.areas,
  routes.about,
  routes.blog,
  routes.contact,
] as const

export const footerNav = {
  services: [routes.services.interior, routes.services.exterior, routes.services.cabinets],
  company: [routes.about, routes.contact, routes.privacy, routes.terms],
} as const
