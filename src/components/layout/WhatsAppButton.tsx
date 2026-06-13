'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function WhatsAppButton() {
  const href = `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${SITE_CONFIG.whatsapp.message}`

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all duration-300 hover:bg-green-600 hover:scale-110 hover:shadow-2xl"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  )
}
