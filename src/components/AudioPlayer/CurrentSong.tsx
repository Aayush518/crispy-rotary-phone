import { Song } from '../../types';

interface CurrentSongProps {
  song: Song;
}

export function CurrentSong({ song }: CurrentSongProps) {
  return (
    <div className="flex items-center gap-4 mb-3 md:mb-4">
      <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden">
        <img 
          src={song.img} 
          alt={song.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm md:text-base font-semibold text-white truncate">
          {song.name}
        </h3>
        <p className="text-xs md:text-sm text-white/60 truncate">
          {song.creator}
        </p>
      </div>
    </div>
  );
}