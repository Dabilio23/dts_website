import Layout from '../components/layout/Layout'

export default function MentionsLegales() {
  return (
    <Layout
      title="Mentions légales"
      description="Mentions légales de Dabilio — informations légales, éditeur, hébergeur et propriété intellectuelle."
    >
      <div className="pt-40 pb-24 max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <div className="text-primary-500 font-mono text-xs uppercase tracking-wider mb-2">Légal</div>
          <h1 className="text-4xl font-semibold text-white tracking-tight mb-4">Mentions légales</h1>
          <p className="text-zinc-400 text-sm">Conformément aux dispositions légales en vigueur.</p>
        </div>

        <div className="flex flex-col gap-10 text-sm text-zinc-400 leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-base mb-3">1. Éditeur du site</h2>
            <p><span className="text-zinc-300">Raison sociale :</span> Dabilio Technology Solutions</p>
            <p><span className="text-zinc-300">Adresse :</span> Lot 270 Bis 5 Pagodes Ambodiakondro, Ambohijanaka, Antananarivo Atsimondrano, 102</p>
            <p><span className="text-zinc-300">Téléphone :</span> +261 34 24 975 18</p>
            <p><span className="text-zinc-300">Email :</span> hello@dabil.io</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">2. Directeur de la publication</h2>
            <p>Le directeur de la publication est le représentant légal de Dabilio.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">3. Hébergement</h2>
            <p>Ce site est hébergé par un prestataire tiers. Les coordonnées de l'hébergeur sont disponibles sur demande à l'adresse hello@dabil.io.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo, icônes, etc.)
              sont la propriété exclusive de Dabilio ou de ses partenaires et sont protégés par les lois relatives
              à la propriété intellectuelle. Toute reproduction, distribution ou utilisation sans autorisation
              préalable est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">5. Données personnelles</h2>
            <p>
              Les informations collectées via le formulaire de contact sont utilisées uniquement dans le cadre
              de la relation commerciale avec Dabilio. Elles ne sont ni cédées ni vendues à des tiers.
              Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification
              et de suppression de vos données en contactant hello@dabil.io.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">6. Cookies</h2>
            <p>
              Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie
              publicitaire ou de traçage tiers n'est déposé sans votre consentement.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">7. Limitation de responsabilité</h2>
            <p>
              Dabilio s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.
              Toutefois, Dabilio ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations
              mises à disposition. Dabilio décline toute responsabilité pour tout dommage résultant d'une
              utilisation frauduleuse du site ou des informations qu'il contient.
            </p>
          </section>

        </div>
      </div>
    </Layout>
  )
}
