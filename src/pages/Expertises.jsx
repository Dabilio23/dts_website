import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Code, ShoppingBag, Search, Workflow, Lightbulb } from 'lucide-react'
import Layout from '../components/layout/Layout'
import SpotlightCard from '../components/ui/SpotlightCard'
import CtaBanner from '../components/sections/CtaBanner'
import { expertises } from '../data/expertises'

const iconMap = { Globe, Code, ShoppingBag, Search, Workflow, Lightbulb }

export default function Expertises() {
  return (
    <Layout title="Nos Expertises" description="Découvrez les expertises de DTS : site vitrine, application web, e-commerce, SEO, marketing automation et conseil stratégique.">
      {/* Hero */}
      <section className="overflow-hidden pt-44 pb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none opacity-40 z-0" />
        <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-300 text-[11px] uppercase font-semibold tracking-wide mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-signal" />
            Ce que nous maîtrisons
          </div>
          <h1 className="md:text-6xl text-4xl font-bold text-white tracking-tighter mb-6 uppercase tracking-wide">
            NOS EXPERTISES
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            Chez DTS, chaque projet est le fruit d'un travail d'équipe entre experts passionnés. Nos profils seniors apportent leur expérience tandis que nos talents juniors insufflent créativité et innovation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-white hover:bg-zinc-200 h-12 rounded-full px-8 transition-all hover:scale-[1.02]"
          >
            Demander un devis <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Grille expertises */}
      <section className="py-24 border-t border-white/5 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertises.map((exp) => {
              const Icon = iconMap[exp.icon] ?? Globe
              return (
                <SpotlightCard key={exp.id} className="rounded-[2rem] p-8 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-3">{exp.title}</h3>
                  <p className="text-zinc-400 text-[15px] leading-relaxed flex-grow">{exp.description}</p>
                </SpotlightCard>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </Layout>
  )
}
