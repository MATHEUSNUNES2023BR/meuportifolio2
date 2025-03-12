import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Container from '../atoms/Container';

const AboutSectionWrapper = styled.section`
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    left: -10%;
    top: 20%;
    width: 25rem;
    height: 25rem;
    background: radial-gradient(circle, rgba(252, 228, 132, 0.05) 0%, rgba(34, 36, 38, 0) 70%);
    border-radius: 50%;
    z-index: -1;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutContent = styled.div``;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 50%;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
  }
`;

const AboutDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.light};
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
  
  span {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ImageWrapper = styled.div`
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -2rem;
    left: -2rem;
    width: 100%;
    height: 100%;
    border: 2px solid ${props => props.theme.colors.primary};
    z-index: -1;
  }
`;

const AboutImage = styled.div`
  width: 100%;
  height: 30rem;
  background-color: rgba(252, 228, 132, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:after {
    content: 'MB';
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 5rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    opacity: 0.5;
  }
`;

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AboutSectionWrapper>
      <Container>
        <AboutGrid>
          <AboutContent>
            <SectionTitle>{t('about.title')}</SectionTitle>
            <AboutDescription>{t('about.description')}</AboutDescription>
            <Stats>
              <StatItem>
                <StatNumber>8<span>+</span></StatNumber>
                <StatLabel>Anos de experiência</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>50<span>+</span></StatNumber>
                <StatLabel>Projetos concluídos</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>30<span>+</span></StatNumber>
                <StatLabel>Clientes satisfeitos</StatLabel>
              </StatItem>
            </Stats>
          </AboutContent>
          <ImageWrapper>
            <AboutImage />
          </ImageWrapper>
        </AboutGrid>
      </Container>
    </AboutSectionWrapper>
  );
};

export default AboutSection;