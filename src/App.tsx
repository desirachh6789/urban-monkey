import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from './components/ui/Toast';
import { Navbar } from './components/ui/Navbar';
import { CartDrawer } from './components/ui/CartDrawer';
import { ProductModal } from './components/ui/ProductModal';
import { ArticleModal } from './components/ui/ArticleModal';

import { HeroSection } from './sections/HeroSection';
import { FeaturedCollection } from './sections/FeaturedCollection';
import { ProductSpotlight } from './sections/ProductSpotlight';
import { ManifestoSection } from './sections/ManifestoSection';
import { CraftsmanshipSection } from './sections/CraftsmanshipSection';
import { CampaignSection } from './sections/CampaignSection';
import { JournalSection } from './sections/JournalSection';
import { NewsletterSection } from './sections/NewsletterSection';
import { FooterSection } from './sections/FooterSection';

import { Product, JournalArticle } from './types';

export const AppContent: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-[#F4F4F2] selection:bg-brand-lime selection:text-black">
      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Section A: Hero */}
        <HeroSection
          onExploreClick={() => scrollToSection('collection')}
          onDiscoverFormClick={() => scrollToSection('spotlight')}
        />

        {/* Section B: Featured Collection */}
        <FeaturedCollection
          onSelectProduct={(p) => setSelectedProduct(p)}
          onOpenSpotlight={() => scrollToSection('spotlight')}
        />

        {/* Section C: Dedicated 3D Product Spotlight */}
        <ProductSpotlight />

        {/* Section D: Brand Manifesto */}
        <ManifestoSection />

        {/* Section E: Materials & Craftsmanship */}
        <CraftsmanshipSection />

        {/* Section F: Campaign Visual */}
        <CampaignSection onShopClick={() => scrollToSection('collection')} />

        {/* Section G: Journal Articles */}
        <JournalSection onSelectArticle={(a) => setSelectedArticle(a)} />

        {/* Section H: Newsletter */}
        <NewsletterSection />
      </main>

      {/* Section I: Footer */}
      <FooterSection />

      {/* Modals & Overlays */}
      <CartDrawer />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenSpotlight={() => {
          setSelectedProduct(null);
          scrollToSection('spotlight');
        }}
      />
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Global Toast Alerts */}
      <ToastContainer />
    </div>
  );
};

export function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
