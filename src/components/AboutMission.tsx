import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';
import { RevealText, AnimatedWords } from './AnimatedText';
import { ServicesSlider } from './ServicesSlider';

export const AboutMission: React.FC = () => {
  return (
    <section id="about-mission" className="relative py-20 sm:py-28 bg-[#070709] border-t border-zinc-850 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FFC700]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800">
            <Star className="w-3.5 h-3.5 text-[#FFC700] fill-[#FFC700]" />
            <span className="text-xs font-bold text-white uppercase tracking-wider font-['Syne']">
              #THE MITCH HUB
            </span>
          </div>

          <div className="text-xs font-semibold tracking-widest text-[#FFC700] uppercase font-['Syne'] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFC700] animate-ping" />
            East Africa's Premier 360 Production
          </div>
        </motion.div>

        {/* Main Tagline & Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-6">
            <RevealText delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-['Syne'] tracking-tight leading-tight mb-6">
                Since{' '}
                <AnimatedCounter
                  value={2018}
                  duration={1500}
                  className="text-[#FFC700] font-['Syne'] font-black"
                />
                , We don't just plan events; we create magic tailored exclusively to you.
              </h2>
            </RevealText>

            <RevealText delay={0.25}>
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-6">
                From Kampala’s most anticipated concert stages to high-stakes diplomatic summits and fairytale weddings, THE MITCH HUB has set the gold standard in audio-visual, lighting, and stage craftsmanship.
              </p>
            </RevealText>

            {/* Quick Metrics with Animated Counters */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.3 },
                },
              }}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-850"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-[#FFC700]/50 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-black text-[#FFC700] font-['Syne']">
                  <AnimatedCounter value={650} suffix="+" duration={2200} />
                </div>
                <div className="text-xs text-zinc-400 font-medium mt-1">Events Executed</div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-[#FFC700]/50 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-black text-white font-['Syne']">
                  <AnimatedCounter value={24} suffix="+" duration={1800} />
                </div>
                <div className="text-xs text-zinc-400 font-medium mt-1">Tier-1 Brands</div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-[#FFC700]/50 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-black text-[#FFC700] font-['Syne']">
                  <AnimatedCounter value={100} suffix="%" duration={2000} />
                </div>
                <div className="text-xs text-zinc-400 font-medium mt-1">Safety Record</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Mission Statement Block (Quote styling with animated entrance) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-zinc-900/90 via-zinc-900/60 to-black border border-zinc-800 shadow-2xl backdrop-blur-md">
              {/* Decorative Quotation Mark */}
              <div className="text-[#FFC700]/20 text-7xl sm:text-8xl font-serif font-black absolute top-2 right-6 select-none pointer-events-none">
                “
              </div>

              <div className="relative z-10">
                <span className="text-xs font-bold text-[#FFC700] tracking-widest uppercase font-['Syne'] mb-3 block">
                  Our Core Mission
                </span>

                <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-['Syne'] leading-snug tracking-tight mb-6">
                  <AnimatedWords
                    text='"Our mission is to redefine the production industry in East Africa through precision, passion, and unparalleled technical expertise."'
                    delay={0.3}
                    stagger={0.03}
                  />
                </blockquote>

                <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                  <div className="w-11 h-11 rounded-full bg-[#FFC700] text-black font-black flex items-center justify-center font-['Syne'] text-xs shadow-md shadow-[#FFC700]/30">
                    MITCH
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-['Syne']">
                      THE MITCH HUB Executive Team
                    </div>
                    <div className="text-xs text-zinc-400">
                      Technical Engineering &amp; Creative Stage Architecture · Kampala
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Expertise: Production Services Slider */}
        <ServicesSlider />
      </div>
    </section>
  );
};
