import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Container from '../atoms/Container';

const ServicesSectionWrapper = styled.section`
  padding: 6rem 0;
  background-color: rgba(252, 228, 132, 0.03);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

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
    left: 50%;
    transform: translateX(-50%);
    width: 4rem;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background-color: rgba(252, 228, 132, 0.05);
  padding: 2rem;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.light};
`;

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: 'fas fa-laptop-code',
      title: t('services.webDev'),
      description: t('services.webDevDesc')
    },
    {
      icon: 'fas fa-mobile-alt',
      title: t('services.mobileDev'),
      description: t('services.mobileDevDesc')
    },
    {
      icon: 'fas fa-paint-brush',
      title: t('services.design'),
      description: t('services.designDesc')
    },
    {
      icon: 'fas fa-server',
      title: 'DevOps',
      description: 'Implementação de CI/CD, infraestrutura como código e gestão de servidores na nuvem.'
    },
    {
      icon: 'fas fa-database',
      title: 'Banco de Dados',
      description: 'Modelagem, otimização e gestão de bancos de dados relacionais e NoSQL.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Segurança',
      description: 'Implementação de práticas de segurança, testes de penetração e auditorias.'
    }
  ];
  
  return (
    <ServicesSectionWrapper>
      <Container>
        <SectionHeader>
          <SectionTitle>{t('services.title')}</SectionTitle>
        </SectionHeader>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>
                <i className={service.icon}></i>
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSectionWrapper>
  );
};

export default ServicesSection;