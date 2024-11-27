import React from 'react';
import styled, { keyframes } from 'styled-components';
import Section from '../components/Section';

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
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

interface AvatarProps {
  $background?: string;
}

const TeamCard = styled.div<CardProps>`
  text-align: center;
  padding: 2rem;
  background: rgba(255, 62, 62, 0.1);
  border-radius: var(--border-radius);
  border: 2px solid var(--primary-color);
  transition: all var(--transition-speed) ease;
  animation: ${pulse} 3s infinite;
  animation-delay: ${props => props.$delay || '0s'};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(255, 62, 62, 0.2);
  }
`;

const Avatar = styled.div<AvatarProps>`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  border: 3px solid var(--primary-color);
  background: ${props => props.$background || 'var(--primary-color)'};
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, var(--primary-color), transparent);
    opacity: 0.3;
  }
`;

interface NameProps {
  children: React.ReactNode;
}

const Name = styled.h3<NameProps>`
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

interface RoleProps {
  children: React.ReactNode;
}

const Role = styled.p<RoleProps>`
  color: var(--accent-color);
  margin-bottom: 1rem;
  font-family: var(--alt-font);
`;

const TeamSection = () => {
  const team = [
    {
      name: "Hisham",
      role: "Lead Developer",
      image: "hisham.jpg"
    },
    {
      name: "Anooj",
      role: "Creative Director",
      image: "anooj.jpg"
    },
    {
      name: "Harinand",
      role: "Art Director",
      image: "harinand.jpg"
    }
  ];

  return (
    <Section id="team" isDark>
      <h2>Our Team</h2>
      <p>Meet the talented individuals behind Right Hook Studios.</p>
      
      <Grid>
        {team.map((member, index) => (
          <TeamCard key={member.name} $delay={`${index * 0.2}s`}>
            <Avatar $background={`url(/${member.image})`} />
            <Name>{member.name}</Name>
            <Role>{member.role}</Role>
            <p>Passionate about creating amazing gaming experiences.</p>
          </TeamCard>
        ))}
      </Grid>
    </Section>
  );
};

export default TeamSection;
