import { CtaBanner } from '../components/CtaBanner'
import { Features } from '../components/Features'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { Integrations } from '../components/Integrations'
import { Payments } from '../components/Payments'
import { Pricing } from '../components/Pricing'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Integrations />
        <Payments />
        <Pricing />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
