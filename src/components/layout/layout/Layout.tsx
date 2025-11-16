import * as React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Seo from '@/components/shared/Seo';

interface LayoutProps {
  children: React.ReactNode;
  seo?: {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    type?: 'website' | 'article' | 'product';
    additionalMeta?: Record<string, string>;
  };
}

const Layout: React.FC<LayoutProps> = ({ children, seo }) => {
  return (
    <div className="min-h-screen bg-cream-50 font-inter">
      {seo && <Seo {...seo} />}
      <Header />
      <main className="pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 