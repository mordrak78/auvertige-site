import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  LayoutDashboard, 
  FileText, 
  Flower,
  Image,
  Calendar,
  LogOut,
  Menu,
  X,
} from 'lucide-react'

interface AdminLayoutProps {
  children: React.ReactNode
  activeSection?: string
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, activeSection = 'dashboard' }) => {
  const { user, signOut } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  
  // Déterminer la section active basée sur l'URL actuelle
  const currentSection = activeSection || 
    (location.pathname === '/admin' ? 'dashboard' :
     location.pathname === '/admin/articles' ? 'articles' :
     location.pathname === '/admin/bouquets' ? 'bouquets' :
     location.pathname === '/admin/gallery' ? 'gallery' :
     location.pathname === '/admin/seasonal' ? 'seasonal' :
     location.pathname.startsWith('/admin/') ? location.pathname.split('/')[2] : 'dashboard')

  const navigationItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard, href: '/admin' },
    { id: 'articles', label: 'Articles', icon: FileText, href: '/admin/articles' },
    { id: 'bouquets', label: 'Bouquets phares', icon: Flower, href: '/admin/bouquets' },
    { id: 'gallery', label: 'Galerie', icon: Image, href: '/admin/gallery' },
    { id: 'seasonal', label: 'Saisons', icon: Calendar, href: '/admin/seasonal' },
  ]

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <h1 className="text-xl font-dancing text-sage-700">
              Administration Au Vertige
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 hidden sm:inline">
              Bonjour, {user?.email}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Déconnexion</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg border-r border-gray-200
          transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
          transition-transform duration-200 ease-in-out
          pt-16 lg:pt-0
        `}>
          <nav className="p-4">
            <ul className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = currentSection === item.id
                
                return (
                  <li key={item.id}>
                    <Link
                      to={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`
                        flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium
                        transition-colors duration-200
                        ${isActive
                          ? 'bg-sage-100 text-sage-700 border border-sage-200'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        }
                      `}
                    >
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>

        {/* Overlay pour mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
