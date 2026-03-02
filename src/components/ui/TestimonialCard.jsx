import { Star } from 'lucide-react'

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-6 hover:border-white/20 transition-colors">
      <div className="flex text-orange-500 gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" />
        ))}
      </div>
      <p className="text-zinc-300 text-[15px] leading-relaxed">"{testimonial.quote}"</p>
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white text-xs font-bold ring-1 ring-white/10`}>
          {testimonial.initials}
        </div>
        <div>
          <p className="text-white text-sm font-medium">{testimonial.name}</p>
          <p className="text-zinc-500 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}
