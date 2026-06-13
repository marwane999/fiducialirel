import { Shield, Award, BadgeCheck, TrendingDown } from 'lucide-react'

const badges = [
  { icon: Award, text: '10+ ans d\'expérience' },
  { icon: BadgeCheck, text: '500+ entreprises créées' },
  { icon: Shield, text: 'Expertise comptable reconnue' },
  { icon: TrendingDown, text: 'Prix les plus bas du marché' },
]

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {badges.map((badge) => {
        const Icon = badge.icon
        return (
          <div
            key={badge.text}
            className="flex items-center gap-3 rounded-lg bg-primary/5 p-4"
          >
            <Icon className="h-8 w-8 shrink-0 text-secondary" />
            <span className="text-sm font-medium text-primary">{badge.text}</span>
          </div>
        )
      })}
    </div>
  )
}
