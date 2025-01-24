interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onSeek: (value: number) => void;
}

export function ProgressBar({ currentTime, duration, onSeek }: ProgressBarProps) {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex-1 order-2 md:order-1">
      <div className="flex items-center gap-3">
        <span className="text-xs md:text-sm font-medium text-white/40 min-w-[45px]">
          {formatTime(currentTime)}
        </span>
        <div 
          className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden group cursor-pointer"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            onSeek(percent * duration);
          }}
        >
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 group-hover:from-purple-400 group-hover:to-blue-400 transition-all relative"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" />
          </div>
        </div>
        <span className="text-xs md:text-sm font-medium text-white/40 min-w-[45px]">
          {formatTime(duration)}
        </span>
      </div>
    </div>
  );
}