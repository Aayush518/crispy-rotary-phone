import { Heart } from 'lucide-react';
import { AudioPlayerProps } from '../../types';
import { CurrentSong } from './CurrentSong';
import { ProgressBar } from './ProgressBar';
import { Controls } from './Controls';
import { VolumeControl } from './VolumeControl';

export function AudioPlayer({
  isPlaying,
  isMuted,
  currentTime,
  duration,
  volume,
  onPlayPause,
  onMuteToggle,
  onVolumeChange,
  onSeek,
  onSkipNext,
  onSkipPrevious,
  onShuffleToggle,
  onRepeatToggle,
  isShuffleOn,
  isRepeatOn,
  currentSong,
}: AudioPlayerProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-black/90 backdrop-blur-2xl border-t border-white/[0.02] shadow-2xl shadow-black/50 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <CurrentSong song={currentSong} />
        
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1 order-2 md:order-1">
            <ProgressBar
              currentTime={currentTime}
              duration={duration}
              onSeek={onSeek}
            />
          </div>

          <div className="flex items-center justify-between md:justify-center gap-4 order-1 md:order-2">
            <Controls
              isPlaying={isPlaying}
              onPlayPause={onPlayPause}
              onSkipNext={onSkipNext}
              onSkipPrevious={onSkipPrevious}
              isShuffleOn={isShuffleOn}
              isRepeatOn={isRepeatOn}
              onShuffleToggle={onShuffleToggle}
              onRepeatToggle={onRepeatToggle}
            />
          </div>

          <div className="flex items-center justify-end gap-4 order-3">
            <VolumeControl
              isMuted={isMuted}
              volume={volume}
              onMuteToggle={onMuteToggle}
              onVolumeChange={onVolumeChange}
            />

            <button 
              className="hidden md:block p-1.5 md:p-2 rounded-full hover:bg-white/5 transition-all duration-300 text-white/60 hover:text-purple-400 hover:scale-110"
              aria-label="Add to favorites"
            >
              <Heart className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}