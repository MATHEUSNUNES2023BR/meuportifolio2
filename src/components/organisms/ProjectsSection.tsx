import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Container from '../atoms/Container';
import Button from '../atoms/Button';

const ProjectsSectionWrapper = styled.section`
  padding: 6rem 0;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 4rem;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  height: 20rem;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(252, 228, 132, 0.1);
  transition: transform 0.3s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(34, 36, 38, 0.9) 0%, rgba(34, 36, 38, 0) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const ProjectCategory = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.light};
`;

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'project1.jpg'
    },
    {
      title: 'Financial Dashboard',
      category: 'UI/UX Design',
      image: 'project2.jpg'
    },
    {
      title: 'Fitness App',
      category: 'Mobile Development',
      image: 'project3.jpg'
    },
    {
      title: 'Real Estate Website',
      category: 'Web Development',
      image: 'project4.jpg'
    },
    {
      title: 'Task Management Tool',
      category: 'Web Application',
      image: 'project5.jpg'
    },
    {
      title: 'Restaurant Booking System',
      category: 'Full Stack Development',
      image: 'project6.jpg'
    }
  ];
  
  return (
    <ProjectsSectionWrapper>
      <Container>
        <SectionHeader>
          <SectionTitle>{t('projects.title')}</SectionTitle>
          <Button variant="outline">{t('projects.viewMore')}</Button>
        </SectionHeader>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage />
              <ProjectOverlay>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectCategory>{project.category}</ProjectCategory>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSectionWrapper>
  );
};

export default ProjectsSection;