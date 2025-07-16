import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #e2e8f0;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
`;

export const ProjectCard = styled.div`
  background-color: #2d3748;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: left;

  p {
    color: #a0aec0;
    font-size: 1rem;
    line-height: 1.5;
    flex-grow: 1;
    margin-bottom: 1rem;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
`;

export const TechnologyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const TechnologyBadge = styled.span`
  background-color: #4a5568;
  color: #e2e8f0;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;

  a {
    color: #4299e1;
    text-decoration: none;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border: 1px solid #4299e1;
    border-radius: 5px;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;

    &:hover {
      background-color: #4299e1;
      color: #1a202c;
    }
  }
`;
