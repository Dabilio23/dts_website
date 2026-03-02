import { TrendingUp } from 'lucide-react'
import ServiceDetailPage from '../../components/ui/ServiceDetailPage'

export default function MarketingDigital() {
  return (
    <ServiceDetailPage
      title="Marketing Digital"
      metaDesc="Stratégies de marketing digital complètes avec DTS : SEO, Google Ads, réseaux sociaux, email marketing. Boostez votre visibilité et générez des leads qualifiés."
      badge="Marketing Digital"
      headline={<>Maximisez votre visibilité,<br /><span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500">générez des leads qualifiés.</span></>}
      subheadline="Du référencement naturel aux campagnes payantes, nous déployons des stratégies digitales mesurables qui produisent des résultats concrets."
      icon={<TrendingUp size={28} />}
      accentColor="pink"
      description="Le marketing digital efficace repose sur une stratégie cohérente et des actions coordonnées sur plusieurs canaux. Chez DTS, nous construisons votre présence en ligne de A à Z : audit de l'existant, définition des objectifs, déploiement des actions et optimisation continue. Chaque euro investi est tracé, mesuré et optimisé pour maximiser votre ROI."
      benefits={[
        'Audit SEO complet et stratégie sur mesure',
        'Gestion des campagnes Google Ads & Meta Ads',
        'Community management et création de contenu',
        'Email marketing et séquences automatisées',
        'Reporting mensuel détaillé et recommandations',
        'Optimisation du taux de conversion (CRO)',
      ]}
      process={[
        { title: 'Audit',       desc: 'Analyse de votre présence digitale actuelle et identification des opportunités.' },
        { title: 'Stratégie',   desc: 'Définition des objectifs, des KPIs et du plan d\'action.' },
        { title: 'Déploiement', desc: 'Mise en œuvre des campagnes et actions définies.' },
        { title: 'Optimisation',desc: 'Analyse des résultats et ajustements continus pour performer davantage.' },
      ]}
    />
  )
}
