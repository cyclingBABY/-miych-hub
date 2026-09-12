import React, { useState } from 'react';
import { X, Copy, Check, Terminal, Sparkles, Layers } from 'lucide-react';

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromptModal: React.FC<PromptModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const fullPromptText = `Design and build a responsive, modern, high-energy landing page for THE MITCH HUB, Uganda’s premier 360 Production House specializing in high-end event production, lighting, sound, LED screens, and stage designs.

Visual Style & Theme:
- Dark Mode Aesthetics: Deep black/dark charcoal background (#070709), crisp white typography, vibrant gold/yellow accent highlights (#FFC700), and dark translucent frosted cards (backdrop-blur-md).
- Typography: Bold, heavy sans-serif headers (Syne / Plus Jakarta Sans) with clean, readable body copy.
- UI Style: Modern luxury production house vibe with subtle micro-interactions, sleek borders, high-contrast CTA buttons, and smooth scroll navigation.

Page Structure & Layout Requirements:
1. Hero Section:
- Headline: "A 360 PRODUCTION HOUSE"
- Subheading: "Uganda's Premier Event Production & Technical Expertise"
- Play Showreel CTA button with a floating play icon.
- Category Pill Navigation: Quick filter pills linking to portfolio sections: Conferences, Concerts, Product Launch, Parties, Weddings, Corporate Events.
- Scroll indicator: "Scroll / Cinematic Backdrop"

2. About / Mission Section:
- Tagline: "Since 2018, We don't just plan events; we create magic tailored exclusively to you."
- Mission Statement Block: Quote styling:
  "Our mission is to redefine the production industry in East Africa through precision, passion, and unparalleled technical expertise."
- Production Services: Intelligent Stage Lighting, Concert Audio, High-Res LED Screens, Structural Trussing, SFX, Live Broadcast.

3. Portfolio / Showcase Grid Sections:
Create 6 distinct portfolio sections. Each section must feature a heading, section counter (e.g., 01 — 06), and a 2x2 responsive grid displaying exactly 4 high-resolution photo cards with hover overlay titles and tags:

01 — Conferences Grid (4 photos):
- Airtel Conference
- PAPU Conference
- UBL Day 2 Conference
- Total - Sustainab'ALL Day
- CTA: Explore Conferences Work

02 — Concerts Grid (4 photos):
- 10 Years of Spice Diana
- Uganda One Festival
- Sol and the Gang 2
- Sol and the Gang
- CTA: Explore Concerts Work

03 — Product Launch Grid (4 photos):
- Blue Label
- TECNO CAMON 30
- E-Mobility Expo 2025
- C-Care
- CTA: Explore Product Launch Work

04 — Parties Grid (4 photos):
- Airtel - To The Top
- Airtel EOY
- Airtel Games Day
- Airtel Neon Party
- CTA: Explore Parties Work

05 — Weddings Grid (4 photos):
- Tinah & Paul
- Wedding Production with iCandy 01
- Wedding Production with iCandy 02
- Wedding Production with iCandy 03
- CTA: Explore Weddings Work

06 — Corporate Events Grid (4 photos):
- The Bridge
- Old Mutual - Staff Launch
- CCBU Celebration
- EACOP - End of Year Party
- CTA: Explore Corporate events Work

4. Partners & Trusted Brands Banner:
- Metric display: "24+ Leading Brands across East Africa trust us to deliver extraordinary experiences."
- Scrolling ticker/grid of brand logos (Airtel, TotalEnergies, UBL, Old Mutual, CCBU, TECNO, Blue Label, EACOP, PAPU, C-Care, Stanbic, MTN).
- Tag cloud of service keywords: Lighting, Sound Setup, Weddings, Concerts, Luxury, Corporate, Launch, Parties, Stage, Audio-Visual, Production Design, Festivals, Exhibitions, Gala, Ceremony, Conferences, Activation, Creative Shows, Events, Decor.

5. Contact & Footer Section:
- Call-to-action: "Let's Create Magic Together"
- Contact Information Card:
  - WhatsApp / Phone: 0781072868 (+256 781 072 868)
  - Email: info@themitchhub.com
  - Location: Plot CODE5, Kampala, Uganda
- Footer links, branding credits ("Website built by CODE5 MEDIA"), and copyright details.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullPromptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div
      id="prompt-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#070709]">
          <div className="flex items-center gap-2.5">
            <Terminal className="w-4 h-4 text-[#FFC700]" />
            <span className="text-xs font-bold text-white uppercase tracking-wider font-['Syne']">
              Website Generation Prompt &amp; Specification
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400">
              Exact prompt configured for generating THE MITCH HUB 360 Production House with 4 photos per section:
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFC700] hover:bg-[#ffcf1a] text-black text-xs font-bold font-['Syne'] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Prompt!' : 'Copy Prompt'}</span>
            </button>
          </div>

          <pre className="p-4 rounded-xl bg-black border border-zinc-800 text-zinc-300 font-mono text-xs whitespace-pre-wrap leading-relaxed select-all">
            {fullPromptText}
          </pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#070709] border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <span>All 6 sections are fully populated with 4 photos each in the live app.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
