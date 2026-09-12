import React from 'react';
import { motion } from 'motion/react';
import { ProjectItem } from '../types';
import { Maximize2, Building } from 'lucide-react';

interface PortfolioCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
  index: number;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onSelect, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      whileHover={{ y: -6 }}
      id={`portfolio-card-${project.id}`}
      onClick={() => onSelect(project)}
      className="group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl bg-zinc-900 border border-zinc-800/80 hover:border-[#FFC700]/70 transition-colors duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#FFC700]/10 flex flex-col"
    >
      {/* Photo Container */}
      <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-zinc-950">
        <img
          src={project.imageUrl}
          alt={`${project.title} - ${project.category} Production by THE MITCH HUB`}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-95 group-hover:brightness-105"
        />

        {/* Ambient Top Shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-black/40 opacity-70 group-hover:opacity-40 transition-opacity" />

        {/* Card Number Pill Top Left (PHOTO 01, PHOTO 02...) */}
        <div className="absolute top-2 sm:top-3.5 left-2 sm:left-3.5 z-10">
          <span className="inline-flex items-center px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded text-[8px] min-[380px]:text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider bg-black/80 text-zinc-300 border border-zinc-700/80 backdrop-blur-md group-hover:border-[#FFC700]/60 group-hover:text-[#FFC700] transition-colors">
            PHOTO 0{index + 1}
          </span>
        </div>

        {/* Category & Client Badge Top Right */}
        <div className="absolute top-2 sm:top-3.5 right-2 sm:right-3.5 z-10 flex items-center gap-1">
          <span className="inline-flex items-center px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded text-[8px] min-[380px]:text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-[#FFC700] text-black shadow-md font-['Syne']">
            {project.category}
          </span>
        </div>

        {/* Quick View Expand Icon Floating on Hover */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 z-20">
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-black/85 text-white border border-[#FFC700] shadow-2xl backdrop-blur-md text-[10px] sm:text-xs font-bold font-['Syne']">
            <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFC700]" />
            <span>View 360 Setup</span>
          </div>
        </div>

        {/* Bottom Gradient Overlay for Typography readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
      </div>

      {/* Card Content & Details */}
      <div className="relative p-3 sm:p-5 lg:p-6 bg-gradient-to-b from-zinc-900/90 to-zinc-950 flex-1 flex flex-col justify-between -mt-4 sm:-mt-8 z-10 rounded-t-xl sm:rounded-t-2xl border-t border-zinc-800/80">
        <div>
          {/* Client & Venue Meta */}
          <div className="flex items-center justify-between text-[10px] sm:text-xs text-zinc-400 mb-1 sm:mb-2 gap-1">
            <span className="font-semibold text-[#FFC700] flex items-center gap-1 truncate">
              <Building className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
              <span className="truncate">{project.client}</span>
            </span>
            <span className="flex-shrink-0 text-zinc-500 font-mono text-[9px] sm:text-[11px]">{project.year}</span>
          </div>

          {/* Project Title */}
          <h4 className="text-xs min-[380px]:text-sm sm:text-xl lg:text-2xl font-black text-white font-['Syne'] tracking-tight group-hover:text-[#FFC700] transition-colors line-clamp-1 mb-1 sm:mb-2">
            {project.title}
          </h4>

          {/* Short Description */}
          <p className="text-[10px] min-[380px]:text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed mb-2 sm:mb-4">
            {project.description}
          </p>
        </div>

        {/* Specs Tags Preview */}
        <div className="pt-2 sm:pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-1.5">
          <div className="flex flex-wrap gap-1 overflow-hidden max-h-5 sm:max-h-6">
            {project.specs.slice(0, 1).map((spec, i) => (
              <span
                key={i}
                className="inline-block px-1.5 py-0.5 rounded text-[8px] min-[380px]:text-[9px] sm:text-[10px] font-medium bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 truncate max-w-[85px] sm:max-w-[140px]"
              >
                {spec}
              </span>
            ))}
            {project.specs.length > 1 && (
              <span className="text-[8px] sm:text-[10px] text-zinc-500 font-mono self-center">
                +{project.specs.length - 1}
              </span>
            )}
          </div>

          <span className="text-[10px] sm:text-xs font-bold text-[#FFC700] group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5 flex-shrink-0 font-['Syne']">
            Explore →
          </span>
        </div>
      </div>
    </motion.div>
  );
};
