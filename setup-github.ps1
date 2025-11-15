# Script pour créer le dépôt GitHub et pousser le code
# Prérequis : Git doit être installé

Write-Host "=== Configuration GitHub pour Au Vertige ===" -ForegroundColor Cyan
Write-Host ""

# Vérifier si Git est installé
try {
    $gitVersion = git --version
    Write-Host "✅ Git détecté : $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git n'est pas installé !" -ForegroundColor Red
    Write-Host "Téléchargez Git depuis : https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Ou utilisez GitHub Desktop : https://desktop.github.com/" -ForegroundColor Yellow
    exit 1
}

# Vérifier si le dépôt est déjà initialisé
if (Test-Path .git) {
    Write-Host "⚠️  Un dépôt Git existe déjà dans ce dossier" -ForegroundColor Yellow
    $continue = Read-Host "Voulez-vous continuer ? (o/n)"
    if ($continue -ne "o" -and $continue -ne "O") {
        exit 0
    }
} else {
    Write-Host "Initialisation du dépôt Git..." -ForegroundColor Cyan
    git init
    Write-Host "✅ Dépôt Git initialisé" -ForegroundColor Green
}

# Ajouter tous les fichiers
Write-Host ""
Write-Host "Ajout des fichiers..." -ForegroundColor Cyan
git add .

# Vérifier s'il y a des changements à committer
$status = git status --porcelain
if ($status) {
    Write-Host "Création du commit initial..." -ForegroundColor Cyan
    git commit -m "Initial commit - Site Au Vertige"
    Write-Host "✅ Commit créé" -ForegroundColor Green
} else {
    Write-Host "⚠️  Aucun changement à committer" -ForegroundColor Yellow
}

# Vérifier si GitHub CLI est installé
try {
    $ghVersion = gh --version 2>$null
    Write-Host ""
    Write-Host "✅ GitHub CLI détecté" -ForegroundColor Green
    Write-Host ""
    Write-Host "Création du dépôt sur GitHub..." -ForegroundColor Cyan
    Write-Host "Vous devrez vous authentifier avec GitHub" -ForegroundColor Yellow
    
    $repoName = Read-Host "Nom du dépôt (défaut: auvertige-site)"
    if ([string]::IsNullOrWhiteSpace($repoName)) {
        $repoName = "auvertige-site"
    }
    
    $isPublic = Read-Host "Dépôt public ? (o/n, défaut: o)"
    $visibility = if ($isPublic -eq "n" -or $isPublic -eq "N") { "--private" } else { "--public" }
    
    gh repo create $repoName $visibility --source=. --remote=origin --push
    
    Write-Host ""
    Write-Host "✅ Dépôt créé et code poussé sur GitHub !" -ForegroundColor Green
    Write-Host "URL : https://github.com/$env:USERNAME/$repoName" -ForegroundColor Cyan
    
} catch {
    Write-Host ""
    Write-Host "⚠️  GitHub CLI non disponible" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "=== Instructions manuelles ===" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1. Allez sur https://github.com/new" -ForegroundColor White
    Write-Host "2. Créez un nouveau dépôt nommé 'auvertige-site'" -ForegroundColor White
    Write-Host "3. Ne cochez PAS 'Initialize with README'" -ForegroundColor White
    Write-Host "4. Copiez l'URL du dépôt (ex: https://github.com/VOTRE_USERNAME/auvertige-site.git)" -ForegroundColor White
    Write-Host ""
    Write-Host "Puis exécutez ces commandes :" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "git remote add origin https://github.com/VOTRE_USERNAME/auvertige-site.git" -ForegroundColor Yellow
    Write-Host "git branch -M main" -ForegroundColor Yellow
    Write-Host "git push -u origin main" -ForegroundColor Yellow
    Write-Host ""
}

Write-Host ""
Write-Host "=== Prochaines étapes ===" -ForegroundColor Cyan
Write-Host "1. Allez sur https://vercel.com" -ForegroundColor White
Write-Host "2. Connectez-vous avec GitHub" -ForegroundColor White
Write-Host "3. Importez le dépôt 'auvertige-site'" -ForegroundColor White
Write-Host "4. Cliquez sur 'Deploy'" -ForegroundColor White
Write-Host ""

