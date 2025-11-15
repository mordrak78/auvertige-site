import React from 'react'
import { useAuth } from '@/contexts/AuthContext'
import AdminLogin from '@/components/admin/AdminLogin'
import AdminLayout from '@/components/admin/AdminLayout'
import AdminDashboard from '@/components/admin/AdminDashboard'

const Admin: React.FC = () => {
  const { user, isAdmin, loading } = useAuth()
  // Vérifier si l'utilisateur est authentifié via localStorage
  const [authed, setAuthed] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('auvertige_admin_flag') === 'true' || isAdmin
    }
    return false
  })
  
  React.useEffect(() => {
    // Mettre à jour l'état si isAdmin change
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
    )
  }

  if (!isAdmin) {
    if (authed) {
      return (
        <AdminLayout activeSection="dashboard">
          <AdminDashboard />
        </AdminLayout>
      )
    }
    return <AdminLogin onSuccess={() => setAuthed(true)} />
  }

  return (
    <AdminLayout activeSection="dashboard">
      <AdminDashboard />
    </AdminLayout>
  )
}

export default Admin
