import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PackageSection } from './components/PackageSection';
import { InteractiveCalculator } from './components/InteractiveCalculator';
import { MenuShowcase } from './components/MenuShowcase';
import { FeaturesAndGuarantee } from './components/FeaturesAndGuarantee';
import { TestimonialsAndFaq } from './components/TestimonialsAndFaq';
import { TesterModal } from './components/TesterModal';
import { OrderDrawer } from './components/OrderDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { AqiqahPackage } from './data/aqiqahData';

export default function App() {
  const [isTesterModalOpen, setIsTesterModalOpen] = useState(false);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<AqiqahPackage | null>(null);
  const [servingMode, setServingMode] = useState<'bento' | 'cooked'>('bento');

  const handleSelectPackage = (pkg: AqiqahPackage, mode: 'bento' | 'cooked') => {
    setSelectedPackage(pkg);
    setServingMode(mode);
    setIsOrderDrawerOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf9f4] text-[#1b1c19] flex flex-col font-sans selection:bg-[#d4e9e2] selection:text-[#00482f]">
      {/* 3-Zone Navigation Top Bar */}
      <Navbar
        onOpenTesterModal={() => setIsTesterModalOpen(true)}
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
        orderCount={selectedPackage ? 1 : 0}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenTesterModal={() => setIsTesterModalOpen(true)}
          onExplorePackages={() => scrollToSection('paket')}
        />

        {/* Featured Packages Showcase */}
        <PackageSection
          onSelectPackage={handleSelectPackage}
          onOpenTesterModal={() => setIsTesterModalOpen(true)}
        />

        {/* Interactive Syar'i Cost & Menu Calculator */}
        <InteractiveCalculator />

        {/* Citarasa Chef Pilihan & Secret Anti-Prengus Technique */}
        <MenuShowcase
          onOpenTesterModal={() => setIsTesterModalOpen(true)}
        />

        {/* Fasilitas Eksklusif, Souvenir & Jaminan Layanan */}
        <FeaturesAndGuarantee
          onOpenTesterModal={() => setIsTesterModalOpen(true)}
        />

        {/* Testimonials & FAQs */}
        <TestimonialsAndFaq />
      </main>

      {/* House Deep Green Footer */}
      <Footer />

      {/* Modals & Slide-over Drawer */}
      <TesterModal
        isOpen={isTesterModalOpen}
        onClose={() => setIsTesterModalOpen(false)}
      />

      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        selectedPackage={selectedPackage}
        servingMode={servingMode}
      />

      {/* Floating Starbucks-Style WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
