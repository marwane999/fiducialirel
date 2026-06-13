'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import type { FAQ } from '@/types'

const faqs: FAQ[] = [
  {
    question: 'Combien coûte la création d\'une entreprise au Maroc ?',
    answer: 'À partir de 800 DHS avec notre pack starter tout compris. Nos packs Prestige (3000 DHS) et Professionnel (4500 DHS) incluent plus de services comme la domiciliation et l\'accompagnement personnalisé.',
  },
  {
    question: 'Quels sont les délais pour créer une entreprise ?',
    answer: 'Sous 3 à 7 jours ouvrés en fonction de la complexité du dossier et de la forme juridique choisie. Nous proposons également une création express pour les dossiers urgents.',
  },
  {
    question: 'Puis-je domicilier mon entreprise sans créer de société ?',
    answer: 'Oui, nous proposons la domiciliation seule. Vous pouvez bénéficier d\'une adresse juridique et fiscale à Casablanca sans avoir à créer votre société chez nous.',
  },
  {
    question: 'Quels documents sont nécessaires pour créer ma société ?',
    answer: 'Les documents de base sont : votre CNI ou passeport en cours de validité. Selon la forme juridique choisie, des documents supplémentaires peuvent être nécessaires (statuts, etc.).',
  },
  {
    question: 'Proposez-vous un accompagnement comptable régulier ?',
    answer: 'Oui, de la TVA aux déclarations CNSS en passant par les bilans annuels, nos experts comptables vous couvrent. Nous proposons un suivi mensuel de votre comptabilité avec des rapports clairs.',
  },
]

export default function FAQSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            Questions fr&eacute;quentes
          </h2>
          <p className="mt-4 text-lg text-muted">
            Tout ce que vous devez savoir sur nos services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
