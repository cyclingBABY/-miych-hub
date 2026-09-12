import React, { useState, useEffect } from 'react';
import { Play, Phone, X, Code, ChevronRight, MessageCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenShowreel: () => void;
  onOpenPrompt: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenShowreel, onOpenPrompt }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Conferences', href: '#conferences' },
    { label: 'Concerts', href: '#concerts' },
    { label: 'Product Launch', href: '#product-launch' },
    { label: 'Parties', href: '#parties' },
    { label: 'Weddings', href: '#weddings' },
    { label: 'Corporate Events', href: '#corporate-events' },
    { label: 'Partners & Brands', href: '#partners' },
    { label: 'Contact & Booking', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070709]/90 backdrop-blur-md py-4 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-black/85 via-black/30 to-transparent py-6'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-14 flex items-center justify-between">
        {/* Brand Logo (Exact circular monogram with yellow ring matching screenshot) */}
        <BrandLogo size="md" />

        {/* Right side navigation control */}
        <div className="flex items-center gap-3">
          {/* Quick Prompt Spec button */}
          <button
            id="prompt-spec-nav-btn"
            onClick={onOpenPrompt}
            title="View Architecture Specification"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-zinc-400 hover:text-white bg-black/50 hover:bg-black/80 border border-zinc-800 rounded-full transition-all backdrop-blur-md"
          >
            <Code className="w-3.5 h-3.5 text-[#FFC700]" />
            <span>Prompt Spec</span>
          </button>

          {/* Minimal 2-line Hamburger Circle (Exact match with top right in screenshot) */}
          <button
            id="main-menu-toggle-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 border border-zinc-700/80 hover:border-[#FFC700] flex flex-col items-center justify-center gap-1.5 transition-all duration-300 shadow-xl backdrop-blur-md group cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5 text-[#FFC700]" />
            ) : (
              <>
                <span className="w-5 h-0.5 bg-[#FFC700] rounded-full group-hover:w-6 transition-all" />
                <span className="w-5 h-0.5 bg-[#FFC700] rounded-full group-hover:w-6 transition-all" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Full-Screen / Modal Navigation Drawer */}
      {menuOpen && (
        <div
          id="nav-drawer"
          className="bg-[#0a0a0d]/98 border-b border-zinc-800 px-6 py-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-200 backdrop-blur-2xl shadow-2xl"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between pb-4 border-b border-zinc-800">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-['Syne']">
              THE MITCH HUB — 360 Production House
            </span>
            <span className="text-xs text-[#FFC700] font-bold font-mono">#THE MITCH HUB · UGANDA</span>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between p-3.5 text-sm font-bold text-zinc-200 hover:text-[#FFC700] bg-zinc-900/70 hover:bg-zinc-800/80 rounded-xl border border-zinc-800 transition-all font-['Syne']"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </a>
            ))}
          </div>

          <div className="max-w-6xl mx-auto pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenShowreel();
              }}
              className="flex items-center gap-2 px-6 py-3 text-xs font-black text-black bg-[#FFC700] hover:bg-[#ffcf1a] rounded-xl font-['Syne'] uppercase transition-transform active:scale-95"
            >
              <Play className="w-4 h-4 fill-black" />
              <span>Watch 360 Showreel</span>
            </button>

            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenPrompt();
              }}
              className="flex items-center gap-2 px-5 py-3 text-xs font-bold text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-xl hover:text-white"
            >
              <Code className="w-3.5 h-3.5 text-[#FFC700]" />
              <span>Prompt Specification</span>
            </button>

            <a
              href="https://wa.me/256781072868?text=Hello%20The%20Mitch%20Hub,%20I'd%20like%20to%20inquire%20about%20event%20production%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 text-xs font-bold text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/40 rounded-xl hover:bg-[#25D366] hover:text-black transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: 0781072868</span>
            </a>

            <a
              href="tel:+256781072868"
              className="flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-zinc-900 border border-zinc-800 rounded-xl hover:border-[#FFC700]"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFC700]" />
              <span>Call: 0781072868</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
