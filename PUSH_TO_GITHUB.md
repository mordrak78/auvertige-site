# Instructions pour pousser le code sur GitHub

## ✅ Étape 1 : Créer le dépôt sur GitHub.com

1. Allez sur **https://github.com/new**
2. **Nom du dépôt** : `auvertige-site`
3. **Description** (optionnel) : Site web Au Vertige - Fleuriste à Nantes
4. **Visibilité** : Public ou Private (selon votre préférence)
5. **⚠️ IMPORTANT** : Ne cochez PAS "Initialize this repository with a README"
6. Cliquez sur **"Create repository"**

## ✅ Étape 2 : Connecter le dépôt local à GitHub

Après avoir créé le dépôt, GitHub vous affichera des instructions. Exécutez ces commandes dans PowerShell :

```powershell
# Remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/VOTRE_USERNAME/auvertige-site.git
git branch -M main
git push -u origin main
```

**Exemple** si votre username est `thierry-fornara` :
```powershell
git remote add origin https://github.com/thierry-fornara/auvertige-site.git
git branch -M main
git push -u origin main
```

## ✅ Étape 3 : Vérifier

Allez sur `https://github.com/VOTRE_USERNAME/auvertige-site` pour vérifier que tous les fichiers sont bien présents.

## ✅ Étape 4 : Déployer sur Vercel

1. Allez sur **https://vercel.com**
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur **"Add New Project"**
4. Sélectionnez le dépôt **`auvertige-site`**
5. Vercel détectera automatiquement Vite
6. Cliquez sur **"Deploy"**

Le site sera disponible sur une URL du type : `auvertige-site.vercel.app`

---

**Note** : Le fichier `vercel.json` est déjà configuré pour le déploiement.

