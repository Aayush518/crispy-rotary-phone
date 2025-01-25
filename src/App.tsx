import { useState, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { AudioPlayer } from './components/AudioPlayer/index';
import { PlaylistCard } from './components/PlaylistCard';
import { SongCard } from './components/SongCard';
import { playlists, songs } from './data/music';

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isShuffleOn, setIsShuffleOn] = useState(false);
  const [isRepeatOn, setIsRepeatOn] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(1);

  const audioRef = useRef<HTMLAudioElement>(null);

  // Initialize audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, []);

  // Handle volume changes and mute state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Handle song changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = songs[currentSongIndex].url;
      audioRef.current.load();
      
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error('Failed to play:', error);
          setIsPlaying(false);
        });
      }
    }
  }, [currentSongIndex, songs]);

  const handlePlayPause = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        await audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Playback error:', error);
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (isMuted && newVolume > 0) {
      setIsMuted(false);
    }
    if (newVolume === 0 && !isMuted) {
      setIsMuted(true);
    }
  };

  const handleMuteToggle = () => {
    if (isMuted) {
      setIsMuted(false);
      if (volume === 0) {
        setVolume(previousVolume);
      }
    } else {
      setPreviousVolume(volume);
      setIsMuted(true);
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration || 0);
  };

  const handleSeek = (time: number) => {
    if (!audioRef.current) return;
    
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleSongChange = (index: number) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const handleSkipNext = () => {
    const nextIndex = isShuffleOn
      ? Math.floor(Math.random() * songs.length)
      : (currentSongIndex + 1) % songs.length;
    handleSongChange(nextIndex);
  };

  const handleSkipPrevious = () => {
    if (audioRef.current && audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      return;
    }

    const prevIndex = isShuffleOn
      ? Math.floor(Math.random() * songs.length)
      : currentSongIndex === 0 
        ? songs.length - 1 
        : currentSongIndex - 1;
    handleSongChange(prevIndex);
  };

  const handleSongEnd = () => {
    if (isRepeatOn && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      handleSkipNext();
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] overflow-hidden">
      {/* Animated background gradients */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-indigo-900/30 animate-gradient" />
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-purple-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-blue-500/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8 pb-32">
          <Header />

          {/* Featured Playlists */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
                Featured Playlists
              </h2>
              <div className="h-[1px] flex-1 mx-8 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
              {playlists.map((playlist, index) => (
                <PlaylistCard
                  key={index}
                  playlist={playlist}
                  isActive={false}
                  onClick={() => {}}
                />
              ))}
            </div>
          </section>

          {/* Songs */}
          <section className="mb-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 text-transparent bg-clip-text">
                Popular Songs
              </h2>
              <div className="h-[1px] flex-1 mx-8 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
            </div>
            <div className="bg-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/[0.05] shadow-2xl shadow-black/50">
              <div className="divide-y divide-white/[0.04]">
                {songs.map((song, index) => (
                  <SongCard
                    key={index}
                    song={song}
                    isPlaying={isPlaying && currentSongIndex === index}
                    isActive={currentSongIndex === index}
                    onClick={() => handleSongChange(index)}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleSongEnd}
        onLoadedMetadata={handleTimeUpdate}
        onError={(e) => {
          console.error('Audio error:', e);
          setIsPlaying(false);
        }}
      />

        {/* Audio Player */}
        <AudioPlayer
        isPlaying={isPlaying}
        isMuted={isMuted}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        onPlayPause={handlePlayPause}
        onMuteToggle={handleMuteToggle}
        onVolumeChange={handleVolumeChange}
        onSeek={handleSeek}
        onSkipNext={handleSkipNext}
        onSkipPrevious={handleSkipPrevious}
        isShuffleOn={isShuffleOn}
        isRepeatOn={isRepeatOn}
        onShuffleToggle={() => setIsShuffleOn(!isShuffleOn)}
        onRepeatToggle={() => setIsRepeatOn(!isRepeatOn)}
        currentSong={songs[currentSongIndex]}
      />
    </div>
  );
}

export default App;