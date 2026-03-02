import Layout from '../components/layout/Layout'
import Hero from '../components/sections/Hero'
import Values from '../components/sections/Values'
import WhyUs from '../components/sections/WhyUs'
import ServicesGrid from '../components/sections/ServicesGrid'
import Testimonials from '../components/sections/Testimonials'
import CtaBanner from '../components/sections/CtaBanner'

export default function Home() {
  return (
    <Layout
      title="Accueil"
      description="DTS accompagne la transformation digitale de votre entreprise à Madagascar. Maintenance web, sites optimisés, régie IT, solutions SaaS IA, données B2B et marketing digital."
    >
      <Hero />
      <Values />
      <WhyUs />
      <ServicesGrid />
      <Testimonials />
      <CtaBanner />
    </Layout>
  )
}
