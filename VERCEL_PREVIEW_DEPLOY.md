# Guide de déploiement en prévisualisation sur Vercel

Ce guide explique comment déployer le projet sur Vercel en mode **prévisualisation uniquement** (pas de production).

## Prérequis

1. Un compte Vercel (gratuit) : https://vercel.com/signup
2. Le projet doit être sur GitHub (déjà configuré d'après le git status)

## Option 1 : Déploiement Preview via CLI Vercel (Recommandé)

### Étape 1 : Installer la CLI Vercel

```powershell
npm install -g vercel
```

### Étape 2 : Se connecter à Vercel

```powershell
vercel login
```

Cela ouvrira votre navigateur pour vous authentifier.

### Étape 3 : Déployer en preview

Depuis le dossier du projet, exécutez :

```powershell
vercel
```

**Important** : Répondez aux questions comme suit :
- Set up and deploy? **Y**
- Which scope? (sélectionnez votre compte)
- Link to existing project? **N** (pour un nouveau projet)
- What's your project's name? **auvertige-preview** (ou le nom de votre choix)
- In which directory is your code located? **./** (appuyez sur Entrée)
- Want to override the settings? **N**

Le déploiement en preview sera créé et vous obtiendrez une URL de type :
`https://auvertige-preview-xxxxx.vercel.app`

### Étape 4 : Déploiements suivants

Pour les prochains déploiements preview, il suffit d'exécuter :

```powershell
vercel
```

Cela créera une nouvelle preview à chaque fois.

## Option 2 : Déploiement Preview via GitHub (Automatique)

### Étape 1 : Connecter le projet à Vercel

1. Allez sur https://vercel.com/new
2. Importez votre dépôt GitHub `auvertige-site`
3. **IMPORTANT** : Dans les paramètres de déploiement :
   - **Production Branch** : Laissez vide ou mettez une branche qui n'existe pas (ex: `production`)
   - Cela empêchera les déploiements en production automatiques

### Étape 2 : Créer une branche preview

```powershell
git checkout -b preview
git push origin preview
```

Vercel créera automatiquement un déploiement preview pour cette branche.

### Étape 3 : Mettre à jour la preview

À chaque push sur la branche `preview`, Vercel créera une nouvelle preview :

```powershell
git checkout preview
# Faites vos modifications
git add .
git commit -m "Mise à jour preview"
git push origin preview
```

## Option 3 : Preview via Pull Request

Si vous créez une Pull Request sur GitHub, Vercel créera automatiquement une preview pour cette PR.

## Configuration actuelle

Le fichier `vercel.json` est configuré pour :
- ✅ Build : `npm run build`
- ✅ Output : `dist`
- ✅ Framework : Vite
- ✅ Routing SPA : Toutes les routes redirigent vers `/index.html`

## Commandes utiles

### Voir les déploiements
```powershell
vercel ls
```

### Voir les détails d'un déploiement
```powershell
vercel inspect [URL_OU_ID]
```

### Supprimer un déploiement preview
```powershell
vercel remove [URL_OU_ID]
```

## Notes importantes

- Les déploiements preview sont **gratuits** et **illimités**
- Chaque preview a une URL unique
- Les previews expirent après 30 jours d'inactivité
- Les previews ne sont **pas indexées** par les moteurs de recherche
- Les previews sont parfaites pour tester avant de déployer en production

## Dépannage

### Le build échoue
Vérifiez que toutes les dépendances sont installées :
```powershell
npm install
npm run build
```

### Les routes ne fonctionnent pas
Vérifiez que `vercel.json` contient bien la section `routes` pour le routing SPA.

### Erreur de permissions
Assurez-vous d'être connecté : `vercel login`

