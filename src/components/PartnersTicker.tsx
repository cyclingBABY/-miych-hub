import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PARTNER_BRANDS, SERVICE_TAGS } from '../data/portfolioData';
import { Award, Check, Filter } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { RevealText } from './AnimatedText';

interface PartnersTickerProps {
  onSelectTag?: (tag: string) => void;
}

export const PartnersTicker: React.FC<PartnersTickerProps> = ({ onSelectTag }) => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const handleTagClick = (tag: string) => {
    const nextTag = activeTag === tag ? null : tag;
    setActiveTag(nextTag);
    if (onSelectTag) onSelectTag(tag);
  };

  return (
    <section id="partners" className="relative py-24 sm:py-32 bg-[#050507] border-t border-zinc-900 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#FFC700]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Partners Header & Big Animated Metric */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold text-[#FFC700] uppercase tracking-wider mb-4 font-['Syne']"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Our Partners · Trusted By The Best</span>
          </motion.div>

          {/* Metric Display with Animated Number */}
          <div className="flex items-baseline justify-center gap-3 mb-4">
            <AnimatedCounter
              value={24}
              suffix="+"
              duration={2000}
              className="text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFC700] via-white to-[#FFC700] font-['Syne'] tracking-tighter"
            />
          </div>

          <RevealText delay={0.15}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-['Syne'] tracking-tight mb-3">
              Leading brands across East Africa trust us to deliver extraordinary experiences.
            </h3>
          </RevealText>
          
          <RevealText delay={0.25}>
            <p className="text-xs sm:text-sm text-zinc-400">
              From regional headquarters to global conglomerates, we manage production infrastructure with zero-compromise precision.
            </p>
          </RevealText>
        </div>

        {/* Brand Logos Grid with Staggered Entrance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-16"
        >
          {PARTNER_BRANDS.map((brand) => (
            <motion.div
              key={brand.name}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="group p-4 rounded-xl bg-zinc-900/40 hover:bg-zinc-900/90 border border-zinc-800/80 hover:border-[#FFC700]/60 transition-colors duration-300 flex flex-col items-center justify-center text-center min-h-[96px]"
            >
              <span className="font-['Syne'] font-extrabold text-sm sm:text-base text-zinc-300 group-hover:text-white transition-colors tracking-tight">
                {brand.logoText}
              </span>
              <span className="text-[10px] text-zinc-400 group-hover:text-[#FFC700] transition-colors mt-1 truncate max-w-full">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Keywords Tag Cloud (As Specified in Prompt) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-10 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
            <div>
              <span className="text-xs font-bold text-[#FFC700] uppercase tracking-widest block font-['Syne']">
                Comprehensive 360 Capabilities
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white font-['Syne']">
                Technical Disciplines &amp; Production Scope
              </h4>
            </div>
            <div className="text-xs text-zinc-400 flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-[#FFC700]" />
              <span>Click tags to focus production scope</span>
            </div>
          </div>

          {/* All keyword tags from prompt with subtle entrance */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {SERVICE_TAGS.map((tag) => {
              const isSelected = activeTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold tracking-wide transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-[#FFC700] text-black shadow-lg shadow-[#FFC700]/30 scale-105'
                      : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  <span>{tag}</span>
                </button>
              );
            })}
          </div>

          {activeTag && (
            <div className="mt-4 p-3 rounded-lg bg-[#FFC700]/10 border border-[#FFC700]/20 flex items-center justify-between text-xs text-[#FFC700]">
              <span>
                Filtering capability focus: <strong>{activeTag}</strong>. All 6 portfolio sections above highlight high-spec execution in this area.
              </span>
              <button
                onClick={() => setActiveTag(null)}
                className="text-white hover:underline text-[11px] font-semibold cursor-pointer"
              >
                Reset
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
