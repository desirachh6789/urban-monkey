import React from 'react';
import { HeroScene } from '../components/3d/HeroScene';
import { ArrowDown, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onDiscoverFormClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onDiscoverFormClick,
}) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-lime/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      {/* Top Drop Metadata Bar */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] font-mono tracking-widest text-zinc-400 uppercase pt-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
          <span>DROP 001 // AUTUMN–WINTER</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-zinc-500">
          <span>COORDINATES: 28°36&apos;N 77°12&apos;E</span>
          <span>•</span>
          <span className="text-brand-lime">LIMITED EDITION PRODUCTION</span>
        </div>
      </div>

      {/* Hero Center Composition */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6">
        {/* Left Column: Bold Editorial Typography & CTAs */}
        <div className="lg:col-span-5 flex flex-col justify-center z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-white/10 w-fit">
            <span className="text-[10px] font-mono tracking-mega text-brand-lime uppercase font-bold">
              FUTURE STREETWEAR ARCHITECTURE
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-black tracking-tighter text-white uppercase leading-[0.95]">
              FORM. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                WITHOUT
              </span> <br />
              <span className="text-glow-lime text-brand-lime">LIMITS.</span>
            </h1>
          </div>

          <p className="text-sm sm:text-base text-zinc-300 font-sans max-w-md leading-relaxed">
            Streetwear engineered for the in-between. Minimalist silhouettes forged with experimental digital geometry and underground utilitarian purpose.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onExploreClick}
              className="px-7 py-4 rounded-xl bg-brand-lime hover:bg-[#bcf000] text-black font-mono font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-lime-sm hover:shadow-lime-md flex items-center justify-center gap-3 group active:scale-95"
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onDiscoverFormClick}
              className="px-6 py-4 rounded-xl bg-surface-card hover:bg-white/10 border border-white/15 hover:border-brand-lime/60 text-zinc-200 hover:text-white font-mono text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 group"
            >
              <Compass className="w-4 h-4 text-brand-lime group-hover:rotate-45 transition-transform" />
              <span>DISCOVER THE FORM</span>
            </button>
          </div>

          {/* Micro Specs */}
          <div className="pt-4 grid grid-cols-3 gap-4 border-t border-white/10 text-xs font-mono">
            <div>
              <div className="text-zinc-500 text-[10px]">SILHOUETTE</div>
              <div className="text-white font-bold mt-0.5">ERGONOMIC</div>
            </div>
            <div>
              <div className="text-zinc-500 text-[10px]">EDITION</div>
              <div className="text-brand-lime font-bold mt-0.5">001 // GLOBAL</div>
            </div>
            <div>
              <div className="text-zinc-500 text-[10px]">CONSTRUCTION</div>
              <div className="text-white font-bold mt-0.5">BALLISTIC</div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D Fashion Object Centerpiece */}
        <div className="lg:col-span-7 relative flex items-center justify-center w-full">
          {/* Circular Architectural Aura */}
          <div className="absolute w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full border border-white/10 pointer-events-none -z-0 animate-[spin_60s_linear_infinite]" />
          <div className="absolute w-[220px] sm:w-[360px] h-[220px] sm:h-[360px] rounded-full border border-brand-lime/20 border-dashed pointer-events-none -z-0 animate-[spin_40s_linear_infinite_reverse]" />

          {/* Three.js Canvas Scene */}
          <div className="relative z-10 w-full">
            <HeroScene colorVariant="Obsidian" />
          </div>
        </div>
      </div>

      {/* Hero Bottom / Restrained Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between pt-4 border-t border-white/5">
        <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-2">
          <span>TACTILE DIGITAL COMMERCE</span>
        </div>

        <button
          onClick={onExploreClick}
          className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-brand-lime transition-colors group cursor-pointer"
          aria-label="Scroll down to featured collection"
        >
          <span className="tracking-widest uppercase">SCROLL TO UNVEIL</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-brand-lime" />
        </button>
      </div>
    </section>
  );
};
