import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AdminLogin from '@/components/admin/AdminLogin';
import AdminLayout from '@/components/admin/AdminLayout';
import { GalleryPage as GalleryPageContent } from '@/components/admin/GalleryPage';

const GalleryPage: React.FC = () => {
  const { user, isAdmin, loading } = useAuth();
  const [authed, setAuthed] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('auvertige_admin_flag') === 'true' || isAdmin
    }
    return false
  });
  
  React.useEffect(() => {
    if (isAdmin) {
      setAuthed(true)
    }
  }, [isAdmin])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sage-50 to-cream-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-sage-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sage-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    if (authed) {
      return (
        <AdminLayout activeSection="gallery">
          <GalleryPageContent />
        </AdminLayout>
      );
    }
    return <AdminLogin onSuccess={() => setAuthed(true)} />;
  }

  return (
    <AdminLayout activeSection="gallery">
      <GalleryPageContent />
    </AdminLayout>
  );
};

export default GalleryPage;

