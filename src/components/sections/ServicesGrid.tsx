'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Building2, MapPin, Calculator, DoorOpen } from 'lucide-react'
import type { ServiceCard } from '@/types'

const services: ServiceCard[] = [
  {
    title: 'Création d\'Entreprise',
    description: 'De 800 DHS · Création express en quelques jours',
    icon: 'building',
    href: '/creation-entreprise',
    price: 'Dès 800 DHS',
  },
  {
    title: 'Domiciliation',
    description: 'Adresse juridique · Réception courrier · 3 adresses',
    icon: 'map',
    href: '/domiciliation',
  },
  {
    title: 'Comptabilité & Juridique',
    description: 'Expertise comptable · TVA · Bilan · CNSS',
    icon: 'calculator',
    href: '/comptabilite-juridique',
  },
  {
    title: 'Location de Salles',
    description: 'Salles équipées · Réunion · Formation · Conférence',
    icon: 'door',
    href: '/location-salle',
  },
]

const iconMap: Record<string, React.ElementType> = {
  building: Building2,
  map: MapPin,
  calculator: Calculator,
  door: DoorOpen,
}

export default function ServicesGrid() {
  return (
    <section id="services" className="section-padding bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            Des services complets pour votre entreprise
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            De la cr&eacute;ation &agrave; la gestion, Fiduciaire le M&eacute;diateur vous accompagne &agrave; chaque &eacute;tape
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href} className="card-service group block h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    {Icon && <Icon className="h-7 w-7 text-primary" />}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{service.description}</p>
                  {service.price && (
                    <p className="mt-3 text-secondary font-bold">{service.price}</p>
                  )}
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-secondary group-hover:gap-2 transition-all">
                    En savoir plus &rarr;
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
