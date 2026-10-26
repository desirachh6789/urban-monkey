import React, { useState } from 'react';
import { SpotlightScene } from '../components/3d/SpotlightScene';
import { PRODUCTS, SNEAKER_VARIANTS } from '../data/products';
import { SneakerColorVariant } from '../types';
import { useCart } from '../context/CartContext';
import { Plus, Check, ShieldCheck, Compass, SlidersHorizontal } from 'lucide-react';

export const ProductSpotlight: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState<SneakerColorVariant>('Obsidian');
  const [selectedSize, setSelectedSize] = useState('UK 9');
  const { addToCart } = useCart();

  const voidRunner = PRODUCTS.find((p) => p.id === 'void-runner') || PRODUCTS[0];

  const handleAddSpotlightItem = () => {
    addToCart(voidRunner, selectedVariant, selectedSize, 1);
  };

  return (
    <section id="spotlight" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-brand-lime tracking-mega uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-ping" />
            <span>INTERACTIVE 3D SPOTLIGHT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase">
            VOID RUNNER // 001
          </h2>
        </div>
        <p className="text-xs font-mono text-zinc-400 max-w-sm">
          Rotate, inspect, and configure dynamic material finishes in real-time spatial 3D.
        </p>
      </div>

      {/* Main Grid: 3D Scene on Left, Configurator on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-10">
        {/* Left Column: 3D Viewer */}
        <div className="lg:col-span-7 w-full">
          <SpotlightScene colorVariant={selectedVariant} />
        </div>

        {/* Right Column: Dynamic Spec & Material Configurator */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                HERO FOOTWEAR SILHOUETTE
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-[10px] font-mono font-bold text-brand-lime">
                PATENT PENDING
              </span>
            </div>
            <h3 className="text-3xl font-display font-black tracking-tight text-white uppercase">
              VOID RUNNER
            </h3>
            <div className="text-2xl font-mono font-bold text-brand-lime">
              ₹{voidRunner.price.toLocaleString('en-IN')}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
            {voidRunner.description}
          </p>

          {/* Color Variant Selector (Updates 3D Scene Material in real-time) */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-400 uppercase tracking-wider">
                ACTIVE COLORWAY:
              </span>
              <span className="text-white font-bold uppercase tracking-wider">
                {selectedVariant}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {SNEAKER_VARIANTS.map((variant) => {
                const isActive = selectedVariant === variant.name;
                return (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.name as SneakerColorVariant)}
                    className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col gap-2 ${
                      isActive
                        ? 'border-brand-lime bg-brand-lime/10 shadow-lime-sm'
                        : 'border-white/10 bg-surface-card hover:border-white/30 text-zinc-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="w-4 h-4 rounded-full border border-white/20 shadow"
                        style={{ backgroundColor: variant.colorHex }}
                      />
                      {isActive && <Check className="w-3.5 h-3.5 text-brand-lime" />}
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white uppercase">
                        {variant.name}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500">
                        {variant.name === 'Obsidian'
                          ? 'ACID LIME / MATTE'
                          : variant.name === 'Bone'
                          ? 'TRAVERTINE / RAW'
                          : 'SAFETY ORANGE / GLOW'}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sizing Grid */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-400 uppercase tracking-wider">SELECT SIZE:</span>
              <span className="text-zinc-500">TRUE TO SIZE FIT</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {voidRunner.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg border text-xs font-mono font-medium transition-all ${
                    selectedSize === size
                      ? 'border-brand-lime bg-brand-lime text-black font-bold'
                      : 'border-white/10 bg-surface-card text-zinc-300 hover:border-white/30'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 space-y-3">
            <button
              onClick={handleAddSpotlightItem}
              className="w-full py-4 rounded-xl bg-brand-lime hover:bg-[#bcf000] text-black font-mono font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-lime-sm hover:shadow-lime-md flex items-center justify-center gap-2 group active:scale-[0.98]"
            >
              <Plus className="w-4 h-4" />
              <span>ACQUIRE VOID RUNNER ({selectedVariant} • {selectedSize})</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-zinc-500">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
              <span>FREE CONTINENTAL COURIER DISPATCH • AUTHENTICATED NFC CHIP EMBEDDED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
