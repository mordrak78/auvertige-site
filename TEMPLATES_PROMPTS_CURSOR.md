# 📋 Templates de Prompts Cursor - Prêts à l'Emploi

## 🚀 Prompt de Démarrage (À utiliser en premier)

```
Je veux créer un site web [TYPE] pour [CLIENT/PROJET].

CONTEXTE :
- Objectif : [OBJECTIF_PRINCIPAL]
- Public cible : [PUBLIC]
- Contraintes : [CONTRAINTES]
- Délai : [DÉLAI]

STACK TECHNIQUE :
- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion (avec réduction mobile)
- React Router
- Déploiement Vercel

RÈGLES STRICTES :
1. TDD : Tests AVANT code
2. BLUEPRINT : Plan + pseudocode AVANT code
3. Confirmation : Status = NEEDS_PLAN_APPROVAL avant de coder
4. Code complet : Aucun TODO/placeholder
5. Accessibilité : WCAG 2.1 AA dès le départ
6. Performance : Optimisations dès le début

PHASE 1 : Créer l'architecture et la structure de dossiers.
Ne pas coder encore, juste proposer la structure complète.
```

---

## 📁 Phase 1 : Setup Initial

### Template Setup Complet

```
PHASE 1 : Setup Initial

1. Créer projet Vite + React + TypeScript
2. Installer dépendances :
   - react-router-dom
   - tailwindcss + autoprefixer + postcss
   - framer-motion
   - lucide-react
   - @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-sheet

3. Configurer Tailwind avec design system :
   - Couleurs : [COULEURS_PRINCIPALES]
   - Fonts : [POLICES]
   - Breakpoints personnalisés si nécessaire

4. Structure de dossiers :
   src/
   ├── components/
   │   ├── ui/              # Shadcn (uniquement nécessaires)
   │   ├── layout/          # Header, Footer, Layout
   │   ├── shared/          # Composants partagés
   │   └── features/        # Composants métier
   ├── pages/
   ├── hooks/
   ├── utils/
   ├── constants/
   ├── data/
   ├── types/
   └── styles/

5. Configurer Vite :
   - Alias @/ pour src/
   - Code splitting préparé
   - Optimisations production

6. Fichiers de base :
   - vite.config.ts
   - tailwind.config.js
   - tsconfig.json
   - .gitignore
   - README.md

IMPORTANT : Structure uniquement, pas de code encore.
```

---

## 🧩 Phase 2 : Composants de Base

### Template Composants UI

```
PHASE 2 : Composants UI de Base

Créer uniquement les composants Shadcn nécessaires :
- Button (avec min-h-[44px] pour accessibilité)
- Card
- Input
- Textarea
- Select
- [AUTRES_SI_NÉCESSAIRE]

RÈGLES :
- Tree-shaking : uniquement ceux utilisés
- Accessibilité : ARIA, focus, contraste
- Tailles : min 44x44px pour boutons/liens
```

### Template Layout

```
PHASE 2 : Layout Principal

1. Layout.tsx :
   - Structure Header + Footer + Main
   - SkipLink pour accessibilité
   - Responsive

2. Header.tsx :
   - Navigation principale
   - Menu mobile (Sheet Shadcn)
   - Logo avec OptimizedImage
   - ARIA labels complets
   - Focus visible

3. Footer.tsx :
   - Navigation
   - Contact
   - Réseaux sociaux
   - ARIA labels

4. OptimizedImage.tsx :
   - Lazy loading par défaut
   - Priority pour above-the-fold
   - Sizes et decoding optimisés

5. Hooks :
   - useReducedMotion (mobile + prefers-reduced-motion)
   - useScrollOpacity (header transparent)
   - useOptimizedInteraction (scheduler)

RÈGLES :
- Accessibilité complète
- Animations conditionnelles
- Performance optimisée
```

---

## 📄 Phase 3 : Pages

### Template Page Standard

```
PHASE 3 : Créer la page [NOM_PAGE]

STRUCTURE :
1. Utiliser Layout
2. Composant Seo avec :
   - Title : "[TITRE_UNIQUE]"
   - Description : "[DESCRIPTION_UNIQUE_<160_CARACTÈRES]"
   - Canonical : "[URL_CANONIQUE]"
   - Schema.org : [TYPE_SCHEMA] si nécessaire
3. Structure HTML5 sémantique :
   - <header> pour hero
   - <main> pour contenu principal
   - <section> pour chaque section
   - H1 unique
   - Hiérarchie H2-H6 respectée
4. IDs pour ancres de navigation
5. Images avec alt descriptifs

CONTENU :
[Liste des sections à créer]

RÈGLES :
- Accessibilité WCAG 2.1 AA
- Performance : lazy loading sections below-the-fold
- SEO : meta tags complets
```

### Template Composant Seo

```
PHASE 3 : Créer composant Seo réutilisable

PROPS :
- title: string
- description: string
- canonical?: string
- image?: string
- type?: 'website' | 'article' | 'product'
- breadcrumbs?: Array<{name: string, url: string}>
- faq?: FAQItem[]
- includePersonSchema?: boolean

FONCTIONNALITÉS :
1. Meta tags standards (title, description, canonical)
2. Open Graph tags
3. Twitter Cards
4. Schema.org JSON-LD :
   - LocalBusiness (par défaut)
   - Service (si type='product')
   - FAQPage (si faq fourni)
   - Person (si includePersonSchema)
   - BreadcrumbList (si breadcrumbs)

RÈGLES :
- Génération automatique Schema.org
- Support FAQPage schema
- Export types pour réutilisation
```

---

## 🎨 Phase 4 : Design System

### Template Design System

```
PHASE 4 : Finaliser Design System

TAILWIND CONFIG :
1. Couleurs :
   - Primary : [COULEUR]
   - Secondary : [COULEUR]
   - Accent : [COULEUR]
   - Neutral : [COULEUR]
   - [AUTRES_SI_NÉCESSAIRE]

2. Typographie :
   - Font primary : [FONT]
   - Font secondary : [FONT]
   - Tailles : [TAILLES]
   - Line-height : [VALEURS]

3. Espacements :
   - Scale cohérente (4px base)

4. Ombres :
   - sm, md, lg, xl

5. Animations :
   - Durées standardisées
   - Easing functions

RÈGLES :
- Mobile-first
- Contraste WCAG AA vérifié
- Cohérence visuelle
```

---

## ⚡ Phase 5 : Fonctionnalités

### Template Formulaire Accessible

```
PHASE 5 : Créer formulaire [NOM_FORMULAIRE]

REQUIREMENTS :
1. Champs :
   [Liste des champs avec types]

2. Validation :
   - Côté client
   - Messages d'erreur accessibles
   - aria-describedby pour erreurs

3. Accessibilité :
   - Labels associés (htmlFor + id)
   - aria-required sur champs requis
   - aria-invalid sur erreurs
   - Focus management
   - min-h-[44px] sur tous les inputs

4. Styling :
   - Design system cohérent
   - Focus visible amélioré
   - États hover/active/focus

RÈGLES :
- WCAG 2.1 AA
- Validation accessible
- Performance optimisée
```

### Template Intégration Externe

```
PHASE 5 : Intégrer [SERVICE_EXTERNE]

SERVICE : [NOM_SERVICE]
API : [DOC_API] ou [MÉTHODE]

REQUIREMENTS :
1. Fonctionnalité principale :
   [Description]

2. Fallback :
   - Si API échoue : [FALLBACK]
   - Message utilisateur clair
   - Pas de blocage de la page

3. Performance :
   - Lazy loading si possible
   - Cache si pertinent
   - Pas d'impact sur LCP

4. Accessibilité :
   - ARIA labels
   - Navigation clavier
   - Contraste vérifié

RÈGLES :
- Fallback obligatoire
- Performance optimisée
- Accessibilité complète
```

---

## 🚀 Phase 6 : Performance

### Template Optimisation Page

```
PHASE 6 : Optimiser page [NOM_PAGE] pour performance

OBJECTIFS :
- PageSpeed mobile > 85
- LCP < 2.5s
- Bundle size réduit

ANALYSE ACTUELLE :
1. Composants chargés :
   [Liste]

2. Imports :
   [Vérifier imports inutiles]

3. Images :
   [Vérifier optimisation]

4. Animations :
   [Vérifier Framer Motion]

ACTIONS :
1. Lazy loading :
   - Composants below-the-fold → React.lazy()
   - Suspense avec fallback minimal

2. Code splitting :
   - Vérifier manualChunks dans vite.config.ts
   - Séparer vendor chunks

3. Réduction animations :
   - useReducedMotion partout
   - Désactiver sur mobile si possible

4. Images :
   - Conversion WebP si possible
   - < 150 Ko par image
   - fetchpriority="high" pour LCP

5. CSS :
   - Extraire CSS critique pour hero
   - Inline dans index.html

BLUEPRINT avant d'optimiser.
```

### Template Vite Config Optimisé

```
PHASE 6 : Optimiser vite.config.ts

CONFIGURATION :
1. Code splitting :
   rollupOptions: {
     output: {
       manualChunks: {
         'vendor-react': ['react', 'react-dom', 'react-router-dom'],
         'vendor-framer': ['framer-motion'],
         'vendor-ui': ['@radix-ui/react-*'],
       }
     }
   }

2. Optimisations :
   - terserOptions: { compress: { drop_console: true } }
   - cssCodeSplit: true
   - sourcemap: false (production)

3. Optimize deps :
   optimizeDeps: {
     exclude: ['framer-motion']
   }

RÈGLES :
- Bundle size < 200 Ko initial
- Code splitting efficace
- Production optimisée
```

---

## ♿ Phase 7 : Accessibilité

### Template Checklist Accessibilité

```
PHASE 7 : Vérifier accessibilité WCAG 2.1 AA

CHECKLIST :

NAVIGATION :
- [ ] Skip link fonctionnel
- [ ] Focus visible sur tous les éléments
- [ ] Navigation clavier complète
- [ ] ARIA labels sur éléments interactifs
- [ ] aria-current sur navigation active

FORMULAIRES :
- [ ] Labels associés (htmlFor + id)
- [ ] aria-required sur champs requis
- [ ] aria-describedby pour erreurs
- [ ] Validation accessible
- [ ] Focus management

CONTRASTE :
- [ ] Texte : ratio 4.5:1 minimum
- [ ] Grand texte : ratio 3:1 minimum
- [ ] Boutons : contraste suffisant
- [ ] Vérifié avec WebAIM Contrast Checker

TAILLES :
- [ ] Boutons/liens min 44x44px
- [ ] Espacement entre cibles

ARIA :
- [ ] Roles appropriés
- [ ] aria-hidden sur décoratifs
- [ ] aria-live si contenu dynamique
- [ ] aria-label si nécessaire

TESTS :
- [ ] Lecteur d'écran (NVDA/JAWS)
- [ ] Navigation clavier uniquement
- [ ] WAVE tool
- [ ] axe DevTools
```

---

## 🔍 Phase 8 : SEO

### Template Checklist SEO

```
PHASE 7 : Vérifier SEO

CHECKLIST :

META TAGS :
- [ ] Title unique sur chaque page (< 60 caractères)
- [ ] Description unique (< 160 caractères)
- [ ] Canonical URL
- [ ] Open Graph complet
- [ ] Twitter Cards

SCHEMA.ORG :
- [ ] LocalBusiness sur homepage
- [ ] Service sur pages services
- [ ] FAQPage sur pages avec FAQ
- [ ] BreadcrumbList si navigation complexe

STRUCTURE HTML :
- [ ] H1 unique par page
- [ ] Hiérarchie H2-H6 respectée
- [ ] Alt text descriptifs sur toutes les images
- [ ] Liens internes avec anchor text descriptif

FICHIERS :
- [ ] sitemap.xml généré
- [ ] robots.txt configuré

TESTS :
- [ ] Google Search Console préparé
- [ ] Rich Results Test (Google)
- [ ] Schema.org Validator
```

---

## 🚢 Phase 9 : Déploiement

### Template Déploiement Vercel

```
PHASE 8 : Déployer sur Vercel

ÉTAPES :

1. Configuration Vercel :
   - vercel.json avec rewrites pour SPA
   - Variables d'environnement
   - Build command : npm run build
   - Output directory : dist

2. Pré-déploiement :
   - [ ] Build local réussi (npm run build)
   - [ ] Aucune erreur TypeScript
   - [ ] Aucun warning
   - [ ] Tests manuels complets

3. Déploiement :
   - [ ] Push sur GitHub
   - [ ] Déploiement Vercel
   - [ ] Vérification URL production

4. Post-déploiement :
   - [ ] PageSpeed Insights vérifié
   - [ ] Accessibilité vérifiée
   - [ ] SEO vérifié
   - [ ] Tests sur production

RÈGLES :
- Ne jamais déployer avec erreurs
- Tester sur production après déploiement
```

### Template vercel.json

```
PHASE 8 : Créer vercel.json

CONFIGURATION :
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}

RÈGLES :
- Rewrites pour React Router SPA
- Framework détecté automatiquement
```

---

## 🐛 Template Correction Bug

```
BUG à corriger : [DESCRIPTION]

CONTEXTE :
- Page/Composant : [LOCALISATION]
- Attendu : [COMPORTEMENT_ATTENDU]
- Actuel : [COMPORTEMENT_ACTUEL]
- Reproduction : [ÉTAPES]

ANALYSE :
1. Identifier cause racine
2. Proposer solution
3. Vérifier impact accessibilité/performance
4. Tester correction

BLUEPRINT avant de corriger.
```

---

## ➕ Template Ajout Fonctionnalité

```
Je veux ajouter [NOM_FONCTIONNALITÉ] à [PAGE/COMPOSANT].

DESCRIPTION :
[Description détaillée]

REQUIREMENTS :
- Accessibilité : WCAG 2.1 AA
- Performance : Pas d'impact négatif
- Responsive : Mobile-first
- Tests : Tests unitaires proposés

BLUEPRINT :
1. Architecture
2. Composants nécessaires
3. Intégration avec l'existant
4. Accessibilité
5. Tests

Status = NEEDS_PLAN_APPROVAL
```

---

## 📊 Template Checklist Finale

```
CHECKLIST FINALE AVANT DÉPLOIEMENT

PERFORMANCE :
- [ ] PageSpeed mobile > 85
- [ ] PageSpeed desktop > 90
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Bundle size < 200 Ko initial

ACCESSIBILITÉ :
- [ ] Navigation clavier complète
- [ ] Focus visible partout
- [ ] Contraste WCAG AA vérifié
- [ ] ARIA labels complets
- [ ] Lecteur d'écran testé
- [ ] Formulaires accessibles

SEO :
- [ ] Meta tags sur toutes les pages
- [ ] Schema.org sur pages pertinentes
- [ ] Sitemap généré
- [ ] robots.txt configuré
- [ ] Structure HTML sémantique
- [ ] Alt text sur toutes les images

CODE QUALITY :
- [ ] Aucune erreur TypeScript
- [ ] Aucun warning
- [ ] Code commenté si nécessaire
- [ ] Pas de TODO/placeholder
- [ ] .gitignore complet

TESTS :
- [ ] Tests manuels complets
- [ ] Responsive testé
- [ ] Navigateurs testés
- [ ] Tests accessibilité
- [ ] Tests performance
```

---

## 📚 CRÉATION DE COMPONENT LIB - Bibliothèque Réutilisable

### Template Prompt Création Component Lib

```
Je veux créer une Component Library réutilisable pour mes projets futurs.

OBJECTIF :
- Composants UI réutilisables
- Hooks personnalisés réutilisables
- Utilitaires partagés
- Types TypeScript partagés

STRUCTURE :
1. Projet séparé (monorepo ou package npm)
2. Build avec Vite pour library mode
3. TypeScript strict
4. Tests avec Vitest
5. Storybook pour documentation (optionnel)

COMPOSANTS À INCLURE :
- Button (variants, sizes, accessibilité)
- Card (variants, responsive)
- Input (validation, accessibilité)
- Modal/Dialog (focus trap, accessibilité)
- [AUTRES_COMPOSANTS]

HOOKS À INCLURE :
- useReducedMotion
- useScrollOpacity
- useOptimizedInteraction
- [AUTRES_HOOKS]

RÈGLES :
- Tous les composants accessibles (WCAG 2.1 AA)
- Tous les composants typés (pas de any)
- Documentation complète
- Tests unitaires
- Exports nommés pour tree-shaking

PHASE 1 : Créer la structure du projet et configurer le build.
```

### Structure Projet Component Lib

```
my-component-lib/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── Card/
│   │   │   └── ...
│   │   └── ...
│   ├── hooks/
│   │   ├── useReducedMotion.ts
│   │   └── ...
│   ├── utils/
│   │   └── ...
│   ├── types/
│   │   └── index.ts
│   └── index.ts              # Export principal
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### Configuration Vite pour Library Mode

```typescript
// vite.config.ts pour Component Lib
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyComponentLib',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
```

### Template Export Principal

```typescript
// src/index.ts
// Composants
export { Button } from './components/Button';
export { Card } from './components/Card';
export type { ButtonProps } from './components/Button';

// Hooks
export { useReducedMotion } from './hooks/useReducedMotion';
export { useScrollOpacity } from './hooks/useScrollOpacity';

// Utils
export { cn } from './utils/cn';

// Types
export type { ComponentProps } from './types';
```

### Template Package.json Component Lib

```json
{
  "name": "@mon-org/component-lib",
  "version": "1.0.0",
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    }
  },
  "files": ["dist"],
  "scripts": {
    "build": "tsc && vite build",
    "dev": "vite build --watch",
    "test": "vitest",
    "type-check": "tsc --noEmit"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "typescript": "^5.0.0",
    "vite": "^5.0.0",
    "vitest": "^1.0.0"
  }
}
```

### Utilisation dans un Projet

```typescript
// Dans votre projet
import { Button, Card, useReducedMotion } from '@mon-org/component-lib';

// Tree-shaking automatique : seulement Button importé
import { Button } from '@mon-org/component-lib';
```

### Checklist Component Lib

- [ ] Structure projet créée
- [ ] Vite configuré en library mode
- [ ] TypeScript strict configuré
- [ ] Composants accessibles (WCAG 2.1 AA)
- [ ] Tous les composants typés
- [ ] Tests unitaires configurés
- [ ] Documentation complète
- [ ] Exports nommés pour tree-shaking
- [ ] Build fonctionnel
- [ ] Package.json configuré

---

## 💡 Utilisation

1. **Copier le template** correspondant à votre besoin
2. **Remplacer les placeholders** entre [CROCHETS]
3. **Adapter** selon votre contexte
4. **Coller dans Cursor** et suivre les instructions

---

**Créé le** : 2024-12-19  
**Pour** : Templates réutilisables pour prompts Cursor

