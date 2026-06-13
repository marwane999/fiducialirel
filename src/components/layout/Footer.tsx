'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'
import { phoneLink } from '@/lib/utils'
import NewsletterForm from '@/components/forms/NewsletterForm'

const footerServices = NAV_LINKS.filter((l) => l.href !== '/')

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link href="/" className="text-2xl font-bold">
              ICC<span className="text-secondary">.</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Votre cabinet de confiance pour la création d&apos;entreprise, la domiciliation
              et la comptabilité au Maroc. Plus de 10 ans d&apos;expertise au service des
              entrepreneurs marocains.
            </p>
            <p className="mt-4 text-sm text-secondary font-semibold">
              &ldquo;{SITE_CONFIG.tagline}&rdquo;
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-3">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                <span>
                  {SITE_CONFIG.address.line1}, {SITE_CONFIG.address.city}{' '}
                  {SITE_CONFIG.address.postalCode}, {SITE_CONFIG.address.country}
                </span>
              </li>
              <li>
                <a
                  href={phoneLink(SITE_CONFIG.phones.primary)}
                  className="flex items-center gap-2 hover:text-secondary transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-secondary" />
                  <span>{SITE_CONFIG.phones.primary}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phones.secondary}`}
                  className="flex items-center gap-2 hover:text-secondary transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-secondary" />
                  <span>{SITE_CONFIG.phones.secondary}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 hover:text-secondary transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0 text-secondary" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                <span>
                  Lun-Ven: {SITE_CONFIG.hours.weekdays}
                  <br />
                  Sam: {SITE_CONFIG.hours.saturday}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <NewsletterForm />
            <div className="mt-6">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
                <span className="text-sm">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>&copy; 2026 ICC - Cabinet de Comptabilit&eacute; &amp; Cr&eacute;ation d&apos;Entreprise</p>
            <div className="flex gap-4">
              <Link href="/mentions-legales" className="hover:text-secondary transition-colors">
                Mentions L&eacute;gales
              </Link>
              <Link href="/confidentialite" className="hover:text-secondary transition-colors">
                Politique de Confidentialit&eacute;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
