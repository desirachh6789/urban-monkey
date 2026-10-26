import React from 'react';
import { JOURNAL_ARTICLES } from '../data/journal';
import { JournalArticle } from '../types';
import { ArrowUpRight, Clock, BookOpen } from 'lucide-react';

interface JournalSectionProps {
  onSelectArticle: (article: JournalArticle) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ onSelectArticle }) => {
  return (
    <section id="journal" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-brand-lime tracking-mega uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            <span>EDITORIAL & CRITIQUE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase">
            THE JOURNAL.
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-md">
          Dispatches from our industrial design lab, subcultural essays, and behind-the-scenes engineering of Drop 001.
        </p>
      </div>

      {/* 3 Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
        {JOURNAL_ARTICLES.map((article, idx) => (
          <article
            key={article.id}
            onClick={() => onSelectArticle(article)}
            className="group cursor-pointer rounded-2xl bg-surface-card border border-white/10 hover:border-brand-lime/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lime-sm relative overflow-hidden"
          >
            <div className="space-y-4">
              {/* Category & Read Time */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-brand-lime uppercase tracking-widest">
                  {article.category}
                </span>
                <div className="flex items-center gap-1 text-zinc-500">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-bold text-white group-hover:text-brand-lime transition-colors leading-snug">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
            </div>

            {/* Bottom Meta & Read Action */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-zinc-500">
                {article.date}
              </span>

              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-lime font-bold tracking-wider group-hover:translate-x-1 transition-transform">
                <span>READ DISPATCH</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
