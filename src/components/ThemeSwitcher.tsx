import React from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeSwitcherProps {
  variant?: 'compact' | 'pill' | 'expanded';
  className?: string;
  showLabel?: boolean;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  variant = 'compact',
  className = '',
  showLabel = false,
}) => {
  const { theme, isDark, toggleTheme, setTheme } = useTheme();

  if (variant === 'pill') {
    return (
      <div 
        className={`inline-flex items-center p-1 rounded-sm border ${
          isDark 
            ? 'bg-[#112240] border-[#233554]' 
            : 'bg-white border-slate-300 shadow-sm'
        } ${className}`}
        role="group"
        aria-label="Theme mode switcher"
      >
        <button
          type="button"
          onClick={() => setTheme('dark')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-xs font-mono uppercase tracking-wider transition-all ${
            isDark
              ? 'bg-[#0A192F] text-white font-bold shadow-xs border border-[#233554]'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          title="Switch to Dark Aesthetic"
          aria-pressed={isDark}
        >
          <Moon size={13} className={isDark ? 'text-blue-300 fill-blue-300/20' : 'text-slate-500'} />
          <span>Dark</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme('light')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-xs font-mono uppercase tracking-wider transition-all ${
            !isDark
              ? 'bg-[#0A192F] text-white font-bold shadow-xs border border-[#0A192F]'
              : 'text-blue-200 hover:text-white'
          }`}
          title="Switch to High-Contrast Light Mode for Daytime Outdoor Visibility"
          aria-pressed={!isDark}
        >
          <Sun size={13} className={!isDark ? 'text-amber-400 fill-amber-400/30' : 'text-blue-300'} />
          <span>Light (Day)</span>
        </button>
      </div>
    );
  }

  if (variant === 'expanded') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`w-full flex items-center justify-between p-3.5 border transition-all ${
          isDark
            ? 'bg-[#112240] border-[#233554] text-white hover:border-white'
            : 'bg-white border-slate-300 text-[#0A192F] hover:border-[#0A192F] shadow-sm'
        } ${className}`}
        title={isDark ? 'Switch to High-Contrast Light Mode (Daytime Outdoor)' : 'Switch to Dark Aesthetic'}
        aria-label="Toggle display theme"
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-xs flex items-center justify-center ${
            isDark ? 'bg-[#0A192F] text-amber-400' : 'bg-amber-100 text-amber-700'
          }`}>
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </div>
          <div className="text-left">
            <div className="text-xs font-bold uppercase tracking-widest">
              {isDark ? 'Daytime Outdoor Mode' : 'Night / Dark Aesthetic'}
            </div>
            <div className={`text-[10px] font-mono ${isDark ? 'text-blue-200' : 'text-slate-500'}`}>
              {isDark ? 'High-contrast sunlight readability' : 'Deep navy telemetry view'}
            </div>
          </div>
        </div>
        <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-xs border ${
          isDark 
            ? 'bg-[#0A192F] border-[#233554] text-blue-200' 
            : 'bg-slate-100 border-slate-300 text-slate-700 font-bold'
        }`}>
          {isDark ? 'Switch' : 'Active'}
        </span>
      </button>
    );
  }

  // Compact variant (Header and quick toggles)
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative group inline-flex items-center gap-2 px-3 py-2 rounded-xs border text-xs font-mono uppercase tracking-widest transition-all ${
        isDark
          ? 'bg-[#112240] hover:bg-[#1b3262] text-white border-[#233554] hover:border-white/60'
          : 'bg-white hover:bg-slate-50 text-[#0A192F] border-slate-300 hover:border-[#0A192F] shadow-xs'
      } ${className}`}
      title={
        isDark
          ? 'Switch to High-Contrast Light Mode for daytime outdoor readability'
          : 'Switch to Dark Aesthetic'
      }
      aria-label={
        isDark
          ? 'Current: Dark theme. Click for high-contrast light mode.'
          : 'Current: High-contrast light theme. Click for dark aesthetic.'
      }
    >
      <div className="relative flex items-center justify-center">
        {isDark ? (
          <Sun size={14} className="text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
        ) : (
          <Moon size={14} className="text-[#0A192F] fill-[#0A192F]/10 group-hover:-rotate-12 transition-transform duration-300" />
        )}
      </div>

      {showLabel ? (
        <span className="font-bold">
          {isDark ? 'Light' : 'Dark'}
        </span>
      ) : (
        <span className="hidden sm:inline-block text-[11px] font-medium">
          {isDark ? 'Day Mode' : 'Night Mode'}
        </span>
      )}

      {/* Floating indicator tooltip on desktop hover */}
      <span className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:flex flex-col items-center z-50 whitespace-nowrap">
        <span className={`text-[10px] font-sans font-medium px-2.5 py-1 rounded-xs shadow-xl border ${
          isDark 
            ? 'bg-[#0A192F] text-white border-[#233554]' 
            : 'bg-[#0A192F] text-white border-slate-700'
        }`}>
          {isDark ? 'High-Contrast Light (Outdoor)' : 'Dark Aesthetic'}
        </span>
        <span className="w-1.5 h-1.5 bg-[#0A192F] border-r border-b border-[#233554] rotate-45 -mt-1"></span>
      </span>
    </button>
  );
};
