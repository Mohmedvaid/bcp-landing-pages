export const leadFormConfig = {
  fields: {
    name: { label: 'Full Name', placeholder: '', required: true, type: 'text' as const },
    email: { label: 'Email Address', placeholder: '', required: true, type: 'email' as const },
    phone: { label: 'Phone Number', placeholder: '', required: true, type: 'tel' as const },
    address: { label: 'Address', placeholder: '', required: false, type: 'text' as const },
    city: { label: 'City', placeholder: '', required: true, type: 'text' as const },
    zip: { label: 'ZIP Code', placeholder: '', required: true, type: 'text' as const },
    services: {
      label: 'Services Needed',
      required: true,
      type: 'checkbox-group' as const,
      options: [
        { value: 'interior', label: 'Interior Painting' },
        { value: 'exterior', label: 'Exterior Painting' },
        { value: 'cabinets', label: 'Cabinet Refinishing' },
        { value: 'wallpaper', label: 'Wallpaper Removal' },
        { value: 'drywall', label: 'Drywall Repair' },
        { value: 'other', label: 'Other' },
      ],
    },
    message: {
      label: 'Tell us about your project',
      placeholder: 'Number of rooms, timeline, anything else we should know...',
      required: false,
      type: 'textarea' as const,
    },
  },
  consent: {
    label: 'I agree to be contacted by Bold Coat Painters about my project.',
    required: true,
  },
  submitLabel: 'Get My Free Quote',
  submitNote: 'We respond within 24 hours. No spam, ever.',
} as const

export type LeadFormConfig = typeof leadFormConfig
