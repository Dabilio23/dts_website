const clients = [
  { name: 'Housseni', logo: '/logo_housseni.svg', h: 'h-12' },
  { name: 'onno', logo: '/logo_onno_v2.png', h: 'h-20' },
  { name: 'chez tutur', logo: '/logo_tutur.png', h: 'h-7' },
  { name: 'pereepl', h: 'h-16' },
  { name: 'isika', logo: '/logo_isika.png', h: 'h-16' },
  { name: 'Housseni', logo: '/logo_housseni.svg', h: 'h-12' },
  { name: 'onno', logo: '/logo_onno_v2.png', h: 'h-16' }
]

function LogoItem({ client }) {
  return (
    <div className="flex items-center justify-center mx-10 shrink-0">
      {client.logo ? (
        <img
          src={client.logo}
          alt={client.name}
          className={`${client.h ?? 'h-8'} w-auto object-contain opacity-40 hover:opacity-70 transition-opacity grayscale`}
        />
      ) : (
        <span className="text-zinc-600 hover:text-zinc-400 transition-colors font-semibold text-sm tracking-wide whitespace-nowrap">
          {client.name}
        </span>
      )}
    </div>
  )
}

export default function TrustedBy() {
  return (
    <section className="py-16 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-zinc-600 text-xs uppercase tracking-widest font-medium">
          Ils nous ont fait confiance
        </p>
      </div>

      <div className="relative">
        {/* Gradient fade left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />
        {/* Gradient fade right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />

        <div className="flex animate-marquee">
          {/* First set */}
          {clients.map((client) => (
            <LogoItem key={client.name} client={client} />
          ))}
          {/* Duplicate for seamless loop */}
          {clients.map((client) => (
            <LogoItem key={`dup-${client.name}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  )
}
