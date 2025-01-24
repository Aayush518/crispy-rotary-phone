import { PlaylistCardProps } from '../types';

export function PlaylistCard({ playlist, isActive, onClick }: PlaylistCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group relative cursor-pointer rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 ${
        isActive ? 'ring-2 ring-purple-500 scale-[1.02] shadow-xl shadow-purple-500/20' : ''
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative aspect-square">
        <img
          src={playlist.img}
          alt={playlist.name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 drop-shadow-lg line-clamp-2">{playlist.name}</h3>
          <p className="text-white/80 text-sm font-medium line-clamp-1">{playlist.creator}</p>
          <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-3 md:mt-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>
      </div>
    </div>
  );
}