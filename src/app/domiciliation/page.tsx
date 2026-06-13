import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Building2, Mail, DoorOpen, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CTASection from '@/components/sections/CTASection'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Domiciliation d\'Entreprise à Casablanca | ICC',
  description: 'Domiciliation d\'entreprise à Casablanca dès 2500 DHS. Adresse juridique et fiscale pour votre société. Réception et réexpédition de courrier. 3 adresses disponibles.',
  openGraph: {
    title: 'Domiciliation d\'Entreprise à Casablanca | ICC',
    description: 'Adresse juridique et fiscale pour votre société à Casablanca. 3 adresses disponibles.',
  },
  alternates: { canonical: `${SITE_CONFIG.url}/domiciliation` },
}

const advantages = [
  { icon: Building2, title: 'Siège social légal', desc: 'Une adresse conforme aux exigences juridiques et fiscales marocaines' },
  { icon: Mail, title: 'Réception courrier quotidienne', desc: 'Gestion de votre courrier simple et recommandé du lundi au samedi' },
  { icon: DoorOpen, title: 'Salles de réunion disponibles', desc: 'Accès à nos salles équipées pour vos rendez-vous professionnels' },
  { icon: MapPin, title: 'Adresse au choix', desc: '3 adresses prestigieuses disponibles à Casablanca' },
]

const steps = [
  { step: '1', title: 'Vous choisissez votre formule', desc: 'Sélectionnez l\'adresse et les services adaptés à vos besoins' },
  { step: '2', title: 'Nous établissons le contrat', desc: 'Un contrat de domiciliation conforme à la législation marocaine' },
  { step: '3', title: 'Vous utilisez votre adresse', desc: 'Utilisez votre adresse sur tous vos documents commerciaux' },
]

const services = [
  'Contrat de domiciliation (immatriculation juridique)',
  'Adresse sur documents commerciaux et factures',
  'Réception courrier simple et recommandé',
  'Réexpédition quotidienne de votre courrier',
  'Gestion téléphonique',
  'Accès aux salles de réunion',
]

export default function DomiciliationPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center gradient-hero overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.webp')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Domiciliation d&apos;Entreprise &agrave; Casablanca et partout au Maroc
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
              Une adresse juridique et fiscale pour votre soci&eacute;t&eacute;, avec des services inclus
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg">Demander un devis</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background-alt">
                <Image src="/images/about.webp" alt="Pourquoi domicilier son entreprise" fill className="object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">Pourquoi domicilier son entreprise ?</h2>
              <div className="mt-8 space-y-4">
                {[
                  'Économie : Évitez le coût d\'un siège social physique',
                  'Légalité : Adresse conforme aux exigences juridiques',
                  'Flexibilité : 3 adresses disponibles à Casablanca',
                  'Services inclus : Réception et réexpédition du courrier',
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
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Avantages ICC</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => {
              const Icon = adv.icon
              return (
                <div key={adv.title} className="bg-white rounded-xl p-6 shadow-card border border-border text-center">
                  <Icon className="h-10 w-10 mx-auto text-secondary mb-4" />
                  <h3 className="text-lg font-semibold text-primary">{adv.title}</h3>
                  <p className="text-sm text-muted mt-2">{adv.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Comment fonctionne la domiciliation ?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary">{s.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">{s.title}</h3>
                <p className="text-muted mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-8">Services inclus</h2>
            <div className="bg-white rounded-xl p-8 shadow-card border border-border">
              <ul className="space-y-4">
                {services.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
