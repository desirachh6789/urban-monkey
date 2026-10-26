import React from 'react';
import { JournalArticle } from '../../types';
import { X, Clock, User, Calendar, BookOpen } from 'lucide-react';

interface ArticleModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-surface-dark border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl z-10 max-h-[85vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
          aria-label="Close article modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Category & Read Time */}
        <div className="flex items-center gap-3 text-xs font-mono text-brand-lime">
          <span className="uppercase tracking-widest">{article.category}</span>
          <span className="text-zinc-600">•</span>
          <div className="flex items-center gap-1 text-zinc-400">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white mt-3 leading-snug">
          {article.title}
        </h2>

        {/* Byline & Date */}
        <div className="flex flex-wrap items-center gap-4 py-4 my-4 border-y border-white/10 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-brand-lime" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.date}</span>
          </div>
        </div>

        {/* Article Excerpt */}
        <p className="text-sm sm:text-base font-serif italic text-zinc-300 leading-relaxed border-l-2 border-brand-lime pl-4 py-1 my-6 bg-white/[0.02]">
          “{article.excerpt}”
        </p>

        {/* Body Paragraphs */}
        <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>URBAN MONKEY JOURNAL // ARCHIVE</span>
          <button
            onClick={onClose}
            className="text-brand-lime hover:underline cursor-pointer"
          >
            CLOSE DISPATCH
          </button>
        </div>
      </div>
    </div>
  );
};
