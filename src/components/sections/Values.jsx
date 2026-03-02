import { Eye, Users, Sparkles, GraduationCap } from 'lucide-react'
import SpotlightCard from '../ui/SpotlightCard'

const values = [
  {
    icon: Eye,
    label: 'Transparence',
    desc: 'Une communication ouverte et honnête à chaque étape de votre projet.',
    color: 'orange',
  },
  {
    icon: Users,
    label: 'Proximité',
    desc: 'Un partenariat de proximité où votre succès devient notre priorité absolue.',
    color: 'blue',
  },
  {
    icon: Sparkles,
    label: 'Excellence',
    desc: 'Des livrables de haute qualité, testés et optimisés pour performer durablement.',
    color: 'purple',
  },
  {
    icon: GraduationCap,
    label: 'Expertise',
    desc: 'Une équipe de profils seniors et juniors passionnés par l\'innovation digitale.',
    color: 'green',
  },
]

const colorMap = {
  orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
  blue:   'bg-blue-500/10   border-blue-500/20   text-blue-400',
  purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
  green:  'bg-green-500/10  border-green-500/20  text-green-400',
}

export default function Values() {
  return (
    <section className="py-24 border-t border-white/5 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-orange-500 font-mono text-xs uppercase tracking-wider mb-2">Nos valeurs</div>
          <h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight">Ce qui nous définit</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, label, desc, color }) => (
            <SpotlightCard key={label} className="rounded-2xl p-8 text-center">
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mx-auto mb-4 ${colorMap[color]}`}>
                <Icon size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{label}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
