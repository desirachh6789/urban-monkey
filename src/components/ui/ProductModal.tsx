import React, { useState } from 'react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { X, Check, Shield, Layers, Plus } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenSpotlight?: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onOpenSpotlight,
}) => {
  if (!product) return null;

  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants ? product.variants[0].name : product.color
  );
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, selectedSize, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-surface-dark border border-white/15 rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-zinc-400 hover:text-white border border-white/10 transition-colors"
          aria-label="Close product view"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Visual / Blueprint side */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-surface-card to-background p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

          {/* Top metadata */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-widest text-brand-lime uppercase">
              {product.badge || 'DROP 001 SPEC'}
            </span>
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
              UM-REF // {product.id.toUpperCase()}
            </span>
          </div>

          {/* Centerpiece graphic / architectural silhouette preview */}
          <div className="relative z-10 py-10 flex flex-col items-center justify-center">
            <div className="w-44 h-44 rounded-2xl bg-black/50 border border-white/10 flex flex-col items-center justify-center relative shadow-2xl group">
              {/* Dynamic decorative visual based on category */}
              <div className="w-16 h-16 rounded-xl bg-brand-lime/10 border border-brand-lime/30 flex items-center justify-center mb-2">
                <span className="font-display font-black text-2xl text-brand-lime">
                  {product.name.charAt(0)}
                </span>
              </div>
              <span className="text-xs font-mono font-bold tracking-widest text-white uppercase text-center px-2">
                {product.name}
              </span>
              <span className="text-[10px] font-mono text-zinc-400 mt-1 uppercase">
                {selectedVariant}
              </span>
            </div>

            {product.has3DModel && onOpenSpotlight && (
              <button
                onClick={() => {
                  onClose();
                  onOpenSpotlight();
                }}
                className="mt-6 px-3.5 py-1.5 rounded-full bg-brand-lime/10 hover:bg-brand-lime hover:text-black border border-brand-lime/40 text-brand-lime text-[11px] font-mono tracking-wider transition-all"
              >
                OPEN IN 3D CAD INSPECTOR →
              </button>
            )}
          </div>

          {/* Material tags */}
          <div className="relative z-10 flex flex-wrap gap-1.5">
            {product.materials.map((mat, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-zinc-400"
              >
                {mat}
              </span>
            ))}
          </div>
        </div>

        {/* Specs and Purchase side */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[500px] md:max-h-none">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest">
                <span>{product.category}</span>
                <span>•</span>
                <span>DROP 001</span>
              </div>
              <h3 className="text-2xl font-display font-black tracking-wide text-white mt-1">
                {product.name}
              </h3>
              <div className="text-xl font-mono font-bold text-brand-lime mt-1">
                ₹{product.price.toLocaleString('en-IN')}
              </div>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Color variants selector (if multiple available) */}
            {product.variants && product.variants.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">FINISH VARIANT</span>
                  <span className="text-white font-bold">{selectedVariant}</span>
                </div>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariant(v.name)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all flex items-center gap-2 ${
                        selectedVariant === v.name
                          ? 'border-brand-lime bg-brand-lime/10 text-white'
                          : 'border-white/10 bg-white/5 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-white/20"
                        style={{ backgroundColor: v.colorHex }}
                      />
                      <span>{v.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size selector */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-zinc-400">CHOOSE SIZE</span>
                <span className="text-zinc-500">STANDARD FIT</span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 rounded-lg border text-xs font-mono font-medium transition-all ${
                      selectedSize === size
                        ? 'border-brand-lime bg-brand-lime text-black font-bold'
                        : 'border-white/10 bg-white/5 text-zinc-300 hover:border-white/30'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Technical Bullet Points */}
            <div className="pt-2 border-t border-white/10 space-y-1.5">
              <span className="text-[11px] font-mono text-zinc-400 tracking-wider uppercase block">
                ENGINEERING SPECIFICATIONS
              </span>
              <ul className="space-y-1">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                    <span className="text-brand-lime mt-0.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Add to Cart CTA */}
          <div className="pt-6 border-t border-white/10 mt-6">
            <button
              onClick={handleAddToCart}
              className="w-full py-4 rounded-xl bg-brand-lime hover:bg-[#bbf000] text-black font-mono font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-lime-sm hover:shadow-lime-md flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <Plus className="w-4 h-4" />
              <span>ACQUIRE PIECE — ₹{product.price.toLocaleString('en-IN')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
