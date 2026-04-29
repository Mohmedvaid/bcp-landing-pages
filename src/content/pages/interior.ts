import type { PageContent } from '@/types/page-content'

export const interiorPageContent = {
  meta: {
    title: 'Interior Painting | Chicago & North Shore | Bold Coat Painters',
    description:
      'Premium interior painting for Chicago and North Shore homes. Sherwin-Williams Emerald, Benjamin Moore Aura, meticulous prep, EPA Lead-Safe Certified. Free in-home consultation.',
    canonical: '/interior-quote/',
    ogImage: '/images/_placeholder/hero-interior-main.jpg',
  },
  hero: {
    eyebrow: 'Premium Interior Painting',
    headline: 'Interior painting your Chicago home deserves.',
    subhead:
      'High-end residential painting for discerning homeowners across Chicago and the North Shore. Premium materials, meticulous surface prep, and a finish that holds up for years.',
    image: '/images/_placeholder/hero-interior-main.jpg',
    imageAlt:
      'Freshly painted living room in a North Shore home with warm white walls and crisp trim detail',
    ctaPrimary: { label: 'Get Your Free Quote', href: '#quote-form' },
    ctaSecondaryNote: 'Free in-home consultation. No pressure. 24-hour response.',
  },
  trustStrip: {
    items: [
      { iconName: 'star', label: '5.0 on Google', sourcePath: 'trust.googleRating' },
      { iconName: 'shield-check', label: 'EPA Lead-Safe Certified' },
      { iconName: 'badge-check', label: 'Licensed & Insured' },
      {
        iconName: 'calendar',
        label: 'Years Serving Chicagoland',
        sourcePath: 'trust.yearsInBusiness',
      },
    ],
  },
  valueProps: {
    eyebrow: 'Why Homeowners Choose Bold Coat',
    heading: 'Built for high-end Chicago homes.',
    items: [
      {
        iconName: 'paintbrush',
        title: 'Premium materials, every job',
        description:
          'Sherwin-Williams Emerald, Benjamin Moore Aura, Fine Paints of Europe. Top-tier paint on every wall, no compromise.',
      },
      {
        iconName: 'ruler',
        title: 'Prep that lasts decades',
        description:
          'Patching, sanding, priming, masking. The careful work most painters skip is exactly what makes the finish last.',
      },
      {
        iconName: 'shield-check',
        title: 'EPA Lead-Safe Certified',
        description:
          'Critical for pre-1978 North Shore and Chicago homes. We are certified, trained, and follow EPA RRP rules.',
      },
      {
        iconName: 'headset',
        title: 'Direct communication, no surprises',
        description:
          'One project manager from quote to walkthrough. Daily updates, clear timelines, real answers.',
      },
    ],
  },
  services: {
    eyebrow: 'Interior Painting Services',
    heading: 'Whatever interior painting you need, we handle it.',
    intro:
      'From single accent walls to full-home repaints, we bring the same level of care and premium materials to every project.',
    items: [
      {
        title: 'Whole-Home Repaints',
        description:
          'Complete interior transformations with consistent color, clean lines, and protected surfaces throughout. Coordinated room-by-room scheduling so your home stays livable.',
        image: '/images/_placeholder/service-1.jpg',
      },
      {
        title: 'Single Rooms & Accent Walls',
        description:
          'Focused projects with the same prep quality we bring to full homes. Color consulting available for clients who want guidance.',
        image: '/images/_placeholder/service-2.jpg',
      },
      {
        title: 'Trim, Doors & Millwork',
        description:
          'Crown molding, baseboards, window casings, built-ins. Brush and spray applied to match the precision your millwork deserves.',
        image: '/images/_placeholder/service-3.jpg',
      },
      {
        title: 'Ceilings (Standard, Vaulted, Tray)',
        description:
          'Smooth, flawless ceiling finishes without roller marks or lap lines. We handle standard height, vaulted, coffered, and tray ceilings.',
        image: '/images/_placeholder/service-4.jpg',
      },
      {
        title: 'Wallpaper Removal & Wall Repair',
        description:
          'Careful strip-down, skim coating where needed, and a paint-ready surface. No shortcuts, no residue left behind.',
        image: '/images/_placeholder/service-5.jpg',
      },
      {
        title: 'Cabinet Refinishing',
        description:
          'Factory-quality spray finishes on kitchen and bathroom cabinets. A fraction of the cost of replacement with better results than most refacers.',
        image: '/images/_placeholder/service-6.jpg',
        linkHref: '/cabinet-quote/',
      },
    ],
  },
  process: {
    eyebrow: 'Our Process',
    heading: 'From consultation to final walkthrough.',
    steps: [
      {
        number: '01',
        title: 'Free in-home consultation',
        description:
          'We come to you, walk through every space, and listen to what you want. No sales pitch, just honest assessment.',
      },
      {
        number: '02',
        title: 'Detailed proposal',
        description:
          'Clear scope, premium product specs, transparent timeline. Every line item explained so you know exactly what you are paying for.',
      },
      {
        number: '03',
        title: 'Meticulous prep & paint',
        description:
          'Surfaces protected, walls prepped properly, paint applied with care. We clean up every day before we leave.',
      },
      {
        number: '04',
        title: 'Final walkthrough & warranty',
        description:
          'Every detail inspected with you. Touch-ups handled on the spot. Backed by our 2-year workmanship warranty.',
      },
    ],
  },
  beforeAfter: {
    eyebrow: 'Recent Work',
    heading: 'See the Bold Coat difference.',
    intro:
      'Real projects from Chicago and North Shore homes. Drag the slider to compare before and after.',
    sliders: [
      {
        beforeImage: '/images/_placeholder/before-1.jpg',
        afterImage: '/images/_placeholder/after-1.jpg',
        beforeAlt: 'Living room before repaint, original beige walls with scuff marks',
        afterAlt: 'Living room after Bold Coat repaint, refined warm white with crisp trim',
        title: '[[PLACEHOLDER:project-title-1]]',
        location: '[[PLACEHOLDER:project-location-1]]',
        description: '[[PLACEHOLDER:project-description-1]]',
      },
      {
        beforeImage: '/images/_placeholder/before-2.jpg',
        afterImage: '/images/_placeholder/after-2.jpg',
        beforeAlt: 'Dining room before repaint, dated wallpaper and patched drywall',
        afterAlt: 'Dining room after Bold Coat repaint, smooth walls with deep navy accent',
        title: '[[PLACEHOLDER:project-title-2]]',
        location: '[[PLACEHOLDER:project-location-2]]',
        description: '[[PLACEHOLDER:project-description-2]]',
      },
      {
        beforeImage: '/images/_placeholder/before-3.jpg',
        afterImage: '/images/_placeholder/after-3.jpg',
        beforeAlt: 'Master bedroom before repaint, faded builder-grade paint and nail holes',
        afterAlt: 'Master bedroom after Bold Coat repaint, soft greige with clean ceiling line',
        title: '[[PLACEHOLDER:project-title-3]]',
        location: '[[PLACEHOLDER:project-location-3]]',
        description: '[[PLACEHOLDER:project-description-3]]',
      },
    ],
    portfolioCta: { label: 'View full portfolio', href: '/gallery/' },
  },
  videoWalkthrough: {
    eyebrow: 'Watch',
    heading: 'A walkthrough of our process.',
    subhead:
      'See how we protect your home, prep surfaces, and apply premium paint from start to finish.',
    thumbnail: '/images/_placeholder/video-thumbnail.jpg',
    thumbnailAlt: 'Bold Coat Painters interior painting process walkthrough video thumbnail',
    youtubeId: '',
  },
  whyBoldCoat: {
    eyebrow: 'What Sets Us Apart',
    heading: 'More than paint. A craft.',
    body: 'Bold Coat Painters was founded on a simple principle: the work that happens before the brush touches the wall matters more than anything else. Proper prep, premium materials, and honest communication produce results that last.\n\nWe are EPA Lead-Safe Certified because many of the homes we paint in Chicago and the North Shore were built before 1978. That certification is not optional for us. It protects your family and ensures every project meets federal safety standards. Combined with premium-tier paint and a dedicated project manager on every job, the result is a finish that looks right and holds up.',
    differentiators: [
      'Premium paints only (Sherwin-Williams Emerald, Benjamin Moore Aura, Fine Paints of Europe)',
      'EPA Lead-Safe Certified for pre-1978 homes',
      'Daily project updates from your dedicated PM',
      '2-year workmanship warranty',
      'Fully licensed, bonded, and insured',
    ],
    image: '/images/_placeholder/owner-on-job.jpg',
    imageAlt: 'Bold Coat Painters owner reviewing finish quality on a North Shore project',
  },
  testimonials: {
    eyebrow: 'What Clients Say',
    heading: 'Trusted by homeowners across Chicagoland.',
    items: [
      {
        quote: '[[PLACEHOLDER:testimonial-quote-1]]',
        name: '[[PLACEHOLDER:testimonial-name-1]]',
        location: '[[PLACEHOLDER:testimonial-location-1]]',
        service: '[[PLACEHOLDER:testimonial-service-1]]',
        avatar: '/images/_placeholder/testimonial-avatar-1.jpg',
        rating: 5,
      },
      {
        quote: '[[PLACEHOLDER:testimonial-quote-2]]',
        name: '[[PLACEHOLDER:testimonial-name-2]]',
        location: '[[PLACEHOLDER:testimonial-location-2]]',
        service: '[[PLACEHOLDER:testimonial-service-2]]',
        avatar: '/images/_placeholder/testimonial-avatar-2.jpg',
        rating: 5,
      },
      {
        quote: '[[PLACEHOLDER:testimonial-quote-3]]',
        name: '[[PLACEHOLDER:testimonial-name-3]]',
        location: '[[PLACEHOLDER:testimonial-location-3]]',
        service: '[[PLACEHOLDER:testimonial-service-3]]',
        avatar: '/images/_placeholder/testimonial-avatar-3.jpg',
        rating: 5,
      },
    ],
  },
  serviceArea: {
    eyebrow: 'Service Area',
    heading: 'Serving Chicago and surrounding suburbs.',
    intro:
      'We paint homes across the North Shore, western suburbs, and Chicago neighborhoods including Lincoln Park, Gold Coast, Lakeview, and Old Town. If you are within our service radius, we will come to you for a free consultation.',
    mapImage: '/images/_placeholder/service-area-map.png',
    mapAlt: 'Bold Coat Painters service area map covering Chicago and North Shore suburbs',
  },
  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Answers to common questions.',
    items: [
      {
        question: 'How long does an interior painting project usually take?',
        answer:
          'Most single-room projects take 1 to 2 days. Whole-home interiors typically run 4 to 10 days depending on size, prep needs, and finish quality. We give you a clear timeline in your written proposal so you can plan around it.',
      },
      {
        question: 'What kind of paint do you use?',
        answer:
          'We use premium-tier paint exclusively. Most jobs run on Sherwin-Williams Emerald or Benjamin Moore Aura. For specialty finishes, we work with Fine Paints of Europe and other high-end product lines. We never use builder-grade paint.',
      },
      {
        question: 'Do I need to move my furniture before you start?',
        answer:
          'We move and protect everything. Furniture gets covered or relocated within the room, floors are protected with drop cloths and ram board where needed, and we clean up at the end of every workday.',
      },
      {
        question: 'How much does interior painting cost?',
        answer:
          'Cost depends on scope, finish quality, surface prep, and materials. Every home is different. We provide a detailed quote during your free in-home consultation, with transparent line items so you know exactly what is included.',
      },
      {
        question: 'Are you licensed and insured?',
        answer:
          "Yes. We are licensed, fully bonded, and carry general liability and worker's compensation insurance. We are also EPA Lead-Safe Certified, which is required for any home built before 1978.",
      },
      {
        question: 'What is your workmanship warranty?',
        answer:
          'Every job is backed by a 2-year workmanship warranty. If a finish issue traces back to our work, we come back and fix it. No questions, no charges.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Get Started',
    heading: 'Get your free interior painting quote.',
    subhead: 'Free in-home consultation. 24-hour response. No pressure, no obligation.',
    formHeading: 'Request Your Free Quote',
  },
} as const satisfies PageContent
