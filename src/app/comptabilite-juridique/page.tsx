import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, BookOpen, TrendingUp, FileText, Calculator, Users, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Expertise Comptable et Juridique au Maroc | Fiduciaire le Médiateur',
  description: 'Expertise comptable et juridique pour les entreprises au Maroc. TVA, IS, IR, CNSS, bilans, paie. Confiez votre comptabilité à des experts à Casablanca.',
  openGraph: {
    title: 'Expertise Comptable et Juridique au Maroc | Fiduciaire le Médiateur',
    description: 'Confiez votre comptabilité à des experts et concentrez-vous sur votre croissance.',
  },
  alternates: { canonical: `${SITE_CONFIG.url}/comptabilite-juridique` },
}

const services = [
  { icon: BookOpen, title: 'Journaux comptables', desc: 'Tenue de comptabilité conforme aux normes marocaines' },
  { icon: TrendingUp, title: 'Suivi des immobilisations', desc: 'Gestion et suivi de vos actifs immobilisés' },
  { icon: FileText, title: 'Analyse des comptes', desc: 'Analyse détaillée de votre situation financière' },
  { icon: Calculator, title: 'Déclarations fiscales', desc: 'TVA, IR, IS, CNSS - toutes vos déclarations' },
  { icon: Users, title: 'Traitement de la paie', desc: 'Gestion mensuelle de la paie et des déclarations sociales' },
  { icon: BarChart3, title: 'Bilans et états de synthèse', desc: 'Bilan, CPC, ESG - états financiers complets' },
]

export default function ComptabiliteJuridiquePage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center gradient-hero overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.webp')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Expertise Comptable et Juridique pour votre Entreprise au Maroc
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
              Confiez votre comptabilit&eacute; &agrave; des experts et concentrez-vous sur votre croissance
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg">Demander un devis comptable</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
              <p className="text-red-700 font-medium">La mauvaise gestion comptable est la 1&egrave;re cause de faillite des PME. Fiduciaire le M&eacute;diateur vous offre une gestion comptable experte pour &eacute;viter les risques.</p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Pourquoi une comptabilit&eacute; professionnelle est cruciale</h2>
            <p className="mt-4 text-lg text-muted">Prot&eacute;gez votre entreprise avec une comptabilit&eacute; tenue par des experts</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="bg-white rounded-xl p-6 shadow-card border border-border">
                  <Icon className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
                  <p className="text-sm text-muted mt-2">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background-alt">
                <Image src="/images/about.webp" alt="Expert comptable Maroc" fill className="object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">Un expert comptable pour votre entreprise</h2>
              <div className="mt-8 space-y-4">
                {[
                  '10+ ans d\'expérience en expertise comptable au Maroc',
                  'Expertise reconnue sur tout le Maroc',
                  'Tarifs compétitifs et transparents',
                  'Équipe qualifiée de comptables diplômés',
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
      </section>

      <section className="section-padding bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-8">Optimisez votre fiscalit&eacute; avec nos experts</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                'Déclarations conformes à la législation marocaine',
                'Optimisation fiscale légale et transparente',
                'Veille réglementaire et mise à jour continue',
                'Conseils personnalisés pour votre situation',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-card border border-border">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </>
  )
}
