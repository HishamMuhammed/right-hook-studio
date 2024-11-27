import { useEffect } from 'react';
import { useKonamiCode } from '../hooks/useKonamiCode';
import styled, { keyframes } from 'styled-components';

const rainbowText = keyframes`
  0% { color: #ff0000; }
  16.666% { color: #ff9900; }
  33.333% { color: #ffff00; }
  50% { color: #33ff00; }
  66.666% { color: #0099ff; }
  83.333% { color: #6633ff; }
  100% { color: #ff0000; }
`;

const KonamiStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;

  h1, h2, h3, h4, h5, h6 {
    animation: ${rainbowText} 2s linear infinite;
  }

  a {
    animation: ${rainbowText} 2s linear infinite;
  }
`;

// Create a simple beep sound using Web Audio API
const playRetroSound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.type = 'square';
  oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // A4 note
  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);

  oscillator.start();
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
  oscillator.stop(audioContext.currentTime + 0.3);
};

export const KonamiEffect = () => {
  const konamiActivated = useKonamiCode();

  useEffect(() => {
    if (konamiActivated) {
      playRetroSound();
    }
  }, [konamiActivated]);

  if (!konamiActivated) return null;

  return <KonamiStyles />;
};
