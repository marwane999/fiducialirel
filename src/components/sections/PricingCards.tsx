'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { formatPrice } from '@/lib/utils'
import type { PricingPack } from '@/types'

const packs: PricingPack[] = [
  {
    name: 'Starter',
    price: 2500,
    description: 'Pack idéal pour démarrer',
    features: [
      'Création de votre entreprise',
      '6 mois de domiciliation',
      'Certificat négatif',
      'Immatriculation RC',
    ],
    cta: 'Choisir ce pack',
  },
  {
    name: 'Prestige',
    price: 3000,
    description: 'Le plus populaire',
    features: [
      'Création de votre entreprise',
      '6 mois de domiciliation',
      'Conseil & Accompagnement',
      'Certificat négatif',
      'Immatriculation RC',
      'Affiliation CNSS',
    ],
    highlighted: true,
    badge: 'Le plus choisi',
    cta: 'Choisir ce pack',
  },
  {
    name: 'Professionnel',
    price: 4500,
    description: 'Solution complète',
    features: [
      'Création de votre entreprise',
      '12 mois de domiciliation',
      'Conseil & Accompagnement',
      'Certificat négatif',
      'Immatriculation RC',
      'Affiliation CNSS',
      'Publication au BO',
    ],
    cta: 'Choisir ce pack',
  },
]

export default function PricingCards() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            Nos packs de cr&eacute;ation d&apos;entreprise
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Des solutions adapt&eacute;es &agrave; tous les besoins et budgets
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {packs.map((pack, index) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`rounded-xl border-2 p-6 lg:p-8 flex flex-col ${
                pack.highlighted
                  ? 'border-secondary bg-secondary/5 shadow-lg scale-105 lg:scale-110'
                  : 'border-border bg-white shadow-card hover:shadow-card-hover'
              } transition-all duration-300`}
            >
              {pack.badge && (
                <Badge variant="secondary" className="self-start mb-4 text-sm px-4 py-1.5">
                  &#9733; {pack.badge}
                </Badge>
              )}
              <h3 className="text-2xl font-bold text-primary">{pack.name}</h3>
              <p className="text-muted text-sm mt-1">{pack.description}</p>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold text-primary">{formatPrice(pack.price)}</span>
              </div>
              <ul className="space-y-3 flex-1">
                {pack.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-8 block">
                <Button
                  variant={pack.highlighted ? 'secondary' : 'primary'}
                  className="w-full"
                >
                  {pack.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted mt-8">
          Satisfait ou rembours&eacute; &#8226; Devis gratuit &#8226; Accompagnement personnalis&eacute;
        </p>
      </div>
    </section>
  )
}
