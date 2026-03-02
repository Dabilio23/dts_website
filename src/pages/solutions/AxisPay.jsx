import { Link } from 'react-router-dom'
import { ArrowRight, Smartphone, Shield, Zap, Globe } from 'lucide-react'
import Layout from '../../components/layout/Layout'
import SpotlightCard from '../../components/ui/SpotlightCard'
import CtaBanner from '../../components/sections/CtaBanner'

const features = [
  { icon: Smartphone, title: 'Paiement mobile',         desc: 'Acceptez les paiements via tous les opérateurs mobile money de Madagascar.' },
  { icon: Shield,     title: 'Sécurité renforcée',      desc: 'Transactions chiffrées et conformes aux standards de sécurité internationaux.' },
  { icon: Zap,        title: 'Transferts instantanés',  desc: 'Fonds disponibles immédiatement après chaque transaction réussie.' },
  { icon: Globe,      title: 'Tableau de bord unifié',  desc: 'Gérez tous vos flux de paiement depuis une interface unique et intuitive.' },
]

export default function AxisPay() {
  return (
    <Layout title="Axis Pay -- Paiement mobile money" description="Axis Pay est la plateforme de paiement mobile money à Madagascar par DTS. Encaissez facilement via MVola, Orange Money et Airtel Money.">
      {/* Hero */}
      <section className="overflow-hidden pt-44 pb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-600/10 blur-[120px] rounded-full pointer-events-none opacity-40 z-0" />
        <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['Fintech', 'Mobile Money'].map((b) => (
              <span key={b} className="px-3 py-1 rounded-full text-[11px] font-semibold border bg-green-500/10 border-green-500/20 text-green-300">{b}</span>
            ))}
          </div>
          <h1 className="md:text-6xl text-4xl font-bold text-white tracking-tighter mb-4">Axis Pay</h1>
          <p className="text-zinc-400 text-xl mb-6 italic">Le paiement mobile money simplifié.</p>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            Plateforme de paiement mobile money à Madagascar. Encaissez, transférez et gérez vos fonds via MVola, Orange Money et Airtel Money -- depuis n'importe quel appareil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-white hover:bg-zinc-200 h-12 rounded-full px-8 transition-all hover:scale-[1.02]">
              Rejoindre la liste d'attente <ArrowRight size={16} />
            </Link>
            <Link to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white h-12 rounded-full px-8 border border-white/10 hover:bg-white/10 transition-all">
              En savoir plus
            </Link>
          </div>
          <p className="text-zinc-600 text-xs mt-6">Lancement bientôt -- rejoignez la liste d'attente pour être parmi les premiers.</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 border-t border-white/5 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-4">Le paiement mobile money, sans friction</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Axis Pay s'adapte à l'écosystème mobile money malgache pour offrir une expérience fluide aux commerçants et à leurs clients.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <SpotlightCard key={title} className="rounded-2xl p-8 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </Layout>
  )
}
