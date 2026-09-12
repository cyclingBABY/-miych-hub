import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { X, MapPin, Calendar, Building2, Users, Zap, CheckCircle2, ChevronRight, Phone, MessageCircle } from 'lucide-react';

interface LightboxModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquireSetup: (project: ProjectItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ project, onClose, onInquireSetup }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="lightbox-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#070709]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider bg-[#FFC700] text-black font-['Syne']">
              {project.category}
            </span>
            <span className="text-xs text-zinc-400 font-mono">
              PROJECT SPECIFICATION ARCHIVE
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Scrollable Area */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6">
          {/* Main Photo */}
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black border border-zinc-800">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded bg-black/75 backdrop-blur-md border border-zinc-700 text-[11px] font-mono text-zinc-300">
              THE MITCH HUB Production Archive · Uganda
            </div>
          </div>

          {/* Project Title & Client */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-zinc-800">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-['Syne'] tracking-tight">
                {project.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 mt-2">
                <span className="flex items-center gap-1.5 text-[#FFC700] font-semibold">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{project.client}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{project.venue}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{project.year}</span>
                </span>
                {project.attendees && (
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <Users className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{project.attendees}</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFC700] font-['Syne'] mb-2">
              Production Scope &amp; Brief
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlight Callout */}
          {project.highlight && (
            <div className="p-4 rounded-xl bg-[#FFC700]/10 border border-[#FFC700]/25 flex items-start gap-3">
              <Zap className="w-5 h-5 text-[#FFC700] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[#FFC700] uppercase font-['Syne'] block">
                  Technical Highlight
                </span>
                <p className="text-xs sm:text-sm text-zinc-200 mt-0.5">
                  {project.highlight}
                </p>
              </div>
            </div>
          )}

          {/* Technical Specifications Equipment Grid */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFC700] font-['Syne'] mb-3">
              Hardware Rig &amp; Equipment Deployed
            </h4>
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
              {project.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 sm:gap-2.5 p-2 sm:p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] sm:text-xs text-zinc-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFC700] flex-shrink-0" />
                  <span className="font-mono truncate">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#070709] border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-zinc-400">
            Have a venue with similar technical requirements in Kampala or East Africa?
          </div>
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <a
              href={`https://wa.me/256781072868?text=${encodeURIComponent(`Hello THE MITCH HUB, I'm interested in booking the "${project.title}" setup (${project.client}, ${project.venue}).`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/40 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp 0781072868</span>
            </a>
            <a
              href="tel:+256781072868"
              className="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-white flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFC700]" />
              <span>Call</span>
            </a>
            <button
              onClick={() => onInquireSetup(project)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#FFC700] hover:bg-[#ffcf1a] text-black text-xs font-bold font-['Syne'] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Book This Setup</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
