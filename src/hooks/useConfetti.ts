import { useState, useCallback } from 'react';
import confetti from 'canvas-confetti';

export const useConfetti = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const startConfetti = useCallback(() => {
    setIsPlaying(true);
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#4bfa95', '#ffffff', '#gold'],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#4bfa95', '#ffffff', '#gold'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      } else {
        setIsPlaying(false);
      }
    };

    frame();
  }, []);

  return { startConfetti, isPlaying };
};