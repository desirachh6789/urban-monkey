import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'COLLECTION', href: '#collection' },
    { label: 'SPOTLIGHT', href: '#spotlight' },
    { label: 'MANIFESTO', href: '#manifesto' },
    { label: 'CRAFTSMANSHIP', href: '#craftsmanship' },
    { label: 'JOURNAL', href: '#journal' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-background/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Tagline */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime rounded-lg"
          >
            {/* Geometric architectural logo glyph */}
            <div className="w-8 h-8 rounded-lg bg-surface-card border border-white/20 flex items-center justify-center group-hover:border-brand-lime transition-all duration-300 group-hover:shadow-lime-sm">
              <span className="font-mono text-sm font-bold text-brand-lime group-hover:scale-110 transition-transform">
                UM
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base tracking-widest text-white group-hover:text-brand-lime transition-colors">
                URBAN MONKEY
              </span>
              <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase -mt-0.5">
                WEAR THE UNSEEN
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-xs font-mono font-medium tracking-widest text-zinc-300 hover:text-brand-lime transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime rounded group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-lime transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Action CTAs (Shop Now & Cart Indicator) */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleLinkClick('#collection')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 hover:border-brand-lime/60 text-xs font-mono tracking-wider text-zinc-200 hover:text-white transition-all group"
            >
              <span>SHOP NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Cart Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-lg bg-surface-card border border-white/15 hover:border-brand-lime/70 transition-all text-zinc-200 hover:text-brand-lime group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime"
              aria-label={`Open shopping cart with ${totalItems} items`}
            >
              <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-brand-lime text-black font-mono font-bold text-[10px] flex items-center justify-center animate-in zoom-in duration-200">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg bg-surface-card border border-white/10 text-zinc-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime"
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-background/95 backdrop-blur-2xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10 border-b border-white/10 animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-mono tracking-mega text-zinc-500 uppercase">
              // INDEX NAVIGATION
            </span>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left text-xl font-display font-bold tracking-wider text-zinc-200 hover:text-brand-lime transition-colors py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-zinc-500">→</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="w-full py-3.5 rounded-xl bg-brand-lime text-black font-mono font-bold text-xs tracking-widest flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>VIEW CART ({totalItems})</span>
            </button>
            <p className="text-[11px] font-mono text-center text-zinc-500 uppercase">
              DROP 001 • WORLDWIDE DISPATCH
            </p>
          </div>
        </div>
      )}
    </>
  );
};
