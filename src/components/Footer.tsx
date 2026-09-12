import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Star, Sparkles, Heart, MessageCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenShowreel: () => void;
  onOpenPrompt: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenShowreel, onOpenPrompt }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative bg-[#050507] border-t border-zinc-900 text-zinc-400 text-sm overflow-hidden">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#FFC700]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-zinc-900">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <BrandLogo size="sm" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-black text-white text-lg tracking-wider font-['Syne']">
                    THE MITCH HUB
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-[#FFC700]/15 text-[#FFC700] border border-[#FFC700]/30 font-['Syne']">
                    UGANDA
                  </span>
                </div>
                <p className="text-xs text-zinc-400 font-semibold tracking-wide">
                  360 Production House · Based in East Africa
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md">
              Since 2018, we have been dedicated to delivering exceptional and memorable events that exceed expectations. We don't just plan events; we create magic tailored exclusively to you.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenShowreel}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-[#FFC700] hover:text-black border border-zinc-800 text-xs font-bold text-white transition-colors font-['Syne']"
              >
                Watch 360 Showreel
              </button>
              <button
                onClick={onOpenPrompt}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                Prompt Spec
              </button>
            </div>
          </div>

          {/* Explore Links Column (Exact items from prompt) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-['Syne']">
              Explore Disciplines
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#weddings" className="hover:text-[#FFC700] transition-colors flex items-center justify-between group">
                  <span>Weddings</span>
                  <span className="text-zinc-600 group-hover:text-[#FFC700] font-mono">05</span>
                </a>
              </li>
              <li>
                <a href="#concerts" className="hover:text-[#FFC700] transition-colors flex items-center justify-between group">
                  <span>Concerts</span>
                  <span className="text-zinc-600 group-hover:text-[#FFC700] font-mono">02</span>
                </a>
              </li>
              <li>
                <a href="#corporate-events" className="hover:text-[#FFC700] transition-colors flex items-center justify-between group">
                  <span>Corporate</span>
                  <span className="text-zinc-600 group-hover:text-[#FFC700] font-mono">06</span>
                </a>
              </li>
              <li>
                <a href="#parties" className="hover:text-[#FFC700] transition-colors flex items-center justify-between group">
                  <span>Parties</span>
                  <span className="text-zinc-600 group-hover:text-[#FFC700] font-mono">04</span>
                </a>
              </li>
              <li>
                <a href="#conferences" className="hover:text-[#FFC700] transition-colors flex items-center justify-between group">
                  <span>Conferences</span>
                  <span className="text-zinc-600 group-hover:text-[#FFC700] font-mono">01</span>
                </a>
              </li>
              <li>
                <a href="#product-launch" className="hover:text-[#FFC700] transition-colors flex items-center justify-between group">
                  <span>Product Launch</span>
                  <span className="text-zinc-600 group-hover:text-[#FFC700] font-mono">03</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch Column (Exact details from prompt) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-['Syne']">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-zinc-400 block text-[10px] uppercase">Official WhatsApp</span>
                  <a
                    href="https://wa.me/256781072868?text=Hello%20The%20Mitch%20Hub,%20I'd%20like%20to%20inquire%20about%20event%20production."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#25D366] font-bold font-mono"
                  >
                    0781072868
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#FFC700]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-zinc-400 block text-[10px] uppercase">Direct Call</span>
                  <a href="tel:+256781072868" className="text-white hover:text-[#FFC700] font-bold font-mono">
                    +256 781 072 868
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#FFC700]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-zinc-400 block text-[10px] uppercase">Email</span>
                  <a href="mailto:info@themitchhub.com" className="text-white hover:text-[#FFC700] font-mono">
                    info@themitchhub.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#FFC700]">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-zinc-400 block text-[10px] uppercase">Headquarters</span>
                  <span className="text-white font-medium">
                    Plot CODE5, Kampala, Uganda
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Credits (Exact credit from prompt: "Website built by CODE5 MEDIA") */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-zinc-400 text-center sm:text-left">
            <span>© {new Date().getFullYear()} THE MITCH HUB. All Rights Reserved.</span>
            <span className="mx-2 text-zinc-700">|</span>
            <span>Kampala, Uganda · East Africa</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-[11px]">
              <span>Website built by</span>
              <strong className="text-white font-['Syne'] font-black tracking-wide">
                CODE5 MEDIA
              </strong>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-[#FFC700] transition-colors"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
