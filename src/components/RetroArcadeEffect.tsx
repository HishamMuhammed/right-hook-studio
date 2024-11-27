import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const scanline = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100vh);
  }
`;

const glitch = keyframes`
  0% {
    clip-path: inset(40% 0 61% 0);
    transform: translate(-20px, -10px);
  }
  20% {
    clip-path: inset(92% 0 1% 0);
    transform: translate(20px, 10px);
  }
  40% {
    clip-path: inset(43% 0 1% 0);
    transform: translate(-20px, 10px);
  }
  60% {
    clip-path: inset(25% 0 58% 0);
    transform: translate(20px, -10px);
  }
  80% {
    clip-path: inset(54% 0 7% 0);
    transform: translate(-20px, 10px);
  }
  100% {
    clip-path: inset(58% 0 43% 0);
    transform: translate(20px, -10px);
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(43, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Scanline = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  animation: ${scanline} 6s linear infinite;
`;

const Message = styled.div`
  font-family: var(--heading-font);
  font-size: 2rem;
  color: var(--primary-color);
  text-align: center;
  text-shadow: 2px 2px 0px var(--secondary-color);
  animation: ${glitch} 1s infinite;
  position: relative;

  &:before,
  &:after {
    content: attr(data-text);
    position: absolute;
    left: 0;
  }

  &:before {
    animation: ${glitch} 500ms infinite;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(-0.025em, -0.0125em);
    opacity: 0.75;
  }

  &:after {
    animation: ${glitch} 375ms infinite;
    clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
    transform: translate(0.025em, 0.025em);
    opacity: 0.75;
  }
`;

interface RetroArcadeEffectProps {
  onComplete: () => void;
}

const RetroArcadeEffect: React.FC<RetroArcadeEffectProps> = ({ onComplete }) => {
  const [text, setText] = useState('CHEAT CODE ACTIVATED');

  useEffect(() => {
    const messages = [
      'CHEAT CODE ACTIVATED',
      'POWER LEVEL INCREASING',
      'MAXIMUM POWER ACHIEVED'
    ];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % messages.length;
      setText(messages[currentIndex]);
    }, 2000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, 6000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <Container>
      <Scanline />
      <Message data-text={text}>{text}</Message>
    </Container>
  );
};

export default RetroArcadeEffect;
