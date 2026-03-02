import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Formspree or mailto fallback
    e.target.submit()
  }

  if (sent) {
    return (
      <div className="text-center py-12">
        <p className="text-white text-xl font-semibold mb-2">Message envoyé !</p>
        <p className="text-zinc-400">Nous vous répondrons dans les plus brefs délais.</p>
      </div>
    )
  }

  return (
    <form
      action="https://formspree.io/f/hello@dabil.io"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-zinc-400 text-xs mb-1.5">Nom *</label>
          <input
            type="text"
            name="nom"
            required
            placeholder="Jean Dupont"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-zinc-400 text-xs mb-1.5">Email *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="jean@example.com"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/50 transition-colors"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-zinc-400 text-xs mb-1.5">Objet *</label>
          <input
            type="text"
            name="objet"
            required
            placeholder="Demande de devis"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-zinc-400 text-xs mb-1.5">Téléphone</label>
          <input
            type="tel"
            name="telephone"
            placeholder="+261 34 00 000 00"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/50 transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-zinc-400 text-xs mb-1.5">Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre projet..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="flex items-center gap-2 bg-white hover:bg-zinc-200 text-black text-sm font-semibold h-12 rounded-full px-8 transition-all hover:scale-[1.02] active:scale-[0.98]"
      >
        <Send size={16} />
        SEND MESSAGE
      </button>
    </form>
  )
}
