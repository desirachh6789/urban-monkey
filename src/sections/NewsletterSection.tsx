import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter an email address.');
      return;
    }

    if (!validateEmail(email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address (e.g. name@domain.com).');
      return;
    }

    // Demo signup state (Honest messaging, no backend)
    setStatus('success');
    setErrorMessage('');
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      <div className="p-8 sm:p-12 rounded-3xl bg-surface-card border border-white/10 text-center space-y-6 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-lime">
          <Mail className="w-3.5 h-3.5" />
          <span>SUBSCRIBER INTELLIGENCE</span>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-4xl font-display font-black tracking-tight text-white uppercase">
            NEVER MISS A DROP.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans max-w-md mx-auto leading-relaxed">
            Gain priority access to limited release countdowns, secret showroom coordinates, and design blueprints.
          </p>
        </div>

        {status === 'success' ? (
          <div className="p-6 rounded-2xl bg-brand-lime/10 border border-brand-lime/40 max-w-md mx-auto space-y-2 animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-center gap-2 text-brand-lime font-mono font-bold text-sm">
              <CheckCircle2 className="w-5 h-5" />
              <span>TEST SIGNUP CONFIRMED</span>
            </div>
            <p className="text-xs text-zinc-300 font-mono leading-relaxed">
              Demonstration registration acknowledged for <span className="text-white font-bold">{email}</span>.
            </p>
            <div className="pt-2 text-[11px] font-mono text-zinc-400">
              Note: This is a front-end demo application; emails are not transmitted or stored on any remote server.
            </div>
            <button
              onClick={() => {
                setStatus('idle');
                setEmail('');
              }}
              className="mt-3 text-xs font-mono text-brand-lime underline hover:text-white"
            >
              Sign up another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 focus:border-brand-lime focus:outline-none focus:ring-1 focus:ring-brand-lime text-xs font-mono text-white placeholder:text-zinc-500 transition-all"
                  aria-label="Email address for drop updates"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-brand-lime hover:bg-[#bcf000] text-black font-mono font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-lime-sm flex items-center justify-center gap-2 active:scale-95"
              >
                <span>JOIN LIST</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-xs font-mono text-red-400 text-left pt-1">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-zinc-500 pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
              <span>DEMO MODE • ZERO SPAM • NO DATA STORED REMOTELY</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
