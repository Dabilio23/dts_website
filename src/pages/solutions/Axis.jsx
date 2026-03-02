import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, TrendingUp, PieChart, AlertCircle, RefreshCw } from 'lucide-react'
import Layout from '../../components/layout/Layout'
import SpotlightCard from '../../components/ui/SpotlightCard'
import CtaBanner from '../../components/sections/CtaBanner'

const features = [
  { icon: TrendingUp,  title: 'Suivi des flux',         desc: 'Visualisez vos entrées et sorties de trésorerie en temps réel.' },
  { icon: PieChart,    title: 'Rapports financiers',    desc: 'Tableaux de bord clairs pour une prise de décision éclairée.' },
  { icon: AlertCircle, title: 'Alertes intelligentes',  desc: 'Soyez notifié avant d\'atteindre un seuil critique de trésorerie.' },
  { icon: RefreshCw,   title: 'Réconciliation auto',    desc: 'Synchronisation avec vos relevés bancaires pour zéro saisie manuelle.' },
]

export default function Axis() {
  return (
    <Layout title="Axis -- Gestion de trésorerie" description="Axis est la plateforme de gestion de trésorerie pour TPE et PME par DTS. Suivez vos flux financiers et anticipez vos besoins.">
      {/* Hero */}
      <section className="overflow-hidden pt-44 pb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none opacity-40 z-0" />
        <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['Fintech', 'SaaS'].map((b) => (
              <span key={b} className="px-3 py-1 rounded-full text-[11px] font-semibold border bg-blue-500/10 border-blue-500/20 text-blue-300">{b}</span>
            ))}
          </div>
          <h1 className="md:text-6xl text-4xl font-bold text-white tracking-tighter mb-4">Axis</h1>
          <p className="text-zinc-400 text-xl mb-6 italic">La trésorerie sous contrôle.</p>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            Plateforme de gestion de trésorerie pour TPE et PME. Suivez vos flux financiers en temps réel, anticipez vos besoins et prenez de meilleures décisions -- sans être expert-comptable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://axis.dabil.io" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-white hover:bg-zinc-200 h-12 rounded-full px-8 transition-all hover:scale-[1.02]">
              Visiter Axis <ExternalLink size={16} />
            </a>
            <Link to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white h-12 rounded-full px-8 border border-white/10 hover:bg-white/10 transition-all">
              Demander une démo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 border-t border-white/5 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-4">La trésorerie simplifiée pour les entrepreneurs</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Axis donne aux TPE et PME les outils financiers jusqu'ici réservés aux grandes entreprises.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <SpotlightCard key={title} className="rounded-2xl p-8 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
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
