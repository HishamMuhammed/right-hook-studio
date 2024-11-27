import React from 'react';
import styled from 'styled-components';

const GamesContainer = styled.div`
  min-height: 100vh;
  padding: 100px 20px 20px;
  background: var(--background-dark);
`;

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const GameCard = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid var(--accent-color);
  padding: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
  }
`;

const GameImage = styled.div`
  width: 100%;
  height: 200px;
  background: #2a2a2a;
  margin-bottom: 1rem;
  border: 2px solid var(--primary-color);
`;

const GameTitle = styled.h3`
  color: var(--accent-color);
  margin-bottom: 1rem;
`;

const GameDescription = styled.p`
  color: var(--text-color);
  font-size: 0.8rem;
  line-height: 1.5;
`;

const Title = styled.h2`
  color: var(--accent-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const GamesPage = () => {
  return (
    <GamesContainer>
      <Title>Our Games</Title>
      <GamesGrid>
        <GameCard>
          <GameImage />
          <GameTitle>Pixel Puncher</GameTitle>
          <GameDescription>
            A retro-style boxing game with unique pixel art graphics and intense gameplay.
          </GameDescription>
        </GameCard>
        <GameCard>
          <GameImage />
          <GameTitle>Cyber Brawler</GameTitle>
          <GameDescription>
            Coming soon - A futuristic fighting game set in a neon-lit cyberpunk world.
          </GameDescription>
        </GameCard>
      </GamesGrid>
    </GamesContainer>
  );
};

export default GamesPage;
