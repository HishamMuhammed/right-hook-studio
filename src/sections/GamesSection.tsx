import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Section from '../components/Section';

const glowAnimation = keyframes`
  0%, 100% {
    box-shadow: 0 0 10px rgba(255, 62, 62, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 62, 62, 0.6);
  }
`;

const pixelate = keyframes`
  0% {
    transform: scale(1);
    image-rendering: auto;
  }
  50% {
    transform: scale(1.01);
    image-rendering: pixelated;
  }
  100% {
    transform: scale(1);
    image-rendering: auto;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

interface CardProps {
  $delay?: string;
}

interface ImageProps {
  $background?: string;
}

const GameCard = styled.div<CardProps>`
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  border: 2px solid var(--primary-color);
  transition: all var(--transition-speed) ease;
  animation: ${glowAnimation} 3s infinite;
  animation-delay: ${props => props.$delay || '0s'};
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    
    .game-info {
      opacity: 1;
      transform: translateY(0);
    }

    .game-image {
      animation: ${pixelate} 0.5s infinite;
    }
  }
`;

const GameImage = styled.div<ImageProps>`
  width: 100%;
  height: 200px;
  background: ${props => props.$background || 'var(--primary-color)'};
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
`;

const GameInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: rgba(43, 0, 0, 0.9);
  transform: translateY(100%);
  opacity: 0;
  transition: all var(--transition-speed) ease;
  backdrop-filter: blur(5px);

  h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
    font-family: var(--heading-font);
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }

  .tags {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
`;

const Tag = styled.span`
  background: var(--primary-color);
  color: var(--secondary-color);
  padding: 0.2rem 0.5rem;
  border-radius: var(--border-radius);
  font-size: 0.8rem;
  font-family: var(--alt-font);
`;

const PreviewModal = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(43, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.$isOpen ? 1 : 0};
  pointer-events: ${props => props.$isOpen ? 'all' : 'none'};
  transition: opacity 0.3s ease;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

const ModalContent = styled.div`
  background: var(--secondary-color);
  padding: 2rem;
  border-radius: var(--border-radius);
  border: 2px solid var(--primary-color);
  max-width: 800px;
  width: 90%;
  position: relative;

  h2 {
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .preview-image {
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center;
    border-radius: var(--border-radius);
    margin-bottom: 1rem;
  }

  .description {
    margin-bottom: 1rem;
  }

  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: var(--primary-color);
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: rotate(90deg);
    }
  }
`;

const GamesSection = () => {
  const [selectedGame, setSelectedGame] = useState<any>(null);

  const games = [
    {
      title: "Pixel Puncher",
      description: "A retro-style boxing game with intense action and pixel-perfect controls.",
      image: "https://img.itch.zone/aW1nLzEwNjE4NDEzLnBuZw==/original/byXK%2Fg.png",
      tags: ["Fighting", "Arcade", "Pixel Art"],
      longDescription: "Step into the ring in this retro-inspired boxing game. Master pixel-perfect timing, unleash devastating combos, and become the champion in this arcade-style fighting experience."
    },
    {
      title: "Cyber Brawler",
      description: "Fight your way through a cyberpunk city in this futuristic beat 'em up.",
      image: "https://img.itch.zone/aW1nLzEwNjE4NDEzLnBuZw==/original/byXK%2Fg.png",
      tags: ["Beat 'em up", "Cyberpunk", "Action"],
      longDescription: "Navigate through neon-lit streets and face off against cyber-enhanced enemies in this action-packed beat 'em up. Upgrade your abilities and uncover the truth behind the city's corruption."
    },
    {
      title: "Ring Master",
      description: "Become the champion in this strategic boxing management simulator.",
      image: "https://img.itch.zone/aW1nLzEwNjE4NDEzLnBuZw==/original/byXK%2Fg.png",
      tags: ["Strategy", "Management", "Sports"],
      longDescription: "Take control of your own boxing gym in this deep management simulator. Train fighters, manage resources, and lead your athletes to glory in the competitive world of professional boxing."
    }
  ];

  return (
    <Section id="games">
      <h2>Our Games</h2>
      <p>Check out our latest and upcoming game releases.</p>
      
      <Grid>
        {games.map((game, index) => (
          <GameCard 
            key={game.title} 
            $delay={`${index * 0.2}s`}
            onClick={() => setSelectedGame(game)}
          >
            <GameImage className="game-image" $background={`url(${game.image})`} />
            <GameInfo className="game-info">
              <h3>{game.title}</h3>
              <p>{game.description}</p>
              <div className="tags">
                {game.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </GameInfo>
          </GameCard>
        ))}
      </Grid>

      <PreviewModal $isOpen={!!selectedGame} onClick={() => setSelectedGame(null)}>
        {selectedGame && (
          <ModalContent onClick={e => e.stopPropagation()}>
            <button className="close" onClick={() => setSelectedGame(null)}>×</button>
            <h2>{selectedGame.title}</h2>
            <div 
              className="preview-image" 
              style={{ backgroundImage: `url(${selectedGame.image})` }}
            />
            <p className="description">{selectedGame.longDescription}</p>
            <div className="tags">
              {selectedGame.tags.map((tag: string) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </ModalContent>
        )}
      </PreviewModal>
    </Section>
  );
};

export default GamesSection;
