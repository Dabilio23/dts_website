import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, CheckCircle, BookOpen, Users, BarChart3, Bell } from 'lucide-react'
import Layout from '../../components/layout/Layout'
import SpotlightCard from '../../components/ui/SpotlightCard'
import CtaBanner from '../../components/sections/CtaBanner'

const features = [
  { icon: BookOpen,  title: 'Gestion des notes',      desc: 'Saisie et consultation des bulletins en ligne pour enseignants, élèves et parents.' },
  { icon: Users,     title: 'Gestion des inscriptions', desc: 'Processus d\'inscription digitalisé, rapide et sans paperasse.' },
  { icon: BarChart3, title: 'Tableaux de bord',        desc: 'Suivi des performances académiques en temps réel pour la direction.' },
  { icon: Bell,      title: 'Communication',           desc: 'Messagerie intégrée entre parents, enseignants et administration.' },
]

export default function Dabilio() {
  return (
    <Layout title="Dabilio -- Gestion scolaire" description="Dabilio est la solution SaaS de gestion scolaire par DTS. Inscriptions, notes, emplois du temps et communication -- tout en un.">
      {/* Hero */}
      <section className="overflow-hidden pt-44 pb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-600/10 blur-[120px] rounded-full pointer-events-none opacity-40 z-0" />
        <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['EdTech', 'SaaS'].map((b) => (
              <span key={b} className="px-3 py-1 rounded-full text-[11px] font-semibold border bg-primary-500/10 border-primary-500/20 text-primary-300">{b}</span>
            ))}
          </div>
          <h1 className="md:text-6xl text-4xl font-bold text-white tracking-tighter mb-4">Dabilio</h1>
          <p className="text-zinc-400 text-xl mb-6 italic">La gestion scolaire réinventée.</p>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            Solution SaaS complète pour les établissements scolaires -- de la maternelle au lycée. Simplifiez la gestion, améliorez la communication et valorisez les données pédagogiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://dabil.io" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-white hover:bg-zinc-200 h-12 rounded-full px-8 transition-all hover:scale-[1.02]">
              Visiter Dabilio <ExternalLink size={16} />
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
            <h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-4">Tout ce dont un établissement scolaire a besoin</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Une plateforme unique, pensée pour simplifier le quotidien des directeurs, enseignants, élèves et parents.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <SpotlightCard key={title} className="rounded-2xl p-8 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">
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
