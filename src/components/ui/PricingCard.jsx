import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'

export default function PricingCard({ plan }) {
  return (
    <div
      className={`relative rounded-[2rem] p-8 flex flex-col transition-all duration-300 ${
        plan.highlight
          ? 'bg-orange-500/5 border-2 border-orange-500/40 shadow-[0_0_40px_rgba(234,88,12,0.15)]'
          : 'sc-card hover:border-white/20'
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
          {plan.badge}
        </span>
      )}

      <h3 className="text-white text-xl font-semibold mb-2">{plan.name}</h3>

      {plan.includes && (
        <p className="text-zinc-500 text-xs mb-4">Inclus {plan.includes}, plus :</p>
      )}

      <div className="mb-6">
        <span className="text-4xl font-bold text-white">{plan.price} €</span>
        <span className="text-zinc-400 text-sm ml-1">/ mois</span>
      </div>

      <ul className="space-y-3 flex-grow mb-8">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-zinc-400">
            <Check size={16} className="text-orange-400 mt-0.5 shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`flex items-center justify-center gap-2 h-11 rounded-full text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] ${
          plan.highlight
            ? 'bg-orange-500 hover:bg-orange-400 text-white'
            : 'bg-white hover:bg-zinc-200 text-black'
        }`}
      >
        Choisir ce pack <ArrowRight size={16} />
      </Link>
    </div>
  )
}
