declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export function pushEvent(event: string, data?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...data })
}

export function trackFormStart(formName: string): void {
  pushEvent('form_start', { form_name: formName })
}

export function trackFormStep(formName: string, step: number): void {
  pushEvent('form_step', { form_name: formName, step })
}

export function trackFormSubmit(formName: string, success: boolean): void {
  pushEvent('form_submit', { form_name: formName, success })
}

export function trackPhoneClick(): void {
  pushEvent('phone_click')
}

export function trackCTAClick(label: string, location: string): void {
  pushEvent('cta_click', { cta_label: label, cta_location: location })
}
