import { Users, Building2, Star, Clock } from 'lucide-react'

const items = [
  { icon: Clock, text: '10+ ans d\'expérience' },
  { icon: Building2, text: '500+ entreprises créées' },
  { icon: Star, text: 'Note 4.9/5' },
  { icon: Users, text: '98% satisfaction' },
]

export default function SocialProof() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
      {items.map((item) => {
        const Icon = item.icon
        return (
          <div key={item.text} className="flex items-center gap-1.5 text-sm">
            <Icon className="h-4 w-4 text-secondary" />
            <span className="text-gray-300">{item.text}</span>
          </div>
        )
      })}
    </div>
  )
}
