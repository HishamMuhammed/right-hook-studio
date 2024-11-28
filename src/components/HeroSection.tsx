import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  background: var(--background-dark);
  overflow: hidden;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 10vw, 8rem);
  line-height: 1;
  text-align: center;
  margin-bottom: 2rem;
  font-family: var(--heading-font);
  font-weight: 700;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: clamp(2rem, 8vw, 4rem);
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 2rem);
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  font-family: var(--body-font);
  opacity: 0.8;
`;

const ScrollIndicator = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1rem;
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 100;
`;

const Line = styled(motion.div)`
  width: 1px;
  height: 60px;
  background: var(--text-color);
  margin-top: 0.5rem;
`;

const titleAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const subtitleAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const scrollAnimation = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const HeroSection = () => {
  return (
    <HeroContainer id="hero">
      <ScrollAnimation direction="up" delay={0.2}>
        <HeroTitle
          variants={titleAnimation}
          initial="initial"
          animate="animate"
        >
          LEVELS OF
          <br />
          FEELING
          <br />
          ARE ALL
        </HeroTitle>
      </ScrollAnimation>

      <ScrollAnimation direction="up" delay={0.4}>
        <HeroSubtitle
          variants={subtitleAnimation}
          initial="initial"
          animate="animate"
        >
          Creating Immersive Digital Experiences
        </HeroSubtitle>
      </ScrollAnimation>

      <ScrollIndicator
        variants={scrollAnimation}
        initial="initial"
        animate="animate"
      >
        <span>Scroll</span>
        <Line
          animate={{
            height: [60, 40, 60],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;
