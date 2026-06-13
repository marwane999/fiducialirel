export interface ContactFormData {
  nom: string
  email: string
  telephone: string
  sujet: string
  message: string
}

export interface NewsletterFormData {
  email: string
}

export interface FormationInscriptionData {
  nom: string
  email: string
  telephone: string
  niveau: string
  message?: string
}

export interface ServiceCard {
  title: string
  description: string
  icon: string
  href: string
  price?: string
}

export interface PricingPack {
  name: string
  price: number
  description: string
  features: string[]
  highlighted?: boolean
  badge?: string
  cta: string
}

export interface Testimonial {
  name: string
  company: string
  content: string
  rating: number
  avatar?: string
}

export interface FAQ {
  question: string
  answer: string
}
