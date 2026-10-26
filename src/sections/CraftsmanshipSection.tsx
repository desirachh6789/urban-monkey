import React, { useState } from 'react';
import { Layers, Shield, Cpu, Minimize2, CheckCircle2 } from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  const [activeSwatch, setActiveSwatch] = useState(0);

  const principles = [
    {
      id: 'engineered-silhouettes',
      icon: Layers,
      title: 'ENGINEERED SILHOUETTES',
      tagline: 'Anatomical articulation and three-dimensional draping.',
      desc: 'Garments are cut to allow complete mobility without excess bulk. Articulated knee darts, underarm gussets, and tapered hem cinch mechanisms adapt to high-velocity movement.',
      specs: ['Ergonomic joint mapping', 'Zero seam friction in high-stress zones', 'Structured architectural drop'],
    },
    {
      id: 'considered-materials',
      icon: Shield,
      title: 'CONSIDERED MATERIALS',
      tagline: 'High-density ballistic nylon, loopback cotton & TPU.',
      desc: 'Selected for abrasion endurance, hydrophobic barrier performance, and structural integrity under constant wash and friction cycles.',
      specs: ['340 GSM Ring-Spun Cotton', '20K Hydrostatic 3-Layer Membrane', 'Laser-bonded reinforcement patches'],
    },
    {
      id: 'everyday-utility',
      icon: Cpu,
      title: 'EVERYDAY UTILITY',
      tagline: 'Concealed storage engineered for modern EDC gear.',
      desc: 'Tactical cargo storage tailored to fit smartphones, wireless charging cases, audio gear, and travel documents with magnetic Fidlock closures.',
      specs: ['YKK Aquaguard waterproof zippers', 'Modular sling integration', 'Concealed passport compartments'],
    },
    {
      id: 'functional-minimalism',
      icon: Minimize2,
      title: 'FUNCTIONAL MINIMALISM',
      tagline: 'Eliminating excess. Amplifying precision.',
      desc: 'No loud decorative logos or unnecessary straps. Every visual seam has an engineering rationale; every zipper serves a tactical utility purpose.',
      specs: ['Tonal reflective typography', 'Matte black anodized hardware', 'Clean unbranded exterior profiles'],
    },
  ];

  const swatches = [
    {
      name: 'Ballistic Cordura (700D)',
      code: 'CORDURA-BLK-01',
      color: '#16181F',
      texture: 'Coarse woven crosshatch',
      application: 'VOID RUNNER upper & AFTERHOURS CARGO pockets',
    },
    {
      name: 'Heavy Ring-Spun Cotton (340 GSM)',
      code: 'COTTON-WSH-02',
      color: '#21242E',
      texture: 'Dense compact loopback fleece',
      application: 'STATIC HEAVYWEIGHT Tee',
    },
    {
      name: 'Storm-Tech 3-Layer Laminate',
      code: 'MEMBRANE-20K-03',
      color: '#1B1E28',
      texture: 'Matte micro-ripstop with taped backing',
      application: 'PHANTOM SHELL Technical Jacket',
    },
    {
      name: 'Dual-Density Sculpted EVA',
      code: 'EVA-LATTICE-04',
      color: '#0E1015',
      texture: 'High-rebound segmented cushion sole',
      application: 'VOID RUNNER Outsole Platform',
    },
  ];

  return (
    <section id="craftsmanship" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-brand-lime tracking-mega uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            <span>DISCIPLINE & TACTILITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase">
            MATERIALS & CRAFTSMANSHIP.
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-md">
          A breakdown of the foundational textiles, structural principles, and construction techniques behind Drop 001.
        </p>
      </div>

      {/* 4 Core Principles Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
        {principles.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <div
              key={principle.id}
              className="p-6 rounded-2xl bg-surface-card border border-white/10 hover:border-brand-lime/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-lime group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-zinc-500">
                    PRINCIPLE 0{index + 1}
                  </span>
                  <h3 className="text-base font-display font-bold text-white tracking-wide">
                    {principle.title}
                  </h3>
                  <p className="text-xs font-mono text-brand-lime">
                    {principle.tagline}
                  </p>
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {principle.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-1.5">
                {principle.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                    <CheckCircle2 className="w-3 h-3 text-brand-lime shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Material Swatch Archive */}
      <div className="mt-16 p-8 rounded-2xl bg-surface-dark border border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">
              TACTILE TEXTILE ARCHIVE
            </h3>
            <p className="text-xs font-mono text-zinc-400">
              Select a swatch to inspect technical composition and application details.
            </p>
          </div>
          <span className="text-xs font-mono text-brand-lime">
            LAB VERIFICATION: 2026-DROP1
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          {swatches.map((swatch, idx) => {
            const isSelected = activeSwatch === idx;
            return (
              <button
                key={swatch.code}
                onClick={() => setActiveSwatch(idx)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'border-brand-lime bg-white/5 shadow-lime-sm'
                    : 'border-white/10 bg-surface-card hover:border-white/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg border border-white/20 shrink-0 shadow-inner flex items-center justify-center font-mono text-[9px] text-zinc-400"
                    style={{ backgroundColor: swatch.color }}
                  >
                    TX
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono font-bold text-white truncate">
                      {swatch.name}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500">
                      {swatch.code}
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-white/5 space-y-1 text-[11px] font-mono">
                  <div className="text-zinc-400">
                    <span className="text-zinc-600">STRUCTURE:</span> {swatch.texture}
                  </div>
                  <div className="text-brand-lime/90">
                    <span className="text-zinc-600">USED IN:</span> {swatch.application}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
