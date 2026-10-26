import React from 'react';
import { Terminal, Shield, Compass, Sparkles } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  return (
    <section id="manifesto" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-lime/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Top telemetry tag */}
      <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mb-6 uppercase tracking-mega">
        <span className="w-2 h-2 bg-brand-lime rounded-full" />
        <span>MANIFESTO // CHAPTER 01</span>
      </div>

      {/* Asymmetrical Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Huge Oversized Typography */}
        <div className="lg:col-span-7 space-y-8">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white uppercase leading-[0.95]">
            NOT MADE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-white">
              TO BLEND
            </span> <br />
            IN.
          </h2>

          <p className="text-lg sm:text-xl font-sans text-zinc-300 font-light leading-relaxed max-w-2xl">
            We exist in the friction between digital abstraction and industrial reality. Urban landscapes were not built for conformity—they were built to be navigated, questioned, and claimed.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10 text-xs font-mono">
            <div className="space-y-2">
              <span className="text-brand-lime tracking-widest uppercase font-bold">
                01 // SUBVERSION OF UNIFORM
              </span>
              <p className="text-zinc-400 font-sans leading-relaxed">
                Rejecting fast-fashion turnover in favor of permanent architectural silhouettes that withstand wear, weather, and shifting cultural tides.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-brand-lime tracking-widest uppercase font-bold">
                02 // DIGITAL-FIRST FORGE
              </span>
              <p className="text-zinc-400 font-sans leading-relaxed">
                Every stitch and seam is simulated in virtual 3D coordinate space before physical cutting, reducing material waste and perfecting kinetic drape.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Visual Block */}
        <div className="lg:col-span-5 relative">
          <div className="p-8 sm:p-10 rounded-2xl bg-surface-card border border-white/10 relative overflow-hidden space-y-6 shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
                BRAND AXIOM
              </span>
              <span className="text-[11px] font-mono text-brand-lime">
                VERIFIED 2026
              </span>
            </div>

            <blockquote className="font-serif italic text-lg sm:text-xl text-zinc-200 leading-relaxed border-l-2 border-brand-lime pl-4">
              “Clothing is our second skin in the metropolis. It should shield your body, project your intent, and never apologize for taking up space.”
            </blockquote>

            <div className="space-y-3 pt-2 text-xs font-mono text-zinc-400">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span>HEADQUARTERS</span>
                <span className="text-white font-medium">NEW DELHI // TOKYO STUDIO</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span>PHILOSOPHY</span>
                <span className="text-white font-medium">FUNCTIONAL EXPERIMENTALISM</span>
              </div>
              <div className="flex justify-between py-2">
                <span>COMMUNITY</span>
                <span className="text-brand-lime font-medium">GLOBAL NETWORK OF CREATIVES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
