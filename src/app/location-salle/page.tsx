import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Wifi, Projector, AirVent, Coffee, Monitor, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CTASection from '@/components/sections/CTASection'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Location de Salle de Réunion à Casablanca | ICC',
  description: 'Location de salles de réunion, conférence et formation à Casablanca. Salles équipées (WiFi, vidéoprojecteur). Tarifs abordables. Réservation en ligne.',
  openGraph: {
    title: 'Location de Salle de Réunion à Casablanca | ICC',
    description: 'Salles équipées pour vos réunions, formations et conférences à Casablanca.',
  },
  alternates: { canonical: `${SITE_CONFIG.url}/location-salle` },
}

const rooms = [
  { name: 'Salle de réunion', capacity: '8-12 personnes', icon: Users },
  { name: 'Salle de conférence', capacity: '20-30 personnes', icon: Monitor },
  { name: 'Salle de formation', capacity: '10-15 personnes', icon: Users },
]

const equipments = [
  { icon: Wifi, label: 'WiFi haut débit gratuit' },
  { icon: Projector, label: 'Vidéoprojecteur' },
  { icon: Monitor, label: 'Tableau blanc et marqueurs' },
  { icon: AirVent, label: 'Climatisation' },
  { icon: Coffee, label: 'Catering possible' },
]

const formulas = [
  { name: '1/2 Journée', duration: '4h', price: 'Sur devis', desc: 'Idéal pour une réunion rapide' },
  { name: 'Journée', duration: '8h', price: 'Sur devis', desc: 'Pour vos sessions de travail complètes' },
  { name: 'Mensuel', duration: 'Abonnement', price: 'Sur devis', desc: 'Pour un usage régulier' },
]

export default function LocationSallePage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center gradient-hero overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.webp')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Location de Salles de R&eacute;union et Conf&eacute;rence &agrave; Casablanca
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
              Des salles tout &eacute;quip&eacute;es pour vos r&eacute;unions, formations et conf&eacute;rences
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg">R&eacute;server une salle</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-background-alt">
              <Image src="/images/about.webp" alt="Salle de réunion ICC Casablanca" fill className="object-cover" />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-background-alt">
              <Image src="/images/about.webp" alt="Salle de conférence ICC" fill className="object-cover" />
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Des salles adapt&eacute;es &agrave; vos besoins</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {rooms.map((room) => {
              const Icon = room.icon
              return (
                <div key={room.name} className="bg-white rounded-xl p-6 shadow-card border border-border text-center">
                  <Icon className="h-10 w-10 mx-auto text-secondary mb-4" />
                  <h3 className="text-xl font-semibold text-primary">{room.name}</h3>
                  <p className="text-muted mt-2">{room.capacity}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-card border border-border">
            <h3 className="text-2xl font-bold text-primary text-center mb-6">&Eacute;quipements inclus</h3>
            <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {equipments.map((eq) => {
                const Icon = eq.icon
                return (
                  <div key={eq.label} className="flex flex-col items-center gap-2 text-center">
                    <Icon className="h-8 w-8 text-secondary" />
                    <span className="text-sm text-muted">{eq.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Nos formules de location</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {formulas.map((f) => (
              <div key={f.name} className="rounded-xl border-2 border-border bg-white p-6 shadow-card text-center">
                <h3 className="text-xl font-bold text-primary">{f.name}</h3>
                <p className="text-sm text-muted mt-1">{f.duration}</p>
                <p className="text-2xl font-bold text-secondary my-4">{f.price}</p>
                <p className="text-sm text-muted mb-6">{f.desc}</p>
                <Link href="/contact">
                  <Button variant="primary" className="w-full">R&eacute;server</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-card border border-border">
              <h3 className="text-lg font-semibold text-primary mb-3">Adresse 1</h3>
              <p className="text-muted">18 Boulevard d&apos;Anfa, 1er &eacute;tage, Casablanca</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-card border border-border">
              <h3 className="text-lg font-semibold text-primary mb-3">Adresse 2</h3>
              <p className="text-muted">Bd Yacoub El Mansour, N&deg; 17 quartier Burger, Casablanca</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-muted">T&eacute;l&eacute;phones : {SITE_CONFIG.phones.primary} | {SITE_CONFIG.phones.secondary}</p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
