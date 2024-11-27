import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SectionContainer = styled.section<{ $isDark?: boolean }>`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  position: relative;
  background: ${props => props.$isDark ? 
    'linear-gradient(135deg, var(--secondary-color) 0%, var(--background-dark) 100%)' : 
    'linear-gradient(135deg, var(--background-dark) 0%, var(--secondary-color) 100%)'};

  &.section-animate {
    opacity: 0;
    transform: translateY(50px);
  }

  &.visible {
    animation: ${fadeIn} 1s ease-out forwards;
  }

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
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  background: rgba(43, 0, 0, 0.7);
  padding: 3rem;
  border-radius: var(--border-radius);
  border: 2px solid var(--primary-color);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(255, 62, 62, 0.2);
`;

interface SectionProps {
  id: string;
  isDark?: boolean;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, isDark = false, children }) => {
  return (
    <SectionContainer id={id} $isDark={isDark} className="section-animate">
      <ContentContainer>
        {children}
      </ContentContainer>
    </SectionContainer>
  );
};

export default Section;
