import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Container from '../atoms/Container';
import photoSuporte from '../../assets/images/suporte.jpg';
import photoDesign from '../../assets/images/design.jpg';
import photoAutomacao from '../../assets/images/automação.jpg';
import photoSite from '../../assets/images/site.jpg';	
import photoSearch from '../../assets/images/search.jpg';	

// Interfaces para tipagem
interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  image: string;
}

// Componentes estilizados com tema do universo
const ServicesSectionWrapper = styled.section`
  padding: 6rem 0;
  padding-top: 8rem;
  background-color: rgba(252, 228, 132, 0.03);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(15, 10, 60, 0.2), rgba(10, 10, 30, 0.4)), 
                linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(252, 228, 132, 0.05) 100%);
    z-index: 0;
  }
`;

const Star = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
`;

const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  color: ${props => props.theme.colors.primary || '#FCE484'};
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 6rem;
    height: 3px;
    background-color: ${props => props.theme.colors.primary || '#FCE484'};
    box-shadow: 0 0 10px ${props => props.theme.colors.primary || '#FCE484'};
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;

    &:after {
      width: 4rem;
    }
  }
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  gap: 6rem;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    background: linear-gradient(
      to bottom, 
      rgba(252, 228, 132, 0.1), 
      rgba(252, 228, 132, 0.5), 
      rgba(252, 228, 132, 0.1)
    );
    z-index: -1;
    
    @media (max-width: 768px) {
      left: 1.5rem;
      transform: none;
    }
  }
`;

const ServiceRow = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column !important;
    align-items: flex-start;
    padding-left: 3rem;
    margin-left: 0;
    
    & > div:first-child {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }
`;

const ServiceConnector = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(252, 228, 132, 0.8), rgba(252, 228, 132, 0.1));
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  
  &:before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: rgba(252, 228, 132, 0.9);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 5px rgba(252, 228, 132, 0.8);
  }
  
  @media (max-width: 768px) {
    left: 0.6rem;
    top: 2rem;
    transform: none;
  }
`;

const ServiceContent = styled.div`
  flex: 1;
  padding: 2rem;
  position: relative;
  z-index: 3;
  @media (max-width: 768px) {
    padding: 0;
    padding-bottom: 2rem;
    width: 100%;
  }
  @media (max-width: 568px) {
    margin-left: 0.5rem;
  }
`;

const ServiceImageContainer = styled.div`
  flex: 1;
  position: relative;
  height: 250px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(252, 228, 132, 0.1);
  position: relative;
  z-index: 3;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    margin-bottom: 2rem;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${ServiceRow}:hover & {
    transform: scale(1.05);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary || '#FCE484'};
  margin-bottom: 1.2rem;
  display: inline-block;
  
  i {
    filter: drop-shadow(0 0 3px rgba(252, 228, 132, 0.4));
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 568px) {
    font-size: 2rem;
    display: block;
    margin-bottom: 0.2rem;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  margin-left: 1rem;
  color: ${props => props.theme.colors.primary || '#FCE484'};
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 3rem;
    height: 2px;
    background-color: ${props => props.theme.colors.primary || '#FCE484'};
  }
  
  @media (max-width: 968px) {
    display: block;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    margin-left: 0;
    &:after {
      width: 2.5rem;
    }
  }
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.light || '#f8f9fa'};
  margin-bottom: 1.5rem;
  width: 95%;
  @media (max-width: 968px) {
    width: 90%;
    text-align: justify;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 0;
  }
  @media (max-width: 568px) {
    width: 95%;
    text-align: start;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 0;
  }
`;


const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  
  // Gerar estrelas estáticas
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 70; i++) {
      const style = {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.5 + 0.2,
      };
      stars.push(<Star key={i} style={style} />);
    }
    return stars;
  };
  
  const services: ServiceItem[] = [
    {
      icon: 'fas fa-headset',
      title: t('services.suporte.title'),
      description: t('services.suporte.description'),
      image: photoSuporte
    },
    {
      icon: 'fas fa-laptop-code',
      title:  t('services.web.title'),
      description: t('services.web.description'),
      image: photoSite
    },
    {
      icon: 'fas fa-robot',
      title: t('services.automacao.title'),
      description: t('services.automacao.description'),
      image: photoAutomacao
    },
    {
      icon: 'fas fa-search',
      title: t('services.seo.title'),
      description: t('services.seo.description'),
      image: photoSearch
    },
    {
      icon: 'fas fa-paint-brush',
      title: t('services.design.title'),
      description:t('services.design.description'),
      image: photoDesign
    }
  ];
  
  return (
    <ServicesSectionWrapper>
      <StarsContainer>
        {renderStars()}
      </StarsContainer>
      
      <Container>
        <ContentWrapper>
          <SectionHeader>
            <SectionTitle>{t('services.title')}</SectionTitle>
          </SectionHeader>
          
          <ServicesContainer>
            {services.map((service, index) => (
              <React.Fragment key={index}>
                {/* Desktop View */}
                <ServiceRow className="desktop-view">
                  <ServiceConnector />
                  
                  <ServiceContent>
                    <ServiceIcon>
                      <i className={service.icon}></i>
                    </ServiceIcon>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <ServiceDescription>{service.description}</ServiceDescription>
                  </ServiceContent>
                  
                  <ServiceImageContainer>
                    <ServiceImage 
                      src={service.image} 
                      alt={`${service.title} service`} 
                    />
                  </ServiceImageContainer>
                </ServiceRow>
              </React.Fragment>
            ))}
          </ServicesContainer>
        </ContentWrapper>
      </Container>
    </ServicesSectionWrapper>
  );
};

export default ServicesSection;