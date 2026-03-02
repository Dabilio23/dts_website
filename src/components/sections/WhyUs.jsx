import { Link } from 'react-router-dom'
import { ArrowRight, Rocket, CheckCircle, TrendingUp, Heart } from 'lucide-react'
import SpotlightCard from '../ui/SpotlightCard'

export default function WhyUs() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Statistiques */}
          <div className="grid grid-cols-2 gap-4">
            <SpotlightCard className="rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-white mb-2">+20%</div>
              <div className="text-zinc-400 text-sm">Croissance moyenne clients</div>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-primary-400 mb-2">+21%</div>
              <div className="text-zinc-400 text-sm">Satisfaction client</div>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-8 col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400">
                  <Rocket size={20} />
                </div>
                <h4 className="text-white font-semibold">Notre approche</h4>
              </div>
              <div className="space-y-3">
                {[
                  'Audit et cadrage précis de votre projet',
                  'Conception et développement en méthode agile',
                  'Livraison, tests et optimisation continue',
                ].map((step) => (
                  <div key={step} className="flex items-center gap-2 text-sm text-zinc-400">
                    <CheckCircle size={16} className="text-primary-400 shrink-0" />
                    {step}
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>

          {/* Contenu texte */}
          <div>
            <div className="text-primary-500 font-mono text-xs uppercase tracking-wider mb-4">Pourquoi nous choisir</div>
            <h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-6">
              Nous convertissons votre vision en croissance.
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              En transformant vos priorités business en solutions digitales prêtes à performer. Nous évoluons au côté des entreprises pour générer une croissance durable et mesurable.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: TrendingUp,
                  color: 'orange',
                  title: 'Croissance',
                  desc: 'Nous évoluons au côté des entreprises pour générer de la croissance et créer de la valeur durablement.',
                },
                {
                  icon: Heart,
                  color: 'blue',
                  title: 'Satisfaction Clients',
                  desc: 'La confiance accordée à notre expertise nous engage à toujours dépasser les attentes de nos clients.',
                },
              ].map(({ icon: Icon, color, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                    color === 'orange' ? 'bg-primary-500/10 border border-primary-500/20 text-primary-400'
                                      : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
                  }`}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{title}</h4>
                    <p className="text-zinc-400 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/a-propos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-white hover:bg-zinc-200 h-12 rounded-full px-6 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              À PROPOS <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
