import { siteConfig } from '@/config/site'

export type BreadcrumbItem = {
  name: string
  url: string
}

export type ServiceData = {
  name: string
  description: string
  url: string
  image?: string
}

export type FAQItem = {
  question: string
  answer: string
}

export function buildLocalBusinessSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.phone.tel,
    email: siteConfig.email,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: buildOpeningHours(),
    areaServed: siteConfig.serviceAreas.suburbs.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    aggregateRating:
      siteConfig.trust.googleReviewCount > 0
        ? {
            '@type': 'AggregateRating',
            ratingValue: siteConfig.trust.googleRating,
            reviewCount: siteConfig.trust.googleReviewCount,
          }
        : undefined,
  }
}

export function buildOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo/bold-coat-logo.png`,
    telephone: siteConfig.phone.tel,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    sameAs: Object.values(siteConfig.social),
  }
}

export function buildPersonSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.owner.name,
    jobTitle: siteConfig.owner.title,
    description: siteConfig.owner.bio,
    image: `${siteConfig.url}${siteConfig.owner.photo}`,
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  }
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function buildServiceSchema(service: ServiceData): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: siteConfig.serviceAreas.suburbs.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    ...(service.image ? { image: service.image } : {}),
  }
}

export function buildFAQSchema(faqs: FAQItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

function buildOpeningHours() {
  const dayMap: Record<string, string> = {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
  }

  return Object.entries(siteConfig.hours)
    .filter(([_, value]) => value !== 'Closed')
    .map(([day, value]) => {
      const [open, close] = value.split(' - ')
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: dayMap[day],
        opens: convertTo24(open!),
        closes: convertTo24(close!),
      }
    })
}

function convertTo24(time: string): string {
  const [timePart, period] = time.split(' ')
  const [hours, minutes] = timePart!.split(':').map(Number)
  let h = hours!
  if (period === 'PM' && h !== 12) h += 12
  if (period === 'AM' && h === 12) h = 0
  return `${h.toString().padStart(2, '0')}:${(minutes ?? 0).toString().padStart(2, '0')}`
}
