import { Music } from 'lucide-react';
import { SongCardProps } from '../types';

export function SongCard({ song, isPlaying, isActive, onClick }: SongCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group flex items-center gap-4 md:gap-6 p-3 md:p-4 cursor-pointer transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl'
          : 'hover:bg-white/[0.03]'
      }`}
    >
      <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden shadow-lg shadow-black/20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:opacity-100 transition-opacity duration-300" />
        <img
          src={song.img}
          alt={song.name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        {isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="flex gap-1">
              <div className="w-1 h-8 bg-gradient-to-t from-purple-500 to-blue-500 rounded-full animate-music-bar-1" />
              <div className="w-1 h-8 bg-gradient-to-t from-purple-500 to-blue-500 rounded-full animate-music-bar-2" />
              <div className="w-1 h-8 bg-gradient-to-t from-purple-500 to-blue-500 rounded-full animate-music-bar-3" />
            </div>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 truncate">
          {song.name}
        </h3>
        <p className="text-sm text-white/60 truncate group-hover:text-white/80 transition-colors duration-300">
          {song.creator}
        </p>
      </div>
      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-xl opacity-0 transition-opacity duration-300 ${isActive ? 'opacity-20' : 'group-hover:opacity-10'}`} />
        <Music className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${isActive ? 'text-purple-400' : 'text-white/40 group-hover:text-white/60'}`} />
      </div>
    </div>
  );
}