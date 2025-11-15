import * as React from 'react';
import { Search, Image as ImageIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { images } from '@/data/images';
import { OptimizedImage } from '@/components/shared/OptimizedImage';

interface ImageSelectorProps {
  onSelect: (url: string) => void;
  currentImage?: string;
  label?: string;
}

export const ImageSelector: React.FC<ImageSelectorProps> = ({
  onSelect,
  currentImage,
  label = 'Sélectionner une image',
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [showModal, setShowModal] = React.useState(false);

  // Collecter toutes les images disponibles
  const allImages = React.useMemo(() => {
    const imageList: { url: string; category: string; key: string }[] = [];

    // Images de créations
    Object.entries(images.creations).forEach(([category, categoryImages]) => {
      Object.entries(categoryImages).forEach(([key, url]) => {
        if (typeof url === 'string') {
          imageList.push({ url, category, key: `${category}-${key}` });
        }
      });
    });

    // Images de pages
    Object.entries(images.pages).forEach(([key, url]) => {
      if (typeof url === 'string') {
        imageList.push({ url, category: 'pages', key: `pages-${key}` });
      }
    });

    // Images de logos
    Object.entries(images.logos).forEach(([key, url]) => {
      if (typeof url === 'string' && !url.endsWith('.pdf')) {
        imageList.push({ url, category: 'logos', key: `logos-${key}` });
      }
    });

    return imageList;
  }, []);

  const filteredImages = React.useMemo(() => {
    let filtered = allImages;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(img => img.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(img =>
        img.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.url.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [allImages, selectedCategory, searchTerm]);

  const categories = React.useMemo(() => {
    const cats = new Set(allImages.map(img => img.category));
    return ['all', ...Array.from(cats)];
  }, [allImages]);

  const handleImageSelect = (url: string) => {
    onSelect(url);
    setShowModal(false);
    setSearchTerm('');
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      
      {currentImage ? (
        <div className="relative group">
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
            <OptimizedImage
              src={currentImage}
              alt="Image sélectionnée"
              className="w-full h-32 object-cover"
              width={300}
              height={128}
            />
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => onSelect('')}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-500 mb-2">Aucune image sélectionnée</p>
        </div>
      )}

      <Button
        type="button"
        variant="outline"
        onClick={() => setShowModal(true)}
        className="w-full"
      >
        {currentImage ? 'Changer l\'image' : 'Sélectionner une image'}
      </Button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-lg font-semibold">Sélectionner une image</h3>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setShowModal(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-4 space-y-4 flex-1 overflow-hidden flex flex-col">
              {/* Recherche et filtres */}
              <div className="space-y-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher une image..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      type="button"
                      variant={selectedCategory === cat ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat === 'all' ? 'Toutes' : cat}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Grille d'images */}
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredImages.map((img) => (
                    <button
                      key={img.key}
                      type="button"
                      onClick={() => handleImageSelect(img.url)}
                      className="group relative aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-sage-500 transition-colors"
                    >
                      <OptimizedImage
                        src={img.url}
                        alt={img.key}
                        className="w-full h-full object-cover"
                        width={200}
                        height={200}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                        <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity px-2 text-center">
                          {img.key}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
                {filteredImages.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    Aucune image trouvée
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

