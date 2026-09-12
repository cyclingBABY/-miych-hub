import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '0781072868';
  const whatsappUrl = 'https://wa.me/256781072868?text=Hello%20The%20Mitch%20Hub,%20I%20would%20like%20to%20inquire%20about%20event%20production%20services.';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Expanded Quick Message Bubble */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-72 rounded-2xl bg-[#0e0e12] border border-zinc-800 p-4 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-xs font-bold text-white font-['Syne'] uppercase tracking-wider">
                  The Mitch Hub Dispatch
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-white p-1"
                aria-label="Close message preview"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs text-zinc-300 my-3 leading-relaxed">
              Chat directly with our production team for instant venue site survey and equipment hire bookings.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs transition-colors shadow-lg shadow-[#25D366]/20 font-['Syne'] uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4 fill-black text-[#25D366]" />
              <span>Chat on {phoneNumber}</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="flex items-center gap-2.5">
        <span className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full bg-black/85 text-[11px] font-bold text-zinc-200 border border-zinc-800 backdrop-blur-md shadow-xl">
          WhatsApp <strong className="text-[#25D366] ml-1">{phoneNumber}</strong>
        </span>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          aria-label={`Chat on WhatsApp with The Mitch Hub at ${phoneNumber}`}
          className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black flex items-center justify-center shadow-2xl shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          {/* Subtle radiating ping effect */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-40 pointer-events-none" />

          <MessageCircle className="w-7 h-7 fill-black text-[#25D366] group-hover:rotate-6 transition-transform" />
        </a>
      </div>
    </div>
  );
};
