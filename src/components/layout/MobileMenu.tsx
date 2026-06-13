'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'
import { phoneLink } from '@/lib/utils'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-primary"
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-white">
          <nav className="flex flex-col p-6">
            <a
              href={phoneLink(SITE_CONFIG.phones.primary)}
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-white mb-6"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold">{SITE_CONFIG.phones.primary}</span>
            </a>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-border py-4 text-lg font-medium text-primary hover:text-secondary transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
