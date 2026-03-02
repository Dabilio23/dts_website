import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Instagram, Globe, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">

          {/* Brand */}
          <div className="col-span-2 pr-8">
            <Link to="/" className="flex items-center mb-4" aria-label="Dabilio">
              <img src="/logo.png" alt="Dabilio" className="h-36 w-auto object-contain" />
            </Link>
            <p className="text-zinc-400 text-xs font-medium mb-1">Co-créer, Innover, Transformer.</p>
            <p className="text-zinc-500 mb-6 leading-relaxed max-w-xs text-xs">
              Accompagner la transformation digitale des métiers.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Twitter,   label: 'X (Twitter)' },
                { icon: Linkedin,  label: 'LinkedIn'    },
                { icon: Globe,     label: 'Pinterest'   },
                { icon: Instagram, label: 'Instagram'   },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold">Liens rapides</h4>
            {[
              { to: '/a-propos',         label: 'À propos'         },
              { to: '/contact',          label: 'Nous contacter'   },
              { to: '/solutions',        label: 'Solutions'         },
              { to: '/mentions-legales', label: 'Mentions légales'  },
            ].map(({ to, label }) => (
              <Link key={label} to={to} className="text-zinc-500 hover:text-primary-400 transition-colors">
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold">Contact</h4>
            <div className="flex items-start gap-2 text-zinc-500 text-xs leading-relaxed">
              <MapPin size={14} className="text-zinc-600 mt-0.5 shrink-0" />
              <span>Lot 270 Bis 5 Pagodes Ambodiakondro,<br />Ambohijanaka, Antananarivo Atsimondrano, 102</span>
            </div>
            <a href="tel:+261348229857" className="flex items-center gap-2 text-zinc-500 hover:text-primary-400 transition-colors text-xs">
              <Phone size={13} className="text-zinc-600" />
              +261 34 82 298 57
            </a>
            <a href="mailto:hello@dabil.io" className="flex items-center gap-2 text-zinc-500 hover:text-primary-400 transition-colors text-xs">
              <Mail size={13} className="text-zinc-600" />
              hello@dabil.io
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">Dabilio © 2025 | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
