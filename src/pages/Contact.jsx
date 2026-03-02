import { Phone, Mail, MapPin } from 'lucide-react'
import Layout from '../components/layout/Layout'
import ContactForm from '../components/ui/ContactForm'

const contactInfo = [
  { icon: Phone,  label: 'Téléphone', value: '+261 34 82 298 57', href: 'tel:+261348229857'      },
  { icon: Mail,   label: 'Email',     value: 'hello@dabil.io',    href: 'mailto:hello@dabil.io'  },
  { icon: MapPin, label: 'Adresse',   value: 'Lot IVP 7 Bis Ankadifotsy, Befelatanana, Antananarivo, 101, Madagascar.' },
]

export default function Contact() {
  return (
    <Layout title="Contact" description="Contactez DTS pour votre projet de transformation digitale. Demandez un devis gratuit, nous répondons sous 24h.">
      {/* Hero */}
      <section className="overflow-hidden pt-44 pb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-600/10 blur-[120px] rounded-full pointer-events-none opacity-40 z-0" />
        <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-300 text-[11px] uppercase font-semibold tracking-wide mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-signal" />
            Parlons de votre projet
          </div>
          <h1 className="md:text-6xl text-4xl font-bold text-white tracking-tighter mb-6">
            Contactez-<span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500">nous</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Une question, un projet, un devis ? Notre équipe vous répond dans les meilleurs délais. Remplissez le formulaire ou contactez-nous directement.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 border-t border-white/5 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
            {/* Infos */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Nos coordonnées</h2>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Nous sommes disponibles du lundi au vendredi, de 8h à 18h (heure de Madagascar, UTC+3).
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-white hover:text-primary-400 transition-colors text-sm font-medium">{value}</a>
                      ) : (
                        <p className="text-white text-sm leading-relaxed">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="sc-card rounded-2xl p-6">
                <p className="text-zinc-400 text-xs mb-2 uppercase tracking-wider font-mono">Temps de réponse</p>
                <p className="text-white font-semibold">Sous 24h ouvrées</p>
                <p className="text-zinc-500 text-xs mt-1">Nous nous engageons à répondre rapidement à chaque demande.</p>
              </div>
            </div>

            {/* Formulaire */}
            <div className="md:col-span-3">
              <h2 className="text-2xl font-semibold text-white mb-8">Envoyez-nous un message</h2>
              <div className="sc-card rounded-[2rem] p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
