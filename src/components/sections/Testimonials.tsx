'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import type { Testimonial } from '@/types'

const testimonials: Testimonial[] = [
  {
    name: 'Mehdi T.',
    company: 'Fondateur Startup, Casablanca',
    content: 'Fiduciaire le Médiateur m\'a accompagné pour la création de ma société. Tout a été fait en 5 jours chrono ! Une équipe professionnelle et réactive.',
    rating: 5,
  },
  {
    name: 'Fatima Z.',
    company: 'Freelance Design, Rabat',
    content: 'Un cabinet sérieux et professionnel. Je recommande pour la domiciliation. Mon courrier est géré rapidement et mon siège social est conforme.',
    rating: 5,
  },
  {
    name: 'Youssef E.',
    company: 'Gérant TPE, Casablanca',
    content: 'Je confie ma comptabilité à Fiduciaire le Médiateur depuis 2 ans. Une tranquillité d\'esprit incomparable. Les déclarations fiscales sont toujours dans les temps.',
    rating: 5,
  },
  {
    name: 'Amina B.',
    company: 'Entrepreneure, Marrakech',
    content: 'Grâce à Fiduciaire le Médiateur, j\'ai pu créer ma société à distance. Tout a été géré par email et téléphone. Un gain de temps énorme !',
    rating: 5,
  },
  {
    name: 'Karim L.',
    company: 'Consultant, Tanger',
    content: 'Formation Sage excellente. Les formateurs sont des experts comptables qui connaissent leur sujet. Je recommande vivement.',
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            Ce que disent nos clients
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Rejoignez les {500}+ entrepreneurs qui nous font confiance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-card border border-border"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? 'fill-secondary text-secondary' : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
