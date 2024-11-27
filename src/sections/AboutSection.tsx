import React from 'react';
import styled, { keyframes } from 'styled-components';
import Section from '../components/Section';

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

interface CardProps {
  $delay?: string;
}

const Card = styled.div<CardProps>`
  padding: 2rem;
  background: rgba(255, 62, 62, 0.1);
  border-radius: var(--border-radius);
  border: 2px solid var(--primary-color);
  transition: all var(--transition-speed) ease;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.$delay || '0s'};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(255, 62, 62, 0.2);
  }

  h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
`;

const AboutSection = () => {
  return (
    <Section id="about" isDark>
      <h2>About Us</h2>
      <p>Right Hook Studios is a passionate team of game developers dedicated to creating unforgettable gaming experiences.</p>
      
      <Grid>
        <Card $delay="0s">
          <h3>Our Mission</h3>
          <p>To create innovative and engaging games that push the boundaries of interactive entertainment.</p>
        </Card>
        
        <Card $delay="0.2s">
          <h3>Our Vision</h3>
          <p>To become a leading force in the gaming industry, known for our unique and captivating game experiences.</p>
        </Card>
        
        <Card $delay="0.4s">
          <h3>Our Values</h3>
          <p>Creativity, innovation, and player satisfaction are at the core of everything we do.</p>
        </Card>
      </Grid>
    </Section>
  );
};

export default AboutSection;
