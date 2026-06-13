import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Mentions Légales | Fiduciaire le Médiateur',
  description: 'Mentions légales du cabinet Fiduciaire le Médiateur - Cabinet de comptabilité et création d\'entreprise à Casablanca.',
  alternates: { canonical: `${SITE_CONFIG.url}/mentions-legales` },
}

export default function MentionsLegalesPage() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-8">Mentions L&eacute;gales</h1>

          <div className="space-y-8 text-muted leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">1. &Eacute;dition du site</h2>
              <p>Le site {SITE_CONFIG.url} est &eacute;dit&eacute; par Fiduciaire le M&eacute;diateur - Cabinet de Comptabilit&eacute; et Cr&eacute;ation d&apos;Entreprise.</p>
              <p className="mt-2">
                {SITE_CONFIG.address.line1}, {SITE_CONFIG.address.city} {SITE_CONFIG.address.postalCode}, {SITE_CONFIG.address.country}
              </p>
              <p className="mt-2">T&eacute;l&eacute;phone : {SITE_CONFIG.phones.primary}</p>
              <p>Email : {SITE_CONFIG.email}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">2. Directeur de la publication</h2>
              <p>Le directeur de la publication est le g&eacute;rant du cabinet Fiduciaire le M&eacute;diateur.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">3. H&eacute;bergement</h2>
              <p>Le site est h&eacute;berg&eacute; par Easypanel (VPS).</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">4. Propri&eacute;t&eacute; intellectuelle</h2>
              <p>L&apos;ensemble du contenu du site (textes, images, logos) est la propri&eacute;t&eacute; exclusive de Fiduciaire le M&eacute;diateur. Toute reproduction est interdite sans autorisation pr&eacute;alable.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">5. Responsabilit&eacute;</h2>
              <p>Fiduciaire le M&eacute;diateur s&apos;efforce d&apos;assurer l&apos;exactitude des informations pr&eacute;sent&eacute;es. Il ne saurait &ecirc;tre tenu responsable des erreurs ou omissions.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">6. Liens hypertextes</h2>
              <p>Les liens externes pr&eacute;sents sur ce site ne sauraient engager la responsabilit&eacute; de Fiduciaire le M&eacute;diateur.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
