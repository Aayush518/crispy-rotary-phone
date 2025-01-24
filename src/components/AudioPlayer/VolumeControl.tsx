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
      <div 
        className="w-20 md:w-28 h-1.5 bg-white/5 rounded-full overflow-hidden group cursor-pointer relative"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const percent = (e.clientX - rect.left) / rect.width;
          onVolumeChange(percent);
        }}
      >
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 group-hover:from-purple-400 group-hover:to-blue-400 transition-all relative"
          style={{ width: `${volume * 100}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" />
        </div>
      </div>
    </div>
  );
}