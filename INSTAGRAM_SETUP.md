# 🌸 Configuration Instagram pour Au Vertige

Ce guide vous explique comment configurer l'intégration Instagram pour afficher le vrai flux de publications sur le site.

## 📋 Prérequis

- Compte Instagram Business ou Creator
- Accès à Facebook Developers
- Token d'accès Instagram Graph API

## 🔑 Étape 1 : Obtenir une clé API Instagram

### 1.1 Créer une application Facebook
1. Rendez-vous sur [Facebook Developers](https://developers.facebook.com/)
2. Cliquez sur "Mes applications" → "Créer une application"
3. Choisissez "Business" comme type d'application
4. Remplissez les informations de base

### 1.2 Configurer Instagram Basic Display
1. Dans votre application, ajoutez le produit "Instagram Basic Display"
2. Configurez les paramètres :
   - **Valid OAuth Redirect URIs** : `http://localhost:8082/instagram-callback`
   - **Deauthorize Callback URL** : `http://localhost:8082/instagram-deauth`
   - **Data Deletion Request URL** : `http://localhost:8082/instagram-delete`

### 1.3 Obtenir les tokens
1. Dans "Instagram Basic Display" → "Basic Display"
2. Copiez :
   - **App ID**
   - **App Secret**
3. Générez un **User Access Token** pour le compte @auvertigefleuriste_nantes

## ⚙️ Étape 2 : Configuration du projet

### 2.1 Créer le fichier d'environnement
Créez un fichier `.env.local` à la racine du projet :

```env
# Instagram API Configuration
VITE_INSTAGRAM_APP_ID=your_app_id_here
VITE_INSTAGRAM_APP_SECRET=your_app_secret_here
VITE_INSTAGRAM_ACCESS_TOKEN=your_access_token_here
VITE_INSTAGRAM_USER_ID=your_user_id_here
```

### 2.2 Installer les dépendances
```bash
npm install react-instagram-feed
# ou
npm install instagram-basic-display
```

## 🔧 Étape 3 : Implémentation

### 3.1 Composant Instagram avec API réelle
Remplacez le contenu de `src/components/shared/InstagramFeed.tsx` :

```tsx
import React, { useState, useEffect } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

interface InstagramPost {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
        const userId = import.meta.env.VITE_INSTAGRAM_USER_ID;
        
        if (!accessToken || !userId) {
          throw new Error('Tokens Instagram manquants');
        }

        const response = await fetch(
          `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,permalink,caption,timestamp&access_token=${accessToken}`
        );

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des posts');
        }

        const data = await response.json();
        setPosts(data.data.slice(0, 6)); // Limiter à 6 posts
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <p className="text-red-600 mb-4">Erreur : {error}</p>
        <a
          href="https://www.instagram.com/auvertigefleuriste_nantes/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-2 rounded-full"
        >
          <Instagram size={20} />
          Voir sur Instagram
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-6">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 rounded-full flex items-center justify-center">
              <Instagram className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">@auvertigefleuriste_nantes</h3>
              <p className="text-gray-600">Fleuriste à Nantes Sud</p>
            </div>
          </div>
        </div>

        {/* Grille des posts Instagram */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block"
            >
              <img
                src={post.media_url}
                alt={post.caption || 'Post Instagram'}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg transition-colors duration-300 flex items-center justify-center">
                <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
              </div>
            </a>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/auvertigefleuriste_nantes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Instagram size={20} />
            Suivre sur Instagram
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
```

## 🚀 Étape 4 : Test et déploiement

### 4.1 Test local
```bash
npm run dev
```

### 4.2 Vérification
1. Ouvrez `http://localhost:8082/evenements`
2. Vérifiez que les posts Instagram s'affichent
3. Testez les liens vers Instagram

### 4.3 Déploiement
1. Ajoutez les variables d'environnement sur votre plateforme de déploiement
2. Redéployez l'application

## 🔒 Sécurité

- ⚠️ **Ne jamais commiter** le fichier `.env.local`
- 🔐 Gardez vos tokens secrets
- 🔄 Renouvelez les tokens régulièrement
- 📝 Surveillez les limites d'API

## 🐛 Dépannage

### Erreur "Invalid Token"
- Vérifiez que le token est valide
- Regénérez le token si nécessaire

### Erreur "Rate Limit Exceeded"
- Attendez avant de refaire des requêtes
- Implémentez un cache local

### Posts ne s'affichent pas
- Vérifiez les permissions de l'application
- Vérifiez que le compte est public

## 📚 Ressources

- [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Facebook Developers](https://developers.facebook.com/)
- [Documentation React](https://reactjs.org/)

## 🆘 Support

En cas de problème, vérifiez :
1. Les tokens sont corrects
2. Le compte Instagram est public
3. L'application a les bonnes permissions
4. Les variables d'environnement sont chargées

---

**Note** : Cette configuration permet d'afficher les 6 derniers posts Instagram du compte @auvertigefleuriste_nantes en temps réel sur la page Événements.
