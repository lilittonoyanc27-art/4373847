import React, { useState } from 'react';
import { Volume2, ChevronDown, ChevronUp, Languages } from 'lucide-react';
import { TranslationMode } from './types.ts';

interface InteractiveTextProps {
  es: string;
  hy: string;
  mode?: TranslationMode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'title';
  showAudio?: boolean;
  highlightEs?: boolean;
}

export const InteractiveText: React.FC<InteractiveTextProps> = ({
  es,
  hy,
  mode = 'click',
  className = '',
  size = 'md',
  showAudio = false,
  highlightEs = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Determine if translation should be visible
  const isVisible = mode === 'always' ? true : mode === 'never' ? false : isOpen;

  const toggleOpen = () => {
    if (mode === 'click') {
      setIsOpen(!isOpen);
    }
  };

  const playAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(es);
      utterance.lang = 'es-ES';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const sizeClasses = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
    title: 'text-2xl sm:text-3xl font-extrabold',
  }[size];

  return (
    <div
      onClick={toggleOpen}
      className={`group relative rounded-xl border transition-all duration-200 cursor-pointer select-text ${
        highlightEs
          ? 'bg-amber-50/70 dark:bg-amber-950/20 border-amber-200/80 dark:border-amber-900/50 hover:border-amber-400'
          : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm'
      } p-3.5 ${className}`}
      title="Haga clic para ver la traducción al armenio / Սեղմեք հայերեն թարգմանությունը տեսնելու համար"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold tracking-wider bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60">
              ESPAÑOL
            </span>
            {showAudio && (
              <button
                type="button"
                onClick={playAudio}
                className="p-1 rounded-full text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors"
                title="Escuchar pronunciación en español"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          <p className={`${sizeClasses} text-slate-800 dark:text-slate-100 font-medium leading-relaxed`}>
            {es}
          </p>
        </div>

        <div className="shrink-0 pt-1 flex items-center gap-1.5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
          <span className="text-[11px] font-medium hidden sm:inline-flex items-center gap-1 text-slate-400 group-hover:text-indigo-600">
            <Languages className="w-3 h-3" />
            {isVisible ? 'Հայերեն' : 'Թարգմանել'}
          </span>
          {isVisible ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </div>

      {isVisible && (
        <div className="mt-3 pt-3 border-t border-dashed border-slate-200 dark:border-slate-800 animate-fadeIn">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/60">
              ՀԱՅԵՐԵՆ ԹԱՐԳՄԱՆՈՒԹՅՈՒՆ
            </span>
          </div>
          <p className={`${sizeClasses} text-emerald-950 dark:text-emerald-100 font-normal leading-relaxed`}>
            {hy}
          </p>
        </div>
      )}
    </div>
  );
};

export const InlineInteractive: React.FC<{
  es: string;
  hy: string;
  mode?: TranslationMode;
}> = ({ es, hy, mode = 'click' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isVisible = mode === 'always' ? true : mode === 'never' ? false : isOpen;

  return (
    <span
      onClick={(e) => {
        e.stopPropagation();
        if (mode === 'click') setIsOpen(!isOpen);
      }}
      className="inline-block relative cursor-pointer px-1.5 py-0.5 rounded bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/50 dark:hover:bg-indigo-900/60 text-indigo-900 dark:text-indigo-200 font-medium border border-indigo-200 dark:border-indigo-800 transition-colors mx-0.5"
      title="Haga clic para ver traducción / Սեղմեք թարգմանության համար"
    >
      <span>{es}</span>
      {isVisible && (
        <span className="ml-1.5 px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-900/70 text-emerald-800 dark:text-emerald-200 text-xs font-normal border border-emerald-300 dark:border-emerald-700">
          ({hy})
        </span>
      )}
    </span>
  );
};
