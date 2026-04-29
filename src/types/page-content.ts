export interface PageMeta {
  title: string
  description: string
  canonical: string
  ogImage: string
}

export interface CTAButton {
  label: string
  href: string
}

export interface HeroContent {
  eyebrow: string
  headline: string
  subhead: string
  image: string
  imageAlt: string
  ctaPrimary: CTAButton
  ctaSecondaryNote: string
}

export interface TrustStripItem {
  iconName: string
  label: string
  sourcePath?: string
}

export interface TrustStripContent {
  items: TrustStripItem[]
}

export interface ValuePropItem {
  iconName: string
  title: string
  description: string
}

export interface ValuePropsContent {
  eyebrow: string
  heading: string
  items: ValuePropItem[]
}

export interface ServiceItem {
  title: string
  description: string
  image: string
  linkHref?: string
}

export interface ServicesContent {
  eyebrow: string
  heading: string
  intro: string
  items: ServiceItem[]
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface ProcessContent {
  eyebrow: string
  heading: string
  steps: ProcessStep[]
}

export interface BeforeAfterSlider {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  title: string
  location: string
  description: string
}

export interface BeforeAfterContent {
  eyebrow: string
  heading: string
  intro: string
  sliders: BeforeAfterSlider[]
  portfolioCta: CTAButton
}

export interface VideoWalkthroughContent {
  eyebrow: string
  heading: string
  subhead: string
  thumbnail: string
  thumbnailAlt: string
  youtubeId: string
}

export interface WhyBoldCoatContent {
  eyebrow: string
  heading: string
  body: string
  differentiators: string[]
  image: string
  imageAlt: string
}

export interface TestimonialItem {
  quote: string
  name: string
  location: string
  service: string
  avatar: string
  rating: number
}

export interface TestimonialsContent {
  eyebrow: string
  heading: string
  items: TestimonialItem[]
}

export interface ServiceAreaContent {
  eyebrow: string
  heading: string
  intro: string
  mapImage: string
  mapAlt: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQContent {
  eyebrow: string
  heading: string
  items: FAQItem[]
}

export interface FinalCtaContent {
  eyebrow: string
  heading: string
  subhead: string
  formHeading: string
}

export interface PageContent {
  meta: PageMeta
  hero: HeroContent
  trustStrip: TrustStripContent
  valueProps: ValuePropsContent
  services: ServicesContent
  process: ProcessContent
  beforeAfter: BeforeAfterContent
  videoWalkthrough: VideoWalkthroughContent
  whyBoldCoat: WhyBoldCoatContent
  testimonials: TestimonialsContent
  serviceArea: ServiceAreaContent
  faq: FAQContent
  finalCta: FinalCtaContent
}
