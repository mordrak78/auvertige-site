# 📋 Template Prompts Expert - Au Vertige Site

## 🎯 Contexte du Projet

**Projet** : Site web pour Au Vertige - Fleuriste artisan à Nantes  
**Stack Technique** : React + TypeScript + Vite + Tailwind CSS + Framer Motion  
**Déploiement** : Vercel  
**Repository GitHub** : `auvertige-site`

## 📝 Dernières Demandes Traitées

### ✅ Optimisation Performance (PageSpeed Mobile > 85)

**Statut** : En cours - Dernière tâche : Redéploiement Vercel après vérification du logo

**Actions réalisées** :
1. ✅ Réduction Framer Motion - Animations conditionnelles avec `useReducedMotion`
2. ✅ Lazy loading des sections non visibles (Gallery, Événements, Créations)
3. ✅ Lazy load des gros composants avec `React.lazy()` + `Suspense`
4. ✅ Tree-shaking des composants Shadcn non utilisés
5. ✅ Optimisation images (WebP préparé, `OptimizedImage` component créé)
6. ✅ CSS critique du hero extrait et inline dans `index.html`
7. ✅ Code splitting Vite configuré (`vite.config.ts`)
8. ✅ Configuration Vite optimisée (terser, cssCodeSplit, sourcemap: false)

**À vérifier** :
- Logo présent sur la homepage (question utilisateur)
- Section "mariage" présente sur la homepage (question utilisateur)
- Redéploiement Vercel après vérification

### ✅ Accessibilité WCAG 2.1 AA

**Statut** : Complété

**Actions réalisées** :
- Skip link ajouté (`SkipLink.tsx`)
- ARIA attributes ajoutés (labels, roles, current)
- Focus visible amélioré (outline rouge 2px)
- Tailles de cibles tactiles (min 44x44px)
- Formulaires accessibles (labels associés, aria-describedby)
- Contraste des couleurs vérifié et ajusté
- Navigation clavier améliorée

### ✅ Intégration Instagram Feed

**Statut** : Complété avec fallback manuel

**Configuration** :
- Méthode automatique : Récupération via proxies CORS
- Fallback manuel : Tableau `MANUAL_POSTS` dans `InstagramFeed.tsx`
- Shortcodes configurés : `C6Mu1c3O7V-`, `C6KCpi9O9KG`, `C6Ho5yUuA7L`, `C6FjfF3OV5N`, `C6DUbOoOHQM`, `C6B7zI2tVju`

### ✅ Réduction des Emojis

**Statut** : Complété

**Actions** : Remplacement des emojis texte par des icônes Lucide React sur toutes les pages

### ✅ Page Événements - Navigation par Onglets

**Statut** : Complété

**Fonctionnalités** :
- Navigation sticky avec onglets (Mariage, Anniversaire, Baptême, Naissance, Deuil)
- Affichage d'une seule section à la fois avec animations
- Scroll automatique vers les sections depuis les liens saisonniers
- Sections saisonnières (Saint-Valentin, Fête des Mères, Toussaint, Noël, Fête des Pères)

### ✅ Intégration FAQ

**Statut** : Complété

**Pages avec FAQ** :
- `/mariage` - `mariageFAQItems`
- `/deuil` - `deuilFAQItems`
- `/services` - `servicesFAQItems` (avec `id="faq"`)
- `/evenements` - `evenementsFAQItems`

**Redirections** :
- `/faq` → `/services#faq` (301 redirect)

## 🔧 Configuration Technique

### Vite Config (`vite.config.ts`)

```typescript
// Code splitting configuré
rollupOptions: {
  output: {
    manualChunks: {
      'vendor-react': ['react', 'react-dom', 'react-router-dom'],
      'vendor-framer': ['framer-motion'],
      'vendor-ui': ['@radix-ui/react-*'],
    }
  }
},
// Optimisations
terserOptions: { compress: { drop_console: true } },
cssCodeSplit: true,
sourcemap: false,
optimizeDeps: {
  exclude: ['framer-motion']
}
```

### Composants Lazy Loadés

**Homepage (`Index.tsx`)** :
- `FeaturedBouquets`
- `CreationsShowcase`
- `ServicesPreview`
- `ZonesDesserviesSection`
- `ReassuranceBanner`
- `AboutAndInfoSection`
- `ReviewsSection`
- `OrderForm`

**Page Événements (`Evenements.tsx`)** :
- `InstagramFeed`

### Hook `useReducedMotion`

**Fichier** : `src/hooks/useReducedMotion.ts`

**Usage** : Détecte mobile et `prefers-reduced-motion` pour désactiver les animations Framer Motion

## 📂 Structure des Fichiers Importants

```
src/
├── components/
│   ├── shared/
│   │   ├── OptimizedImage.tsx      # Image optimisée avec lazy loading
│   │   ├── InstagramFeed.tsx       # Feed Instagram avec fallback manuel
│   │   ├── SkipLink.tsx            # Skip link accessibilité
│   │   └── FAQ.tsx                 # Composant FAQ avec Schema.org
│   ├── layout/
│   │   ├── header/Header.tsx       # Header avec ARIA
│   │   └── footer/Footer.tsx        # Footer avec ARIA
│   └── features/
│       └── contact/Contact.tsx      # Formulaires accessibles
├── pages/
│   ├── Index.tsx                   # Homepage avec lazy loading
│   ├── Evenements.tsx              # Page événements avec onglets
│   ├── Mariage.tsx                 # Page mariage avec FAQ
│   ├── Deuil.tsx                   # Page deuil avec FAQ
│   └── Services.tsx                # Page services avec FAQ
├── hooks/
│   └── useReducedMotion.ts         # Hook pour animations conditionnelles
└── constants/
    └── faqSchema.ts                 # Schema.org FAQPage

public/
└── images/
    └── creations/
        └── se-faire-plaisir/
            ├── noel/                # Images Noël
            ├── valentin/            # Images Saint-Valentin
            ├── mere/                # Images Fête des Mères
            └── toussaint/           # Images Toussaint
```

## 🚀 Commandes Utiles

### Développement Local
```bash
npm run dev
```

### Build Production
```bash
npm run build
```

### Vérification TypeScript
```bash
npm run type-check
```

### Déploiement Vercel
```bash
# Via CLI Vercel
vercel --prod

# Ou push sur GitHub (déploiement automatique si configuré)
git push origin main
```

## 📋 Checklist pour Reprendre le Travail

### 1. Vérifier l'État Actuel
- [ ] Logo présent sur la homepage ?
- [ ] Section "mariage" présente sur la homepage ?
- [ ] PageSpeed mobile > 85 ?
- [ ] Tous les composants lazy loadés fonctionnent ?

### 2. Prochaines Optimisations Possibles
- [ ] Conversion réelle des images en WebP (< 150 Ko)
- [ ] Minification CSS supplémentaire
- [ ] Preload des ressources critiques
- [ ] Service Worker pour cache (optionnel)

### 3. Tests à Effectuer
- [ ] Test accessibilité avec lecteur d'écran
- [ ] Test navigation clavier complète
- [ ] Test PageSpeed Insights (mobile + desktop)
- [ ] Test sur différents navigateurs

## 🐛 Problèmes Connus / À Surveiller

1. **Instagram Feed** : Peut nécessiter mise à jour manuelle des shortcodes si CORS bloque
2. **Images WebP** : Conversion manuelle nécessaire (pas encore fait)
3. **Logo Homepage** : À vérifier (question utilisateur)

## 📚 Ressources

- **Vercel Dashboard** : https://vercel.com/dashboard
- **GitHub Repo** : `auvertige-site`
- **PageSpeed Insights** : https://pagespeed.web.dev/
- **WCAG 2.1 Guidelines** : https://www.w3.org/WAI/WCAG21/quickref/

## 💡 Notes Importantes

- **TDD Workflow** : Toujours proposer les tests avant le code
- **BLUEPRINT Phase** : Toujours commencer par un plan + pseudocode
- **Confirmation** : Demander `Status = NEEDS_PLAN_APPROVAL` avant de coder
- **Langue** : Toujours répondre en français
- **Code** : Aucun TODO, aucun placeholder - Code complet et testé

---

**Dernière mise à jour** : 2024-12-19  
**Prochaine étape** : Vérifier logo + section mariage sur homepage, puis redéployer Vercel


