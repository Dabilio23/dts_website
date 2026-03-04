# DTS — siteweb
Site web officiel de **DTS (Digital Transformation Services)**, une agence spécialisée dans la transformation digitale des entreprises à Madagascar.

Construit avec React + Vite + Tailwind CSS, déployé sur Vercel.

---

## Stack technique

| Outil | Rôle |
|---|---|
| [React 18](https://react.dev) | Framework UI |
| [Vite 5](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com) | Styles utilitaires |
| [React Router 6](https://reactrouter.com) | Routing SPA |
| [Lucide React](https://lucide.dev) | Icônes |
| [Vercel](https://vercel.com) | Hébergement & déploiement |

---

## Structure du projet

```
src/
├── components/
│   ├── layout/        # Header, Footer, Layout
│   ├── sections/      # Hero, TrustedBy, ServicesGrid, Testimonials…
│   └── ui/            # SpotlightCard, ServiceCard, PricingCard…
├── pages/
│   ├── services/      # Pages détail de chaque service
│   └── solutions/     # Pages Dabilio, Axis, AxisPay
├── data/              # Données statiques (services, expertises, tarifs…)
└── hooks/             # Hooks custom (useSpotlight)
```

---

## Pages

| Route | Page |
|---|---|
| `/` | Accueil |
| `/a-propos` | À propos |
| `/services` | Liste des services |
| `/services/maintenance` | Maintenance web |
| `/services/siteweb-optimise` | Site web optimisé |
| `/services/regie-it` | Régie IT |
| `/services/pack-saas-ai` | Pack SaaS AI |
| `/services/donnees-b2b` | Données B2B |
| `/services/marketing-digital` | Marketing digital |
| `/expertises` | Expertises |
| `/solutions` | Solutions |
| `/solutions/dabilio` | Solution Dabilio |
| `/solutions/axis` | Solution Axis |
| `/solutions/axis-pay` | Solution AxisPay |
| `/contact` | Contact |
| `/mentions-legales` | Mentions légales |

---

## Lancer le projet en local

**Prérequis :** Node.js 18+

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Le site est accessible sur `http://localhost:5173`.

### Autres commandes

```bash
npm run build    # Build de production (output dans /dist)
npm run preview  # Prévisualiser le build en local
```

---

## Déploiement sur Vercel

Le fichier `vercel.json` configure les rewrites nécessaires au routing SPA :

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

### Via l'interface Vercel

1. Importez le repo depuis [vercel.com](https://vercel.com)
2. Vercel détecte Vite automatiquement
3. Cliquez **Deploy**

### Via CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

Chaque push sur la branche principale déclenche un redéploiement automatique.
