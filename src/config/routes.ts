export type RouteConfig = {
  path: string
  label: string
  noindex: boolean
  inSitemap: boolean
}

export const routes = {
  home: { path: '/', label: 'Home', noindex: false, inSitemap: true },
  about: { path: '/about/', label: 'About', noindex: false, inSitemap: true },
  contact: { path: '/contact/', label: 'Contact', noindex: false, inSitemap: true },

  services: {
    index: { path: '/services/', label: 'Services', noindex: false, inSitemap: true },
    interior: {
      path: '/services/interior-painting/',
      label: 'Interior Painting',
      noindex: false,
      inSitemap: true,
    },
    exterior: {
      path: '/services/exterior-painting/',
      label: 'Exterior Painting',
      noindex: false,
      inSitemap: true,
    },
    cabinets: {
      path: '/services/cabinet-painting/',
      label: 'Cabinet Painting',
      noindex: false,
      inSitemap: true,
    },
  },

  quote: {
    interior: {
      path: '/interior-quote/',
      label: 'Interior Quote',
      noindex: false,
      inSitemap: false,
    },
    exterior: {
      path: '/exterior-quote/',
      label: 'Exterior Quote',
      noindex: false,
      inSitemap: false,
    },
    cabinets: {
      path: '/cabinet-quote/',
      label: 'Cabinet Quote',
      noindex: false,
      inSitemap: false,
    },
  },

  areas: { path: '/areas/', label: 'Service Areas', noindex: false, inSitemap: true },
  blog: { path: '/blog/', label: 'Blog', noindex: false, inSitemap: true },

  thankYou: { path: '/thank-you/', label: 'Thank You', noindex: true, inSitemap: false },
  privacy: { path: '/privacy/', label: 'Privacy', noindex: false, inSitemap: true },
  terms: { path: '/terms/', label: 'Terms', noindex: false, inSitemap: true },
} as const
