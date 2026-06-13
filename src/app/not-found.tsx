import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-alt">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-primary mb-4">Page non trouv&eacute;e</h2>
        <p className="text-muted mb-8">La page que vous cherchez n&apos;existe pas ou a &eacute;t&eacute; d&eacute;plac&eacute;e.</p>
        <Link href="/">
          <Button variant="primary" size="lg">Retour &agrave; l&apos;accueil</Button>
        </Link>
      </div>
    </div>
  )
}
