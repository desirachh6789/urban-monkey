import React from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { Plus, Eye, Sparkles, Box } from 'lucide-react';

interface FeaturedCollectionProps {
  onSelectProduct: (product: Product) => void;
  onOpenSpotlight: () => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  onSelectProduct,
  onOpenSpotlight,
}) => {
  const { addToCart } = useCart();

  return (
    <section id="collection" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-brand-lime tracking-mega uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            <span>PRIMARY CATALOGUE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase">
            THE FIRST DROP.
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-md leading-relaxed">
          Four foundational silhouettes engineered for harsh urban topographies. Limited production runs manufactured with technical textiles.
        </p>
      </div>

      {/* 4-Product Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-12">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="group relative flex flex-col justify-between bg-surface-card rounded-2xl border border-white/10 hover:border-brand-lime/60 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-lime-sm"
          >
            {/* Card Visual Header / Badge */}
            <div className="p-4 flex items-center justify-between border-b border-white/5 relative z-10">
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                {product.category}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/5 text-[9px] font-mono text-brand-lime border border-brand-lime/20">
                {product.badge || 'AUTUMN 2026'}
              </span>
            </div>

            {/* Product Visual Area */}
            <div
              onClick={() => onSelectProduct(product)}
              className="relative w-full aspect-square flex items-center justify-center p-8 cursor-pointer overflow-hidden bg-gradient-to-b from-surface-card to-background group-hover:from-surface-tertiary transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

              {/* Product SVG Graphic Silhouette Artwork */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-105">
                {product.category === 'Footwear' ? (
                  // Sneaker Graphic Silhouette
                  <svg viewBox="0 0 200 120" className="w-44 h-auto drop-shadow-xl" fill="none">
                    <path
                      d="M20 90 C40 90 60 92 80 92 C120 92 160 88 180 80 C185 78 188 84 186 90 C178 98 140 102 100 102 C50 102 26 98 16 94 C12 92 14 90 20 90 Z"
                      fill="#1E222D"
                      stroke="#D4FF00"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M30 88 C26 70 36 50 60 42 C80 34 90 22 100 14 C104 10 112 12 116 18 C120 24 130 42 150 52 C170 62 180 72 184 80 C160 88 100 92 30 88 Z"
                      fill="#14161C"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1.2"
                    />
                    <path d="M70 65 L135 60 L145 66 L80 72 Z" fill="#D4FF00" />
                    <line x1="88" y1="36" x2="110" y2="44" stroke="#F4F4F2" strokeWidth="1.5" />
                    <line x1="100" y1="46" x2="122" y2="54" stroke="#F4F4F2" strokeWidth="1.5" />
                  </svg>
                ) : product.category === 'Outerwear' ? (
                  // Technical Shell Jacket Graphic Silhouette
                  <svg viewBox="0 0 200 180" className="w-36 h-auto drop-shadow-xl" fill="none">
                    <path
                      d="M100 20 L130 35 L170 75 L150 95 L130 65 L130 150 L70 150 L70 65 L50 95 L30 75 L70 35 Z"
                      fill="#1B1E27"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="1.5"
                    />
                    <path d="M100 20 L100 150" stroke="#D4FF00" strokeWidth="1.5" strokeDasharray="3 3" />
                    <rect x="78" y="70" width="16" height="26" rx="2" fill="#242834" stroke="rgba(255,255,255,0.2)" />
                    <rect x="106" y="70" width="16" height="26" rx="2" fill="#242834" stroke="rgba(255,255,255,0.2)" />
                    <path d="M92 40 L108 40" stroke="#D4FF00" strokeWidth="2" />
                  </svg>
                ) : product.category === 'Apparel' ? (
                  // Heavyweight Boxy Tee Graphic Silhouette
                  <svg viewBox="0 0 200 180" className="w-36 h-auto drop-shadow-xl" fill="none">
                    <path
                      d="M80 30 C90 35 110 35 120 30 L165 48 L150 78 L132 70 L132 155 L68 155 L68 70 L50 78 L35 48 Z"
                      fill="#161820"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="1.5"
                    />
                    <path d="M80 30 C90 38 110 38 120 30" stroke="#D4FF00" strokeWidth="1.5" />
                    <line x1="68" y1="145" x2="132" y2="145" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    <circle cx="100" cy="90" r="12" stroke="rgba(212,255,0,0.4)" strokeWidth="1" strokeDasharray="2 2" />
                  </svg>
                ) : (
                  // Tactical Cargo Trousers Graphic Silhouette
                  <svg viewBox="0 0 200 180" className="w-36 h-auto drop-shadow-xl" fill="none">
                    <path
                      d="M65 30 L135 30 L145 160 L115 160 L100 85 L85 160 L55 160 Z"
                      fill="#20242F"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="1.5"
                    />
                    <rect x="116" y="80" width="22" height="32" rx="3" fill="#2A303E" stroke="#D4FF00" strokeWidth="1" />
                    <rect x="62" y="80" width="22" height="32" rx="3" fill="#2A303E" stroke="#D4FF00" strokeWidth="1" />
                    <line x1="65" y1="42" x2="135" y2="42" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  </svg>
                )}
              </div>

              {/* View Overlay Button on hover */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-4 py-2 rounded-lg bg-white/10 text-white font-mono text-xs tracking-wider flex items-center gap-1.5 border border-white/20">
                  <Eye className="w-3.5 h-3.5 text-brand-lime" />
                  <span>VIEW SPEC SHEET</span>
                </span>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="p-5 border-t border-white/10 flex flex-col justify-between flex-1 bg-surface-dark/40">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-display font-bold text-white tracking-wide group-hover:text-brand-lime transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">
                    {product.color}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-sans">
                  {product.tagline}
                </p>
              </div>

              {/* Price and Cart Actions */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">PRICE</span>
                  <span className="text-sm font-mono font-bold text-white">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {product.has3DModel && (
                    <button
                      onClick={onOpenSpotlight}
                      className="p-2.5 rounded-lg bg-white/5 hover:bg-brand-lime/10 border border-white/10 hover:border-brand-lime/50 text-brand-lime transition-all"
                      title="Inspect in 3D"
                      aria-label={`Inspect ${product.name} in 3D viewer`}
                    >
                      <Box className="w-4 h-4" />
                    </button>
                  )}

                  <button
                    onClick={() => addToCart(product)}
                    className="px-3.5 py-2.5 rounded-lg bg-white/10 hover:bg-brand-lime hover:text-black border border-white/15 hover:border-transparent text-white font-mono text-xs font-semibold tracking-wider transition-all flex items-center gap-1.5 active:scale-95"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>ADD</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
