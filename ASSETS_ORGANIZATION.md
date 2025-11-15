# 📁 Organisation des Assets - Au Vertige

## Structure des dossiers

```
public/asset/
├── fleurs/
│   ├── créations_florales/
│   │   ├── 01_Mariage/           # 40+ images de créations de mariage
│   │   ├── 02_Anniversaire/      # 5 images d'anniversaire
│   │   ├── 03_Deuil/             # 32 images de compositions de deuil
│   │   ├── 04_Baptême/           # 5 images de baptême
│   │   ├── 05_plaisir_d_offrir/  # 11 images Saint-Valentin/cadeaux
│   │   └── 06_se_faire_plaisir/  # 17 images pour se faire plaisir
│   └── Services/
│       ├── Bougies & parfums d'ambiance/
│       ├── Bouquets & fleurs fraiches/
│       ├── Décoration d'intérieur/
│       ├── Fleurissement de tombes/
│       ├── Plantes/
│       └── services pour professionnels/
├── creations-icons/              # Icônes SVG des services
├── facade/                       # Images de façade du magasin
├── logo/                         # Logos Au Vertige
└── autre/                        # Autres produits/services
```

## 🏷️ Système de nommage

### Règles de nommage
- ✅ **Noms simples** : `bouquet-mariage-rose.jpg`
- ✅ **Sans espaces** : `plante-verte-salon.jpg`
- ✅ **Sans majuscules** : `bougie-mathilde-m.jpg`
- ✅ **Sans accents** : `bouquet-automne-large.jpg`
- ✅ **Suffixes sémantiques** : `bouquet-automne-thumb.jpg` (vignette)

### Exemples de nommage par catégorie

#### Créations de Mariage
- `bouquet-mariage-1.jpg`
- `bouquet-mariage-2.jpg`
- `bouquet-mariage-large.jpg`
- `creation-recente-1.jpg`

#### Créations d'Anniversaire
- `plante-bonbonne.jpg`
- `orchidee-anniversaire.jpg`
- `bouquet-anniversaire.jpg`

#### Créations de Deuil
- `gerbe-haute.jpg`
- `couronne-coeur-1.jpg`
- `bouquet-rond-deuil.jpg`

## 📋 Utilisation du mapping

### Import du mapping
```typescript
import { images, getImageByCategory, getAllImagesByCategory, getIcon, getLogo } from '@/data/images';
```

### Utilisation directe
```tsx
<img src={images.creations.mariage.bouquet1} alt="Bouquet de mariage" />
<img src={images.icons.mariage} alt="Icône mariage" />
<img src={images.logos.logo1} alt="Logo Au Vertige" />
```

### Utilisation avec fonctions utilitaires
```tsx
// Obtenir une image spécifique
<img src={getImageByCategory('mariage', 'bouquet1')} alt="Bouquet" />

// Obtenir toutes les images d'une catégorie
{getAllImagesByCategory('mariage').map((imagePath, index) => (
  <img key={index} src={imagePath} alt={`Création ${index + 1}`} />
))}

// Obtenir une icône
<img src={getIcon('mariage')} alt="Icône mariage" />

// Obtenir un logo
<img src={getLogo('logo1')} alt="Logo" />
```

## 🔧 Fonctions utilitaires disponibles

### `getImageByCategory(category, imageName)`
Retourne le chemin d'une image spécifique dans une catégorie.

### `getAllImagesByCategory(category)`
Retourne un tableau avec tous les chemins d'images d'une catégorie.

### `getIcon(iconName)`
Retourne le chemin d'une icône SVG.

### `getLogo(logoName)`
Retourne le chemin d'un logo.

## 📊 Catégories disponibles

### Créations florales
- `mariage` - Créations de mariage
- `anniversaire` - Créations d'anniversaire
- `deuil` - Compositions de deuil
- `bapteme` - Créations de baptême
- `plaisirOffrir` - Créations pour offrir
- `seFairePlaisir` - Créations pour se faire plaisir

### Services
- `bougies` - Bougies et parfums
- `bouquets` - Bouquets et fleurs fraîches
- `decoration` - Décoration d'intérieur
- `tombes` - Fleurissement de tombes
- `plantes` - Plantes
- `professionnels` - Services professionnels

### Icônes
- `anniversaire`, `bapteme`, `deuil`, `mariage`, `plaisirOffrir`, `seFairePlaisir`

### Logos
- `logo1` à `logo10` - Logos Au Vertige
- `logoRecent` - Logo récent
- `logoPdf`, `macaronPdf`, `pastillePdf`, `carreFleursPdf` - Versions PDF

## 🎯 Avantages de cette organisation

1. **Organisation claire** : Chaque type d'image a sa place
2. **Nommage cohérent** : Facilite la maintenance et la recherche
3. **Mapping centralisé** : Un seul endroit pour gérer tous les chemins
4. **Fonctions utilitaires** : Simplifie l'utilisation dans les composants
5. **TypeScript** : Autocomplétion et vérification de types
6. **Évolutif** : Facile d'ajouter de nouvelles catégories ou images

## 🚀 Prochaines étapes

1. Mettre à jour les composants existants pour utiliser le nouveau mapping
2. Ajouter de nouvelles images dans les bonnes catégories
3. Créer des composants réutilisables pour les galeries d'images
4. Optimiser les images (compression, formats WebP)
5. Ajouter un système de lazy loading pour les images
