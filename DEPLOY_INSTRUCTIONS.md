# Instructions pour déployer sur Vercel

## Étape 1 : Installer Git (si pas déjà installé)

Téléchargez Git depuis : https://git-scm.com/download/win

## Étape 2 : Créer le dépôt GitHub

### Option A : Via GitHub Desktop (plus simple)
1. Installez GitHub Desktop : https://desktop.github.com/
2. Connectez-vous avec votre compte GitHub
3. File > New Repository
4. Nom : `auvertige-site`
5. Local Path : sélectionnez le dossier actuel
6. Cliquez sur "Create Repository"
7. Cliquez sur "Publish repository"

### Option B : Via ligne de commande

Ouvrez PowerShell dans ce dossier et exécutez :

```powershell
# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit - Site Au Vertige"

# Créer le dépôt sur GitHub (nécessite gh CLI installé)
gh repo create auvertige-site --public --source=. --remote=origin --push

# OU manuellement :
# 1. Allez sur github.com et créez un nouveau dépôt "auvertige-site"
# 2. Puis exécutez :
git remote add origin https://github.com/VOTRE_USERNAME/auvertige-site.git
git branch -M main
git push -u origin main
```

## Étape 3 : Déployer sur Vercel

1. Allez sur https://vercel.com
2. Connectez-vous avec GitHub
3. Cliquez sur "Add New Project"
4. Importez le dépôt `auvertige-site`
5. Vercel détectera automatiquement Vite
6. Cliquez sur "Deploy"

Le site sera disponible sur une URL du type : `auvertige-site.vercel.app`

## Configuration Vercel

Le fichier `vercel.json` est déjà configuré pour :
- Build : `npm run build`
- Output : `dist`
- Framework : Vite
- Routes SPA : toutes les routes redirigent vers `/index.html`

