import React from 'react';
import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroProps {
  onOpenShowreel: () => void;
  activeCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenShowreel,
  activeCategory,
  onSelectCategory,
}) => {
  const categoryPills = [
    { id: 'conferences', label: 'CONFERENCES' },
    { id: 'concerts', label: 'CONCERTS' },
    { id: 'product-launch', label: 'PRODUCT LAUNCH' },
    { id: 'parties', label: 'PARTIES' },
    { id: 'weddings', label: 'WEDDINGS' },
    { id: 'corporate-events', label: 'CORPORATE EVENTS' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-black select-none"
    >
      {/* 
        Concert stage photography backdrop matching user screenshot:
        Artist performing on stage with mic, stage lighting, dark moody contrast
      */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=2200&q=90"
          alt="THE MITCH HUB Uganda 360 Production Stage & Concert Performance"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-75"
        />

        {/* Ambient Stage Lighting Glows matching screenshot atmosphere */}
        <motion.div
          animate={{ opacity: [0.12, 0.25, 0.12], scale: [1, 1.06, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#FFC700]/20 rounded-full blur-[160px] pointer-events-none"
        />
        <motion.div
          animate={{ opacity: [0.08, 0.18, 0.08], scale: [1, 1.08, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[180px] pointer-events-none"
        />

        {/* Cinematic Vignettes: Dark on sides and bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#070709] via-[#070709]/85 to-transparent" />
      </div>

      {/* Spacer for top navbar */}
      <div className="h-24 sm:h-32" />

      {/* Main Left-Aligned Hero Typography (Responsive, left-anchored, vertically centered, ultra-bold) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 flex-1 flex flex-col justify-center my-auto">
        {/* Massive 3-Line Headline */}
        <div className="w-fit max-w-full text-left">
          {/* Line 1: A 360 in Vibrant Golden Yellow with Animated Number Count-Up */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                WebkitTextStroke: '1px #FFC700',
                textShadow: '0 0 1.5px #FFC700, 0 4px 24px rgba(0,0,0,0.9)',
              }}
              className="text-[clamp(1.45rem,5.6vw,2.75rem)] sm:text-6xl md:text-8xl lg:text-[104px] font-black tracking-[-0.04em] leading-[0.92] uppercase font-['Syne'] text-[#FFC700] inline-flex items-baseline gap-2 sm:gap-4 select-none"
            >
              <span>A</span>
              <AnimatedCounter
                value={360}
                duration={1800}
                className="font-['Syne'] tracking-[-0.04em] font-black"
              />
            </h1>
          </motion.div>

          {/* Line 2: PRODUCTION in Massive Bright White */}
          <motion.div
            initial={{ opacity: 0, y: 45, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Syne', sans-serif",
              WebkitTextStroke: '1px #ffffff',
              textShadow: '0 0 1.5px #ffffff, 0 4px 24px rgba(0,0,0,0.9)',
            }}
            className="text-[clamp(1.45rem,5.6vw,2.75rem)] sm:text-6xl md:text-8xl lg:text-[104px] font-black tracking-[-0.04em] leading-[0.92] uppercase font-['Syne'] text-white my-0.5 sm:my-2 select-none whitespace-nowrap"
          >
            PRODUCTION
          </motion.div>

          {/* Line 3: HOUSE in Massive Bright White + Circular Play Button directly adjacent */}
          <motion.div
            initial={{ opacity: 0, y: 50, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 sm:gap-6 mt-0.5 sm:mt-1 flex-nowrap"
          >
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                WebkitTextStroke: '1px #ffffff',
                textShadow: '0 0 1.5px #ffffff, 0 4px 24px rgba(0,0,0,0.9)',
              }}
              className="text-[clamp(1.45rem,5.6vw,2.75rem)] sm:text-6xl md:text-8xl lg:text-[104px] font-black tracking-[-0.04em] leading-[0.92] uppercase font-['Syne'] text-white select-none"
            >
              HOUSE
            </span>

            {/* Circular Play Button matching screenshot: dark circle with gold triangle */}
            <motion.button
              id="hero-play-showreel-circle-btn"
              onClick={onOpenShowreel}
              aria-label="Play Showreel"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="group relative w-10 h-10 min-[380px]:w-12 min-[380px]:h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-black/70 hover:bg-black/95 border border-zinc-700/80 hover:border-[#FFC700] shadow-2xl backdrop-blur-md flex items-center justify-center transition-all duration-300 cursor-pointer flex-shrink-0"
            >
              {/* Pulsing ring on hover */}
              <span className="absolute inset-0 rounded-full border border-[#FFC700]/30 animate-ping pointer-events-none opacity-40" />

              {/* Play triangle in gold */}
              <div className="w-0 h-0 border-t-[7px] min-[380px]:border-t-[8px] sm:border-t-[13px] border-t-transparent border-b-[7px] min-[380px]:border-b-[8px] sm:border-b-[13px] border-b-transparent border-l-[11px] min-[380px]:border-l-[13px] sm:border-l-[22px] border-l-[#FFC700] translate-x-0.5 group-hover:scale-115 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* "UGANDA'S PREMIER" Tag with Horizontal Line (As shown in screenshot) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mt-6 sm:mt-10 mb-3 sm:mb-4"
        >
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#FFC700] font-['Syne']">
            UGANDA'S PREMIER
          </span>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            className="h-[1.5px] bg-zinc-600/80"
          />
        </motion.div>

        {/* Row of Dark Frosted Pills with Yellow/Gold Text & Borders */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.07,
                delayChildren: 0.55,
              },
            },
          }}
          className="flex flex-wrap items-center gap-2 sm:gap-2.5 max-w-4xl"
        >
          {categoryPills.map((pill) => {
            const isSelected = activeCategory === pill.id;
            return (
              <motion.a
                key={pill.id}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.92 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: 'spring', damping: 16, stiffness: 120 },
                  },
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={`#${pill.id}`}
                onClick={() => onSelectCategory(pill.id)}
                className={`px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-colors duration-200 border backdrop-blur-md ${
                  isSelected
                    ? 'bg-[#FFC700] text-black border-[#FFC700] shadow-lg shadow-[#FFC700]/30'
                    : 'bg-black/50 hover:bg-black/80 text-[#FFC700] border-zinc-800 hover:border-[#FFC700]/70'
                }`}
              >
                {pill.label}
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Right Vertical "SCROLL" Indicator with Golden Line (As shown in screenshot) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="hidden sm:flex absolute bottom-8 right-6 sm:right-10 lg:right-14 z-20 flex-col items-center pointer-events-auto"
      >
        <a
          href="#about-mission"
          className="flex flex-col items-center gap-3 group text-zinc-400 hover:text-[#FFC700] transition-colors"
        >
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase rotate-90 origin-center translate-y-3 font-mono">
            SCROLL
          </span>
          <motion.div
            animate={{ height: [56, 76, 56] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1.5px] bg-gradient-to-b from-[#FFC700] via-[#FFC700]/60 to-transparent"
          />
        </a>
      </motion.div>

      {/* Bottom Padding */}
      <div className="h-10 sm:h-12" />
    </section>
  );
};
