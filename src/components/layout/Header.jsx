import { NavLink } from 'react-router-dom'
import { Zap, ArrowRight } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
      <nav
        className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between"
        aria-label="Menu principal"
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 pr-4 group shrink-0" aria-label="DTS Accueil">
          <div className="flex shadow-lg shadow-orange-500/10 overflow-hidden group-hover:bg-orange-500/20 group-hover:border-orange-500/30 transition-all duration-300 bg-orange-500/10 w-9 h-9 border-orange-500/20 border rounded-xl items-center justify-center">
            <Zap size={20} className="text-orange-500 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="text-white font-bold tracking-tight text-[15px]">DTS</span>
        </NavLink>

        {/* Nav links */}
        <div className="hidden md:flex gap-6 items-center flex-1 justify-center">
          {[
            { to: '/',          label: 'Accueil'   },
            { to: '/a-propos',  label: 'À propos'  },
            { to: '/services',  label: 'Services'  },
            { to: '/solutions', label: 'Solutions' },
            { to: '/contact',   label: 'Contact'   },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-[13px] font-medium transition-colors whitespace-nowrap ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
          <NavLink
            to="/contact"
            className="text-[13px] hover:bg-zinc-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-semibold text-black bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5"
          >
            Demandez un devis
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
