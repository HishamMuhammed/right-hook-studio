import React from 'react';
import styled from 'styled-components';

const TeamContainer = styled.div`
  min-height: 100vh;
  padding: 100px 20px 20px;
  background: var(--background-dark);
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const TeamMemberCard = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid var(--accent-color);
  padding: 20px;
  text-align: center;
  
  &:hover {
    .pixel-avatar {
      transform: scale(1.1);
    }
  }
`;

const PixelAvatar = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem;
  background: var(--primary-color);
  transition: transform 0.3s ease;
  border: 2px solid var(--accent-color);
`;

const MemberName = styled.h3`
  color: var(--accent-color);
  margin-bottom: 1rem;
`;

const MemberRole = styled.p`
  color: var(--text-color);
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  color: var(--text-color);
  font-size: 0.8rem;
  line-height: 1.5;
`;

const Title = styled.h2`
  color: var(--accent-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const TeamPage = () => {
  return (
    <TeamContainer>
      <Title>Meet The Team</Title>
      <TeamGrid>
        <TeamMemberCard>
          <PixelAvatar className="pixel-avatar" />
          <MemberName>Hisham</MemberName>
          <MemberRole>Lead Developer</MemberRole>
          <MemberBio>
            Master of code and gaming mechanics. Turns coffee into game features.
          </MemberBio>
        </TeamMemberCard>
        <TeamMemberCard>
          <PixelAvatar className="pixel-avatar" />
          <MemberName>Anooj</MemberName>
          <MemberRole>Creative Director</MemberRole>
          <MemberBio>
            The visionary behind our game concepts. Dreams in pixels and thinks in gameplay.
          </MemberBio>
        </TeamMemberCard>
        <TeamMemberCard>
          <PixelAvatar className="pixel-avatar" />
          <MemberName>Harinand</MemberName>
          <MemberRole>Art Director</MemberRole>
          <MemberBio>
            Pixel art wizard. Creates worlds one pixel at a time.
          </MemberBio>
        </TeamMemberCard>
      </TeamGrid>
    </TeamContainer>
  );
};

export default TeamPage;
