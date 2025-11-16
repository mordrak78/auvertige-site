import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";



import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Mariage from './pages/Mariage';
import Deuil from './pages/Deuil';
import Evenements from './pages/Evenements';
import { Redirect301 } from './components/shared/Redirect301';
import Services from './pages/Services';
import CreationsFlorales from './pages/creations-florales';
import MentionsLegales from './pages/MentionsLegales';
import APropos from './pages/a-propos';
import ContactPage from './pages/contact';
import Admin from './pages/admin/Admin';
import ArticlesPage from './pages/admin/ArticlesPage';
import BouquetsPage from './pages/admin/BouquetsPage';
import GalleryPage from './pages/admin/GalleryPage';
import SeasonalPage from './pages/admin/SeasonalPage';
import SaintJacques from './pages/SaintJacques';
import OuvertDimanche from './pages/OuvertDimanche';

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/mariage" element={<Mariage />} />
              {/* Redirections 301 vers /evenements */}
              <Route path="/anniversaire" element={<Redirect301 to="/evenements#anniversaire" />} />
              <Route path="/bapteme" element={<Redirect301 to="/evenements#bapteme" />} />
              <Route path="/plaisirs-offrir" element={<Redirect301 to="/evenements#plaisir-offrir" />} />
              <Route path="/se-faire-plaisir" element={<Redirect301 to="/evenements#se-faire-plaisir" />} />
              <Route path="/deuil" element={<Deuil />} />
              <Route path="/fleuriste-saint-jacques" element={<SaintJacques />} />
              <Route path="/fleuriste-ouvert-dimanche-nantes" element={<OuvertDimanche />} />
              <Route path="/evenements" element={<Evenements />} />
              <Route path="/services" element={<Services />} />
              <Route path="/creations-florales" element={<CreationsFlorales />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/a-propos" element={<APropos />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Redirection 301 de /faq vers /services#faq */}
              <Route path="/faq" element={<Redirect301 to="/services#faq" />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/articles" element={<ArticlesPage />} />
              <Route path="/admin/bouquets" element={<BouquetsPage />} />
              <Route path="/admin/gallery" element={<GalleryPage />} />
              <Route path="/admin/seasonal" element={<SeasonalPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;