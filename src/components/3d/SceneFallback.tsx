import React from 'react';
import { Eye, ShieldAlert } from 'lucide-react';

interface SceneFallbackProps {
  message?: string;
  variant?: string;
}

export const SceneFallback: React.FC<SceneFallbackProps> = ({
  message = '3D STUDIO ACCELERATOR ACTIVE',
  variant = 'Obsidian',
}) => {
  return (
    <div className="relative w-full h-full min-h-[380px] flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#0F1116] to-[#08090B] border border-white/10 rounded-2xl overflow-hidden group">
      {/* Background blueprint tech grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Radial glow */}
      <div className="absolute w-72 h-72 rounded-full bg-brand-lime/10 blur-3xl pointer-events-none" />

      {/* Stylized 2D architectural blueprint sneaker SVG */}
      <div className="relative z-10 w-full max-w-[340px] aspect-[16/9] flex items-center justify-center">
        <svg
          viewBox="0 0 400 240"
          className="w-full h-full drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sole profile */}
          <path
            d="M50 180 C80 180 110 185 140 185 C200 185 280 180 340 160 C350 156 360 165 355 175 C345 195 280 205 200 205 C110 205 60 198 42 190 C36 185 40 180 50 180 Z"
            fill={variant === 'Bone' ? '#C2BCB0' : variant === 'Signal' ? '#1B1C22' : '#1A1D24'}
            stroke="#D4FF00"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />

          {/* Outsole lugs */}
          <rect x="70" y="195" width="25" height="6" rx="2" fill="#D4FF00" opacity="0.8" />
          <rect x="120" y="196" width="30" height="6" rx="2" fill="#D4FF00" opacity="0.8" />
          <rect x="180" y="196" width="30" height="6" rx="2" fill="#D4FF00" opacity="0.8" />
          <rect x="240" y="195" width="30" height="6" rx="2" fill="#D4FF00" opacity="0.8" />
          <rect x="300" y="185" width="25" height="6" rx="2" fill="#D4FF00" opacity="0.8" />

          {/* Upper silhouette */}
          <path
            d="M60 178 C55 150 70 120 100 105 C130 90 145 70 160 55 C165 50 180 52 185 62 C190 72 205 100 230 115 C270 135 320 145 348 158 C320 175 220 182 60 178 Z"
            fill={variant === 'Bone' ? '#EAE6DF' : variant === 'Signal' ? '#FF3B30' : '#12141A'}
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="2"
          />

          {/* Heel cage overlay */}
          <path
            d="M60 178 C52 155 65 125 95 110 L115 145 C95 160 75 170 60 178 Z"
            fill={variant === 'Bone' ? '#B8B2A6' : variant === 'Signal' ? '#252730' : '#1F232D'}
          />

          {/* Lateral accent slash */}
          <path
            d="M130 145 L260 135 L285 145 L155 155 Z"
            fill="#D4FF00"
            className="filter drop-shadow-[0_0_8px_rgba(212,255,0,0.8)]"
          />

          {/* Lacing details */}
          <line x1="150" y1="90" x2="185" y2="105" stroke="#F4F4F2" strokeWidth="2.5" />
          <line x1="170" y1="105" x2="205" y2="120" stroke="#F4F4F2" strokeWidth="2.5" />
          <line x1="190" y1="120" x2="225" y2="135" stroke="#F4F4F2" strokeWidth="2.5" />

          {/* Tech crosshair telemetry */}
          <circle cx="200" cy="120" r="70" stroke="rgba(212,255,0,0.2)" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="200" cy="120" r="3" fill="#D4FF00" />
        </svg>
      </div>

      {/* Tech Telemetry Badges */}
      <div className="relative z-10 mt-6 flex flex-col items-center gap-2 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-ping" />
          <span>BLUEPRINT SCHEMATIC // CAD MODEL ACTIVE</span>
        </div>
        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
          {message} — VARIANT: {variant}
        </p>
      </div>
    </div>
  );
};
