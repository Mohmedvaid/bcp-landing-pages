import { z } from 'zod'

export const serviceValues = [
  'interior',
  'exterior',
  'cabinets',
  'wallpaper',
  'drywall',
  'other',
] as const

export const leadFormSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().optional(),
  city: z.string().min(2, 'City is required'),
  zip: z.string().min(5, 'ZIP code is required'),
  services: z.array(z.enum(serviceValues)).min(1, 'Please select at least one service'),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Consent is required',
  }),
  formId: z.string(),
})

export type LeadFormData = z.infer<typeof leadFormSchema>
