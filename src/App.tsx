import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './sections/AboutSection';
import GamesSection from './sections/GamesSection';
import TeamSection from './sections/TeamSection';
import ContactSection from './sections/ContactSection';
import RetroArcadeEffect from './components/RetroArcadeEffect';
import { useKonamiCode } from './hooks/useKonamiCode';
import { KonamiEffect } from './components/KonamiEffect';

const hueRotate = keyframes`
  0% { filter: hue-rotate(0deg) brightness(1.2); }
  100% { filter: hue-rotate(360deg) brightness(1.2); }
`;

const MainContainer = styled.div<{ $powerMode: boolean }>`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background: var(--secondary-color);
  animation: ${props => props.$powerMode ? css`${hueRotate} 5s linear infinite` : 'none'};
  transition: all var(--transition-speed) ease;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--secondary-color);
    z-index: -1;
  }
`;

const App = () => {
  const [powerMode, setPowerMode] = useState(false);
  const [showEffect, setShowEffect] = useState(false);
  const konamiActivated = useKonamiCode();

  useEffect(() => {
    if (konamiActivated) {
      setShowEffect(true);
    }
  }, [konamiActivated]);

  const handleEffectComplete = () => {
    setShowEffect(false);
    setPowerMode(true);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section-animate');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <MainContainer $powerMode={powerMode}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GamesSection />
      <TeamSection />
      <ContactSection />
      {showEffect && <RetroArcadeEffect onComplete={handleEffectComplete} />}
      <KonamiEffect />
    </MainContainer>
  );
};

export default App;
