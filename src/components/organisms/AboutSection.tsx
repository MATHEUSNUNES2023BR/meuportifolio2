import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import Container from '../atoms/Container';
import foto from '../../assets/images/foto.jpg';

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
    background: radial-gradient(circle, rgba(252, 178, 132, 0.1) 0%, rgba(34, 36, 38, 0) 70%);
    border-radius: 50%;
    z-index: -1;
  }
  
  &:after {
    content: '';
    position: absolute;
    right: -5%;
    bottom: 10%;
    width: 20rem;
    height: 20rem;
    background: radial-gradient(circle, rgba(132, 206, 252, 0.08) 0%, rgba(34, 36, 38, 0) 60%);
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
    background: linear-gradient(90deg, ${props => props.theme.colors.primary} 0%, transparent 100%);
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
  position: relative;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;


const StatLabel = styled.div`
  font-size: 0.725rem;
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 30rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrbitalRing = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 1px dashed ${props => props.theme.colors.primary}40;
  width: 110%;
  height: 110%;
  animation: rotate 30s linear infinite;
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  &:before {
    content: '';
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    background: ${props => props.theme.colors.primary}20;
    border-radius: 50%;
    top: 10%;
    left: 10%;
    box-shadow: 0 0 10px ${props => props.theme.colors.primary}40;
  }
`;

const InnerOrbitalRing = styled(OrbitalRing)`
  width: 85%;
  height: 85%;
  animation-direction: reverse;
  animation-duration: 20s;
  transform: rotate(45deg);
  
  &:before {
    top: 80%;
    left: 60%;
    width: 1rem;
    height: 1rem;
  }
`;

const FloatingElement = styled.div`
  position: absolute;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary}10;
  filter: blur(8px);
  z-index: -1;
  
  &:nth-child(1) {
    top: 20%;
    right: 15%;
    width: 2rem;
    height: 2rem;
    animation: float 6s ease-in-out infinite;
  }
  
  &:nth-child(2) {
    bottom: 15%;
    left: 10%;
    width: 1.5rem;
    height: 1.5rem;
    animation: float 7s ease-in-out infinite 1s;
  }
  
  &:nth-child(3) {
    top: 45%;
    left: 5%;
    width: 1rem;
    height: 1rem;
    animation: float 5s ease-in-out infinite 0.5s;
  }
  
  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
`;



const PhotoAbout = styled.img`
  width: 20rem;
  height: 20rem;
  margin-top: 1.7rem;
  border-radius: 50%;
  opacity: 0.92;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const photoRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!photoRef.current) return;
      
      const { left, top, width, height } = photoRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      photoRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) scale3d(1.05, 1.05, 1.05)`;
    };
    
    const handleMouseLeave = () => {
      if (!photoRef.current) return;
      photoRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
    };
    
    const element = document.querySelector('.image-container') as HTMLElement;
    if (element) { 
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);
  
  return (
    <AboutSectionWrapper>
      <Container>
        <AboutGrid>
          <AboutContent>
            <SectionTitle>{t('about.title')}</SectionTitle>
            <AboutDescription>{t('about.description')}</AboutDescription>
            <Stats>
              <StatItem>
                <StatLabel>{t('about.expertise')}</StatLabel>
              </StatItem>
              <StatItem>
                <StatLabel>{t('about.projects')}</StatLabel>
              </StatItem>
              <StatItem>
                <StatLabel>{t('about.client')}</StatLabel>
              </StatItem>
            </Stats>
          </AboutContent>
          <ImageContainer className="image-container">
            <FloatingElement />
            <FloatingElement />
            <FloatingElement />
            <OrbitalRing />
            <InnerOrbitalRing />
            <PhotoAbout ref={photoRef} src={foto} alt="Minha foto" />
          </ImageContainer>
        </AboutGrid>
      </Container>
    </AboutSectionWrapper>
  );
};

export default AboutSection;