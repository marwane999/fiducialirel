import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Calendar, Clock, MapPin, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CTASection from '@/components/sections/CTASection'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Formation Comptable Professionnelle Sage | Fiduciaire le Médiateur',
  description: 'Formation comptable professionnelle sur Sage à Casablanca. Devenez comptable confirmé en 3 mois. Formation pratique avec travaux dirigés. Certificat de formation.',
  openGraph: {
    title: 'Formation Comptable Professionnelle Sage | Fiduciaire le Médiateur',
    description: 'Devenez comptable confirmé en 3 mois avec notre formation pratique sur Sage.',
  },
  alternates: { canonical: `${SITE_CONFIG.url}/formations` },
}

const program = [
  {
    month: 'Mois 1',
    title: 'Opérations Courantes',
    topics: [
      'Rappel et constitution du dossier comptable',
      'Dossier Achat - facture d\'achat',
      'Dossier Client - Vente',
      'Dossier Fiscalité',
      'Autres opérations comptables',
    ],
  },
  {
    month: 'Mois 2',
    title: 'SAGE à 100%',
    topics: [
      'Installation et paramétrage de Sage',
      'Enregistrement des opérations comptables',
      'Suivi des opérations et analyse des comptes',
      'Balance...',
    ],
  },
  {
    month: 'Mois 3',
    title: 'Fin d\'exercice - Liasse Fiscale',
    topics: [
      'Bilan, CPC, ESG...',
      'Dossier Amortissement & Provision',
      'Les autres tableaux sur Excel',
      'Clôture d\'exercice',
    ],
  },
]

const infos = [
  { icon: Calendar, label: 'Durée', value: '3 mois' },
  { icon: Clock, label: 'Horaires', value: 'Chaque samedi de 14h à 18h' },
  { icon: MapPin, label: 'Format', value: 'Présentiel (Casablanca)' },
  { icon: Users, label: 'Support', value: 'Travaux pratiques sur SAGE' },
  { icon: Award, label: 'Prérequis', value: 'Notions de base en comptabilité' },
]

export default function FormationsPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center gradient-hero overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.webp')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="bg-red-500/20 text-red-200 rounded-lg px-4 py-2 inline-block mb-6 text-sm font-semibold">
              Places limit&eacute;es - Inscrivez-vous d&egrave;s maintenant
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Formation Comptable Professionnelle sur Sage
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
              Devenez comptable confirm&eacute; en 3 mois avec notre formation pratique
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="#inscription">
                <Button variant="primary" size="lg">S&apos;inscrire &agrave; la formation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Devenir Comptable Confirm&eacute;</h2>
            <p className="text-muted text-lg mb-8">Formation avec travaux pratiques sur SAGE</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Maîtriser les fondamentaux de la comptabilité générale',
                'Garantir une tenue pratique de la comptabilité',
                'Maîtriser les opérations comptables courantes',
                'Préparer les déclarations TVA et cotisations sociales',
                'Traiter les factures, encours, relances',
                'Tenir les comptes sur SAGE',
                'Organiser les travaux de clôture',
                'Élaborer les états de synthèse',
              ].map((obj) => (
                <div key={obj} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted text-sm">{obj}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">Programme de la formation sur 3 mois</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {program.map((p) => (
              <div key={p.month} className="bg-background-alt rounded-xl p-6 border border-border">
                <div className="text-secondary font-bold text-sm mb-1">{p.month}</div>
                <h3 className="text-xl font-semibold text-primary mb-4">{p.title}</h3>
                <ul className="space-y-2">
                  {p.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-muted">
                      <span className="text-secondary mt-1">&bull;</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-8">Informations pratiques</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {infos.map((info) => {
              const Icon = info.icon
              return (
                <div key={info.label} className="bg-white rounded-xl p-4 shadow-card border border-border text-center">
                  <Icon className="h-8 w-8 mx-auto text-secondary mb-2" />
                  <p className="text-xs text-muted uppercase tracking-wider">{info.label}</p>
                  <p className="text-sm font-semibold text-primary mt-1">{info.value}</p>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted italic">Formation agr&eacute;ment&eacute;e d&apos;exemples et de dossiers pratiques</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-8">Pourquoi choisir notre formation ?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              'Formateurs experts comptables',
              'Formation pratique sur SAGE',
              'Petits groupes (attention personnalisée)',
              'Accès aux salles équipées',
              'Certificat de formation',
            ].map((item) => (
              <div key={item} className="bg-background-alt rounded-xl p-4 border border-border text-center">
                <CheckCircle2 className="h-8 w-8 mx-auto text-secondary mb-2" />
                <p className="text-sm text-muted">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inscription" className="section-padding bg-background-alt">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-card border border-border">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">Inscrivez-vous &agrave; la prochaine session</h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="form-nom" className="block text-sm font-medium text-primary mb-1">Nom & Pr&eacute;nom *</label>
                <input id="form-nom" type="text" required className="flex h-12 w-full rounded-lg border border-border bg-white px-4 py-3 text-base" placeholder="Votre nom complet" />
              </div>
              <div>
                <label htmlFor="form-email" className="block text-sm font-medium text-primary mb-1">Email *</label>
                <input id="form-email" type="email" required className="flex h-12 w-full rounded-lg border border-border bg-white px-4 py-3 text-base" placeholder="votre@email.com" />
              </div>
              <div>
                <label htmlFor="form-tel" className="block text-sm font-medium text-primary mb-1">T&eacute;l&eacute;phone *</label>
                <input id="form-tel" type="tel" required className="flex h-12 w-full rounded-lg border border-border bg-white px-4 py-3 text-base" placeholder="+212 6 XX XX XX XX" />
              </div>
              <div>
                <label htmlFor="form-niveau" className="block text-sm font-medium text-primary mb-1">Niveau actuel *</label>
                <select id="form-niveau" required className="flex h-12 w-full rounded-lg border border-border bg-white px-4 py-3 text-base">
                  <option value="">S&eacute;lectionnez votre niveau</option>
                  <option value="debutant">D&eacute;butant</option>
                  <option value="intermediaire">Interm&eacute;diaire</option>
                  <option value="confirme">Confirm&eacute;</option>
                </select>
              </div>
              <div>
                <label htmlFor="form-msg" className="block text-sm font-medium text-primary mb-1">Message (optionnel)</label>
                <textarea id="form-msg" rows={3} className="flex w-full rounded-lg border border-border bg-white px-4 py-3 text-base" placeholder="Votre message..." />
              </div>
              <Button type="submit" variant="primary" className="w-full">Je m&apos;inscris</Button>
            </form>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
