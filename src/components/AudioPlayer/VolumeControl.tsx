import { Volume2, VolumeX } from 'lucide-react';

interface VolumeControlProps {
  isMuted: boolean;
  volume: number;
  onMuteToggle: () => void;
  onVolumeChange: (value: number) => void;
}

export function VolumeControl({
  isMuted,
  volume,
  onMuteToggle,
  onVolumeChange,
}: VolumeControlProps) {
  return (
    <div className="flex items-center gap-3 order-3">
      <button
        onClick={onMuteToggle}
        className="p-1.5 md:p-2 rounded-full hover:bg-white/5 transition-all duration-300 text-white/60 hover:text-purple-400 hover:scale-110"
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 md:w-5 md:h-5" />
        ) : (
          <Volume2 className="w-4 h-4 md:w-5 md:h-5" />
        )}
      </button>
      <div className="relative group">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
          className="w-20 md:w-28 h-1.5 bg-white/5 rounded-full cursor-pointer appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:opacity-0 [&::-webkit-slider-thumb]:group-hover:opacity-100 [&::-webkit-slider-thumb]:transition-opacity"
        />
        <div 
          className="absolute top-0 left-0 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full pointer-events-none"
          style={{ width: `${volume * 100}%` }}
        />
      </div>
    </div>
  );
}