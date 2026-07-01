/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  iconSize?: number;
  showText?: boolean;
}

export default function Logo({ className = '', iconSize = 40, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Premium Academy Crest */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm transition-transform duration-300 hover:scale-105"
      >
        {/* Shield Outer Shadow Outline */}
        <path
          d="M50 5 L85 20 C85 60, 50 90, 50 95 C50 90, 15 60, 15 20 Z"
          fill="#0F4C81"
          stroke="#F4B400"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Inner Shield Overlay */}
        <path
          d="M50 10 L78 22 C78 55, 50 82, 50 86 C50 82, 22 55, 22 22 Z"
          fill="#1E293B"
          opacity="0.2"
        />
        {/* Decorative Gold Ribbon/Star */}
        <circle cx="50" cy="28" r="4" fill="#F4B400" />
        <polygon points="50,16 53,22 59,23 55,27 56,33 50,30 44,33 45,27 41,23 47,22" fill="#F4B400" />
        
        {/* Lettering "A A" (Alicia Academy) */}
        <text
          x="34"
          y="62"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="30"
          letterSpacing="-1"
        >
          A
        </text>
        <text
          x="52"
          y="68"
          fill="#F4B400"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="30"
          letterSpacing="-1"
        >
          A
        </text>
        
        {/* Lower Banner Accent */}
        <path
          d="M30 75 Q50 82 70 75"
          stroke="#F4B400"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="font-display font-extrabold text-xl tracking-tight text-brand-blue dark:text-white">
            ALICIA
          </span>
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-brand-gold dark:text-brand-gold">
            ACADEMY
          </span>
        </div>
      )}
    </div>
  );
}
