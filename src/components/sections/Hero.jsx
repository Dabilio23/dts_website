import { Link } from 'react-router-dom'
import { ArrowRight, FileText, ShieldCheck, Monitor, Server, Cpu, Database, TrendingUp } from 'lucide-react'

const serviceCards = [
  { icon: ShieldCheck, label: 'Maintenance',      sub: 'Sécurité & évolutions', color: 'orange', delay: '0s'   },
  { icon: Monitor,     label: 'Site web optimisé', sub: 'Performance & SEO',     color: 'blue',   delay: '0.3s' },
  { icon: Server,      label: 'Régie IT',          sub: 'Experts à la demande',  color: 'purple', delay: '0.6s' },
  { icon: Cpu,         label: 'Pack SaaS AI',      sub: 'IA & automatisation',   color: 'green',  delay: '0.9s' },
  { icon: Database,    label: 'Données B2B',       sub: 'Ciblage & pipeline',    color: 'cyan',   delay: '1.2s' },
  { icon: TrendingUp,  label: 'Marketing digital', sub: 'Visibilité & leads',    color: 'pink',   delay: '1.5s' },
]

const colorMap = {
  orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
  blue:   'bg-blue-500/10   border-blue-500/20   text-blue-400',
  purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
  green:  'bg-green-500/10  border-green-500/20  text-green-400',
  cyan:   'bg-cyan-500/10   border-cyan-500/20   text-cyan-400',
  pink:   'bg-pink-500/10   border-pink-500/20   text-pink-400',
}

export default function Hero() {
  return (
    <section className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0" />
      <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />

      <div className="z-10 text-center max-w-7xl mx-auto px-6 relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-300 text-[11px] uppercase font-semibold tracking-wide mb-8 cursor-default shadow-[0_0_20px_rgba(234,88,12,0.1)] backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-signal" />
          Co-créer · Innover · Transformer
        </div>

        <h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-bold text-white tracking-tighter mb-8">
          Donnez vie à votre<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            vision digitale.
          </span>
        </h1>

        <p className="leading-relaxed text-lg font-light text-zinc-400 max-w-xl mx-auto mb-10">
          Dabilio prend le relais de votre transformation numérique. Ensemble, nous convertissons vos ambitions business en solutions digitales performantes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link
            to="/contact"
            className="shrink-0 hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex text-sm font-semibold text-black bg-white h-12 rounded-full px-8 shadow-[0_0_40px_rgba(255,255,255,0.15)] gap-x-2 items-center justify-center"
          >
            <FileText size={18} />
            Demandez un devis
          </Link>
          <Link
            to="/services"
            className="shrink-0 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all flex text-sm font-semibold text-white h-12 rounded-full px-8 border border-white/10 gap-x-2 items-center justify-center"
          >
            Nos services <ArrowRight size={16} />
          </Link>
        </div>

        {/* Services grid visual */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {serviceCards.map(({ icon: Icon, label, sub, color, delay }) => (
            <div
              key={label}
              className="sc-card rounded-2xl p-4 flex items-center gap-3 text-left animate-float"
              style={{ animationDelay: delay }}
            >
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${colorMap[color]}`}>
                <Icon size={20} />
              </div>
              <div>
                <div className="text-white font-medium text-sm">{label}</div>
                <div className="text-zinc-500 text-xs">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
