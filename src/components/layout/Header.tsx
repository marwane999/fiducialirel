'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'
import { phoneLink } from '@/lib/utils'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              Fiduciaire le M&eacute;diateur
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-primary hover:text-secondary transition-colors rounded-lg hover:bg-gray-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={phoneLink(SITE_CONFIG.phones.primary)}
              className="flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>{SITE_CONFIG.phones.primary}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-light transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Devis gratuit
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={phoneLink(SITE_CONFIG.phones.primary)}
              className="p-2 text-primary"
              aria-label="Appeler"
            >
              <Phone className="h-5 w-5" />
            </a>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
