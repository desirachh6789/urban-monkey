import React from 'react';
import { ArrowUpRight, ShieldAlert, Sparkles } from 'lucide-react';

interface CampaignSectionProps {
  onShopClick: () => void;
}

export const CampaignSection: React.FC<CampaignSectionProps> = ({ onShopClick }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="relative rounded-3xl bg-gradient-to-br from-surface-elevated via-surface-card to-background border border-white/15 overflow-hidden p-8 sm:p-14 lg:p-20 shadow-2xl">
        {/* Background ambient lighting and pattern */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Big Editorial Typography & Statement */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-lime tracking-mega uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
              <span>CAMPAIGN 001 // NOCTURNAL TRANSMISSION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase leading-[1.05]">
              WHEN THE CITY SLEEPS, <br />
              <span className="text-glow-lime text-brand-lime">
                THE UNSEEN AWAKENS.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 font-sans max-w-2xl leading-relaxed">
              Drop 001 was designed for nocturnal metropolises—empty brutalist flyovers, neon reflection on rain-slicked asphalt, and the subterranean corridors where global youth culture is rewritten.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onShopClick}
                className="px-8 py-4 rounded-xl bg-brand-lime hover:bg-[#bcf000] text-black font-mono font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-lime-sm hover:shadow-lime-md flex items-center gap-2 group active:scale-95"
              >
                <span>CLAIM YOUR SILHOUETTE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
                DISPATCH TIME: <span className="text-white font-bold">24-48 HOURS</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-concept Architectural Monogram Graphic */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-black/60 border border-white/15 p-6 flex flex-col justify-between relative shadow-2xl group hover:border-brand-lime/60 transition-colors">
              <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
                <span>SPECIMEN // CAMPAIGN-A1</span>
                <span className="text-brand-lime font-bold">VERIFIED</span>
              </div>

              {/* Geometric Monogram Centerpiece */}
              <div className="my-auto flex flex-col items-center justify-center">
                <div className="w-24 h-24 rounded-2xl border-2 border-brand-lime flex items-center justify-center relative overflow-hidden group-hover:rotate-6 transition-transform duration-500">
                  <div className="absolute inset-0 bg-brand-lime/10" />
                  <span className="font-display font-black text-4xl text-white tracking-widest">
                    UM
                  </span>
                </div>
                <span className="text-xs font-mono tracking-widest text-zinc-300 uppercase mt-4">
                  URBAN MONKEY
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">
                  DROP 001 // TOKYO • BERLIN • NEW DELHI
                </span>
              </div>

              <div className="text-[10px] font-mono text-zinc-500 text-center border-t border-white/10 pt-2">
                REINFORCED STREETWEAR ARCHITECTURE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
