import { ShieldCheck, CheckCircle } from 'lucide-react'
import Layout from '../../components/layout/Layout'
import PricingCard from '../../components/ui/PricingCard'
import ContactForm from '../../components/ui/ContactForm'
import { pricingPlans } from '../../data/pricing'

const commitments = [
  'Sécuriser le site',
  'Accompagner les évolutions',
  'Améliorer l\'expérience utilisateur',
  'Corriger les bugs immédiatement',
  'Renforcer le SEO',
]

export default function Maintenance() {
  return (
    <Layout title="Maintenance & Tarifs" description="Packs de maintenance web DTS : Sécurité+, Performance+, Excellence+. Protégez et faites évoluer votre site à partir de 100€/mois.">
      {/* Hero */}
      <section className="overflow-hidden pt-44 pb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none opacity-40 z-0" />
        <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-300 text-[11px] uppercase font-semibold tracking-wide mb-8">
            <ShieldCheck size={12} className="text-orange-400" />
            Maintenance & Tarifs
          </div>
          <h1 className="md:text-6xl text-4xl font-bold text-white tracking-tighter mb-6">
            Notre mission : Faire évoluer<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500">
              votre site, pas seulement le maintenir.
            </span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Une présence digitale sécurisée, performante et toujours à jour, pendant que vous vous concentrez sur votre cœur de métier.
          </p>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-16 border-t border-white/5 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-white mb-8">Nos engagements</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {commitments.map((c) => (
                <span key={c} className="flex items-center gap-2 px-4 py-2 sc-card rounded-full text-sm text-zinc-300">
                  <CheckCircle size={14} className="text-orange-400" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-orange-500 font-mono text-xs uppercase tracking-wider mb-2">Nos packs</div>
            <h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-4">
              Choisissez le pack qui vous convient
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto">
              Chaque pack est conçu pour répondre à un niveau de besoin. Vous pouvez évoluer d'un pack à l'autre à tout moment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-24 bg-[#020202] border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-white mb-4">Démarrez votre projet</h2>
            <p className="text-zinc-400">Remplissez le formulaire et nous vous contacterons sous 24h.</p>
          </div>
          <div className="sc-card rounded-[2rem] p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  )
}
