import React from 'react';
import { motion } from 'motion/react';
import { PortfolioCategorySection, ProjectItem } from '../types';
import { PortfolioCard } from './PortfolioCard';
import { ArrowRight, Grid } from 'lucide-react';

interface PortfolioSectionViewProps {
  section: PortfolioCategorySection;
  onSelectProject: (project: ProjectItem) => void;
  onExploreCategory: (categoryTitle: string) => void;
}

export const PortfolioSectionView: React.FC<PortfolioSectionViewProps> = ({
  section,
  onSelectProject,
  onExploreCategory,
}) => {
  return (
    <section
      id={section.id}
      className="relative py-20 sm:py-28 border-t border-zinc-850/80 scroll-mt-20 overflow-hidden"
    >
      {/* Subtle Background Glow per Section */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#FFC700]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Animated Counter and Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Counter badge and Section Tag */}
            <div className="flex items-center gap-3 mb-3">
              <motion.span
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm sm:text-base font-black text-[#FFC700] font-mono tracking-widest px-3 py-1 rounded-md bg-[#FFC700]/10 border border-[#FFC700]/20 shadow-sm"
              >
                {section.counter}
              </motion.span>
              <span className="text-xs uppercase font-bold tracking-widest text-zinc-400 font-['Syne']">
                {section.badge} Showcase
              </span>
              <span className="hidden sm:inline-flex text-[11px] font-semibold text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                Grid of 4 Photos
              </span>
            </div>

            {/* Section Main Title with Animated Text */}
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-['Syne'] tracking-tight"
            >
              {section.title}
            </motion.h3>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
              {section.subtitle} — {section.description}
            </p>
          </motion.div>

          {/* Action CTA: Explore [Category] Work */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <motion.button
              id={`explore-btn-${section.id}`}
              onClick={() => onExploreCategory(section.title)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-zinc-900/90 hover:bg-[#FFC700] hover:text-black border border-zinc-700/80 hover:border-[#FFC700] transition-all duration-300 shadow-md font-['Syne'] cursor-pointer"
            >
              <span>{section.exploreLabel}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* 2x2 Grid of Exactly 4 Photo Cards (Maintained 2-Column Grid on all Screen Sizes) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8"
        >
          {section.projects.map((project, idx) => (
            <PortfolioCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={onSelectProject}
            />
          ))}
        </motion.div>

        {/* Section Footer Sub-Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-6 border-t border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400"
        >
          <div className="flex items-center gap-2">
            <Grid className="w-3.5 h-3.5 text-[#FFC700]" />
            <span>
              Showing all 4 primary featured productions in <strong className="text-white">{section.title}</strong>
            </span>
          </div>

          <button
            onClick={() => onSelectProject(section.projects[0])}
            className="text-zinc-400 hover:text-[#FFC700] transition-colors flex items-center gap-1 font-semibold cursor-pointer"
          >
            <span>View Technical Specifications for {section.title}</span>
            <span>→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
