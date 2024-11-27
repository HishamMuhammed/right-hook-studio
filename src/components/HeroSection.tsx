import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const cityScroll = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: -1000px 0;
  }
`;

const punch = keyframes`
  0% {
    transform: translateX(0) rotate(0);
  }
  50% {
    transform: translateX(20px) rotate(5deg);
  }
  100% {
    transform: translateX(0) rotate(0);
  }
`;

const glowText = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px rgba(255, 62, 62, 0.5);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 62, 62, 0.8),
                 0 0 30px rgba(255, 62, 62, 0.6),
                 0 0 40px rgba(255, 62, 62, 0.4);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--background-dark) 100%);
  padding: 2rem 20px;
  margin-top: 60px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYuNTEyIDM1LjQxMmwxLjQxNC0xLjQxNEwzMCAyNS44N2wtNy45MjYgNy45MjYgMS40MTQgMS40MTRMMzAgMjguN2w2LjUxMiA2LjcxMnoiIGZpbGw9InJnYmEoMjU1LCA2MiwgNjIsIDAuMSkiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4=');
    opacity: 0.1;
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(to top, var(--background-dark) 0%, transparent 100%);
    z-index: 2;
  }
`;

const Content = styled.div`
  text-align: center;
  max-width: 800px;
  z-index: 3;
  animation: ${float} 6s ease-in-out infinite;
  background: rgba(43, 0, 0, 0.7);
  padding: 3rem;
  border-radius: var(--border-radius);
  border: 2px solid var(--primary-color);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(255, 62, 62, 0.2);
  max-width: 800px;
  width: 100%;
`;

const Title = styled.h1`
  color: var(--primary-color);
  text-shadow: 0 0 10px rgba(255, 62, 62, 0.5);
  margin-bottom: 2rem;
  animation: ${glowText} 3s ease-in-out infinite;
  letter-spacing: 2px;
  font-family: var(--heading-font);
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: var(--text-color);
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1s ease-out forwards 0.5s;
  font-size: 1.5rem;
  font-family: var(--body-font);

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const BoxerContainer = styled.div`
  width: 150px;
  height: 150px;
  background-image: url('/boxer-sprite.png');
  background-size: contain;
  animation: ${punch} 1s infinite;
  margin: 2rem auto;
  filter: drop-shadow(0 0 10px rgba(255, 62, 62, 0.3));
  transition: filter var(--transition-speed) ease;

  &:hover {
    filter: drop-shadow(0 0 20px rgba(255, 62, 62, 0.6));
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--primary-color);
  font-size: 1rem;
  opacity: 0.8;
  animation: bounce 2s infinite;
  z-index: 3;
  font-family: var(--alt-font);

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeroContainer>
      <Content>
        <BoxerContainer />
        <Title>RIGHT HOOK STUDIOS</Title>
        <Subtitle>Crafting Pixel-Perfect Gaming Experiences</Subtitle>
      </Content>
      {isVisible && <ScrollIndicator>▼ Scroll to explore</ScrollIndicator>}
    </HeroContainer>
  );
};

export default HeroSection;
