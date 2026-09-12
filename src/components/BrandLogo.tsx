import React from 'react';

export const BrandLogo: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' }> = ({
  className = '',
  size = 'md',
}) => {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  return (
    <a href="#" className={`flex flex-col items-center group select-none ${className}`}>
      <div className="relative flex items-center justify-center">
        {/* Yellow curved outline circle ring as in the screenshot */}
        <div
          className={`${
            isSmall ? 'w-9 h-9' : isLarge ? 'w-16 h-16' : 'w-12 h-12'
          } rounded-full border-2 border-[#FFC700] flex items-center justify-center relative shadow-[0_0_15px_rgba(255,199,0,0.3)] group-hover:scale-105 transition-transform duration-300`}
        >
          {/* Inner Monogram: MITCH */}
          <div className="text-center flex flex-col items-center justify-center px-1">
            <span
              className={`font-black text-[#FFC700] tracking-tighter ${
                isSmall ? 'text-[9px] leading-none' : isLarge ? 'text-base leading-none' : 'text-xs leading-none'
              } font-['Syne'] font-extrabold italic`}
            >
              MITCH
            </span>
          </div>
        </div>
      </div>
      {/* THE MITCH HUB text below in gold */}
      <span
        className={`text-[#FFC700] font-black uppercase tracking-[0.2em] ${
          isSmall ? 'text-[7px] mt-0.5' : isLarge ? 'text-[10px] mt-1.5' : 'text-[8px] mt-1'
        } font-['Syne'] text-center whitespace-nowrap`}
      >
        THE MITCH HUB
      </span>
    </a>
  );
};
