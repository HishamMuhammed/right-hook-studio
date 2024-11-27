import React from 'react';
import styled, { keyframes } from 'styled-components';

const flicker = keyframes`
  0% {
    opacity: 0.97;
  }
  5% {
    opacity: 0.95;
  }
  10% {
    opacity: 0.9;
  }
  15% {
    opacity: 0.85;
  }
  20% {
    opacity: 0.95;
  }
  25% {
    opacity: 0.85;
  }
  30% {
    opacity: 0.9;
  }
  35% {
    opacity: 0.95;
  }
  40% {
    opacity: 1;
  }
  45% {
    opacity: 0.95;
  }
  50% {
    opacity: 0.9;
  }
  55% {
    opacity: 0.95;
  }
  60% {
    opacity: 1;
  }
`;

const tvNoise = keyframes`
  0% { transform: translate(0, 0); }
  10% { transform: translate(-1%, -1%); }
  20% { transform: translate(1%, 1%); }
  30% { transform: translate(-2%, -2%); }
  40% { transform: translate(2%, 2%); }
  50% { transform: translate(-1%, -1%); }
  60% { transform: translate(1%, 1%); }
  70% { transform: translate(-2%, -2%); }
  80% { transform: translate(2%, 2%); }
  90% { transform: translate(-1%, -1%); }
  100% { transform: translate(0, 0); }
`;

const TVContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--secondary-color);
  border-radius: 20px;
  border: 4px solid #444;
  box-shadow: 
    0 0 0 4px #222,
    0 0 0 8px #000,
    0 0 20px rgba(0, 0, 0, 0.5),
    inset 0 0 40px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(
        to bottom,
        transparent 50%,
        rgba(0, 0, 0, 0.1) 51%
      );
    background-size: 100% 4px;
    animation: ${flicker} 0.15s infinite;
    pointer-events: none;
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at center,
      transparent 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
    pointer-events: none;
    z-index: 2;
  }
`;

const Screen = styled.div`
  position: relative;
  background: var(--secondary-color);
  padding: 2rem;
  border-radius: 10px;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: 
      repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.1) 1px,
        transparent 1px,
        transparent 2px
      );
    animation: ${tvNoise} 0.5s infinite;
    pointer-events: none;
    opacity: 0.3;
  }
`;

const GlitchText = styled.h1`
  font-family: var(--glitch-font);
  font-size: 3.5rem;
  text-align: center;
  color: var(--primary-color);
  text-shadow: 
    2px 2px 0 var(--accent-color),
    -2px -2px 0 #00ff00;
  position: relative;
  z-index: 3;
  margin: 0;
  padding: 1rem;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PowerButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 20px;
  height: 20px;
  background: var(--accent-color);
  border-radius: 50%;
  border: 2px solid #444;
  box-shadow: 0 0 10px rgba(255, 157, 0, 0.5);
  z-index: 4;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: #ff0000;
    border-radius: 50%;
    box-shadow: 0 0 5px #ff0000;
  }
`;

const RetroTVHeading: React.FC = () => {
  return (
    <TVContainer>
      <PowerButton />
      <Screen>
        <GlitchText>RIGHT HOOK STUDIOS</GlitchText>
      </Screen>
    </TVContainer>
  );
};

export default RetroTVHeading;
