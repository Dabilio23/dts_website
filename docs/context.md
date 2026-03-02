# Contexte du projet — Site web Dabilio (DTS)

## Vue d'ensemble

**Entreprise :** Dabilio / DTS (Digital Transformation Services)
**Slogan :** Co-créer, Innover, Transformer
**Mission :** Accompagner la transformation digitale des métiers
**Site :** Application React statique (pas de backend)
**Langue principale :** Français

---

## Stack technique

- **Framework :** React (avec React Router pour la navigation)
- **Styles :** Tailwind CSS
- **Icônes :** Iconify ou Lucide React
- **Formulaires :** Formulaire de contact statique (mailto: ou service tiers sans backend, ex. Formspree)
- **Déploiement :** Netlify ou Vercel (site statique)

---

## Pages et routes

| Route | Nom | Statut contenu |
|---|---|---|
| `/` | Accueil | ✅ Complet |
| `/a-propos` | À propos | ⚠️ À définir |
| `/services` | Nos Services | ✅ Liste confirmée |
| `/services/maintenance` | Maintenance & Tarifs | ✅ Complet |
| `/services/siteweb-optimise` | Siteweb optimisé | ⚠️ Description à fournir |
| `/services/regie-it` | Régie IT | ⚠️ Description à fournir |
| `/services/pack-saas-ai` | Pack Saas AI | ⚠️ Description à fournir |
| `/services/donnees-b2b` | Données B2B | ⚠️ Description à fournir |
| `/services/marketing-digital` | Marketing digital | ⚠️ Description à fournir |
| `/expertises` | Nos Expertises | ⚠️ Contenu partiel |
| `/solutions` | Solutions | ✅ Complet |
| `/contact` | Contact | ✅ Complet |

---

## Navigation (Header)

**Logo :** DTS
**Liens :** Accueil · À propos · Services · Solutions · Contact
**CTA Header :** "Demandez un devis" (bouton principal)

---

## Page 1 — Accueil (`/`)

### Section Hero
- **Titre :** Donnez vie à votre vision digitale.
- **Sous-titre :** Dabillo prend le relais de votre transformation numérique.
- **CTA :** Bouton "DEMANDEZ UN DEVIS" → `/contact`

### Section Valeurs (4 piliers)
| Valeur | |
|---|---|
| Transparence | |
| Proximité | |
| Excellence | |
| Expertise | |

### Section "Pourquoi nous choisir"
- **Titre :** Nous convertissons votre vision en croissance.
- **Texte :** En transformant vos priorités business en solutions digitales prêtes à performer.
- **Points clés :**
  - **Croissance :** Nous évoluons au côté des entreprises pour générer de la croissance.
  - **Satisfaction Clients :** La confiance accordée à notre expertise.
- **Stats :** 20%, 21% (taux de réussite/croissance)
- **CTA :** Bouton "À PROPOS" → `/a-propos`

### Section "Nos Services" (grille de 6 cards)
| # | Service | Lien vers |
|---|---|---|
| 1 | Maintenance | `/services/maintenance` |
| 2 | Siteweb optimisé | `/services/siteweb-optimise` |
| 3 | Régie IT | `/services/regie-it` |
| 4 | Pack Saas AI | `/services/pack-saas-ai` |
| 5 | Données B2B | `/services/donnees-b2b` |
| 6 | Marketing digital | `/services/marketing-digital` |

> **À compléter :** icône et description courte (1-2 phrases) pour chacun des 6 services.

### Section Témoignages
| Nom | Titre |
|---|---|
| Shafiul Amin | Finance advisor |
| Raherinirina Léonard | Responsable Marketing |

### Section CTA bas de page
- **Texte :** Besoin de devis ?
- **Téléphone :** +261 34 82 298 57
- **Email :** hello@dabil.io

---

## Liste complète des services

| Service | Route | Description | Icône suggérée |
|---|---|---|---|
| Maintenance | `/services/maintenance` | *(page tarifs déjà détaillée)* | shield |
| Siteweb optimisé | `/services/siteweb-optimise` | **À renseigner** | monitor |
| Régie IT | `/services/regie-it` | **À renseigner** | server |
| Pack Saas AI | `/services/pack-saas-ai` | **À renseigner** | cpu / sparkles |
| Données B2B | `/services/donnees-b2b` | **À renseigner** | database |
| Marketing digital | `/services/marketing-digital` | **À renseigner** | trending-up |

> Chaque service aura sa propre page de détail avec : titre, description longue, bénéfices clés, CTA "Demander un devis".

---

## Page 2 — Maintenance & Tarifs (`/services/maintenance`)

### Mission
- **Titre :** Notre mission : Faire évoluer votre site, pas seulement le maintenir.
- **Engagements :**
  - Sécuriser le site
  - Accompagner les évolutions
  - Améliorer l'expérience utilisateur
  - Corriger les bugs immédiatement
  - Renforcer le SEO

### Grille tarifaire — 3 packs

#### Pack Sécurité + — 100 €/mois
- Mises à jour CMS/extensions
- Sauvegardes hebdomadaires
- Surveillance pare-feu
- Certificat SSL
- Assistance e-mail (5j/7)
- Rapport mensuel

#### Pack Performance + — 150 €/mois
*(Inclus Sécurité+, plus :)*
- Sauvegardes quotidiennes
- Optimisation vitesse/cache
- Surveillance temps réel
- Maintenance corrective illimitée
- Support prioritaire (6j/7)
- Mises à jour contenu/visuels

#### Pack Excellence + — 250 €/mois
*(Inclus Performance+, plus :)*
- Supervision 24h/24
- Dépannage prioritaire (< 4h)
- Environnement de préproduction
- Audit trimestriel
- Accompagnement SEO & RGPD
- Support illimité (chat/tél)
- Conseils stratégiques mensuels

### Formulaire de contact (sur la page)
Champs : Nom, Email, Objet, Numéro de téléphone, Message
Bouton : "SEND MESSAGE"

---

## Page 3 — Nos Expertises (`/expertises`)

### En-tête
- **Titre :** NOS EXPERTISES
- **Texte :** Chez DTS, chaque projet est le fruit d'un travail d'équipe entre experts passionnés. Nos profils seniors apportent leur expérience tandis que nos talents juniors insufflent créativité et innovation.
- **CTA :** Bouton "Demander un devis" → `/contact`

### Grille de services/expertises
| Expertise | Description |
|---|---|
| Site vitrine | Des sites vitrines sur mesure, pensés pour renforcer votre image et générer de nouvelles opportunités. |
| *(autres à compléter)* | *(lorem ipsum dans le template originel — à renseigner)* |

---

## Page 4 — Solutions (`/solutions`)

> Les 3 solutions sont des produits SaaS développés par Dabilio. Chaque card renvoie vers le site externe correspondant (lien `target="_blank"`).

| # | Nom | URL | Description |
|---|---|---|---|
| 1 | **Dabilio** | https://dabil.io | Solution SaaS de gestion scolaire |
| 2 | **Axis** | https://axis.dabil.io | Plateforme de gestion de trésorerie pour TPE et PME |
| 3 | **Axis Pay** | *(pas d'URL externe)* | Plateforme de paiement mobile money à Madagascar |

### Structure de la page
- **Titre de section :** Nos Solutions
- **Sous-titre :** *(à définir)*
- **Grille de 3 cards produit**, chacune avec :
  - Nom du produit
  - Description courte
  - Badge / tag (ex. "SaaS", "Fintech", "EdTech")
  - Bouton "Découvrir" → lien externe (sauf Axis Pay si pas d'URL)
- **CTA bas de page :** "Vous avez un projet ? Parlons-en." → `/contact`

---

## Pied de page (Footer) — commun à toutes les pages

### Colonne 1 — À propos de DTS
- **Logo :** DTS
- **Baseline :** Co-créer, Innover, Transformer.
- **Texte :** Accompagner la transformation digitale des métiers.
- **Réseaux sociaux :** X (Twitter), LinkedIn, Pinterest, Instagram

### Colonne 2 — Liens rapides
- À propos
- Nous contacter
- Team Members
- Solutions

### Colonne 3 — Contact
- **Adresse :** Lot IVP 7 Bis Ankadifotsy, Befelatanana, Antananarivo, 101, Madagascar.
- **Téléphone :** +261 34 82 298 57
- **Email :** hello@dabil.io

### Bas du footer
- Copyright : Dabilio © 2025 | All Rights Reserved.

---

## Informations de contact globales

| | |
|---|---|
| **Téléphone** | +261 34 82 298 57 |
| **Email** | hello@dabil.io |
| **Adresse** | Lot IVP 7 Bis Ankadifotsy, Befelatanana, Antananarivo, 101, Madagascar |
| **Réseaux** | X · LinkedIn · Pinterest · Instagram |

---

## Composants React à créer

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Navigation + logo + CTA
│   │   └── Footer.jsx          # Pied de page commun
│   ├── ui/
│   │   ├── Button.jsx          # Bouton réutilisable (variants: primary, secondary, outline)
│   │   ├── ServiceCard.jsx     # Card service avec titre + description + CTA
│   │   ├── PricingCard.jsx     # Card tarif avec liste de features
│   │   ├── TestimonialCard.jsx # Card témoignage client
│   │   └── ContactForm.jsx     # Formulaire de contact réutilisable
│   └── sections/
│       ├── Hero.jsx
│       ├── Values.jsx
│       ├── WhyUs.jsx
│       ├── ServicesGrid.jsx
│       ├── Testimonials.jsx
│       └── CtaBanner.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Maintenance.jsx
│   ├── Expertises.jsx
│   ├── Solutions.jsx
│   └── Contact.jsx
├── data/
│   ├── services.js             # Données des 6 services
│   ├── pricing.js              # Données des 3 packs maintenance
│   ├── testimonials.js         # Données des témoignages
│   └── expertises.js           # Données des expertises
└── App.jsx                     # Router principal
```

---

## Notes design

- **Thème :** Professionnel, moderne, dark ou light (à définir)
- **Couleur principale :** À définir (le template de référence utilise orange `#ea580c` — peut convenir pour les CTA)
- **Typographie :** Inter (déjà utilisée dans le template HTML de référence)
- **Style des cards :** Fond sombre, bordure subtile, effet hover (voir `.sc-card` dans template.html)
- **Responsive :** Mobile-first, grilles adaptatives

---

## Points d'attention

1. **Formulaire sans backend :** Utiliser [Formspree](https://formspree.io) ou `mailto:` pour le formulaire de contact.
2. **SEO :** Ajouter des balises `<title>` et `<meta description>` par page avec React Helmet.
3. **Contenu à compléter :** La page Expertises a plusieurs blocs "lorem ipsum" dans l'original — le contenu réel reste à fournir.
4. **Page Solutions :** 3 solutions documentées, liens externes — ouvrir dans un nouvel onglet (`target="_blank"`).
5. **Page À propos :** Mentionnée dans la navigation mais son contenu n'est pas décrit dans les images sources — à définir.
