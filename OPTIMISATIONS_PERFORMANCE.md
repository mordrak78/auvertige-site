# Optimisations Performance - PageSpeed Mobile > 85

## Date : 15 novembre 2024

### Objectif
Optimiser les performances du site pour obtenir un score PageSpeed mobile supérieur à 85.

---

## ✅ Optimisations Réalisées

### 1. Réduction de Framer Motion
- **Hook créé** : `src/hooks/useReducedMotion.ts`
  - Détecte si l'utilisateur préfère les animations réduites
  - Détecte si on est sur mobile (< 768px)
  - Retourne `shouldAnimate` pour conditionner les animations

- **Modifications** :
  - `src/components/shared/Hero.tsx` : Suppression des animations complexes, garde seulement fade simple
  - `src/pages/Evenements.tsx` : Animations simplifiées, désactivées sur mobile
  - Suppression des animations `motion.div` complexes dans le Hero
  - Remplacement par des transitions CSS simples

### 2. Lazy Loading des Sections Non Visibles
- **Page d'accueil** (`src/pages/Index.tsx`) :
  - Tous les composants "below the fold" sont maintenant en lazy loading :
    - `FeaturedBouquets`
    - `CreationsShowcase`
    - `ServicesPreview`
    - `ZonesDesserviesSection`
    - `ReassuranceBanner`
    - `AboutAndInfoSection`
    - `ReviewsSection`
    - `OrderForm`
  - Utilisation de `React.lazy()` + `Suspense` avec fallback minimal

- **Page Événements** (`src/pages/Evenements.tsx`) :
  - `InstagramFeed` en lazy loading

### 3. Code Splitting Vite
- **Configuration** (`vite.config.ts`) :
  - Séparation de `framer-motion` dans son propre chunk
  - Chunks séparés pour :
    - `vendor-react` (React, React-DOM)
    - `vendor-router` (React Router)
    - `vendor-radix` (@radix-ui)
    - `vendor-icons` (lucide-react)
    - `vendor` (autres dépendances)
  - `framer-motion` exclu du pre-bundling pour réduire le bundle initial
  - CSS code splitting activé
  - Sourcemaps désactivés en production

### 4. Optimisation des Images
- **Composant OptimizedImage** (`src/components/shared/OptimizedImage.tsx`) :
  - Lazy loading par défaut (sauf si `priority={true}`)
  - `fetchpriority="high"` pour les images critiques
  - `decoding="async"` pour les images non critiques
  - `decoding="sync"` pour les images critiques
  - Attribut `sizes` pour le responsive loading
  - ⚠️ **Note** : Conversion WebP automatique désactivée (les fichiers WebP doivent être créés manuellement)

### 5. CSS Critique du Hero
- **Fichier** : `index.html`
- CSS inline ajouté pour le hero (améliore LCP)
- Styles critiques pour :
  - `.hero-critical`
  - `.hero-content`
  - `.hero-card`
  - `.hero-title`
- Media queries pour responsive

### 6. Accessibilité WCAG 2.1 AA
- **Composant SkipLink** créé : `src/components/shared/SkipLink.tsx`
- Attributs ARIA ajoutés partout
- Focus visible amélioré
- Formulaires accessibles (labels, aria-required, aria-describedby)
- Zones cliquables minimum 44x44px
- Navigation au clavier optimisée

---

## ⚠️ Problèmes Identifiés et Corrigés

### 1. Import App.tsx vs app.tsx
- **Problème** : `src/main.tsx` importait `./App.tsx` (majuscule) alors que le fichier est `app.tsx` (minuscule)
- **Corrigé** : Import changé en `./app.tsx`

### 2. Import Label.tsx vs label.tsx
- **Problème** : Plusieurs fichiers importaient `@/components/ui/label` (minuscule)
- **Corrigé** : 
  - `src/components/admin/GalleryPage.tsx`
  - `src/components/admin/SeasonalContentManagement.tsx`
  - Changé en `@/components/ui/Label` (majuscule)

### 3. Clé dupliquée dans images.ts
- **Problème** : Clé `valentin` dupliquée dans `src/data/images.ts`
- **Corrigé** : Renommé en `saintValentin` pour les événements saisonniers

### 4. OptimizedImage - Conversion WebP
- **Problème** : Tentative de conversion automatique en WebP alors que les fichiers n'existent pas
- **Corrigé** : Retour à l'utilisation directe des images sans conversion automatique

---

## 📊 Résultats du Build

### Taille des Bundles (après optimisation)
```
dist/index.html                                      8.15 kB │ gzip:  2.70 kB
dist/assets/css/index-Dqra-Ua_.css                  84.17 kB │ gzip: 13.69 kB
dist/assets/js/vendor-radix-ByoYm48K.js              0.20 kB │ gzip:  0.16 kB
dist/assets/js/FeaturedBouquets-DVuiqVCw.js          2.28 kB │ gzip:  1.06 kB
dist/assets/js/EngagementCards-hxr-XnWr.js           3.66 kB │ gzip:  1.20 kB
dist/assets/js/ZonesDesserviesSection-CBW1D3PD.js    3.76 kB │ gzip:  1.39 kB
dist/assets/js/ReassuranceBanner-2wcFr5UE.js         4.23 kB │ gzip:  1.52 kB
dist/assets/js/ServicesPreview-DDeE1abj.js           5.90 kB │ gzip:  2.22 kB
dist/assets/js/AboutAndInfoSection-7Y4118Qm.js       7.48 kB │ gzip:  2.35 kB
dist/assets/js/InstagramFeed-jmDcnGWe.js             8.08 kB │ gzip:  2.27 kB
dist/assets/js/ReviewsSection-CI_kgf3F.js            8.66 kB │ gzip:  3.39 kB
dist/assets/js/OrderForm-BNwTam9v.js                11.47 kB │ gzip:  3.02 kB
dist/assets/js/CreationsShowcase-DXTFsVnz.js        21.28 kB │ gzip: 5.42 kB
dist/assets/js/framer-motion-DeU7ap5H.js           109.90 kB │ gzip: 35.14 kB
dist/assets/js/vendor-CtcpDcmn.js                  148.78 kB │ gzip: 48.52 kB
dist/assets/js/vendor-react-DH9HL2AI.js            279.83 kB │ gzip: 88.10 kB
dist/assets/js/index-DPvTNnIf.js                   335.71 kB │ gzip: 71.33 kB
```

### Points Positifs
- ✅ `framer-motion` séparé dans son propre chunk (109.90 kB)
- ✅ Composants lazy-loaded créent des chunks séparés
- ✅ Bundle principal (index) : 335.71 kB (71.33 kB gzippé)
- ✅ CSS : 84.17 kB (13.69 kB gzippé)

---

## 🔄 À Faire (Prochaines Étapes)

### 1. Optimisation des Images
- [ ] Convertir toutes les images en WebP manuellement
- [ ] Réduire le poids des images en dessous de 150 Ko
- [ ] Utiliser `import.meta.glob` pour les images si pertinent
- [ ] Optimiser les images du hero pour améliorer le LCP

### 2. Tree-shaking Shadcn
- [ ] Auditer les composants Shadcn utilisés
- [ ] Supprimer les imports non utilisés
- [ ] Vérifier que le tree-shaking fonctionne correctement

### 3. Tests et Validation
- [ ] Tester le site sur PageSpeed Insights (mobile)
- [ ] Vérifier que le score est > 85
- [ ] Tester sur différents appareils mobiles
- [ ] Vérifier que le lazy loading fonctionne correctement
- [ ] Vérifier que les animations sont bien désactivées sur mobile

### 4. Déploiement
- [ ] Redéployer sur Vercel avec les corrections
- [ ] Vérifier que le logo s'affiche correctement
- [ ] Tester toutes les pages après déploiement

---

## 📝 Notes Techniques

### Fichiers Modifiés
- `src/hooks/useReducedMotion.ts` (nouveau)
- `src/components/shared/ConditionalMotion.tsx` (nouveau)
- `src/components/shared/Hero.tsx`
- `src/components/shared/OptimizedImage.tsx`
- `src/pages/Index.tsx`
- `src/pages/Evenements.tsx`
- `src/components/layout/header/Header.tsx`
- `src/components/admin/GalleryPage.tsx`
- `src/components/admin/SeasonalContentManagement.tsx`
- `src/data/images.ts`
- `src/main.tsx`
- `vite.config.ts`
- `index.html`

### Fichiers Créés
- `src/hooks/useReducedMotion.ts`
- `src/components/shared/ConditionalMotion.tsx`
- `src/components/shared/SkipLink.tsx` (pour accessibilité)

### Problèmes Restants
- ⚠️ Le logo pourrait ne pas s'afficher si le fichier `/images/logo/logo9.png` n'existe pas
- ⚠️ Les images ne sont pas encore converties en WebP
- ⚠️ Le déploiement Vercel n'a pas encore été finalisé (erreurs de build corrigées)

---

## 🚀 Commandes pour Reprendre

### Build Local
```bash
npm run build
```

### Déploiement Vercel
```bash
vercel --yes
```

### Vérification
- Tester sur PageSpeed Insights : https://pagespeed.web.dev/
- URL de preview Vercel : https://auvertige-site-ayqnap4ul-tfornara-2705s-projects.vercel.app

---

## 📌 Points d'Attention

1. **Logo** : Vérifier que `/public/images/logo/logo9.png` existe
2. **Images WebP** : Les convertir manuellement avant de réactiver la conversion automatique
3. **Mobile** : Tester que les animations sont bien désactivées sur mobile
4. **Lazy Loading** : Vérifier que les composants se chargent correctement au scroll

---

**Dernière mise à jour** : 15 novembre 2024, 23h45


