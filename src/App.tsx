/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_SECTIONS } from './data/portfolioData';
import { ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMission } from './components/AboutMission';
import { PortfolioSectionView } from './components/PortfolioSectionView';
import { PartnersTicker } from './components/PartnersTicker';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ShowreelModal } from './components/ShowreelModal';
import { LightboxModal } from './components/LightboxModal';
import { PromptModal } from './components/PromptModal';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [promptOpen, setPromptOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [inquiryCategory, setInquiryCategory] = useState<string>('Conferences');

  const handleInquireFromProject = (project: ProjectItem) => {
    setSelectedProject(null);
    setInquiryCategory(project.category);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCategory = (categoryTitle: string) => {
    setInquiryCategory(categoryTitle);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const displayedSections = activeCategory
    ? PORTFOLIO_SECTIONS.filter((sec) => sec.id === activeCategory)
    : PORTFOLIO_SECTIONS;

  return (
    <div className="min-h-screen bg-[#070709] text-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Fixed Navbar */}
      <Navbar
        onOpenShowreel={() => setShowreelOpen(true)}
        onOpenPrompt={() => setPromptOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenShowreel={() => setShowreelOpen(true)}
          activeCategory={activeCategory}
          onSelectCategory={(catId) => setActiveCategory(catId)}
        />

        {/* 2. About & Mission Section */}
        <AboutMission />

        {/* 3. Portfolio / Showcase Grid Sections (01 — 06) */}
        <div id="portfolio-showcases">
          {displayedSections.map((section) => (
            <PortfolioSectionView
              key={section.id}
              section={section}
              onSelectProject={(project) => setSelectedProject(project)}
              onExploreCategory={handleExploreCategory}
            />
          ))}
        </div>

        {/* Category Filter Reset Indicator when filtered */}
        {activeCategory && (
          <div className="max-w-7xl mx-auto px-4 py-8 text-center">
            <button
              onClick={() => setActiveCategory(null)}
              className="px-6 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-[#FFC700] border border-[#FFC700]/40 transition-colors"
            >
              ← Show All 6 Portfolio Sections (24 Photos)
            </button>
          </div>
        )}

        {/* 4. Partners & Trusted Brands Banner + Service Keywords Tag Cloud */}
        <PartnersTicker
          onSelectTag={(tag) => {
            // Optional tag action
          }}
        />

        {/* 5. Contact & Booking Inquiry Section */}
        <ContactSection initialEventType={inquiryCategory} />
      </main>

      {/* Footer */}
      <Footer
        onOpenShowreel={() => setShowreelOpen(true)}
        onOpenPrompt={() => setPromptOpen(true)}
      />

      {/* Modals */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />

      <LightboxModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireSetup={handleInquireFromProject}
      />

      <PromptModal
        isOpen={promptOpen}
        onClose={() => setPromptOpen(false)}
      />

      {/* Floating 1-Click WhatsApp Dispatch Button */}
      <WhatsAppFloat />
    </div>
  );
}
