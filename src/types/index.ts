export interface Song {
  name: string;
  img: string;
  creator: string;
  url: string;
}

export interface Playlist {
  name: string;
  img: string;
  creator: string;
}

export interface AudioPlayerProps {
  isPlaying: boolean;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  currentSong: Song;
  onPlayPause: () => void;
  onMuteToggle: () => void;
  onVolumeChange: (value: number) => void;
  onSeek: (value: number) => void;
}

export interface PlaylistCardProps {
  playlist: Playlist;
  isActive: boolean;
  onClick: () => void;
}

export interface SongCardProps {
  song: Song;
  isPlaying: boolean;
  isActive: boolean;
  onClick: () => void;
}
export interface AudioPlayerProps {
  isPlaying: boolean;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  onPlayPause: () => void;
  onMuteToggle: () => void;
  onVolumeChange: (value: number) => void;
  onSeek: (time: number) => void;
  onSkipNext: () => void;
  onSkipPrevious: () => void;
  isShuffleOn: boolean;
  isRepeatOn: boolean;
  onShuffleToggle: () => void;
  onRepeatToggle: () => void;
  currentSong: Song;
}