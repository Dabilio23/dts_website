import { services } from '../../data/services'
import ServiceCard from '../ui/ServiceCard'

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-[#020202] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-orange-500 font-mono text-xs uppercase tracking-wider mb-2">Nos services</div>
          <h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight mb-4">
            Tout ce qu'il vous faut pour<br />réussir votre transformation.
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Des services complets et modulaires pour répondre à chaque étape de votre évolution digitale.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
