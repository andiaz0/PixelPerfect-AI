import { Hero } from "@/components/hero"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  )
}
