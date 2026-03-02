import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Target, Zap, Award } from 'lucide-react'
import Layout from '../components/layout/Layout'
import SpotlightCard from '../components/ui/SpotlightCard'
import CtaBanner from '../components/sections/CtaBanner'

const team = [
  { initials: 'DA', name: 'Direction & Stratégie', gradient: 'from-primary-900 to-zinc-900' },
  { initials: 'DEV', name: 'Développement', gradient: 'from-blue-900 to-zinc-900' },
  { initials: 'DES', name: 'Design & UX', gradient: 'from-purple-900 to-zinc-900' },
  { initials: 'MKT', name: 'Marketing Digital', gradient: 'from-green-900 to-zinc-900' },
]

export default function About() {
  return (
    <Layout title="À propos" description="Découvrez DTS, votre partenaire de transformation digitale à Antananarivo, Madagascar. Notre mission, nos valeurs et notre équipe.">
      {/* Hero */}
      <section className="overflow-hidden pt-44 pb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-600/10 blur-[120px] rounded-full pointer-events-none opacity-40 z-0" />
        <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-300 text-[11px] uppercase font-semibold tracking-wide mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-signal" />
            Digital Transformation Services
          </div>
          <h1 className="md:text-6xl text-4xl font-bold text-white tracking-tighter mb-6">
            Notre histoire,<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500">
              votre succès.
            </span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            DTS (Digital Transformation Services) est une agence spécialisée dans l'accompagnement des entreprises dans leur évolution numérique. Basés à Antananarivo, Madagascar, nous croyons que la technologie doit être au service de la croissance humaine.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 border-t border-white/5 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-primary-500 font-mono text-xs uppercase tracking-wider mb-4">Notre mission</div>
              <h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-6">
                Accompagner la transformation digitale des métiers.
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Chez DTS, chaque projet est le fruit d'un travail d'équipe entre experts passionnés. Nos profils seniors apportent leur expérience tandis que nos talents juniors insufflent créativité et innovation.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Nous ne sommes pas qu'un prestataire -- nous sommes votre partenaire de confiance, engagé dans votre réussite à long terme. Co-créer, Innover, Transformer : c'est plus qu'un slogan, c'est notre façon de travailler.
              </p>
              <div className="space-y-3">
                {[
                  'Audit complet de vos besoins digitaux',
                  'Solutions sur mesure adaptées à votre budget',
                  'Suivi et accompagnement post-livraison',
                  'Équipe disponible et réactive',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                    <CheckCircle size={16} className="text-primary-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users,  label: 'Équipe',      value: '15+',   desc: 'experts passionnés',   color: 'primary' },
                { icon: Target, label: 'Projets',     value: '50+',   desc: 'projets livrés',       color: 'blue'   },
                { icon: Zap,    label: 'Satisfaction', value: '98%',  desc: 'clients satisfaits',   color: 'purple' },
                { icon: Award,  label: 'Expérience',  value: '5 ans', desc: 'au service du digital', color: 'green' },
              ].map(({ icon: Icon, label, value, desc, color }) => (
                <SpotlightCard key={label} className="rounded-2xl p-6 text-center">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mx-auto mb-3 ${
                    color === 'primary' ? 'bg-primary-500/10 border-primary-500/20 text-primary-400' :
                    color === 'blue'   ? 'bg-blue-500/10   border-blue-500/20   text-blue-400'   :
                    color === 'purple' ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' :
                                        'bg-green-500/10  border-green-500/20  text-green-400'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{value}</div>
                  <div className="text-zinc-500 text-xs">{desc}</div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-primary-500 font-mono text-xs uppercase tracking-wider mb-2">Nos valeurs</div>
            <h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight">Ce qui nous définit au quotidien</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Transparence', desc: 'Nous communiquons ouvertement sur chaque étape de votre projet -- avancement, obstacles, décisions. Pas de surprises, juste de la clarté.' },
              { title: 'Proximité',    desc: "Votre interlocuteur est accessible, disponible, et s'investit dans votre réussite. Nous travaillons en partenariat, pas en prestation froide." },
              { title: 'Excellence',   desc: 'Chaque livrable est soigné, testé, et optimisé. Nous ne livrons que ce dont nous sommes fiers. La médiocrité n\'a pas sa place chez DTS.' },
              { title: 'Expertise',    desc: 'Notre équipe pluridisciplinaire maîtrise les technologies modernes et les bonnes pratiques du secteur. Nous formons nos équipes en continu.' },
            ].map(({ title, desc }) => (
              <SpotlightCard key={title} className="rounded-2xl p-8">
                <h3 className="text-white font-semibold text-xl mb-3">{title}</h3>
                <p className="text-zinc-400 leading-relaxed">{desc}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe (placeholder) */}
      <section className="py-24 bg-[#020202] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-primary-500 font-mono text-xs uppercase tracking-wider mb-2">Notre équipe</div>
          <h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-4">Des experts passionnés</h2>
          <p className="text-zinc-400 mb-16 max-w-xl mx-auto">Seniors et juniors unis par une même ambition : vous aider à réussir votre transformation digitale.</p>
          <div className="flex flex-wrap justify-center gap-6">
            {team.map(({ initials, name, gradient }) => (
              <div key={name} className="text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 ring-1 ring-white/10`}>
                  {initials}
                </div>
                <div className="text-white text-sm font-medium">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </Layout>
  )
}
