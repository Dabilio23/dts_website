import { Database } from 'lucide-react'
import ServiceDetailPage from '../../components/ui/ServiceDetailPage'

export default function DonneesB2B() {
  return (
    <ServiceDetailPage
      title="Données B2B"
      metaDesc="Activez vos données B2B avec DTS : enrichissement, scoring prospects, segmentation et campagnes ciblées pour un pipeline commercial toujours actif."
      badge="Données B2B"
      headline={<>Transformez vos données<br /><span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500">en moteur commercial.</span></>}
      subheadline="Vos données B2B valent de l'or -- encore faut-il savoir les exploiter. Nous les enrichissons, les qualifions et les activons pour alimenter votre pipeline."
      icon={<Database size={28} />}
      accentColor="cyan"
      description="La plupart des entreprises collectent des données sans vraiment les exploiter. Notre service Données B2B transforme vos bases de contacts en actifs commerciaux. Enrichissement de données, scoring prédictif, segmentation fine et activation multicanal : chaque action est pensée pour maximiser votre taux de conversion et réduire votre cycle de vente."
      benefits={[
        'Enrichissement et qualification des contacts',
        'Scoring prédictif de vos prospects',
        'Segmentation avancée par secteur, taille, comportement',
        'Activation multicanal (email, LinkedIn, téléphone)',
        'Reporting de performance et optimisation continue',
        'Conformité RGPD garantie à chaque étape',
      ]}
      process={[
        { title: 'Audit données',   desc: 'Analyse de la qualité et de la complétude de vos bases.' },
        { title: 'Enrichissement',  desc: 'Ajout d\'informations manquantes et correction des données erronées.' },
        { title: 'Scoring',         desc: 'Attribution d\'un score de priorité à chaque prospect.' },
        { title: 'Activation',      desc: 'Déclenchement de campagnes ciblées sur les segments prioritaires.' },
      ]}
    />
  )
}
