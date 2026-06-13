import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PricingCards from '@/components/sections/PricingCards'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Création d\'Entreprise au Maroc | ICC',
  description: 'Créez votre entreprise au Maroc à partir de 800 DHS. Accompagnement complet par des experts comptables à Casablanca. Création express en quelques jours.',
  openGraph: {
    title: 'Création d\'Entreprise au Maroc | ICC',
    description: 'Créez votre entreprise au Maroc à partir de 800 DHS. Accompagnement complet par des experts comptables à Casablanca.',
  },
  alternates: { canonical: `${SITE_CONFIG.url}/creation-entreprise` },
}

const steps = [
  { number: '01', title: 'Certificat négatif', desc: 'Vérification et réservation de votre dénomination sociale auprès du registre de commerce.' },
  { number: '02', title: 'Enregistrement de la société', desc: 'Rédaction et dépôt des statuts, constitution du dossier juridique complet.' },
  { number: '03', title: 'Immatriculation au Registre du Commerce', desc: 'Inscription de votre société au tribunal de commerce compétent.' },
  { number: '04', title: 'Affiliation CNSS', desc: 'Déclaration et affiliation de votre société auprès de la CNSS.' },
  { number: '05', title: 'Publication de l\'avis d\'immatriculation', desc: 'Publication au Bulletin Officiel et dans un journal d\'annonces légales.' },
  { number: '06', title: 'Remise des clés juridiques', desc: 'Vous recevez tous les documents officiels : statuts, RC, patente, et plus.' },
]

export default function CreationEntreprisePage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center gradient-hero overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.webp')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Créez votre entreprise au Maroc &agrave; partir de 800 DHS
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
              Confiez les d&eacute;marches administratives &agrave; nos experts et concentrez-vous sur votre business
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg">Demander un devis gratuit</Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-300 flex items-center gap-2">
              <span className="text-secondary">&#9733;</span> {SITE_CONFIG.stats.companiesCreated}+ entreprises cr&eacute;&eacute;es &middot; Cr&eacute;ation express en quelques jours
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Les 6 &eacute;tapes de cr&eacute;ation simplifi&eacute;es</h2>
            <p className="mt-4 text-lg text-muted">Nous nous occupons de tout, de A &agrave; Z</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-xl p-6 shadow-card border border-border">
                <span className="text-4xl font-bold text-secondary/30">{step.number}</span>
                <h3 className="text-xl font-semibold text-primary mt-2">{step.title}</h3>
                <p className="text-muted text-sm mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background-alt">
                <Image src="/images/about.webp" alt="Pourquoi créer avec ICC" fill className="object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">Pourquoi cr&eacute;er votre entreprise avec ICC ?</h2>
              <div className="mt-8 space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-700 font-medium">La cr&eacute;ation d&apos;entreprise au Maroc est complexe et longue. Une erreur peut vous co&ucirc;ter des mois de retard.</p>
                </div>
                <div className="space-y-4">
                  {[
                    'Prise en charge totale des démarches administratives',
                    'Création express en quelques jours',
                    'Prix à partir de 800 DHS, pas de frais cachés',
                    'Accompagnement personnalisé par des experts',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingCards />

      <section className="section-padding bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: '10+ ans d\'expérience', desc: 'Une expertise reconnue au Maroc' },
              { title: 'Prix les plus bas', desc: 'À partir de 800 DHS, sans frais cachés' },
              { title: 'Suivi personnalisé', desc: 'Un interlocuteur unique dédié' },
              { title: 'Services complémentaires', desc: 'Domiciliation et comptabilité incluses' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-card border border-border text-center">
                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                <p className="text-sm text-muted mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </>
  )
}
