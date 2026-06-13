export const SITE_CONFIG = {
  name: 'ICC',
  tagline: 'Votre réussite, notre mission',
  description: 'Cabinet de comptabilité et création d\'entreprise',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://icc.ma',
  email: process.env.NEXT_PUBLIC_EMAIL || 'contact@icc.ma',
  phones: {
    primary: process.env.NEXT_PUBLIC_PHONE_PRIMARY || '+212 5 22 98 08 01',
    secondary: process.env.NEXT_PUBLIC_PHONE_SECONDARY || '+212 6 63 21 96 12',
  },
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+212663216912',
    message: process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Bonjour%21%20Je%20souhaite%20des%20informations',
  },
  address: {
    line1: '18 Boulevard d\'Anfa, 1er étage',
    city: 'Casablanca',
    postalCode: '20250',
    country: 'MAROC',
  },
  social: {
    facebook: 'https://www.facebook.com/Fiduciaire.le.mediateur1/',
  },
  hours: {
    weekdays: '09h00 - 18h00',
    saturday: '09h00 - 13h00',
  },
  stats: {
    yearsExperience: 10,
    companiesCreated: 500,
    satisfaction: 98,
    locations: 3,
  },
} as const

export const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/creation-entreprise', label: 'Création Entreprise' },
  { href: '/domiciliation', label: 'Domiciliation' },
  { href: '/comptabilite-juridique', label: 'Comptabilité et Juridique' },
  { href: '/location-salle', label: 'Location de Salle' },
  { href: '/formations', label: 'Formations' },
  { href: '/contact', label: 'Contactez Nous' },
] as const

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'
