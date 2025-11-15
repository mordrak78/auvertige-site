import * as React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Seo from '@/components/shared/Seo';
import { SkipLink } from '@/components/shared/SkipLink';

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
      <SkipLink />
      <Header />
      <main id="main-content" className="pt-24" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 