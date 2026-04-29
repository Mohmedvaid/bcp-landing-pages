import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadFormSchema, type LeadFormData } from '@/lib/schemas/lead'
import { leadFormConfig } from '@/config/forms'
import { useRef, useState } from 'react'

interface LeadFormProps {
  formId: string
}

export default function LeadForm({ formId }: LeadFormProps) {
  const [submitError, setSubmitError] = useState<string | null>(null)
  const hasStarted = useRef(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zip: '',
      services: [],
      message: '',
      consent: false,
      formId,
    },
  })

  function trackEvent(event: string, data?: Record<string, unknown>) {
    if (typeof window === 'undefined') return
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event, ...data })
  }

  function handleFirstInteraction() {
    if (!hasStarted.current) {
      hasStarted.current = true
      trackEvent('form_start', { form_name: formId })
    }
  }

  async function onSubmit(data: LeadFormData) {
    setSubmitError(null)
    trackEvent('form_submit_attempt', { form_name: formId })

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error('Submission failed')
      }

      trackEvent('form_submit_success', { form_name: formId })
      window.location.href = '/thank-you/'
    } catch {
      trackEvent('form_submit_error', { form_name: formId })
      setSubmitError('Something went wrong. Please try again or call us directly.')
    }
  }

  const fieldConfig = leadFormConfig.fields

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onFocus={handleFirstInteraction}
      className="space-y-5"
      noValidate
    >
      <input type="hidden" {...register('formId')} value={formId} />

      {/* Name */}
      <div>
        <label htmlFor="lead-name" className="mb-1 block text-sm font-medium text-primary-800">
          {fieldConfig.name.label} <span className="text-accent-500">*</span>
        </label>
        <input
          id="lead-name"
          type="text"
          {...register('name')}
          className="w-full rounded-md border border-neutral-200 px-4 py-3 text-primary-800 placeholder:text-neutral-400 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/30"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="lead-email" className="mb-1 block text-sm font-medium text-primary-800">
          {fieldConfig.email.label} <span className="text-accent-500">*</span>
        </label>
        <input
          id="lead-email"
          type="email"
          {...register('email')}
          className="w-full rounded-md border border-neutral-200 px-4 py-3 text-primary-800 placeholder:text-neutral-400 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/30"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="lead-phone" className="mb-1 block text-sm font-medium text-primary-800">
          {fieldConfig.phone.label} <span className="text-accent-500">*</span>
        </label>
        <input
          id="lead-phone"
          type="tel"
          {...register('phone')}
          className="w-full rounded-md border border-neutral-200 px-4 py-3 text-primary-800 placeholder:text-neutral-400 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/30"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>

      {/* Address */}
      <div>
        <label htmlFor="lead-address" className="mb-1 block text-sm font-medium text-primary-800">
          {fieldConfig.address.label}
        </label>
        <input
          id="lead-address"
          type="text"
          {...register('address')}
          className="w-full rounded-md border border-neutral-200 px-4 py-3 text-primary-800 placeholder:text-neutral-400 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/30"
        />
      </div>

      {/* City + ZIP row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-city" className="mb-1 block text-sm font-medium text-primary-800">
            {fieldConfig.city.label} <span className="text-accent-500">*</span>
          </label>
          <input
            id="lead-city"
            type="text"
            {...register('city')}
            className="w-full rounded-md border border-neutral-200 px-4 py-3 text-primary-800 placeholder:text-neutral-400 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/30"
          />
          {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
        </div>
        <div>
          <label htmlFor="lead-zip" className="mb-1 block text-sm font-medium text-primary-800">
            {fieldConfig.zip.label} <span className="text-accent-500">*</span>
          </label>
          <input
            id="lead-zip"
            type="text"
            {...register('zip')}
            className="w-full rounded-md border border-neutral-200 px-4 py-3 text-primary-800 placeholder:text-neutral-400 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/30"
          />
          {errors.zip && <p className="mt-1 text-sm text-red-600">{errors.zip.message}</p>}
        </div>
      </div>

      {/* Services checkbox group */}
      <fieldset>
        <legend className="mb-2 block text-sm font-medium text-primary-800">
          {fieldConfig.services.label} <span className="text-accent-500">*</span>
        </legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {fieldConfig.services.options.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-2 rounded-md border border-neutral-200 px-3 py-2.5 transition-colors hover:border-accent-400 has-checked:border-accent-400 has-checked:bg-accent-50"
            >
              <input
                type="checkbox"
                value={option.value}
                {...register('services')}
                className="h-4 w-4 rounded border-neutral-300 text-accent-500 focus:ring-accent-400"
              />
              <span className="text-sm text-primary-800">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.services && (
          <p className="mt-1 text-sm text-red-600">{errors.services.message}</p>
        )}
      </fieldset>

      {/* Message */}
      <div>
        <label htmlFor="lead-message" className="mb-1 block text-sm font-medium text-primary-800">
          {fieldConfig.message.label}
        </label>
        <textarea
          id="lead-message"
          rows={4}
          placeholder={fieldConfig.message.placeholder}
          {...register('message')}
          className="w-full rounded-md border border-neutral-200 px-4 py-3 text-primary-800 placeholder:text-neutral-400 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/30"
        />
      </div>

      {/* Consent */}
      <div>
        <label className="flex cursor-pointer items-start gap-2">
          <input
            type="checkbox"
            {...register('consent')}
            className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-accent-500 focus:ring-accent-400"
          />
          <span className="text-sm text-neutral-600">{leadFormConfig.consent.label}</span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-sm text-red-600">{errors.consent.message}</p>
        )}
      </div>

      {/* Submit error */}
      {submitError && (
        <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {submitError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-accent-400 px-6 py-3.5 text-base font-semibold text-primary-800 shadow-cta transition-colors hover:bg-accent-500 hover:shadow-none focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Submitting...' : leadFormConfig.submitLabel}
      </button>

      <p className="text-center text-sm text-neutral-500">{leadFormConfig.submitNote}</p>
    </form>
  )
}
