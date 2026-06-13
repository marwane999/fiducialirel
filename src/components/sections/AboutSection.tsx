'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const advantages = [
  'Expertise reconnue: Plus de 10 ans d\'expérience au Maroc',
  'Prix transparents: À partir de 800 DHS, pas de frais cachés',
  'Accompagnement complet: De la création à la comptabilité',
  'Rapidité: Création d\'entreprise en quelques jours',
  'Proximité: Un bureau à Casablanca, une équipe à votre écoute',
]

const approachPoints = [
  'Notre mission : Vous simplifier l\'entrepreneuriat en prenant en charge toutes les démarches administratives',
  'Notre expertise : Une équipe de professionnels comptables diplômés avec plus de 10 ans d\'expérience',
  'Notre différence : Un accompagnement personnalisé avec des prix transparents et sans frais cachés',
]

export default function AboutSection() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 w-full"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background-alt">
                <Image
                  src="/images/about.webp"
                  alt="Fiduciaire le Médiateur Cabinet Comptable Casablanca"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                Pourquoi choisir Fiduciaire le M&eacute;diateur pour votre entreprise ?
              </h2>
              <div className="mt-8 space-y-4">
                {advantages.map((adv) => (
                  <div key={adv} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted">{adv}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 w-full"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background-alt">
                <Image
                  src="/images/approach.webp"
                  alt="Notre approche Fiduciaire le Médiateur"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                Notre approche : vous simplifier l&apos;entrepreneuriat
              </h2>
              <p className="mt-4 text-muted text-lg">
                Nous sommes le meilleur m&eacute;diateur entre vous et l&apos;administration
              </p>
              <div className="mt-8 space-y-6">
                {approachPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
