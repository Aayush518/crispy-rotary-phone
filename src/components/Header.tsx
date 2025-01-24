import { Music2, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="text-center mb-12 md:mb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-50 animate-pulse" />
            <Music2 className="relative w-8 h-8 md:w-12 md:h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text tracking-tight">
            Harmony Hub
          </h1>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 blur-xl opacity-50 animate-pulse" />
            <Sparkles className="relative w-7 h-7 md:w-10 md:h-10 text-white" />
          </div>
        </div>
        <p className="text-lg md:text-xl font-light text-white/60 tracking-wide">
          Your personal sanctuary of sound
        </p>
      </div>
    </header>
  );
}