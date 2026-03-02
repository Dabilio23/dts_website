import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Layout from '../layout/Layout'
import CtaBanner from '../sections/CtaBanner'
import SpotlightCard from './SpotlightCard'

/**
 * Composant réutilisable pour les pages détail de service.
 * Props: title, metaDesc, badge, headline, subheadline, description, benefits, icon (ReactNode), accentColor, process
 */
export default function ServiceDetailPage({
  title,
  metaDesc,
  badge,
  headline,
  subheadline,
  description,
  benefits = [],
  icon,
  accentColor = 'orange',
  process = [],
}) {
  const glowColor = {
    orange: 'bg-orange-600/10',
    blue:   'bg-blue-600/10',
    purple: 'bg-purple-600/10',
    green:  'bg-green-600/10',
    cyan:   'bg-cyan-600/10',
    pink:   'bg-pink-600/10',
  }[accentColor] ?? 'bg-orange-600/10'

  const iconColor = {
    orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
    blue:   'bg-blue-500/10   border-blue-500/20   text-blue-400',
    purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    green:  'bg-green-500/10  border-green-500/20  text-green-400',
    cyan:   'bg-cyan-500/10   border-cyan-500/20   text-cyan-400',
    pink:   'bg-pink-500/10   border-pink-500/20   text-pink-400',
  }[accentColor] ?? 'bg-orange-500/10 border-orange-500/20 text-orange-400'

  return (
    <Layout title={title} description={metaDesc}>
      {/* Hero */}
      <section className="overflow-hidden pt-44 pb-20 relative">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] ${glowColor} blur-[120px] rounded-full pointer-events-none opacity-40 z-0`} />
        <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-300 text-[11px] uppercase font-semibold tracking-wide mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-signal" />
            {badge}
          </div>
          <h1 className="md:text-6xl text-4xl font-bold text-white tracking-tighter mb-6">
            {headline}
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">{subheadline}</p>
        </div>
      </section>

      {/* Description + Bénéfices */}
      <section className="py-24 border-t border-white/5 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-8 ${iconColor}`}>
                {icon}
              </div>
              <h2 className="md:text-3xl text-2xl font-semibold text-white mb-6">Ce que nous proposons</h2>
              <p className="text-zinc-400 leading-relaxed text-[15px]">{description}</p>
            </div>
            <SpotlightCard className="rounded-[2rem] p-8">
              <h3 className="text-white font-semibold text-xl mb-6">Ce que vous gagnez</h3>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-zinc-400 text-sm">
                    <CheckCircle size={16} className="text-orange-400 mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Processus */}
      {process.length > 0 && (
        <section className="py-24 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-orange-500 font-mono text-xs uppercase tracking-wider mb-2">Notre méthode</div>
              <h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight">Comment ça fonctionne</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {process.map((step, idx) => (
                <SpotlightCard key={step.title} className="rounded-2xl p-6 text-center">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {idx + 1}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                  <p className="text-zinc-500 text-sm">{step.desc}</p>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-[#020202] border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">Prêt à démarrer ?</h2>
          <p className="text-zinc-400 mb-8">Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-white hover:bg-zinc-200 h-12 rounded-full px-8 transition-all hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            Demander un devis <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CtaBanner />
    </Layout>
  )
}
