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
import { GlobalStyles } from './styles/GlobalStyles';
import ScrollAnimation from './components/ScrollAnimation';

const hueRotate = keyframes`
  0% { filter: hue-rotate(0deg) brightness(1.2); }
  100% { filter: hue-rotate(360deg) brightness(1.2); }
`;

const MainContainer = styled.div<{ $powerMode: boolean }>`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
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

const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const ContentSection = styled(Section)`
  background: var(--background-dark);
  color: var(--text-color);
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
      <GlobalStyles />
      <Navigation />
      <HeroSection />
      
      <ContentSection id="about">
        <ScrollAnimation direction="up">
          <h2>About Us</h2>
          <p>We craft immersive gaming experiences that push boundaries.</p>
        </ScrollAnimation>
      </ContentSection>

      <ContentSection id="games">
        <ScrollAnimation direction="up">
          <h2>Our Games</h2>
          <p>Explore our collection of innovative titles.</p>
        </ScrollAnimation>
      </ContentSection>

      <ContentSection id="team">
        <ScrollAnimation direction="up">
          <h2>Our Team</h2>
          <p>Meet the creative minds behind our games.</p>
        </ScrollAnimation>
      </ContentSection>

      <ContentSection id="contact">
        <ScrollAnimation direction="up">
          <h2>Contact Us</h2>
          <p>Get in touch with our team.</p>
        </ScrollAnimation>
      </ContentSection>
      {showEffect && <RetroArcadeEffect onComplete={handleEffectComplete} />}
      <KonamiEffect />
    </MainContainer>
  );
};

export default App;
