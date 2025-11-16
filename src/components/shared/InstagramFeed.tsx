import React, { useState, useEffect } from 'react';
import { Instagram, ExternalLink, Loader2 } from 'lucide-react';
// import { motion } from 'framer-motion';

interface InstagramPost {
  shortcode: string;
  display_url: string;
  thumbnail_src: string;
  caption?: string;
  likes?: number;
}

// Configuration manuelle des 6 derniers posts Instagram
// ⚠️ IMPORTANT: Si la récupération automatique ne fonctionne pas (problème CORS),
// ajoutez ici les shortcodes de vos 6 derniers posts Instagram
// 
// Comment obtenir le shortcode :
// 1. Allez sur instagram.com et ouvrez un post
// 2. Regardez l'URL : https://www.instagram.com/p/ABC123XYZ/
// 3. Le shortcode est la partie après /p/ (ex: "ABC123XYZ")
const MANUAL_POSTS: Array<{ shortcode: string; imageUrl?: string }> = [
  { shortcode: 'C6Mu1c3O7V-' },
  { shortcode: 'C6KCpi9O9KG' },
  { shortcode: 'C6Ho5yUuA7L' },
  { shortcode: 'C6FjfF3OV5N' },
  { shortcode: 'C6DUbOoOHQM' },
  { shortcode: 'C6B7zI2tVju' },
];

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [profilePic, setProfilePic] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Méthode simplifiée : utiliser directement les URLs des posts Instagram
  // Instagram génère des URLs d'images prévisibles pour chaque post
  const getInstagramImageUrl = (shortcode: string): string => {
    // Format d'URL d'image Instagram pour un post
    // Cette méthode utilise l'API publique d'Instagram pour obtenir l'image
    return `https://www.instagram.com/p/${shortcode}/media/?size=l`;
  };

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const username = 'auvertigefleuriste_nantes';
        
        // Essayer d'abord la méthode automatique (profil complet)
        let data = null;
        const proxies = [
          `https://api.allorigins.win/raw?url=`,
          `https://corsproxy.io/?`,
        ];

        for (const proxy of proxies) {
          try {
            const instagramUrl = `https://www.instagram.com/${username}/?__a=1&__d=dis`;
            const response = await fetch(`${proxy}${encodeURIComponent(instagramUrl)}`, {
              method: 'GET',
              headers: { 'Accept': 'application/json' },
            });

            if (response.ok) {
              const jsonData = await response.json();
              if (jsonData.graphql?.user) {
                data = jsonData;
                break;
              }
            }
          } catch (err) {
            console.log(`Proxy ${proxy} échoué, essai suivant...`);
            continue;
          }
        }

        if (data) {
          // Méthode automatique réussie
          const user = data.graphql.user;
          setProfilePic(user.profile_pic_url_hd || user.profile_pic_url || '');
          
          const media = user.edge_owner_to_timeline_media?.edges || [];
          const postsData = media.slice(0, 6).map((edge: any) => {
            const node = edge.node;
            return {
              shortcode: node.shortcode,
              display_url: node.display_url,
              thumbnail_src: node.thumbnail_src || node.display_url,
              caption: node.edge_media_to_caption?.edges[0]?.node?.text || '',
              likes: node.edge_media_preview_like?.count || 0,
            };
          });
          setPosts(postsData);
        } else if (MANUAL_POSTS.length > 0) {
          // Méthode manuelle : créer les posts avec les shortcodes
          console.log('📸 Utilisation de la configuration manuelle avec', MANUAL_POSTS.length, 'posts');
          
          // Pour chaque shortcode, créer un post avec l'URL de l'image Instagram
          const postsData: InstagramPost[] = MANUAL_POSTS.map(post => ({
            shortcode: post.shortcode,
            display_url: post.imageUrl || getInstagramImageUrl(post.shortcode),
            thumbnail_src: post.imageUrl || getInstagramImageUrl(post.shortcode),
            caption: '',
            likes: 0,
          }));

          setPosts(postsData);
          
          // Essayer de récupérer la photo de profil
          try {
            const profileProxies = [
              `https://api.allorigins.win/raw?url=`,
              `https://corsproxy.io/?`,
            ];
            
            for (const proxy of profileProxies) {
              try {
                const profileUrl = `https://www.instagram.com/${username}/?__a=1&__d=dis`;
                const profileResponse = await fetch(`${proxy}${encodeURIComponent(profileUrl)}`);
                if (profileResponse.ok) {
                  const profileData = await profileResponse.json();
                  if (profileData.graphql?.user?.profile_pic_url_hd) {
                    setProfilePic(profileData.graphql.user.profile_pic_url_hd);
                    break;
                  }
                }
              } catch (err) {
                continue;
              }
            }
          } catch (err) {
            console.log('Photo de profil non récupérée, utilisation du fallback');
          }
        } else {
          setError('fallback');
        }
      } catch (err) {
        console.error('Erreur lors du chargement Instagram:', err);
        setError('fallback');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInstagramData();
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-poppy-500" />
            <p className="text-gray-600">Chargement des publications Instagram...</p>
          </div>
        </div>
      </div>
    );
  }

  // Fallback si erreur ou pas de posts
  if (error === 'fallback' || posts.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-8">
          {/* En-tête avec photo de profil (fallback) */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 flex items-center justify-center ring-2 ring-poppy-200 shadow-md">
                <Instagram className="text-white" size={28} />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-poppy-500 rounded-full flex items-center justify-center ring-2 ring-white">
                <Instagram className="text-white" size={12} />
              </div>
            </motion.div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">Au Vertige</h3>
              <p className="text-gray-600 text-sm">@auvertigefleuriste_nantes</p>
            </div>
            <a
              href="https://www.instagram.com/auvertigefleuriste_nantes/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-poppy-600 hover:text-poppy-700 font-medium transition-colors"
            >
              <span className="hidden sm:inline">Suivre</span>
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="text-center py-8">
            <p className="text-gray-600 mb-6">
              Découvrez nos dernières créations sur Instagram
            </p>
            <a
              href="https://www.instagram.com/auvertigefleuriste_nantes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Instagram size={20} />
              Voir notre profil Instagram
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-8">
        {/* En-tête avec photo de profil */}
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
          {profilePic && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative"
            >
              <img
                src={profilePic}
                alt="Au Vertige"
                className="w-16 h-16 rounded-full object-cover ring-2 ring-poppy-200 shadow-md"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 rounded-full flex items-center justify-center ring-2 ring-white">
                <Instagram className="text-white" size={12} />
              </div>
            </motion.div>
          )}
          {!profilePic && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 flex items-center justify-center ring-2 ring-poppy-200 shadow-md">
                <Instagram className="text-white" size={28} />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-poppy-500 rounded-full flex items-center justify-center ring-2 ring-white">
                <Instagram className="text-white" size={12} />
              </div>
            </motion.div>
          )}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">Au Vertige</h3>
            <p className="text-gray-600 text-sm">@auvertigefleuriste_nantes</p>
          </div>
          <a
            href="https://www.instagram.com/auvertigefleuriste_nantes/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-poppy-600 hover:text-poppy-700 font-medium transition-colors"
          >
            <span className="hidden sm:inline">Suivre</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Grille 3×2 avec images carrées */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {posts.map((post, index) => (
            <motion.a
              key={post.shortcode}
              href={`https://www.instagram.com/p/${post.shortcode}/`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="relative group aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100"
            >
              <img
                src={post.thumbnail_src || post.display_url}
                alt={post.caption || `Publication Instagram ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  // Fallback si l'image ne charge pas - utiliser une image placeholder
                  const target = e.target as HTMLImageElement;
                  target.src = `https://via.placeholder.com/400x400/f3f4f6/9ca3af?text=Instagram+Post+${index + 1}`;
                }}
              />
              
              {/* Overlay au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
                <div className="flex items-center gap-2 text-white">
                  <Instagram size={18} />
                  <span className="text-sm font-medium">Voir sur Instagram</span>
                </div>
              </div>

              {/* Badge de likes (optionnel) */}
              {post.likes && post.likes > 0 && (
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-medium">
                    ❤️ {post.likes > 1000 ? `${(post.likes / 1000).toFixed(1)}k` : post.likes}
                  </span>
                </div>
              )}
            </motion.a>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center pt-6 border-t border-gray-200">
          <a
            href="https://www.instagram.com/auvertigefleuriste_nantes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Instagram size={20} />
            Suivez-nous sur Instagram
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
