# 📋 Plan d'Optimisations - Janvier 2025

## 1. 📍 EMPLACEMENT DE LA FAQ

### Analyse actuelle :
- ✅ FAQ dans `/contact` : Logique car répond aux questions avant contact
- ⚠️ Mais : Page dédiée `/faq` serait meilleure pour SEO

### Recommandation :
**Créer une page dédiée `/faq`** pour :
- ✅ Meilleur SEO (page dédiée avec Schema FAQPage)
- ✅ Meilleure accessibilité (lien dans le menu/footer)
- ✅ Meilleure UX (page facilement trouvable)
- ✅ Garder un lien vers FAQ dans la page Contact

**Action** : Créer `/faq` + ajouter lien dans footer/menu

---

## 2. 🎯 PRODUITS PHARES

### Problème identifié :
- ❌ Le composant `FeaturedProducts` n'existe pas
- ❌ Le répertoire `produits-phares` n'existe pas
- ✅ `FeaturedBouquets` existe mais c'est différent

### Solution :
1. Créer le répertoire `public/images/creations/se-faire-plaisir/produits-phares/`
2. Créer le composant `FeaturedProducts.tsx`
3. Intégrer dans `Index.tsx` après `FeaturedBouquets`

---

## 3. ⭐ COLLECTE DE 25 AVIS GOOGLE

### Stratégie :
- Collecter uniquement les avis 5 étoiles avec texte détaillé
- Filtrer les avis trop courts ou sans valeur ajoutée
- Ajouter dans `ReviewsSection.tsx`

---

## 4. ⚡ OPTIMISATION CORE WEB VITALS

### Actions à prendre :
1. **LCP (Largest Contentful Paint)** :
   - Preload des images hero critiques
   - Optimiser le format WebP
   - Réduire la taille des images

2. **FID (First Input Delay)** :
   - Réduire le JavaScript bloquant
   - Déferrer les scripts non critiques
   - Optimiser les animations

3. **CLS (Cumulative Layout Shift)** :
   - Définir width/height sur toutes les images
   - Éviter les contenus dynamiques qui changent la mise en page
   - Utiliser aspect-ratio CSS

---

## 5. 🖼️ AUDIT ALT TEXT

### Actions :
1. Vérifier toutes les images du site
2. S'assurer que chaque image a un alt text descriptif
3. Corriger les alt vides ou génériques
4. Ajouter des alt text contextuels

---

**Statut** : Prêt pour implémentation

