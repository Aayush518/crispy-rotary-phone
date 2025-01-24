import { Play, Pause, Shuffle, SkipBack, SkipForward, Repeat } from 'lucide-react';

interface ControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
}

export function Controls({ isPlaying, onPlayPause }: ControlsProps) {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-6 order-1 md:order-2">
      <button className="p-1.5 md:p-2 rounded-full hover:bg-white/5 transition-all duration-300 text-white/60 hover:text-purple-400 hover:scale-110">
        <Shuffle className="w-4 h-4 md:w-5 md:h-5" />
      </button>
      <button className="p-1.5 md:p-2 rounded-full hover:bg-white/5 transition-all duration-300 text-white/60 hover:text-purple-400 hover:scale-110">
        <SkipBack className="w-4 h-4 md:w-5 md:h-5" />
      </button>
      <button
        onClick={onPlayPause}
        className="p-3 md:p-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-110 text-white shadow-lg shadow-purple-500/20"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <Play className="w-5 h-5 md:w-6 md:h-6" />
        )}
      </button>
      <button className="p-1.5 md:p-2 rounded-full hover:bg-white/5 transition-all duration-300 text-white/60 hover:text-purple-400 hover:scale-110">
        <SkipForward className="w-4 h-4 md:w-5 md:h-5" />
      </button>
      <button className="p-1.5 md:p-2 rounded-full hover:bg-white/5 transition-all duration-300 text-white/60 hover:text-purple-400 hover:scale-110">
        <Repeat className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </div>
  );
}