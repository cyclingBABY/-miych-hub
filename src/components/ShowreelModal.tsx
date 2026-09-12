import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Film, Sparkles, CheckCircle2, Radio, Layers } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentClipIndex, setCurrentClipIndex] = useState(0);

  const clips = [
    {
      title: 'Stadium Concert Rigs & Stadium Sound',
      venue: 'Lugogo Cricket Oval / Kololo Airstrip',
      discipline: 'Concerts & Festivals',
      videoBg: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=85',
      timecode: '00:01:14:02',
      specs: 'Meyer Sound LEO + 60 Moving Heads + Cold Spark Pyrotechnics'
    },
    {
      title: 'Luxury Nuptials & Cathedral Canopies',
      venue: 'Lake Victoria Serena & Munyonyo Speke',
      discipline: 'Weddings with iCandy',
      videoBg: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=85',
      timecode: '00:02:45:18',
      specs: '50,000-Bulb Warm Fairy Canopy + Low-Fog Cloud Generator'
    },
    {
      title: 'High-Level Diplomatic & Brand Summits',
      venue: 'Speke Resort Convention Center',
      discipline: 'Conferences & Summits',
      videoBg: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=85',
      timecode: '00:03:52:09',
      specs: 'Curved P2.6 Ultra-HD LED Wall + Bosch 8-Language Interpretation'
    },
    {
      title: 'Sensory Brand Reveals & Automotive Expo',
      venue: 'Sheraton & Kololo Ceremonial Grounds',
      discipline: 'Product Launches',
      videoBg: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85',
      timecode: '00:04:30:24',
      specs: 'Motorized Turntable Stage + Studio ARRI Lighting'
    },
    {
      title: 'High-Octane Neon Parties & DJ Arenas',
      venue: 'Kampala Serena Gardens & Guvnor',
      discipline: 'Parties & Galas',
      videoBg: 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=1600&q=85',
      timecode: '00:05:12:00',
      specs: '400W UV Blacklight Cannons + Astera Pixel Rig + Funktion-One'
    }
  ];

  const currentClip = clips[currentClipIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="showreel-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-5xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#070709]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <span className="text-xs font-black text-white uppercase tracking-widest font-['Syne']">
              THE MITCH HUB · 360 MASTER SHOWREEL
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono text-[#FFC700] bg-[#FFC700]/10 border border-[#FFC700]/20">
              4K 60FPS TIME-CODED
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Stage Display */}
        <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
          {/* Main Visual Frame */}
          <img
            src={currentClip.videoBg}
            alt={currentClip.title}
            className="w-full h-full object-cover filter brightness-90 contrast-110"
          />

          {/* Cinematic Scanlines & Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,black_100%)] pointer-events-none" />

          {/* Broadcast Overlay Heads-Up Display (HUD) */}
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-1 text-[11px] font-mono text-white/80">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded bg-red-600 text-white font-bold text-[10px] tracking-wider">
                REC
              </span>
              <span>TIME: {currentClip.timecode}</span>
            </div>
            <span className="text-[#FFC700] font-semibold">{currentClip.discipline}</span>
          </div>

          {/* Center Play/Pause state */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-20 w-16 h-16 rounded-full bg-black/60 hover:bg-[#FFC700] hover:text-black border border-[#FFC700]/50 text-white flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-2xl backdrop-blur-md"
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 fill-current" />
            ) : (
              <Play className="w-7 h-7 fill-current translate-x-0.5" />
            )}
          </button>

          {/* Bottom Video Info Title */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFC700] font-['Syne']">
                {currentClip.venue}
              </span>
              <h4 className="text-lg sm:text-2xl font-black text-white font-['Syne'] tracking-tight">
                {currentClip.title}
              </h4>
              <p className="text-xs text-zinc-300 font-mono mt-0.5">
                Setup Rig: {currentClip.specs}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-lg bg-black/60 hover:bg-zinc-800 text-white border border-zinc-700 text-xs flex items-center gap-1.5"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[#FFC700]" />}
                <span className="hidden sm:inline">{isMuted ? 'Muted' : 'Audio Live'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Clip Selector Playlist Bar */}
        <div className="p-4 sm:p-5 bg-zinc-900 border-t border-zinc-800 overflow-x-auto">
          <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2 font-['Syne']">
            Select Showreel Category Reel:
          </div>
          <div className="flex items-center gap-2.5 min-w-max">
            {clips.map((clip, idx) => (
              <button
                key={clip.title}
                onClick={() => setCurrentClipIndex(idx)}
                className={`px-3.5 py-2 rounded-xl text-left transition-all text-xs font-semibold flex items-center gap-2.5 ${
                  currentClipIndex === idx
                    ? 'bg-[#FFC700] text-black shadow-md shadow-[#FFC700]/20 font-bold'
                    : 'bg-zinc-950 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                <span className="font-mono text-[10px] opacity-70">0{idx + 1}</span>
                <span>{clip.discipline}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Book */}
        <div className="px-6 py-3.5 bg-[#070709] border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-zinc-400">
            Need this calibre of 360 production for your upcoming event in Uganda or East Africa?
          </span>
          <a
            href="#contact"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#FFC700] hover:bg-[#ffcf1a] text-black font-bold font-['Syne'] uppercase tracking-wider transition-colors"
          >
            Inquire Technical Setup
          </a>
        </div>
      </div>
    </div>
  );
};
