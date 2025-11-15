# Guide d'utilisation - Gestion du contenu sans serveur

## 📋 Vue d'ensemble

Ce système permet de modifier le contenu de votre site web directement depuis l'interface d'administration, sans avoir besoin d'un serveur backend. Toutes les modifications sont stockées dans le localStorage du navigateur et peuvent être exportées/importées en JSON.

## 🚀 Accès à l'interface d'administration

1. Accédez à `/admin/content` dans votre navigateur
2. Connectez-vous avec vos identifiants administrateur
3. Vous verrez l'interface de gestion du contenu

## ✏️ Fonctionnalités disponibles

### 1. Gestion des bouquets phares

**Onglet "Bouquets phares"**

- **Ajouter un bouquet** : Cliquez sur "Ajouter un nouveau bouquet phare"
  - Remplissez le titre, la description, le prix et sélectionnez une image
  - Maximum 4 bouquets phares
  
- **Modifier un bouquet** : Cliquez sur "Modifier" sur le bouquet souhaité
  - Modifiez les informations et cliquez sur "Sauvegarder"
  
- **Supprimer un bouquet** : Cliquez sur l'icône poubelle
  - Confirmez la suppression
  
- **Réorganiser** : Utilisez les flèches haut/bas pour changer l'ordre d'affichage

Les bouquets phares apparaissent automatiquement sur la page d'accueil dans la section "Nos créations phares".

### 2. Édition des pages

**Onglet "Pages"**

Sélectionnez une page dans les onglets pour éditer son contenu :

- **Titre** : Modifiez le titre principal de la page
- **Paragraphes** : 
  - Ajoutez, modifiez ou supprimez des paragraphes
  - Cliquez sur "Ajouter un paragraphe" pour en créer un nouveau
  - Cliquez sur l'icône poubelle pour supprimer un paragraphe
- **Images** : Sélectionnez des images depuis votre bibliothèque d'assets

**Pages disponibles :**
- Accueil
- À propos
- Contact
- Créations florales
- Services
- Mariage
- Anniversaire
- Deuil
- Baptême
- Saint-Valentin
- Naissance
- Galerie
- Événements

### 3. Export/Import des données

**Export** : 
- Cliquez sur "Exporter" pour télécharger toutes vos données en JSON
- Sauvegardez ce fichier en sécurité (backup)

**Import** :
- Cliquez sur "Importer" et sélectionnez un fichier JSON précédemment exporté
- Vos données seront restaurées

**Réinitialisation** :
- Cliquez sur "Réinitialiser" pour effacer toutes les modifications
- ⚠️ **Attention** : Cette action est irréversible !

## 💾 Stockage des données

- Les données sont stockées dans le **localStorage** du navigateur
- Elles persistent entre les sessions sur le même navigateur
- **Important** : Les données sont spécifiques à chaque navigateur/appareil
- **Recommandation** : Exportez régulièrement vos données pour éviter toute perte

## 🔄 Synchronisation

Les modifications sont visibles immédiatement sur le site public :
- Le composant `Hero` sur la page d'accueil utilise le contenu éditable
- La section "Nos créations phares" affiche les bouquets configurés
- Les pages utilisant `EditableTitle` et `EditableParagraphs` affichent le contenu modifié

## 📝 Notes importantes

1. **Pas de serveur requis** : Tout fonctionne côté client
2. **Backup régulier** : Exportez vos données régulièrement
3. **Limite localStorage** : Environ 5-10 MB de données maximum
4. **Multi-navigateurs** : Les données ne sont pas synchronisées entre navigateurs
5. **Images** : Utilisez uniquement les images déjà présentes dans `/public/images/`

## 🛠️ Pour les développeurs

### Ajouter l'édition à une nouvelle page

```tsx
import { EditableTitle, EditableParagraphs } from '@/components/shared/EditableContent';

// Dans votre composant
<EditableTitle
  pageId="ma-page"
  defaultTitle="Mon titre par défaut"
  className="text-2xl"
  as="h1"
/>

<EditableParagraphs
  pageId="ma-page"
  defaultParagraphs={['Paragraphe 1', 'Paragraphe 2']}
  className="text-lg"
/>
```

### Utiliser les bouquets phares

```tsx
import { FeaturedBouquets } from '@/components/shared/FeaturedBouquets';

// Dans votre page
<FeaturedBouquets />
```

## ❓ Questions fréquentes

**Q : Mes modifications sont-elles perdues si je vide le cache ?**
R : Oui, c'est pourquoi il est important d'exporter régulièrement vos données.

**Q : Puis-je avoir plus de 4 bouquets phares ?**
R : Non, la limite est fixée à 4 pour des raisons de design et de performance.

**Q : Les modifications sont-elles visibles immédiatement ?**
R : Oui, après sauvegarde, les modifications apparaissent sur le site public.

**Q : Puis-je utiliser mes propres images ?**
R : Pour l'instant, vous devez utiliser les images présentes dans `/public/images/`. Pour ajouter de nouvelles images, placez-les dans ce dossier et elles apparaîtront dans le sélecteur.

