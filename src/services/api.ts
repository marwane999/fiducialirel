import { API_URL } from '@/lib/constants'
import type { ContactFormData, NewsletterFormData } from '@/types'

async function fetchAPI(endpoint: string, options?: RequestInit) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) throw new Error(`API Error: ${res.status}`)
  return res.json()
}

export async function submitContact(data: ContactFormData) {
  return fetchAPI('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export async function subscribeNewsletter(data: NewsletterFormData) {
  return fetchAPI('/newsletter', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export async function submitFormationInscription(data: Record<string, string>) {
  return fetchAPI('/formations/inscription', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
