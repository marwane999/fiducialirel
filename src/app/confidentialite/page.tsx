import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | ICC Maroc',
  description: 'Politique de confidentialité du cabinet ICC - Protection de vos données personnelles.',
  alternates: { canonical: `${SITE_CONFIG.url}/confidentialite` },
}

export default function ConfidentialitePage() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-8">Politique de Confidentialit&eacute;</h1>

          <div className="space-y-8 text-muted leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">1. Collecte des donn&eacute;es</h2>
              <p>Nous collectons les donn&eacute;es personnelles que vous nous fournissez via nos formulaires de contact, de devis, de newsletter et d&apos;inscription aux formations.</p>
              <p className="mt-2">Les donn&eacute;es collect&eacute;es incluent : nom, pr&eacute;nom, adresse email, num&eacute;ro de t&eacute;l&eacute;phone et message.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">2. Utilisation des donn&eacute;es</h2>
              <p>Vos donn&eacute;es sont utilis&eacute;es uniquement pour :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>R&eacute;pondre &agrave; vos demandes de devis et de contact</li>
                <li>Vous inscrire &agrave; nos formations</li>
                <li>Vous envoyer notre newsletter (avec votre consentement)</li>
                <li>Am&eacute;liorer nos services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">3. Protection des donn&eacute;es</h2>
              <p>Nous mettons en œuvre toutes les mesures techniques et organisationnelles n&eacute;cessaires pour prot&eacute;ger vos donn&eacute;es personnelles contre tout acc&egrave;s non autoris&eacute;, modification, divulgation ou destruction.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">4. Dur&eacute;e de conservation</h2>
              <p>Vos donn&eacute;es sont conserv&eacute;es pendant la dur&eacute;e n&eacute;cessaire &agrave; la r&eacute;alisation des finalit&eacute;s pour lesquelles elles ont &eacute;t&eacute; collect&eacute;es, conform&eacute;ment &agrave; la r&eacute;glementation marocaine.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">5. Vos droits</h2>
              <p>Conform&eacute;ment &agrave; la loi marocaine, vous disposez d&apos;un droit d&apos;acc&egrave;s, de rectification et de suppression de vos donn&eacute;es personnelles.</p>
              <p className="mt-2">Pour exercer ces droits, contactez-nous &agrave; : {SITE_CONFIG.email}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">6. Cookies</h2>
              <p>Notre site n&apos;utilise pas de cookies tiers. Des cookies techniques peuvent &ecirc;tre utilis&eacute;s pour le bon fonctionnement du site.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
