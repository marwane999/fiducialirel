import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Fiduciaire le Médiateur - Cabinet de Comptabilité & Création d\'Entreprise à Casablanca',
    template: '%s | Fiduciaire le Médiateur',
  },
  description: 'Cabinet de comptabilité et création d\'entreprise au Maroc. Création de société dès 800 DHS, domiciliation, expertise comptable et formation Sage à Casablanca.',
  keywords: ['cabinet comptable Casablanca', 'création entreprise Maroc', 'domiciliation entreprise', 'expertise comptable Maroc', 'comptabilité Maroc', 'Fiduciaire le Médiateur'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Fiduciaire le Médiateur',
    url: 'https://fiduciairelemediateur.com',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Fiduciaire le Médiateur - Cabinet de Comptabilité',
  image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://fiduciairelemediateur.com'}/images/logo.png`,
  telephone: '+212 5 22 98 08 01',
  email: 'contact@fiduciairelemediateur.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: "18 Boulevard d'Anfa, 1er étage",
    addressLocality: 'Casablanca',
    addressRegion: 'Grand Casablanca',
    postalCode: '20250',
    addressCountry: 'MA',
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  priceRange: '800-5000 DHS',
  areaServed: 'Maroc',
  numberOfEmployees: '10-20',
  foundingDate: '2014',
  sameAs: ['https://www.facebook.com/Fiduciaire.le.mediateur1/'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  )
}
