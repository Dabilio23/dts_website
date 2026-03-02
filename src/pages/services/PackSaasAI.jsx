import { Cpu } from 'lucide-react'
import ServiceDetailPage from '../../components/ui/ServiceDetailPage'

export default function PackSaasAI() {
  return (
    <ServiceDetailPage
      title="Pack SaaS AI"
      metaDesc="Automatisez vos processus métier avec le Pack SaaS AI de DTS. Outils IA, chatbots, analytics et intégrations sur mesure pour booster votre productivité."
      badge="Pack SaaS AI"
      headline={<>L'intelligence artificielle<br /><span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500">au service de votre croissance.</span></>}
      subheadline="Des outils SaaS augmentés par l'IA pour automatiser, analyser et optimiser vos opérations -- sans complexité technique."
      icon={<Cpu size={28} />}
      accentColor="green"
      description="Le Pack SaaS AI de DTS vous donne accès à un ensemble d'outils intelligents soigneusement sélectionnés et configurés pour votre métier. Automatisation des tâches répétitives, analyse prédictive de vos données, assistants IA personnalisés et intégrations avec vos outils existants : l'IA devient votre levier de croissance opérationnelle, sans que vous ayez besoin de devenir un expert technique."
      benefits={[
        'Automatisation des tâches chronophages',
        'Tableaux de bord analytiques en temps réel',
        'Chatbots et assistants IA personnalisés',
        'Intégration avec CRM, ERP et outils métier',
        'Formation et accompagnement de vos équipes',
        'Évolution continue au fil des nouvelles IA',
      ]}
      process={[
        { title: 'Audit',         desc: 'Identification des processus automatisables dans votre organisation.' },
        { title: 'Configuration', desc: 'Paramétrage et personnalisation des outils SaaS sélectionnés.' },
        { title: 'Intégration',   desc: 'Connexion avec vos systèmes existants et tests end-to-end.' },
        { title: 'Formation',     desc: 'Prise en main par vos équipes et support continu.' },
      ]}
    />
  )
}
