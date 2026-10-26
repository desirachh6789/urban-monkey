import React from 'react';
import { ArrowUp, Instagram, Twitter, Youtube, Disc as Discord, ShieldCheck } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'COLLECTION', href: '#collection' },
    { label: '3D SPOTLIGHT', href: '#spotlight' },
    { label: 'MANIFESTO', href: '#manifesto' },
    { label: 'CRAFTSMANSHIP', href: '#craftsmanship' },
    { label: 'JOURNAL', href: '#journal' },
  ];

  return (
    <footer className="border-t border-white/10 bg-surface-dark pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-zinc-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-surface-card border border-white/20 flex items-center justify-center">
                <span className="font-mono text-sm font-bold text-brand-lime">UM</span>
              </div>
              <span className="font-display font-extrabold text-lg tracking-widest text-white">
                URBAN MONKEY
              </span>
            </div>

            <p className="text-xs font-mono text-zinc-400 max-w-sm leading-relaxed">
              Wear the Unseen. High-concept architectural streetwear engineered for the contemporary metropolis.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase">
                SOCIAL PROTOCOLS (DEMO):
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="#footer"
                  title="Demo Link: Instagram Placeholder"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-brand-lime transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#footer"
                  title="Demo Link: Twitter/X Placeholder"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-brand-lime transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#footer"
                  title="Demo Link: Discord Community Placeholder"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-brand-lime transition-colors"
                >
                  <Discord className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider text-white uppercase block">
              // NAVIGATION
            </span>
            <ul className="space-y-2 text-xs font-mono">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-brand-lime transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fictional Studio Coordinates */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider text-white uppercase block">
              // STUDIO LOCATIONS
            </span>
            <div className="space-y-2 text-xs font-mono text-zinc-400">
              <div>
                <span className="text-white block font-bold">NEW DELHI LAB</span>
                <span className="text-zinc-500 text-[11px]">Connaught Architectural Zone, ND</span>
              </div>
              <div className="pt-1">
                <span className="text-white block font-bold">TOKYO DESIGN ATELIER</span>
                <span className="text-zinc-500 text-[11px]">Shibuya Ward, Sub-Level 3</span>
              </div>
            </div>
          </div>

          {/* Demo Notice */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider text-white uppercase block">
              // PRODUCTION NOTICE
            </span>
            <p className="text-xs font-mono text-zinc-400 leading-relaxed">
              This digital fashion showroom is a concept demonstration built with React, Three.js, and Tailwind CSS.
            </p>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-brand-lime">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>PRODUCTION-READY ASSETS</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} URBAN MONKEY. ALL RIGHTS RESERVED. “WEAR THE UNSEEN.”
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-brand-lime transition-colors group cursor-pointer"
            aria-label="Back to top of the page"
          >
            <span>BACK TO TOP</span>
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-brand-lime transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-brand-lime" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
