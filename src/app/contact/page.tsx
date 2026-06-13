import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact | Fiduciaire le Médiateur - Cabinet Comptable Casablanca',
  description: 'Contactez Fiduciaire le Médiateur pour un devis gratuit. Cabinet de comptabilité et création d\'entreprise à Casablanca. Réponse sous 24h.',
  openGraph: {
    title: 'Contact | Fiduciaire le Médiateur - Cabinet Comptable Casablanca',
    description: 'Parlons de votre projet. Devis gratuit sous 24h.',
  },
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
}

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-center gradient-hero overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
               Contactez Fiduciaire le M&eacute;diateur - Cabinet de Comptabilit&eacute; Casablanca
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Parlons de votre projet. Devis gratuit sous 24h.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8">Nos coordonn&eacute;es</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Adresse</h3>
                    <p className="text-muted">{SITE_CONFIG.address.line1}<br />{SITE_CONFIG.address.city} {SITE_CONFIG.address.postalCode}, {SITE_CONFIG.address.country}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">T&eacute;l&eacute;phone</h3>
                    <a href={`tel:${SITE_CONFIG.phones.primary}`} className="text-muted hover:text-secondary transition-colors block">{SITE_CONFIG.phones.primary}</a>
                    <a href={`tel:${SITE_CONFIG.phones.secondary}`} className="text-muted hover:text-secondary transition-colors block">{SITE_CONFIG.phones.secondary}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Email</h3>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-muted hover:text-secondary transition-colors">{SITE_CONFIG.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Horaires</h3>
                    <p className="text-muted">Lun-Ven: {SITE_CONFIG.hours.weekdays}<br />Sam: {SITE_CONFIG.hours.saturday}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <Facebook className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">R&eacute;seaux sociaux</h3>
                    <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-secondary transition-colors">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.837!2d-7.620!3d33.589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzIwLjQiTiA3wrAzNycyMS4yIlc!5e0!3m2!1sfr!2sma!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fiduciaire le Médiateur Casablanca"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-8">Envoyez-nous un message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
