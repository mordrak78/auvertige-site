# 📋 Audit de l'Arborescence des Assets - Au Vertige

## ✅ Structure principale utilisée : `/public/images/`

Tous les assets utilisés dans le code sont référencés depuis `/public/images/`. Cette structure est **cohérente et fonctionnelle**.

### Structure active :
```
public/images/
├── creations/          ✅ Utilisé (mariage, anniversaire, deuil, bapteme, valentin, se-faire-plaisir)
├── hero/               ✅ Utilisé (facade1.jpg, facade2.webp)
├── logo/               ✅ Utilisé (tous les logos Au Vertige)
└── services/           ⚠️ Partiellement utilisé (voir détails ci-dessous)
```

---

## ⚠️ Dossiers vides ou inutiles

### 1. `/public/images/services/` - Dossiers vides

Ces dossiers sont **vides** mais référencés dans le code avec des placeholders inexistants :

- ❌ `/public/images/services/bougies/` - **VIDE**
- ❌ `/public/images/services/plantes/` - **VIDE**
- ❌ `/public/images/services/logo_entreprise/` - **VIDE**

**Action effectuée** : Les références ont été corrigées pour utiliser des images existantes temporairement.

**Recommandation** : Ces dossiers peuvent être supprimés s'ils restent vides, ou remplis avec de vraies images si nécessaire.

---

### 2. `/public/images/content/` - Dossier vide

- ❌ `/public/images/content/` - **VIDE**

**Action effectuée** : Les références dans `images.ts` ont été commentées car les fichiers n'existent pas et ne sont pas utilisés dans le code.

**Recommandation** : Ce dossier peut être supprimé s'il reste vide.

---

## 🗑️ Dossier `/public/asset/` - NON UTILISÉ

### ⚠️ **IMPORTANT** : Ce dossier n'est **PAS utilisé** dans le code

Le dossier `/public/asset/` contient une structure similaire à `/public/images/` mais **aucune référence** n'a été trouvée dans le code source.

### Structure du dossier `/public/asset/` :
```
public/asset/
├── autre/                          ⚠️ Contient des sous-dossiers mais non référencé
│   ├── bougies-parfums/
│   ├── decoration_interieur/
│   ├── fleurissement_tombes/
│   └── plantes/
├── fleurs/
│   ├── créations_florales/         ⚠️ Contient des images mais non utilisées
│   │   ├── 01_Mariage/            (44 images)
│   │   ├── 02_Anniversaire/       (5 images)
│   │   ├── 03_Deuil/              (32 images)
│   │   ├── 04_Baptême/            (5 images)
│   │   ├── 05_plaisir_d_offrir/   (13 images)
│   │   └── 06_se_faire_plaisir/   (17 images)
│   └── Services/                   ⚠️ Dossiers vides
│       ├── Bougies & parfums d'ambiance/
│       ├── Bouquets & fleurs fraiches/
│       ├── Décoration d'intérieur/
│       ├── Fleurissement de tombes/
│       ├── Plantes/
│       └── services pour professionnels/
├── creations-icons/                ⚠️ Contient des SVG mais non référencé dans le code
│   ├── anniversaire-icon.svg
│   ├── bapteme-icon.svg
│   ├── deuil-icon.svg
│   ├── mariage-icon.svg
│   ├── plaisir-offrir-icon.svg
│   └── se-faire-plaisir-icon.svg
├── hero/                           ⚠️ Contient facade1.jpg, facade2.webp (doublons)
├── logo/                           ⚠️ Contient des logos (doublons potentiels)
└── autre/                          ⚠️ Dossiers vides
```

### Analyse :

**Dossiers avec contenu mais non utilisés** :
- `/public/asset/fleurs/créations_florales/` - Contient **116 images** mais non référencées
- `/public/asset/creations-icons/` - Contient **6 icônes SVG** mais non utilisées
- `/public/asset/hero/` - Contient des images déjà dans `/public/images/hero/`
- `/public/asset/logo/` - Contient des logos déjà dans `/public/images/logo/`

**Dossiers vides** :
- `/public/asset/fleurs/Services/` - Tous les sous-dossiers sont vides
- `/public/asset/autre/` - Tous les sous-dossiers sont vides

**Recommandation** :
- ⚠️ **Ne pas supprimer** `/public/asset/fleurs/créations_florales/` car il contient 116 images
- ⚠️ **Ne pas supprimer** `/public/asset/creations-icons/` car il contient des icônes SVG
- ✅ **Peut être supprimé** : `/public/asset/fleurs/Services/` (tous vides)
- ✅ **Peut être supprimé** : `/public/asset/autre/` (tous vides)
- ⚠️ **Vérifier avant suppression** : `/public/asset/hero/` et `/public/asset/logo/` (doublons potentiels)

---

## ✅ Corrections effectuées

1. **Placeholder corrigé** : `/images/placeholder.jpg` → `/placeholder.svg` (fichier existant)
2. **Références plantes** : Utilise maintenant les images d'anniversaire existantes
3. **Références bougies** : Utilise maintenant les images se-faire-plaisir existantes
4. **Références logo_entreprise** : Utilise maintenant les logos Au Vertige existants
5. **Références content** : Commentées car les fichiers n'existent pas et ne sont pas utilisés

---

## 📊 Résumé

### Dossiers à garder (contiennent des fichiers) :
- ✅ `/public/images/` - Structure principale utilisée
- ⚠️ `/public/asset/fleurs/créations_florales/` - 116 images (non utilisées mais à garder)
- ⚠️ `/public/asset/creations-icons/` - 6 icônes SVG (non utilisées mais à garder)

### Dossiers vides pouvant être supprimés :
- ✅ `/public/images/services/bougies/`
- ✅ `/public/images/services/plantes/`
- ✅ `/public/images/services/logo_entreprise/`
- ✅ `/public/images/content/`
- ✅ `/public/asset/fleurs/Services/` (tous les sous-dossiers)
- ✅ `/public/asset/autre/` (tous les sous-dossiers)

### Dossiers à vérifier (doublons partiels) :
- ⚠️ `/public/asset/hero/` - Contient `face3.html` qui n'est pas dans `/public/images/hero/` (mais non utilisé dans le code)
- ⚠️ `/public/asset/logo/` - Contient les mêmes logos que `/public/images/logo/` mais sans les PDFs (doublons)

---

## 🔍 Impact sur le site

**Aucun impact négatif** : Toutes les corrections utilisent des images existantes et fonctionnelles. Le site continue de fonctionner normalement.

**Améliorations** :
- Plus d'erreurs 404 pour les placeholders inexistants
- Cohérence améliorée dans les références d'images
- Structure plus claire et maintenable

