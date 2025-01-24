import { Play, Pause, Volume2, VolumeX, Maximize, Heart } from 'lucide-react';
import { PlayerControlsProps } from '../types';

export function PlayerControls({
  isPlaying,
  isMuted,
  onPlayPause,
  onMuteToggle
}: PlayerControlsProps) {
  return (
    <div className="mt-6 bg-[#1A1F2C]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onPlayPause}
            className="p-4 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-all transform hover:scale-105 text-white shadow-lg shadow-indigo-500/20"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
          <button
            onClick={onMuteToggle}
            className="p-3 rounded-full hover:bg-white/5 transition-colors text-indigo-200"
          >
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-gradient-to-r from-indigo-500 to-blue-500" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-3 rounded-full hover:bg-white/5 transition-colors text-indigo-200">
            <Heart className="w-6 h-6" />
          </button>
          <button className="p-3 rounded-full hover:bg-white/5 transition-colors text-indigo-200">
            <Maximize className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}