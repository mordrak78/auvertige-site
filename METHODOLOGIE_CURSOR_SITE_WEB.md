# 🎯 Méthodologie Complète : Créer un Site Web avec Cursor

## 📋 Table des Matières

1. [Phase 0 : Préparation et Architecture](#phase-0-préparation-et-architecture)
2. [🛡️ SAFEGUARDS - Protection Anti-Erreurs](#️-safeguards---protection-anti-erreurs)
3. [Phase 1 : Setup Initial](#phase-1-setup-initial)
4. [Phase 2 : Structure et Composants de Base](#phase-2-structure-et-composants-de-base)
5. [Phase 3 : Pages et Routing](#phase-3-pages-et-routing)
6. [Phase 4 : Styling et Design System](#phase-4-styling-et-design-system)
7. [🎨 UX Guidelines - Standards de Design](#-ux-guidelines---standards-de-design)
8. [Phase 5 : Fonctionnalités Avancées](#phase-5-fonctionnalités-avancées)
9. [Phase 6 : Optimisation Performance](#phase-6-optimisation-performance)
10. [Phase 7 : SEO et Accessibilité](#phase-7-seo-et-accessibilité)
11. [Phase 8 : Déploiement](#phase-8-déploiement)
12. [Prompts Réutilisables](#prompts-réutilisables)

---

## Phase 0 : Préparation et Architecture

### 🎯 Prompt Initial (À donner en premier)

```
Je veux créer un site web [TYPE DE SITE] pour [CLIENT/PROJET].

CONTEXTE :
- Objectif principal : [OBJECTIF]
- Public cible : [PUBLIC]
- Contraintes techniques : [CONTRAINTES]
- Délai : [DÉLAI]

EXIGENCES TECHNIQUES :
- Framework : React + TypeScript + Vite
- Styling : Tailwind CSS
- Animations : Framer Motion (avec réduction pour mobile)
- Routing : React Router
- Déploiement : Vercel

RÈGLES STRICTES :
1. TDD : Toujours proposer les tests AVANT le code
2. BLUEPRINT : Toujours commencer par un plan + pseudocode
3. Confirmation : Demander Status = NEEDS_PLAN_APPROVAL avant de coder
4. Code complet : Aucun TODO, aucun placeholder
5. Accessibilité : WCAG 2.1 AA dès le départ
6. Performance : Optimisations dès le début (lazy loading, code splitting)

PHASE 1 : Créer l'architecture du projet et la structure de dossiers.
Ne pas coder encore, juste proposer la structure complète.
```

### ✅ Checklist Phase 0

- [ ] Structure de dossiers définie
- [ ] Technologies choisies et justifiées
- [ ] Architecture des composants planifiée
- [ ] Système de design défini
- [ ] Stratégie SEO définie
- [ ] Plan d'accessibilité défini

---

## 🛡️ SAFEGUARDS - Protection Anti-Erreurs

### Objectif
Empêcher Cursor d'introduire du code mort, des variables inutilisées, des imports non utilisés, des fichiers non référencés, et du code non typé.

### RÈGLES ANTI-ERREURS (OBLIGATOIRES)

#### Code Quality
- ❌ **PAS d'imports non utilisés**
  - ✅ Vérifier avant chaque commit
  - ✅ Utiliser ESLint rule: `no-unused-vars`
  - ✅ Supprimer immédiatement si détecté

- ❌ **PAS de console.log en production**
  - ✅ Utiliser `console.log` uniquement en développement
  - ✅ Vite config : `terserOptions: { compress: { drop_console: true } }`
  - ✅ Alternative : logger utilitaire avec niveau (dev/prod)

- ❌ **PAS de `any` en TypeScript**
  - ✅ Toujours typer explicitement
  - ✅ Utiliser `unknown` si type vraiment inconnu
  - ✅ Créer des types/interfaces si nécessaire

- ❌ **PAS de code commenté inutile**
  - ✅ Supprimer le code commenté
  - ✅ Utiliser Git pour l'historique
  - ✅ Commentaires explicatifs OK, code commenté NON

#### Fichiers et Fonctions
- ❌ **PAS de fichiers non référencés**
  - ✅ Vérifier avant suppression
  - ✅ Utiliser `grep` pour trouver références
  - ✅ Supprimer fichiers orphelins régulièrement

- ❌ **PAS de fonctions inutilisées**
  - ✅ Exporter uniquement si nécessaire
  - ✅ Supprimer fonctions privées non utilisées
  - ✅ Vérifier avec ESLint

#### Vérifications Automatiques
```json
// package.json scripts à ajouter
{
  "scripts": {
    "lint": "eslint src --ext .ts,.tsx",
    "lint:fix": "eslint src --ext .ts,.tsx --fix",
    "type-check": "tsc --noEmit",
    "check-unused": "ts-prune",
    "pre-commit": "npm run lint && npm run type-check"
  }
}
```

#### Checklist Avant Commit
- [ ] Aucun import non utilisé
- [ ] Aucun console.log
- [ ] Aucun `any`
- [ ] Aucun code commenté
- [ ] Aucun fichier non référencé
- [ ] Aucune fonction inutilisée
- [ ] TypeScript compile sans erreur
- [ ] ESLint passe sans erreur

---

## Phase 1 : Setup Initial

### 🎯 Prompt Setup

```
PHASE 1 : Setup Initial du Projet

1. Créer le projet Vite + React + TypeScript
2. Installer les dépendances essentielles :
   - react-router-dom
   - tailwindcss + autoprefixer + postcss
   - framer-motion
   - lucide-react (icônes)
   - @radix-ui/react-* (composants UI de base)

3. Configurer Tailwind CSS avec :
   - Couleurs personnalisées du design system
   - Fonts personnalisées
   - Breakpoints personnalisés si nécessaire

4. Créer la structure de dossiers :
   src/
   ├── components/
   │   ├── ui/              # Composants UI réutilisables (Shadcn)
   │   ├── layout/          # Header, Footer, Layout
   │   ├── shared/          # Composants partagés
   │   └── features/        # Composants métier par fonctionnalité
   ├── pages/               # Pages de l'application
   ├── hooks/               # Hooks React personnalisés
   ├── utils/               # Fonctions utilitaires
   ├── constants/           # Constantes et configurations
   ├── data/                # Données statiques (images, textes)
   ├── types/               # Types TypeScript
   └── styles/              # Styles globaux

5. Configurer Vite pour :
   - Code splitting automatique
   - Optimisation des assets
   - Alias de chemins (@/ pour src/)

6. Créer les fichiers de base :
   - vite.config.ts (avec optimisations)
   - tailwind.config.js (avec design system)
   - tsconfig.json (avec paths alias)
   - .gitignore
   - README.md

IMPORTANT : Ne pas créer de composants encore, juste la structure et la config.
```

### ✅ Checklist Phase 1

- [ ] Projet Vite créé et fonctionnel
- [ ] Toutes les dépendances installées
- [ ] Tailwind configuré avec design system
- [ ] Structure de dossiers créée
- [ ] Vite configuré avec alias et optimisations
- [ ] Git initialisé avec .gitignore

---

## Phase 2 : Structure et Composants de Base

### 🎯 Prompt Composants de Base

```
PHASE 2 : Composants de Base et Layout

1. Créer le système de design de base :
   - Composants UI Shadcn essentiels (Button, Card, Input, etc.)
   - Uniquement ceux nécessaires (tree-shaking)
   - Ajouter min-h-[44px] pour accessibilité

2. Créer le Layout principal :
   - Layout.tsx avec Header + Footer + Main
   - SkipLink pour accessibilité
   - Structure responsive

3. Créer le Header :
   - Navigation principale
   - Menu mobile avec Sheet (Shadcn)
   - Logo avec OptimizedImage
   - ARIA labels complets
   - Focus visible amélioré

4. Créer le Footer :
   - Liens de navigation
   - Informations de contact
   - Réseaux sociaux
   - ARIA labels complets

5. Créer OptimizedImage component :
   - Lazy loading par défaut
   - Priority pour images above-the-fold
   - Sizes et decoding optimisés
   - Support WebP (préparé pour conversion future)

6. Créer hooks essentiels :
   - useReducedMotion (détecte mobile + prefers-reduced-motion)
   - useScrollOpacity (pour header transparent)
   - useOptimizedInteraction (pour scheduler de tâches)

RÈGLES :
- Tous les composants doivent être accessibles (ARIA, focus, contraste)
- Tous les boutons min 44x44px
- Tous les liens avec aria-label si nécessaire
- Animations conditionnelles avec useReducedMotion
```

### ✅ Checklist Phase 2

- [ ] Composants UI de base créés (Button, Card, Input)
- [ ] Layout principal fonctionnel
- [ ] Header avec navigation responsive
- [ ] Footer complet
- [ ] OptimizedImage component créé
- [ ] Hooks essentiels créés
- [ ] Accessibilité de base vérifiée

---

## Phase 3 : Pages et Routing

### 🎯 Prompt Pages

```
PHASE 3 : Pages et Routing

1. Configurer React Router :
   - Routes principales définies
   - Composant NotFound
   - Redirect301 pour redirections SEO

2. Créer les pages essentielles :
   - Homepage (Index.tsx)
   - Pages métier principales
   - Page 404

3. Pour chaque page :
   - Utiliser Layout
   - Ajouter composant Seo avec :
     * Title et description uniques
     * Open Graph tags
     * Schema.org approprié (LocalBusiness, Service, etc.)
   - Structure sémantique HTML5 (header, main, section, article)
   - IDs pour ancres de navigation

4. Créer le composant Seo réutilisable :
   - Props : title, description, canonical, image, type, breadcrumbs, faq
   - Génération automatique Schema.org JSON-LD
   - Support FAQPage schema

5. Créer le composant FAQ :
   - Accordéon accessible (ARIA)
   - Export FAQItem type pour Seo component
   - Support Schema.org FAQPage

RÈGLES :
- Chaque page doit avoir un titre H1 unique
- Structure sémantique respectée
- Tous les liens internes avec aria-label si nécessaire
- Images avec alt descriptifs
```

### ✅ Checklist Phase 3

- [ ] Routes configurées
- [ ] Pages principales créées
- [ ] Composant Seo créé et utilisé partout
- [ ] Composant FAQ créé
- [ ] Schema.org sur toutes les pages pertinentes
- [ ] Structure sémantique vérifiée

---

## Phase 4 : Styling et Design System

### 🎯 Prompt Design System

```
PHASE 4 : Design System et Styling

1. Finaliser le design system dans tailwind.config.js :
   - Couleurs principales et secondaires
   - Typographie (fonts, tailles, line-height)
   - Espacements cohérents
   - Ombres et effets
   - Animations personnalisées

2. Créer les composants stylisés réutilisables :
   - Hero section
   - Section avec titre centré
   - Cards avec hover effects
   - Boutons CTA
   - Formulaires stylisés

3. Appliquer le design system :
   - Cohérence visuelle sur toutes les pages
   - Responsive design mobile-first
   - Dark mode si nécessaire (préparé)

4. Optimiser les styles :
   - CSS critique inline pour hero (index.html)
   - PurgeCSS configuré correctement
   - Pas de styles inutilisés

RÈGLES :
- Mobile-first approach
- Breakpoints cohérents
- Espacements harmonieux
- Contraste WCAG AA vérifié
```

### ✅ Checklist Phase 4

- [ ] Design system complet dans Tailwind
- [ ] Composants stylisés réutilisables
- [ ] Cohérence visuelle vérifiée
- [ ] Responsive testé sur mobile/tablette/desktop
- [ ] CSS critique extrait pour hero
- [ ] Contraste des couleurs vérifié

---

## 🎨 UX Guidelines - Standards de Design

### Objectif
Assurer une expérience utilisateur cohérente et accessible sur tous les projets.

### UX RULES (OBLIGATOIRES)

#### Tailles et Espacements
- ✅ **Boutons toujours avec min-w-[44px] et min-h-[44px]**
  - Accessibilité WCAG : taille minimale de cible tactile
  - Appliquer sur tous les boutons et liens cliquables
  - Espacement minimum 8px entre cibles

- ✅ **Espacements cohérents**
  - Base : 4px (scale Tailwind)
  - Sections : multiples de 16px (4, 8, 16, 24, 32, 48, 64)
  - Padding conteneurs : 16px mobile, 24px desktop

#### Typographie
- ✅ **Pas plus de 2 polices max**
  - 1 police principale (sans-serif pour le texte)
  - 1 police secondaire (serif ou script pour titres)
  - Exemple : Inter + Dancing Script

- ✅ **Hiérarchie typographique claire**
  - H1 : 2.5rem - 3rem (mobile - desktop)
  - H2 : 2rem - 2.5rem
  - H3 : 1.5rem - 2rem
  - Body : 1rem - 1.125rem
  - Line-height : 1.5 pour body, 1.2 pour titres

#### Animations
- ✅ **Animation < 200ms pour interactions**
  - Hover : 150ms
  - Click/Tap : 100ms
  - Transitions : 200ms max
  - Utiliser `transition-all duration-200`

- ✅ **Respecter prefers-reduced-motion**
  - Désactiver animations si `prefers-reduced-motion: reduce`
  - Utiliser `useReducedMotion` hook partout
  - Animations essentielles uniquement

#### Couleurs et Contraste
- ✅ **Couleurs respectant contrastes WCAG AA**
  - Texte normal : ratio 4.5:1 minimum
  - Grand texte : ratio 3:1 minimum
  - Boutons : contraste suffisant avec fond
  - Vérifier avec WebAIM Contrast Checker

- ✅ **Palette limitée**
  - 1 couleur primaire (CTA, liens)
  - 1 couleur secondaire (accents)
  - 1-2 couleurs neutres (texte, fonds)
  - Maximum 5-6 couleurs au total

#### Layout et Navigation
- ✅ **CTA toujours visible above-the-fold**
  - Premier CTA visible sans scroll
  - Maximum 1 CTA principal par section
  - Hiérarchie visuelle claire (taille, couleur)

- ✅ **Navigation toujours accessible**
  - Header sticky ou fixe
  - Menu mobile avec overlay
  - Breadcrumbs si navigation profonde (>2 niveaux)

#### Responsive
- ✅ **Mobile-first approach**
  - Concevoir d'abord pour mobile
  - Breakpoints cohérents : sm (640px), md (768px), lg (1024px), xl (1280px)
  - Images responsives avec `sizes` attribute

- ✅ **Touch targets adaptés**
  - Minimum 44x44px sur mobile
  - Espacement suffisant entre éléments
  - Pas d'éléments trop proches

#### Performance Perçue
- ✅ **Feedback immédiat**
  - Loading states pour actions > 200ms
  - Skeleton screens pour contenu chargé
  - Optimistic UI quand possible

- ✅ **Lazy loading visible**
  - Sections below-the-fold lazy loadées
  - Images lazy loadées (sauf above-the-fold)
  - Composants lourds avec Suspense

### Checklist UX Avant Déploiement
- [ ] Tous les boutons min 44x44px
- [ ] Maximum 2 polices utilisées
- [ ] Animations < 200ms
- [ ] Contraste vérifié (WCAG AA)
- [ ] CTA visible above-the-fold
- [ ] Navigation accessible
- [ ] Mobile-first testé
- [ ] Touch targets adaptés mobile

---

## Phase 5 : Fonctionnalités Avancées

### 🎯 Prompt Fonctionnalités

```
PHASE 5 : Fonctionnalités Avancées

1. Formulaires :
   - Validation côté client
   - Messages d'erreur accessibles (aria-describedby)
   - Labels associés (htmlFor + id)
   - Champs requis avec aria-required
   - Focus management

2. Intégrations externes :
   - Instagram feed (avec fallback manuel)
   - Google Maps si nécessaire
   - Analytics (préparé)

3. Animations :
   - Utiliser useReducedMotion partout
   - Animations subtiles et performantes
   - Pas d'animations sur mobile si possible
   - Prefers-reduced-motion respecté

4. Interactions utilisateur :
   - Modals accessibles (focus trap)
   - Tooltips accessibles
   - Carrousels accessibles (keyboard navigation)

RÈGLES :
- Toutes les fonctionnalités doivent être accessibles
- Performance : pas d'animations lourdes
- Fallbacks pour toutes les intégrations externes
```

### ✅ Checklist Phase 5

- [ ] Formulaires accessibles et validés
- [ ] Intégrations externes fonctionnelles
- [ ] Animations conditionnelles implémentées
- [ ] Interactions utilisateur accessibles
- [ ] Fallbacks testés

---

## Phase 6 : Optimisation Performance

### 🎯 Prompt Performance

```
PHASE 6 : Optimisation Performance (PageSpeed Mobile > 85)

1. Lazy Loading :
   - React.lazy() pour tous les composants below-the-fold
   - Suspense avec fallback minimal
   - Images lazy loading (déjà dans OptimizedImage)

2. Code Splitting :
   - Vite rollupOptions.manualChunks configuré
   - Vendor chunks séparés (react, framer-motion, ui)
   - Routes avec lazy loading

3. Réduction Framer Motion :
   - useReducedMotion hook utilisé partout
   - Animations désactivées sur mobile
   - Seulement fade/slide essentiels

4. Optimisation Images :
   - Conversion WebP préparée (OptimizedImage)
   - Images < 150 Ko
   - Sizes et srcset si nécessaire
   - fetchpriority="high" pour LCP

5. CSS Critique :
   - Styles hero inline dans index.html
   - CSS non-critique chargé asynchrone

6. JavaScript :
   - Tree-shaking vérifié
   - Imports dynamiques pour gros composants
   - Pas d'imports inutiles

7. Vite Config :
   - Terser avec drop_console
   - cssCodeSplit: true
   - sourcemap: false en production
   - optimizeDeps.exclude pour framer-motion

RÈGLES :
- Tester avec PageSpeed Insights avant/après
- Bundle size < 200 Ko initial
- LCP < 2.5s
- FID < 100ms
```

### ✅ Checklist Phase 6

- [ ] Tous les composants below-the-fold lazy loadés
- [ ] Code splitting configuré et fonctionnel
- [ ] Framer Motion réduit sur mobile
- [ ] Images optimisées (WebP si possible)
- [ ] CSS critique inline
- [ ] Bundle size vérifié
- [ ] PageSpeed mobile > 85

---

## Phase 7 : SEO et Accessibilité

### 🎯 Prompt SEO & A11y

```
PHASE 7 : SEO et Accessibilité WCAG 2.1 AA

SEO :
1. Meta tags sur toutes les pages :
   - Title unique et descriptif (< 60 caractères)
   - Description unique (< 160 caractères)
   - Canonical URL
   - Open Graph complet
   - Twitter Cards

2. Schema.org :
   - LocalBusiness sur homepage
   - Service sur pages services
   - FAQPage sur pages avec FAQ
   - BreadcrumbList si navigation complexe

3. Structure HTML :
   - H1 unique par page
   - Hiérarchie H2-H6 respectée
   - Alt text descriptifs sur toutes les images
   - Liens internes avec anchor text descriptif

4. Sitemap et robots.txt :
   - Génération automatique si possible
   - robots.txt configuré

ACCESSIBILITÉ :
1. Navigation :
   - Skip link fonctionnel
   - Focus visible sur tous les éléments
   - Navigation clavier complète
   - ARIA labels sur éléments interactifs

2. Formulaires :
   - Labels associés (htmlFor + id)
   - aria-required sur champs requis
   - aria-describedby pour messages d'erreur
   - Validation accessible

3. Contraste :
   - Texte : ratio 4.5:1 minimum
   - Grand texte : ratio 3:1 minimum
   - Boutons : contraste suffisant

4. Tailles de cibles :
   - Tous les boutons/liens min 44x44px
   - Espacement entre cibles

5. ARIA :
   - Roles appropriés
   - aria-current pour navigation active
   - aria-hidden sur éléments décoratifs
   - aria-live pour contenus dynamiques

RÈGLES :
- Tester avec lecteur d'écran (NVDA/JAWS)
- Tester navigation clavier uniquement
- Vérifier contraste avec outils (WebAIM)
- Valider HTML (W3C Validator)
```

### ✅ Checklist Phase 7

- [ ] Meta tags sur toutes les pages
- [ ] Schema.org sur pages pertinentes
- [ ] Structure HTML sémantique
- [ ] Skip link fonctionnel
- [ ] Navigation clavier complète
- [ ] Formulaires accessibles
- [ ] Contraste vérifié
- [ ] ARIA labels complets
- [ ] Tests avec lecteur d'écran

---

## Phase 8 : Déploiement

### 🎯 Prompt Déploiement

```
PHASE 8 : Déploiement et Configuration Production

1. Configuration Vercel :
   - vercel.json avec rewrites pour SPA
   - Variables d'environnement configurées
   - Build command vérifié

2. Configuration Git :
   - Repository GitHub créé
   - .gitignore complet
   - README.md avec instructions

3. Pré-déploiement :
   - Build local testé (npm run build)
   - Erreurs TypeScript corrigées
   - Warnings résolus
   - Tests manuels complets

4. Déploiement :
   - Push sur GitHub
   - Déploiement Vercel
   - Vérification URL de production
   - Tests sur production

5. Post-déploiement :
   - PageSpeed Insights vérifié
   - Accessibilité vérifiée (WAVE, axe DevTools)
   - SEO vérifié (Google Search Console préparé)
   - Analytics configuré si nécessaire

RÈGLES :
- Ne jamais déployer avec des erreurs
- Tester sur production après déploiement
- Documenter les variables d'environnement
```

### ✅ Checklist Phase 8

- [ ] vercel.json configuré
- [ ] Repository GitHub créé et pushé
- [ ] Build local réussi
- [ ] Déploiement Vercel réussi
- [ ] Tests sur production effectués
- [ ] PageSpeed vérifié
- [ ] Documentation complète

---

## 🎯 Prompts Réutilisables

### Prompt pour Créer un Nouveau Composant

```
Je veux créer un composant [NOM_COMPOSANT] qui [DESCRIPTION].

REQUIREMENTS :
- Props : [LISTE_PROPS]
- Accessibilité : WCAG 2.1 AA (ARIA, focus, contraste)
- Performance : Lazy loading si nécessaire
- Responsive : Mobile-first
- Animations : Conditionnelles avec useReducedMotion

BLUEPRINT :
1. Structure HTML sémantique
2. Styling Tailwind avec design system
3. Props TypeScript typées
4. Accessibilité complète
5. Tests de base

Status = NEEDS_PLAN_APPROVAL
```

### Prompt pour Optimiser une Page

```
Je veux optimiser la page [NOM_PAGE] pour la performance.

OBJECTIFS :
- PageSpeed mobile > 85
- LCP < 2.5s
- Bundle size réduit

ACTIONS À EFFECTUER :
1. Analyser la page actuelle (composants, imports, images)
2. Identifier les optimisations possibles :
   - Lazy loading des composants below-the-fold
   - Réduction des animations
   - Optimisation des images
   - Code splitting
3. Appliquer les optimisations
4. Vérifier les améliorations

BLUEPRINT avant de coder.
```

### Prompt pour Ajouter une Fonctionnalité

```
Je veux ajouter la fonctionnalité [NOM_FONCTIONNALITÉ] à [PAGE/COMPOSANT].

DESCRIPTION :
[Description détaillée de la fonctionnalité]

REQUIREMENTS :
- Accessibilité : WCAG 2.1 AA
- Performance : Pas d'impact négatif
- Responsive : Mobile-first
- Tests : Tests unitaires proposés

BLUEPRINT :
1. Architecture de la fonctionnalité
2. Composants nécessaires
3. Intégration avec l'existant
4. Accessibilité
5. Tests

Status = NEEDS_PLAN_APPROVAL
```

### Prompt pour Corriger un Bug

```
BUG à corriger : [DESCRIPTION_DU_BUG]

CONTEXTE :
- Page/Composant : [LOCALISATION]
- Comportement attendu : [ATTENDU]
- Comportement actuel : [ACTUEL]
- Étapes pour reproduire : [ÉTAPES]

ANALYSE :
1. Identifier la cause racine
2. Proposer la solution
3. Vérifier l'impact sur accessibilité/performance
4. Tester la correction

BLUEPRINT avant de corriger.
```

---

## 🚨 Erreurs à Éviter

### ❌ Erreurs Courantes

1. **Créer trop de composants Shadcn d'un coup**
   - ✅ Créer uniquement ceux nécessaires
   - ✅ Tree-shaking pour éviter bundle lourd

2. **Oublier l'accessibilité au début**
   - ✅ Intégrer dès le début (plus facile)
   - ✅ Vérifier régulièrement

3. **Trop d'animations Framer Motion**
   - ✅ Utiliser useReducedMotion partout
   - ✅ Désactiver sur mobile

4. **Pas de lazy loading initial**
   - ✅ Lazy loader dès le début
   - ✅ Éviter de tout charger d'un coup

5. **Images non optimisées**
   - ✅ Utiliser OptimizedImage dès le début
   - ✅ Préparer conversion WebP

6. **Oublier le SEO**
   - ✅ Composant Seo dès le début
   - ✅ Schema.org dès le début

7. **Pas de tests de performance**
   - ✅ Tester régulièrement avec PageSpeed
   - ✅ Corriger au fur et à mesure

8. **Code non typé**
   - ✅ TypeScript strict dès le début
   - ✅ Types pour tous les props

---

## 📊 Checklist Finale Avant Déploiement

### Performance
- [ ] PageSpeed mobile > 85
- [ ] PageSpeed desktop > 90
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Bundle size < 200 Ko initial

### Accessibilité
- [ ] Navigation clavier complète
- [ ] Focus visible partout
- [ ] Contraste WCAG AA vérifié
- [ ] ARIA labels complets
- [ ] Lecteur d'écran testé
- [ ] Formulaires accessibles

### SEO
- [ ] Meta tags sur toutes les pages
- [ ] Schema.org sur pages pertinentes
- [ ] Sitemap généré
- [ ] robots.txt configuré
- [ ] Structure HTML sémantique
- [ ] Alt text sur toutes les images

### Code Quality
- [ ] Aucune erreur TypeScript
- [ ] Aucun warning
- [ ] Code commenté si nécessaire
- [ ] Pas de TODO/placeholder
- [ ] .gitignore complet

### Tests
- [ ] Tests manuels complets
- [ ] Responsive testé (mobile/tablette/desktop)
- [ ] Navigateurs testés (Chrome, Firefox, Safari)
- [ ] Tests accessibilité (WAVE, axe)
- [ ] Tests performance (PageSpeed)

---

## 💡 Conseils Finaux

1. **Toujours commencer par un BLUEPRINT** - Évite les refactorisations
2. **Accessibilité dès le début** - Plus facile que de corriger après
3. **Performance dès le début** - Lazy loading, code splitting dès le début
4. **Tester régulièrement** - Ne pas attendre la fin
5. **Documenter au fur et à mesure** - README, commentaires si nécessaire
6. **Git commits réguliers** - Petits commits fréquents
7. **Code review mental** - Se demander "est-ce que c'est accessible ? performant ?"

---

**Créé le** : 2024-12-19  
**Pour** : Méthodologie réutilisable pour création de sites web avec Cursor

