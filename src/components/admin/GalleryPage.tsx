import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/Label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Edit, Upload, Trash2, Folder, FileImage, ChevronRight, X } from 'lucide-react';
import { OptimizedImage } from '@/components/shared/OptimizedImage';
import { images } from '@/data/images';
import { toast } from 'sonner';

interface ImageFile {
  path: string;
  name: string;
  url: string;
  alt?: string;
  size?: number;
  lastModified?: number;
}

interface DirectoryNode {
  name: string;
  path: string;
  children: DirectoryNode[];
  images: ImageFile[];
  expanded?: boolean;
}

// Stockage local pour les alt tags et les images uploadées
const STORAGE_KEY_ALT_TAGS = 'gallery_alt_tags';
const STORAGE_KEY_UPLOADED_IMAGES = 'gallery_uploaded_images';

const getStoredAltTags = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  const stored = localStorage.getItem(STORAGE_KEY_ALT_TAGS);
  return stored ? JSON.parse(stored) : {};
};

const saveAltTag = (imagePath: string, alt: string) => {
  if (typeof window === 'undefined') return;
  const stored = getStoredAltTags();
  stored[imagePath] = alt;
  localStorage.setItem(STORAGE_KEY_ALT_TAGS, JSON.stringify(stored));
};

const getStoredUploadedImages = (): ImageFile[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEY_UPLOADED_IMAGES);
  return stored ? JSON.parse(stored) : [];
};

const saveUploadedImage = (image: ImageFile) => {
  if (typeof window === 'undefined') return;
  const stored = getStoredUploadedImages();
  stored.push(image);
  localStorage.setItem(STORAGE_KEY_UPLOADED_IMAGES, JSON.stringify(stored));
};

const removeUploadedImage = (imagePath: string) => {
  if (typeof window === 'undefined') return;
  const stored = getStoredUploadedImages();
  const filtered = stored.filter(img => img.path !== imagePath);
  localStorage.setItem(STORAGE_KEY_UPLOADED_IMAGES, JSON.stringify(filtered));
};

export const GalleryPage: React.FC = () => {
  const [directoryTree, setDirectoryTree] = React.useState<DirectoryNode | null>(null);
  const [currentPath, setCurrentPath] = React.useState<string>('/images');
  const [selectedImages, setSelectedImages] = React.useState<Set<string>>(new Set());
  const [editingImage, setEditingImage] = React.useState<ImageFile | null>(null);
  const [editingAlt, setEditingAlt] = React.useState<string>('');
  const [uploadDialogOpen, setUploadDialogOpen] = React.useState(false);
  const [uploadFiles, setUploadFiles] = React.useState<File[]>([]);
  const [searchTerm, setSearchTerm] = React.useState('');

  // Charger l'arborescence des répertoires
  React.useEffect(() => {
    loadDirectoryTree();
  }, []);

  const loadDirectoryTree = () => {
    try {
      const altTags = getStoredAltTags();
      const uploadedImages = getStoredUploadedImages();
      
      // Construire l'arborescence depuis images.ts
      const tree = buildDirectoryTreeFromImages(altTags, uploadedImages);
      setDirectoryTree(tree);
    } catch (error) {
      console.error('Erreur lors du chargement de l\'arborescence:', error);
      toast.error('Impossible de charger l\'arborescence des images');
    }
  };

  const buildDirectoryTreeFromImages = (
    altTags: Record<string, string>,
    uploadedImages: ImageFile[]
  ): DirectoryNode => {
    const root: DirectoryNode = {
      name: 'images',
      path: '/images',
      children: [],
      images: [],
      expanded: true,
    };

    // Créer un map pour organiser les images par répertoire
    const directoryMap = new Map<string, ImageFile[]>();

    // Ajouter les images depuis images.ts
    const processImages = (obj: any, basePath: string, prefix: string = '') => {
      Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'string' && (value.startsWith('/images/') || value.startsWith('/'))) {
          const imagePath = value.startsWith('/') ? value : `/${value}`;
          const pathParts = imagePath.split('/').filter(Boolean);
          const directory = pathParts.slice(0, -1).join('/');
          const fileName = pathParts[pathParts.length - 1];
          
          const fullPath = `/${directory}/${fileName}`;
          
          if (!directoryMap.has(directory)) {
            directoryMap.set(directory, []);
          }
          
          directoryMap.get(directory)!.push({
            path: fullPath,
            name: fileName,
            url: imagePath,
            alt: altTags[fullPath],
          });
        } else if (typeof value === 'object' && value !== null) {
          processImages(value, basePath, `${prefix}${key}/`);
        }
      });
    };

    // Traiter toutes les images
    processImages(images, '/images');

    // Ajouter les images uploadées
    uploadedImages.forEach(img => {
      const pathParts = img.path.split('/').filter(Boolean);
      const directory = pathParts.slice(0, -1).join('/');
      
      if (!directoryMap.has(directory)) {
        directoryMap.set(directory, []);
      }
      
      directoryMap.get(directory)!.push({
        ...img,
        alt: altTags[img.path] || img.alt,
      });
    });

    // Construire l'arborescence
    const buildTree = (path: string, level: number = 0): DirectoryNode => {
      const parts = path.split('/').filter(Boolean);
      const name = parts[parts.length - 1] || 'images';
      
      const node: DirectoryNode = {
        name,
        path: `/${path}`,
        children: [],
        images: directoryMap.get(path) || [],
        expanded: level < 2, // Expand les 2 premiers niveaux par défaut
      };

      // Trouver les sous-répertoires
      const subdirs = new Set<string>();
      directoryMap.forEach((_, dirPath) => {
        if (dirPath.startsWith(path + '/') && dirPath !== path) {
          const remaining = dirPath.substring(path.length + 1);
          const nextLevel = remaining.split('/')[0];
          if (nextLevel) {
            subdirs.add(path ? `${path}/${nextLevel}` : nextLevel);
          }
        }
      });

      // Créer les enfants
      subdirs.forEach(subdir => {
        const child = buildTree(subdir, level + 1);
        node.children.push(child);
      });

      return node;
    };

    return buildTree('images');
  };

  // Obtenir les images du répertoire actuel
  const getCurrentImages = (): ImageFile[] => {
    if (!directoryTree) return [];
    
    const findNode = (node: DirectoryNode, path: string): DirectoryNode | null => {
      if (node.path === path) return node;
      for (const child of node.children) {
        const found = findNode(child, path);
        if (found) return found;
      }
      return null;
    };

    const currentNode = findNode(directoryTree, currentPath);
    return currentNode?.images || [];
  };

  const currentImages = React.useMemo(() => {
    let images = getCurrentImages();
    
    if (searchTerm) {
      images = images.filter(img => 
        img.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.alt?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return images;
  }, [directoryTree, currentPath, searchTerm]);

  const toggleImageSelection = (imagePath: string) => {
    const newSelection = new Set(selectedImages);
    if (newSelection.has(imagePath)) {
      newSelection.delete(imagePath);
    } else {
      newSelection.add(imagePath);
    }
    setSelectedImages(newSelection);
  };

  const toggleSelectAll = () => {
    if (selectedImages.size === currentImages.length) {
      setSelectedImages(new Set());
    } else {
      setSelectedImages(new Set(currentImages.map(img => img.path)));
    }
  };

  const handleDeleteImage = async (imagePath: string) => {
    if (!confirm(`Êtes-vous sûr de vouloir supprimer l'image "${imagePath}" ?\n\nNote: Cette action supprimera uniquement les images uploadées via cette interface.`)) {
      return;
    }

    try {
      // Vérifier si c'est une image uploadée
      const uploadedImages = getStoredUploadedImages();
      const isUploaded = uploadedImages.some(img => img.path === imagePath);
      
      if (isUploaded) {
        removeUploadedImage(imagePath);
        toast.success(`Image "${imagePath}" supprimée`);
      } else {
        toast.warning('Cette image ne peut pas être supprimée car elle fait partie du code source. Seules les images uploadées peuvent être supprimées.');
        return;
      }
      
      // Recharger l'arborescence
      loadDirectoryTree();
      setSelectedImages(new Set());
    } catch (error) {
      toast.error('Erreur lors de la suppression de l\'image');
      console.error(error);
    }
  };

  const handleDeleteSelected = async () => {
    if (selectedImages.size === 0) {
      toast.error('Aucune image sélectionnée');
      return;
    }

    if (!confirm(`Êtes-vous sûr de vouloir supprimer ${selectedImages.size} image(s) ?\n\nNote: Seules les images uploadées via cette interface seront supprimées.`)) {
      return;
    }

    try {
      const uploadedImages = getStoredUploadedImages();
      let deletedCount = 0;
      
      for (const imagePath of selectedImages) {
        const isUploaded = uploadedImages.some(img => img.path === imagePath);
        if (isUploaded) {
          removeUploadedImage(imagePath);
          deletedCount++;
        }
      }
      
      if (deletedCount > 0) {
        toast.success(`${deletedCount} image(s) supprimée(s)`);
      } else {
        toast.warning('Aucune image uploadée sélectionnée. Seules les images uploadées peuvent être supprimées.');
      }
      
      // Recharger l'arborescence
      loadDirectoryTree();
      setSelectedImages(new Set());
    } catch (error) {
      toast.error('Erreur lors de la suppression des images');
      console.error(error);
    }
  };

  const handleEditAlt = (image: ImageFile) => {
    setEditingImage(image);
    setEditingAlt(image.alt || '');
  };

  const handleSaveAlt = () => {
    if (!editingImage) return;

    try {
      saveAltTag(editingImage.path, editingAlt);
      toast.success(`Balise alt mise à jour pour "${editingImage.name}"`);
      
      setEditingImage(null);
      setEditingAlt('');
      
      // Recharger l'arborescence
      loadDirectoryTree();
    } catch (error) {
      toast.error('Erreur lors de la mise à jour de la balise alt');
      console.error(error);
    }
  };

  const handleUpload = async () => {
    if (uploadFiles.length === 0) {
      toast.error('Veuillez sélectionner au moins un fichier');
      return;
    }

    try {
      const uploaded: ImageFile[] = [];
      
      for (const file of uploadFiles) {
        // Créer une URL locale pour l'image
        const imageUrl = URL.createObjectURL(file);
        const fileName = file.name;
        const imagePath = `${currentPath}/${fileName}`;
        
        const imageFile: ImageFile = {
          path: imagePath,
          name: fileName,
          url: imageUrl,
          size: file.size,
          lastModified: file.lastModified,
        };
        
        saveUploadedImage(imageFile);
        uploaded.push(imageFile);
      }
      
      toast.success(`${uploadFiles.length} image(s) uploadée(s)`);
      
      setUploadDialogOpen(false);
      setUploadFiles([]);
      
      // Recharger l'arborescence
      loadDirectoryTree();
    } catch (error) {
      toast.error('Erreur lors de l\'upload des images');
      console.error(error);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length !== files.length) {
      toast.warning('Certains fichiers ne sont pas des images et ont été ignorés');
    }
    
    setUploadFiles(imageFiles);
  };

  const renderDirectoryTree = (node: DirectoryNode, level: number = 0): React.ReactNode => {
    const isCurrentPath = node.path === currentPath;
    const hasChildren = node.children.length > 0;
    
    return (
      <div key={node.path}>
        <div
          className={`
            flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-100 cursor-pointer
            ${isCurrentPath ? 'bg-sage-100 text-sage-700 font-medium' : ''}
          `}
          style={{ paddingLeft: `${level * 1.5 + 0.5}rem` }}
          onClick={() => {
            setCurrentPath(node.path);
            setSelectedImages(new Set());
          }}
        >
          {hasChildren && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                const toggleNode = (n: DirectoryNode): DirectoryNode => {
                  if (n.path === node.path) {
                    return { ...n, expanded: !n.expanded };
                  }
                  return {
                    ...n,
                    children: n.children.map(toggleNode),
                  };
                };
                if (directoryTree) {
                  setDirectoryTree(toggleNode(directoryTree));
                }
              }}
              className="p-0.5 hover:bg-gray-200 rounded"
            >
              {node.expanded ? (
                <ChevronRight className="h-3 w-3 text-gray-400 rotate-90" />
              ) : (
                <ChevronRight className="h-3 w-3 text-gray-400" />
              )}
            </button>
          )}
          {!hasChildren && <div className="w-4" />}
          <Folder className="h-4 w-4 text-sage-600" />
          <span className="text-sm">{node.name}</span>
          {node.images.length > 0 && (
            <span className="text-xs text-gray-500 ml-auto">
              {node.images.length}
            </span>
          )}
        </div>
        {node.expanded && node.children.map(child => renderDirectoryTree(child, level + 1))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Galerie d'images</h1>
          <p className="text-gray-600 mt-2">
            Gérez vos images et répertoires
          </p>
        </div>
        <Button
          onClick={() => setUploadDialogOpen(true)}
          className="flex items-center gap-2"
        >
          <Upload className="h-4 w-4" />
          Uploader des images
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Arborescence des répertoires */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Répertoires</CardTitle>
          </CardHeader>
          <CardContent className="p-2 max-h-[600px] overflow-y-auto">
            {directoryTree ? (
              <div className="space-y-1">
                {renderDirectoryTree(directoryTree)}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <div className="w-8 h-8 border-2 border-gray-300 border-t-sage-600 rounded-full animate-spin mx-auto mb-2" />
                <p className="text-sm">Chargement...</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Zone principale */}
        <div className="lg:col-span-3 space-y-4">
          {/* Barre d'outils */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="flex-1 w-full md:w-auto">
                  <Input
                    placeholder="Rechercher une image..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="flex gap-2 items-center">
                  {selectedImages.size > 0 && (
                    <>
                      <span className="text-sm text-gray-600">
                        {selectedImages.size} sélectionnée(s)
                      </span>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={handleDeleteSelected}
                        className="flex items-center gap-2"
                      >
                        <Trash2 className="h-4 w-4" />
                        Supprimer ({selectedImages.size})
                      </Button>
                    </>
                  )}
                  {currentImages.length > 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={toggleSelectAll}
                    >
                      {selectedImages.size === currentImages.length ? 'Tout désélectionner' : 'Tout sélectionner'}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chemin actuel */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Folder className="h-4 w-4" />
            <span className="font-medium">Répertoire actuel :</span>
            <span className="text-sage-700">{currentPath}</span>
          </div>

          {/* Grille d'images */}
          {currentImages.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {currentImages.map((image) => {
                const isSelected = selectedImages.has(image.path);
                return (
                  <Card
                    key={image.path}
                    className={`overflow-hidden cursor-pointer transition-all ${
                      isSelected ? 'ring-2 ring-sage-500 shadow-lg' : ''
                    }`}
                    onClick={() => toggleImageSelection(image.path)}
                  >
                    <div className="relative aspect-square">
                      <div className="absolute top-2 left-2 z-10">
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={() => toggleImageSelection(image.path)}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      <OptimizedImage
                        src={image.url}
                        alt={image.alt || image.name}
                        className="w-full h-full object-cover"
                        width={300}
                        height={300}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity flex items-center justify-center gap-2 opacity-0 hover:opacity-100">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditAlt(image);
                          }}
                          className="flex items-center gap-1"
                        >
                          <Edit className="h-3 w-3" />
                          Alt
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteImage(image.path);
                          }}
                          className="flex items-center gap-1"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <p className="text-xs font-medium text-gray-900 truncate" title={image.name}>
                        {image.name}
                      </p>
                      {image.alt && (
                        <p className="text-xs text-gray-500 truncate mt-1" title={image.alt}>
                          Alt: {image.alt}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <FileImage className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500">
                  {searchTerm ? 'Aucune image ne correspond à votre recherche' : 'Aucune image dans ce répertoire'}
                </p>
                <Button
                  onClick={() => setUploadDialogOpen(true)}
                  className="mt-4"
                  variant="outline"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Uploader des images
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Dialog d'upload */}
      <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Uploader des images</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Répertoire de destination</Label>
              <div className="mt-1 p-2 bg-gray-50 rounded text-sm text-gray-700">
                {currentPath}
              </div>
            </div>
            <div>
              <Label htmlFor="file-upload">Sélectionner des images</Label>
              <Input
                id="file-upload"
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileSelect}
                className="mt-1"
              />
            </div>
            {uploadFiles.length > 0 && (
              <div>
                <Label>Fichiers sélectionnés ({uploadFiles.length})</Label>
                <div className="mt-2 space-y-2 max-h-40 overflow-y-auto">
                  {uploadFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-700 truncate flex-1">{file.name}</span>
                      <span className="text-xs text-gray-500 mx-2">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          setUploadFiles(uploadFiles.filter((_, i) => i !== index));
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setUploadDialogOpen(false);
              setUploadFiles([]);
            }}>
              Annuler
            </Button>
            <Button onClick={handleUpload} disabled={uploadFiles.length === 0}>
              <Upload className="h-4 w-4 mr-2" />
              Uploader ({uploadFiles.length})
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialog d'édition alt */}
      <Dialog open={!!editingImage} onOpenChange={(open) => !open && setEditingImage(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Éditer la balise alt</DialogTitle>
          </DialogHeader>
          {editingImage && (
            <div className="space-y-4">
              <div>
                <Label>Image</Label>
                <div className="mt-2 flex items-center gap-3">
                  <img
                    src={editingImage.url}
                    alt={editingImage.alt || editingImage.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium text-sm">{editingImage.name}</p>
                    <p className="text-xs text-gray-500">{editingImage.path}</p>
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="alt-text">Texte alternatif (alt)</Label>
                <Input
                  id="alt-text"
                  value={editingAlt}
                  onChange={(e) => setEditingAlt(e.target.value)}
                  placeholder="Décrivez l'image pour l'accessibilité..."
                  className="mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">
                  La balise alt améliore l'accessibilité et le SEO
                </p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setEditingImage(null);
              setEditingAlt('');
            }}>
              Annuler
            </Button>
            <Button onClick={handleSaveAlt}>
              Enregistrer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
