import { testimonials } from '../../data/testimonials'
import TestimonialCard from '../ui/TestimonialCard'

export default function Testimonials() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-orange-500 font-mono text-xs uppercase tracking-wider mb-2">Témoignages</div>
          <h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Ce que disent nos clients</h2>
          <p className="text-zinc-400 text-sm">La confiance accordée à notre expertise, exprimée par ceux qui nous font confiance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
