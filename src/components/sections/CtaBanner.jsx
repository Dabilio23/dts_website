import { Link } from 'react-router-dom'
import { Phone, Mail, ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="py-24 bg-[#020202] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="sc-card rounded-[2rem] p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-600/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h2 className="md:text-4xl text-3xl font-bold text-white tracking-tight mb-4">Besoin de devis ?</h2>
            <p className="text-zinc-400 text-lg mb-8">Contactez-nous et discutons de votre projet digital.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a href="tel:+261342497518" className="flex items-center gap-3 text-white hover:text-primary-400 transition-colors">
                <Phone size={20} className="text-primary-500" />
                +261 34 24 975 18
              </a>
              <div className="hidden sm:block w-px h-6 bg-white/10" />
              <a href="mailto:hello@dabil.io" className="flex items-center gap-3 text-white hover:text-primary-400 transition-colors">
                <Mail size={20} className="text-primary-500" />
                hello@dabil.io
              </a>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-white hover:bg-zinc-200 h-12 rounded-full px-8 transition-all hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              Demandez un devis <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
