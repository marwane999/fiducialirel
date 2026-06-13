import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, currency = 'DHS') {
  return new Intl.NumberFormat('fr-FR').format(price) + ` ${currency}`
}

export const phoneLink = (phone: string) => `tel:${phone.replace(/[^+\d]/g, '')}`
