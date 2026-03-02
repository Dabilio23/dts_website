import { Server } from 'lucide-react'
import ServiceDetailPage from '../../components/ui/ServiceDetailPage'

export default function RegieIT() {
  return (
    <ServiceDetailPage
      title="Régie IT"
      metaDesc="Renforcez vos équipes avec les experts IT en régie de DTS. Développeurs, chefs de projet, architectes -- disponibles rapidement, à Madagascar et à distance."
      badge="Régie IT"
      headline={<>Des experts IT<br /><span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500">quand vous en avez besoin.</span></>}
      subheadline="Accédez à des talents qualifiés sans les contraintes d'un recrutement. Nos experts s'intègrent à vos équipes et livrent immédiatement."
      icon={<Server size={28} />}
      accentColor="purple"
      description="La régie IT vous permet de renforcer ponctuellement ou durablement votre capacité d'exécution sans passer par un processus de recrutement long et coûteux. Nos experts -- développeurs full-stack, chefs de projet, architectes, DevOps, designers UX -- s'adaptent à votre environnement de travail, votre stack technique et votre culture d'entreprise pour livrer rapidement de la valeur."
      benefits={[
        'Profils disponibles sous 48h à 2 semaines',
        'Flexibilité totale sur la durée de mission',
        'Compétences couvrant tout le stack digital',
        'Intégration fluide dans vos équipes existantes',
        'Suivi et reporting hebdomadaires',
        'Possibilité de télétravail ou présentiel',
      ]}
      process={[
        { title: 'Qualification',   desc: 'Analyse de votre besoin et du profil recherché.' },
        { title: 'Matching',        desc: 'Sélection du ou des profils les plus adaptés.' },
        { title: 'Démarrage',       desc: 'Onboarding rapide et intégration dans vos outils.' },
        { title: 'Suivi continu',   desc: 'Points réguliers pour s\'assurer de votre satisfaction.' },
      ]}
    />
  )
}
