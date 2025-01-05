import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/cant-help-falling-in-love.mp3'); // Asegúrate de que el path sea correcto, se debe usar "/public" para archivos dentro de la carpeta public.
    audioRef.current.volume = 0.3;
    audioRef.current.loop = true;

    // Intentamos reproducir la canción al cargar la página
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Reproducción automática bloqueada:", error);
            setIsPlaying(false);
          });
      }
    };

    playMusic(); // Llamamos a la función para reproducir la canción

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-4 right-4 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors z-50 group"
      aria-label={isPlaying ? 'Silenciar música' : 'Reproducir música'}
    >
      {isPlaying ? (
        <Volume2 size={24} className="group-hover:scale-110 transition-transform" />
      ) : (
        <VolumeX size={24} className="group-hover:scale-110 transition-transform" />
      )}
    </button>
  );
};

export default MusicPlayer;
