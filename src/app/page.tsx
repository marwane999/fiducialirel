import { Button } from '@/components/ui/button'
import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import StatsCounter from '@/components/sections/StatsCounter'
import AboutSection from '@/components/sections/AboutSection'
import PricingCards from '@/components/sections/PricingCards'
import Testimonials from '@/components/sections/Testimonials'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <ServicesGrid />
      <AboutSection />
      <PricingCards />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  )
}
