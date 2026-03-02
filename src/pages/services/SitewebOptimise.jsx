import { Monitor } from 'lucide-react'
import ServiceDetailPage from '../../components/ui/ServiceDetailPage'

export default function SitewebOptimise() {
  return (
    <ServiceDetailPage
      title="Site web optimisé"
      metaDesc="DTS crée des sites web performants, rapides et optimisés SEO à Madagascar. Design responsive, expérience utilisateur soignée et résultats mesurables."
      badge="Site web optimisé"
      headline={<>Des sites web pensés<br /><span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500">pour performer.</span></>}
      subheadline="Votre vitrine digitale doit être à la hauteur de votre ambition. Nous créons des sites web rapides, beaux et optimisés pour convertir vos visiteurs en clients."
      icon={<Monitor size={28} />}
      accentColor="blue"
      description="Chaque site que nous livrons est le fruit d'une réflexion approfondie sur vos objectifs, votre audience et votre positionnement. Du design sur mesure à l'optimisation technique, nous couvrons l'intégralité du cycle de création -- pour un résultat qui reflète votre identité et génère des résultats concrets dès le premier jour."
      benefits={[
        'Design responsive et mobile-first',
        'Optimisation SEO on-page complète',
        'Temps de chargement inférieur à 2 secondes',
        'Intégration CMS pour gestion autonome',
        'Certificat SSL et sécurisation HTTPS',
        'Analytics et suivi de performances intégré',
      ]}
      process={[
        { title: 'Découverte', desc: 'Analyse de vos besoins, de votre marché et de vos objectifs.' },
        { title: 'Design',     desc: 'Création des maquettes et validation du design avec vous.' },
        { title: 'Développement', desc: 'Intégration technique, responsive et optimisation.' },
        { title: 'Livraison',  desc: 'Tests qualité, mise en ligne et formation à la gestion.' },
      ]}
    />
  )
}
