import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    totalItems,
    addToast,
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckoutDemo = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4FF00', '#F4F4F2', '#14161D'],
    });

    addToast(
      'ORDER RESERVED (DEMO)',
      'This is an interactive demo portfolio build. No real funds were charged.',
      'info'
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer content */}
      <div className="relative w-full max-w-md bg-surface-dark border-l border-white/10 h-full flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-brand-lime" />
            <h2 className="text-base font-mono font-bold tracking-wider text-white uppercase">
              ARSENAL // CART
            </h2>
            <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-lime">
              {totalItems}
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 divide-y divide-white/5">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-600">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-mono font-bold tracking-wider text-white uppercase">
                  YOUR ARSENAL IS EMPTY
                </h3>
                <p className="text-xs text-zinc-400 max-w-[240px]">
                  Explore Drop 001 and select your tactical silhouettes.
                </p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-brand-lime hover:text-black transition-all text-xs font-mono tracking-wider text-zinc-200"
              >
                CONTINUE EXPLORING
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {cart.map((item) => {
                const lineTotal = item.product.price * item.quantity;
                return (
                  <div key={item.id} className="pt-4 first:pt-0 flex gap-4">
                    {/* Visual miniature box */}
                    <div className="w-20 h-20 rounded-xl bg-surface-card border border-white/10 flex flex-col items-center justify-center p-2 shrink-0 relative overflow-hidden">
                      <span className="text-[10px] font-mono font-bold text-zinc-400 tracking-wider">
                        {item.product.category.substring(0, 4).toUpperCase()}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-brand-lime/10 border border-brand-lime/30 flex items-center justify-center mt-1">
                        <span className="text-[10px] font-mono text-brand-lime font-bold">UM</span>
                      </div>
                      <span className="absolute bottom-1 right-1 text-[8px] font-mono text-zinc-500">
                        {item.selectedSize}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-display font-bold text-white tracking-wide truncate">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                            title="Remove item"
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] font-mono text-zinc-400">
                          {item.selectedVariant} • {item.selectedSize}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Stepper */}
                        <div className="flex items-center border border-white/15 rounded-lg bg-black/40 overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-mono font-semibold text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span className="text-xs font-mono font-bold text-white tracking-wider">
                            ₹{lineTotal.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="pt-3">
                <button
                  onClick={clearCart}
                  className="text-[11px] font-mono text-zinc-500 hover:text-zinc-300 transition-colors underline"
                >
                  CLEAR ALL ITEMS
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Subtotal & Action */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-surface-card/60 backdrop-blur-md space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-zinc-400">
                <span>SUBTOTAL</span>
                <span className="text-white font-bold">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-xs font-mono text-zinc-400">
                <span>ESTIMATED DISPATCH</span>
                <span className="text-brand-lime">COMPLIMENTARY</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between text-sm font-mono font-bold text-white">
                <span>TOTAL</span>
                <span className="text-base text-brand-lime">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={handleCheckoutDemo}
              className="w-full py-4 rounded-xl bg-brand-lime hover:bg-[#bbf000] text-black font-mono font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-lime-md flex items-center justify-center gap-2 group active:scale-[0.98]"
            >
              <span>PROCEED TO SECURE CHECKOUT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-zinc-500">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
              <span>DEMO CHECKOUT • NO ACTUAL PAYMENT WILL BE COLLECTED</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
