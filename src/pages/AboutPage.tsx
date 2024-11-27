import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 100px 20px 20px;
  background: var(--background-dark);
`;

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const TimelineItem = styled.div`
  position: relative;
  padding: 20px;
  margin: 20px 0;
  border: 2px solid var(--accent-color);
  background: rgba(0, 0, 0, 0.5);

  &:before {
    content: '>';
    position: absolute;
    left: -20px;
    color: var(--accent-color);
  }
`;

const Title = styled.h2`
  color: var(--accent-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <Title>Our Journey</Title>
      <Timeline>
        <TimelineItem>
          <h3>2023</h3>
          <p>Right Hook Studios was founded by three passionate game developers</p>
        </TimelineItem>
        <TimelineItem>
          <h3>2024</h3>
          <p>Launched our first indie game project</p>
        </TimelineItem>
        <TimelineItem>
          <h3>Future</h3>
          <p>Creating more exciting gaming experiences...</p>
        </TimelineItem>
      </Timeline>
    </AboutContainer>
  );
};

export default AboutPage;
