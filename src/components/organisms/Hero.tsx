import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Container from '../atoms/Container';
import Button from '../atoms/Button';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5rem;
    right: -5rem;
    width: 30rem;
    height: 30rem;
    background: linear-gradient(135deg, rgba(252, 228, 132, 0.1) 0%, rgba(252, 228, 132, 0.05) 100%);
    border-radius: 50%;
    z-index: -1;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: -5rem;
    left: -5rem;
    width: 20rem;
    height: 20rem;
    background: linear-gradient(135deg, rgba(252, 228, 132, 0.1) 0%, rgba(252, 228, 132, 0.05) 100%);
    border-radius: 50%;
    z-index: -1;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 6rem;
    height: 4px;
    background-color: ${props => props.theme.colors.primary};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  margin-bottom: 2.5rem;
  color: ${props => props.theme.colors.light};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.125rem;
  }
`;

const ContactInfo = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.125rem;
  
  i {
    color: ${props => props.theme.colors.primary};
  }
`;

const CardPattern = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 40%;
  background-image: linear-gradient(45deg, rgba(252, 228, 132, 0.05) 25%, transparent 25%),
                    linear-gradient(-45deg, rgba(252, 228, 132, 0.05) 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, rgba(252, 228, 132, 0.05) 75%),
                    linear-gradient(-45deg, transparent 75%, rgba(252, 228, 132, 0.05) 75%);
  background-size: 20px 20px;
  z-index: -1;
`;

const MonogramLogo = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 15rem;
  height: 15rem;
  border: 3px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  
  &:before {
    content: 'MB';
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 5rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    display: none;
  }
`;

const Hero: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <HeroTitle>{t('hero.title')}</HeroTitle>
          <HeroSubtitle>{t('hero.subtitle')}</HeroSubtitle>
          <HeroDescription>{t('hero.description')}</HeroDescription>
          <Button size="large">{t('hero.cta')}</Button>
          
          <ContactInfo>
            <ContactItem>
              <i className="fas fa-phone"></i>
              <span>(62) 9 9116-6071</span>
            </ContactItem>
            <ContactItem>
              <i className="fas fa-envelope"></i>
              <span>matheustiservicos@gmail.com</span>
            </ContactItem>
            <ContactItem>
              <i className="fas fa-globe"></i>
              <span>www.matheusbarrosti.com</span>
            </ContactItem>
          </ContactInfo>
        </HeroContent>
      </Container>
      <CardPattern />
      <MonogramLogo />
    </HeroSection>
  );
};

export default Hero;