'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/constants'
import { phoneLink } from '@/lib/utils'
import { Phone, Mail, MessageCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-padding gradient-hero">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Pr&ecirc;t &agrave; lancer votre projet ?
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Contactez-nous d&egrave;s aujourd&apos;hui pour un devis gratuit et personnalis&eacute;
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Demander un devis gratuit
              </Button>
            </Link>
            <Link href={`https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${SITE_CONFIG.whatsapp.message}`} target="_blank">
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
            <a href={phoneLink(SITE_CONFIG.phones.primary)} className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" />
              {SITE_CONFIG.phones.primary}
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-4 w-4" />
              {SITE_CONFIG.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
