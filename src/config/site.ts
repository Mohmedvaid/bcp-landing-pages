export const siteConfig = {
  name: 'Bold Coat Painters',
  legalName: 'Bold Coat LLC',
  domain: 'boldcoatpainters.com',
  url: 'https://boldcoatpainters.com',
  description:
    'High-end residential painting in Chicago and the North Shore. Interior, exterior, and cabinet refinishing for Winnetka, Glencoe, Lake Forest, Highland Park, Hinsdale, Wilmette, and Chicago neighborhoods.',
  shortDescription: 'High-end residential painting in Chicago and the North Shore.',

  phone: {
    display: '(773) 899-7215',
    tel: '+17738997215',
  },
  email: 'info@boldcoatpainters.com',
  address: {
    street: '5901 N Cicero Ave Suite 503',
    city: 'Chicago',
    state: 'IL',
    zip: '60646',
    country: 'US',
  },
  geo: {
    latitude: 41.987,
    longitude: -87.747,
  },
  hours: {
    monday: '8:00 AM - 6:00 PM',
    tuesday: '8:00 AM - 6:00 PM',
    wednesday: '8:00 AM - 6:00 PM',
    thursday: '8:00 AM - 6:00 PM',
    friday: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 3:00 PM',
    sunday: 'Closed',
  },
  social: {
    google: 'https://share.google/isIy1HUXIecl9bTL6',
    thumbtack:
      'https://www.thumbtack.com/il/skokie/general-contractors/bold-coat-painters/service/483230277852979203',
  },
  certifications: [
    {
      label: 'EPA Lead-Safe Certified',
      certNumber: 'R1123604',
      url: 'https://www.epa.gov/lead',
    },
    { label: 'Illinois BEP Certified' },
    { label: 'Licensed, Bonded & Insured' },
  ],
  trust: {
    googleRating: 5.0,
    googleReviewCount: 0,
    yearsInBusiness: 2,
  },
  serviceAreas: {
    primary: ['Chicago', 'North Shore'],
    suburbs: [
      'Winnetka',
      'Glencoe',
      'Lake Forest',
      'Highland Park',
      'Wilmette',
      'Kenilworth',
      'Northbrook',
      'Hinsdale',
      'Lincoln Park',
      'Gold Coast',
      'Lakeview',
      'Old Town',
      'Bucktown',
    ],
  },

  owner: {
    name: 'Mohmed',
    title: 'Founder & Lead Estimator',
    bio: 'Mohmed founded Bold Coat Painters to bring high-end finish work to Chicago and the North Shore. EPA Lead-Safe certified, with a focus on premium materials and meticulous prep.',
    credentials: ['EPA Lead-Safe Certified', 'Illinois BEP Certified'],
    photo: '/images/team/mohmed.jpg',
  },
} as const

export type SiteConfig = typeof siteConfig
