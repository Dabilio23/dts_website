import Layout from '../components/layout/Layout'
import ServiceCard from '../components/ui/ServiceCard'
import CtaBanner from '../components/sections/CtaBanner'
import { services } from '../data/services'

export default function Services() {
  return (
    <Layout title="Nos Services" description="Découvrez tous les services DTS : maintenance web, sites optimisés, régie IT, Pack SaaS AI, données B2B et marketing digital.">
      {/* Hero */}
      <section className="overflow-hidden pt-44 pb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-600/10 blur-[120px] rounded-full pointer-events-none opacity-40 z-0" />
        <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-300 text-[11px] uppercase font-semibold tracking-wide mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-signal" />
            Ce que nous faisons
          </div>
          <h1 className="md:text-6xl text-4xl font-bold text-white tracking-tighter mb-6">
            Nos <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500">Services</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Des services complets et modulaires pour répondre à chaque étape de votre évolution digitale. De la maintenance à la stratégie marketing, DTS vous couvre.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 border-t border-white/5 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </Layout>
  )
}
