import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Monitor, Server, Cpu, Database, TrendingUp } from 'lucide-react'
import SpotlightCard from './SpotlightCard'

const icons = { ShieldCheck, Monitor, Server, Cpu, Database, TrendingUp }

const colorMap = {
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400', hover: 'hover:border-orange-500/30', link: 'text-orange-400 hover:text-orange-300' },
  blue:   { bg: 'bg-blue-500/10',   border: 'border-blue-500/20',   text: 'text-blue-400',   hover: 'hover:border-blue-500/30',   link: 'text-blue-400 hover:text-blue-300'   },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', hover: 'hover:border-purple-500/30', link: 'text-purple-400 hover:text-purple-300' },
  green:  { bg: 'bg-green-500/10',  border: 'border-green-500/20',  text: 'text-green-400',  hover: 'hover:border-green-500/30',  link: 'text-green-400 hover:text-green-300'  },
  cyan:   { bg: 'bg-cyan-500/10',   border: 'border-cyan-500/20',   text: 'text-cyan-400',   hover: 'hover:border-cyan-500/30',   link: 'text-cyan-400 hover:text-cyan-300'   },
  pink:   { bg: 'bg-pink-500/10',   border: 'border-pink-500/20',   text: 'text-pink-400',   hover: 'hover:border-pink-500/30',   link: 'text-pink-400 hover:text-pink-300'   },
}

export default function ServiceCard({ service }) {
  const Icon = icons[service.icon] ?? ShieldCheck
  const c = colorMap[service.color] ?? colorMap.orange

  return (
    <SpotlightCard className={`rounded-[2rem] p-8 flex flex-col transition-all duration-300 ${c.hover}`}>
      <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center ${c.text} mb-6`}>
        <Icon size={24} />
      </div>
      <h3 className="text-white text-xl font-semibold mb-3">{service.label}</h3>
      <p className="text-zinc-400 text-[15px] leading-relaxed flex-grow mb-6">{service.description}</p>
      <Link to={service.path} className={`flex items-center gap-2 text-sm font-medium transition-colors group ${c.link}`}>
        Voir plus <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </SpotlightCard>
  )
}
