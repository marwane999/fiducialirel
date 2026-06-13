'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SITE_CONFIG } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.webp')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            Cabinet de confiance depuis 2014
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Votre Cabinet de Comptabilit&eacute; et Cr&eacute;ation d&apos;Entreprise &agrave; Casablanca
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl">
            De la cr&eacute;ation &agrave; la gestion comptable, accompagnez votre r&eacute;ussite
            avec des experts qui parlent votre langage.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Obtenez votre devis gratuit
              </Button>
            </Link>
            <Link href="#services">
              <Button variant="outline" size="lg">
                D&eacute;couvrir nos services
              </Button>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <span className="text-secondary">&#9733;</span> {SITE_CONFIG.stats.companiesCreated}+ entreprises cr&eacute;&eacute;es
            </span>
            <span className="flex items-center gap-2">
              <span className="text-secondary">&#9906;</span> 18 Bd d&apos;Anfa, Casablanca
            </span>
            <span className="flex items-center gap-2">
              <span className="text-secondary">&#10003;</span> Devis gratuit sous 24h
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
