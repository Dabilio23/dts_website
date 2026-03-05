import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Layout from '../components/layout/Layout'
import SpotlightCard from '../components/ui/SpotlightCard'
import CtaBanner from '../components/sections/CtaBanner'

const solutions = [
  {
    id: 'dabilio',
    path: '/solutions/dabilio',
    name: 'Dabilio',
    logo: '/logo_dabilio3.svg',
    tagline: 'La gestion scolaire réinventée.',
    description: 'Solution SaaS complète pour la gestion des établissements scolaires -- inscriptions, notes, emplois du temps, communication parents-enseignants.',
    badges: ['EdTech', 'SaaS'],
    externalUrl: 'https://dabil.io',
    color: 'primary',
  },
  {
    id: 'axis',
    path: '/solutions/axis',
    name: 'Axis',
    logo: '/logo_axis.svg',
    tagline: 'La trésorerie sous contrôle.',
    description: 'Plateforme de gestion de trésorerie pour TPE et PME. Suivez vos flux financiers, anticipez vos besoins et prenez de meilleures décisions.',
    badges: ['Fintech', 'SaaS'],
    externalUrl: 'https://axis.dabil.io',
    color: 'blue',
  },
  {
    id: 'axis-pay',
    path: '/solutions/axis-pay',
    name: 'Axis Pay',
    logo: '/logo_axispay.svg',
    tagline: 'Le paiement mobile money simplifié.',
    description: 'Plateforme de paiement mobile money à Madagascar. Encaissez, transférez et gérez vos fonds en toute sécurité depuis n\'importe quel appareil.',
    badges: ['Fintech', 'Mobile Money'],
    color: 'green',
  },
]

const colorMap = {
  primary: { badge: 'bg-primary-500/10 border-primary-500/20 text-primary-300', hover: 'hover:border-primary-500/30 hover:shadow-[0_0_30px_rgba(217,26,84,0.1)]' },
  blue:   { badge: 'bg-blue-500/10   border-blue-500/20   text-blue-300',   hover: 'hover:border-blue-500/30   hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]'   },
  green:  { badge: 'bg-green-500/10  border-green-500/20  text-green-300',  hover: 'hover:border-green-500/30  hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]'    },
}

export default function Solutions() {
  return (
    <Layout title="Nos Solutions" description="Découvrez les solutions SaaS de Dabilio : gestion scolaire, trésorerie TPE/PME et paiement mobile money à Madagascar.">
      {/* Hero */}
      <section className="overflow-hidden pt-44 pb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-600/10 blur-[120px] rounded-full pointer-events-none opacity-40 z-0" />
        <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-300 text-[11px] uppercase font-semibold tracking-wide mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-signal" />
            Nos produits SaaS
          </div>
          <h1 className="md:text-6xl text-4xl font-bold text-white tracking-tighter mb-6">
            Nos <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500">Solutions</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Au-delà des services, DTS développe ses propres produits SaaS innovants pour répondre aux besoins spécifiques du marché malgache et africain.
          </p>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="py-24 border-t border-white/5 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((sol) => {
              const c = colorMap[sol.color]
              return (
                <SpotlightCard key={sol.id} className={`rounded-[2rem] p-8 flex flex-col transition-all duration-300 ${c.hover}`}>
                  {sol.logo && (
                    <img src={sol.logo} alt={sol.name} className={`${sol.id === 'dabilio' ? 'h-16' : 'h-10'} w-auto object-contain mb-6 self-start`} />
                  )}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {sol.badges.map((b) => (
                      <span key={b} className={`px-2 py-0.5 rounded-full text-[11px] font-semibold border ${c.badge}`}>{b}</span>
                    ))}
                  </div>
                  <p className="text-zinc-500 text-sm italic mb-4">{sol.tagline}</p>
                  <p className="text-zinc-400 text-[15px] leading-relaxed flex-grow mb-8">{sol.description}</p>
                  <div className="flex gap-3">
                    <Link
                      to={sol.path}
                      className="flex-1 flex items-center justify-center gap-2 h-10 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
                    >
                      Découvrir <ArrowRight size={14} />
                    </Link>
                    {sol.externalUrl && (
                      <a
                        href={sol.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
                        aria-label={`Visiter ${sol.name}`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA intermédiaire */}
      <section className="py-16 bg-black border-t border-white/5 text-center">
        <p className="text-zinc-400 mb-4">Vous avez un projet ? Parlons-en.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-white hover:bg-zinc-200 h-12 rounded-full px-8 transition-all hover:scale-[1.02]">
          Contactez-nous <ArrowRight size={16} />
        </Link>
      </section>

      <CtaBanner />
    </Layout>
  )
}
