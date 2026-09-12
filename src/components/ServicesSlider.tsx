import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Zap, Play, Pause, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTION_SERVICES } from '../data/portfolioData';

export const ServicesSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalServices = PRODUCTION_SERVICES.length;
  const maxIndex = Math.max(0, totalServices - cardsPerView);

  // Auto-play timer (advances every 4.5 seconds when playing)
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left -> next
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Slider Header Bar: Title, Subtitle, and Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 pb-6 border-b border-zinc-800/80">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FFC700] mb-2 font-['Syne']">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERED FOR EXCELLENCE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-white uppercase font-['Syne'] tracking-tight leading-tight">
            OUR EXPERTISE &amp; PRODUCTION SERVICES
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mt-2">
            Full-spectrum turnkey solutions: We own, engineer, and deploy high-specification sound, lighting, LED visual grids, and custom stage structures.
          </p>
        </div>

        {/* Carousel Controls (Prev/Next, Slide Counter, Auto-play toggle) */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Slide Indicator Badge */}
          <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 font-bold">
            <span className="text-[#FFC700]">0{currentIndex + 1}</span>
            <span className="text-zinc-600 mx-1.5">/</span>
            <span>0{totalServices}</span>
          </div>

          {/* Play / Pause Auto-Slide Toggle */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause Auto-slide' : 'Play Auto-slide'}
            title={isPlaying ? 'Pause Auto-slide' : 'Play Auto-slide'}
            className="w-10 h-10 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-[#FFC700]/50 text-zinc-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-[#FFC700]" />
            ) : (
              <Play className="w-4 h-4 translate-x-0.5 text-zinc-400" />
            )}
          </button>

          {/* Previous Button */}
          <button
            id="services-slide-prev-btn"
            onClick={handlePrev}
            aria-label="Previous service slide"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-zinc-900/90 hover:bg-[#FFC700] border border-zinc-800 hover:border-[#FFC700] text-white hover:text-black flex items-center justify-center transition-all duration-200 shadow-lg cursor-pointer group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Next Button */}
          <button
            id="services-slide-next-btn"
            onClick={handleNext}
            aria-label="Next service slide"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FFC700] hover:bg-[#ffe066] text-black flex items-center justify-center transition-all duration-200 shadow-lg shadow-[#FFC700]/20 cursor-pointer group"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Slider Carousel Track Container */}
      <div
        className="relative overflow-hidden -mx-2 px-2 py-2"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          className="flex gap-5 sm:gap-6 transition-transform ease-out"
          animate={{
            x: `calc(-${currentIndex * (100 / cardsPerView)}% - ${currentIndex * (20 / cardsPerView)}px)`,
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 28,
            mass: 0.8,
          }}
        >
          {PRODUCTION_SERVICES.map((service, idx) => {
            const isSlideActive =
              idx >= currentIndex && idx < currentIndex + cardsPerView;

            return (
              <div
                key={service.title}
                style={{
                  flex: `0 0 calc(${100 / cardsPerView}% - ${(24 * (cardsPerView - 1)) / cardsPerView}px)`,
                }}
                className="min-w-0 select-none"
              >
                <div
                  className={`group h-full rounded-2xl bg-zinc-900/60 hover:bg-zinc-900/95 border transition-all duration-500 flex flex-col justify-between overflow-hidden backdrop-blur-md ${
                    isSlideActive
                      ? 'border-zinc-800/90 hover:border-[#FFC700]/70 shadow-2xl hover:shadow-[#FFC700]/10'
                      : 'border-zinc-800/40 opacity-70'
                  }`}
                >
                  <div>
                    {/* Top Image Preview with Dark Gradient and Badges */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950">
                      <img
                        src={service.imageUrl}
                        alt={`${service.title} - THE MITCH HUB Production Services Uganda`}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-90 group-hover:brightness-105"
                      />

                      {/* Vignette Gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-black/60" />

                      {/* Top Left: Number Indicator */}
                      <div className="absolute top-3.5 left-3.5 z-10">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-black/80 text-zinc-300 border border-zinc-700/80 backdrop-blur-md group-hover:border-[#FFC700]/70 group-hover:text-[#FFC700] transition-colors">
                          SERVICE 0{idx + 1}
                        </span>
                      </div>

                      {/* Top Right: Tag & Zap Badge */}
                      <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5">
                        {service.tag && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#FFC700] text-black font-['Syne'] shadow-md">
                            {service.tag}
                          </span>
                        )}
                        <div className="w-7 h-7 rounded-md bg-black/80 border border-zinc-700/80 flex items-center justify-center backdrop-blur-md group-hover:border-[#FFC700]/60 transition-colors">
                          <Zap className="w-3.5 h-3.5 text-[#FFC700]" />
                        </div>
                      </div>
                    </div>

                    {/* Card Text Content */}
                    <div className="p-6 sm:p-7">
                      {/* Service Title */}
                      <h4 className="text-lg sm:text-xl font-bold text-white font-['Syne'] tracking-tight group-hover:text-[#FFC700] transition-colors mb-2.5">
                        {service.title}
                      </h4>

                      {/* Service Description */}
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Specs with Golden Pulsing Indicator */}
                  <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2 text-[11px] sm:text-xs text-zinc-300 font-mono">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-[#FFC700] flex-shrink-0 animate-pulse" />
                      <span className="truncate">{service.specs}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Pagination Dots & Swipe Hint */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-850/60">
        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-[#FFC700]'
                  : 'w-2 bg-zinc-700 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>

        {/* Action Link: Request Production Specs */}
        <div className="flex items-center gap-4 text-xs">
          <span className="hidden sm:inline text-zinc-400">
            Slide to inspect all 6 core technical production disciplines
          </span>
          <a
            href="#contact"
            className="text-[#FFC700] hover:text-white font-bold flex items-center gap-1.5 font-['Syne'] transition-colors"
          >
            <span>Book Equipment Rig</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
