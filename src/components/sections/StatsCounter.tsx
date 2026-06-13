'use client'

import { motion } from 'framer-motion'
import { SITE_CONFIG } from '@/lib/constants'
import { Building2, Users, Star, MapPin } from 'lucide-react'

const stats = [
  { icon: Users, value: `${SITE_CONFIG.stats.yearsExperience}+`, label: "Ans d'expérience" },
  { icon: Building2, value: `${SITE_CONFIG.stats.companiesCreated}+`, label: 'Entreprises créées' },
  { icon: Star, value: `${SITE_CONFIG.stats.satisfaction}%`, label: 'Satisfaction' },
  { icon: MapPin, value: `${SITE_CONFIG.stats.locations}`, label: 'Adresses disponibles' },
]

export default function StatsCounter() {
  return (
    <section className="bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <Icon className="h-8 w-8 mx-auto text-secondary mb-3" />
                <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
