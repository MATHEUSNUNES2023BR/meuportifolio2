import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Container from '../atoms/Container';
import Button from '../atoms/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Project images imports
import dbo_home from '../../assets/projetos/dbo/home_1.png'
import dbo_home2 from '../../assets/projetos/dbo/home_2.png'
import dbo_registrar from '../../assets/projetos/dbo/registrar_1.png'
import recuperarsenha from '../../assets/projetos/dbo/recuperar_senha.png'
import login from '../../assets/projetos/dbo/login.png'
import skillcalculator from '../../assets/projetos/dbo/calcular_skill.png'
import baixar from '../../assets/projetos/dbo/baixar.png'
import ranking from '../../assets/projetos/dbo/ranking.png'
import painel_conta from '../../assets/projetos/dbo/painel_conta.png'
import painel_donate from '../../assets/projetos/dbo/painel_donate.png'
import painel_donate_pix from '../../assets/projetos/dbo/painel_donate_pix.png'
import painel_donate_cartao from '../../assets/projetos/dbo/painel_donate_cartao.png'
import painel_config from '../../assets/projetos/dbo/painel_config.png'
import painel_estilos from '../../assets/projetos/dbo/painel_estilos.png'
import painel_sorteio from '../../assets/projetos/dbo/painel_sorteio.png'

import wix_home from '../../assets/projetos/sollie/home.png'
import wix_home2 from '../../assets/projetos/sollie/home_2.png'
import wix_home3 from '../../assets/projetos/sollie/home_3.png'
import wix_home4 from '../../assets/projetos/sollie/home_4.png'
import wix_home5 from '../../assets/projetos/sollie/home_5.png'
import produtos from '../../assets/projetos/sollie/produtos.png'
import produto_janela from '../../assets/projetos/sollie/produtos_janela.png'
import onde_comprar from '../../assets/projetos/sollie/onde_comprar.png'
import onde_comprar_janela from '../../assets/projetos/sollie/onde_comprarjanela.png'
import onde_estamos from '../../assets/projetos/sollie/onde_estamos.png'
import onde_estamos_1 from '../../assets/projetos/sollie/onde_estamos_1.png'
import eventos from '../../assets/projetos/sollie/eventos.png'
import eventos_2 from '../../assets/projetos/sollie/eventos_2.png'
import eventos_3 from '../../assets/projetos/sollie/eventos_3.png'
import eventos_4 from '../../assets/projetos/sollie/eventos_4.png'
import historia from '../../assets/projetos/sollie/historia.png'
import seja_distribuidor from '../../assets/projetos/sollie/seja_distribuidor.png'
import seja_distribuidor2 from '../../assets/projetos/sollie/seja_distribuidor_2.png'
import seja_distribuidor3 from '../../assets/projetos/sollie/seja_distribuidor_3.png'
import escola_de_beleza from '../../assets/projetos/sollie/escola_de_beleza.png'
import escola_de_beleza2 from '../../assets/projetos/sollie/escola_de_beleza_2.png'
import escola_de_beleza3 from '../../assets/projetos/sollie/escola_de_beleza_3.png'

import stake_home from '../../assets/projetos/stakehouse/stake_home.png'
import stake_eventos from '../../assets/projetos/stakehouse/stake_eventos.png'
import stake_cardapio from '../../assets/projetos/stakehouse/stake_cardapio.png'
import stake_contato from '../../assets/projetos/stakehouse/stake_contato.png'

// Interfaces
interface ProjectType {
  id: number;
  title: string;
  category: string;
  description: string[];
  shortDescription: string;
  technologies: string[];
  images: string[];
  demoUrl?: string;
}

interface OverlayState {
  isOpen: boolean;
  activeProject: number | null;
}

interface ThemeProps {
  theme: {
    colors: {
      background: string;
      text: string;
      primary: string;
      dark: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
    };
  };
}

interface ProjectImageProps {
  bgImage: string;
}

interface OverlayProps {
  isOpen: boolean;
}

// Styled Components
const ProjectsSectionWrapper = styled.section<ThemeProps>`
  padding: 6rem 0;
  padding-top: 8rem;
  background-color: ${props => props.theme.colors.background};
`;

const SectionHeader = styled.div<ThemeProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

const SectionTitle = styled.h2<ThemeProps>`
  font-size: 2.75rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  color: ${props => props.theme.colors.text};
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.8rem;
    left: 0;
    width: 5rem;
    height: 4px;
    background-color: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

// Project Grid Layout
const ProjectsGrid = styled.div<ThemeProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

// Project Card Components
const ProjectCard = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  background-color: ${props => props.theme.colors.background};
  
  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-10px);
  }
`;

// Project Image with 4:3 aspect ratio
const ProjectImage = styled.div<ProjectImageProps & ThemeProps>`
  width: 100%;
  height: 0;
  padding-top: 75%; /* 4:3 Aspect Ratio */
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.3) 100%);
  }
`;

const ProjectContent = styled.div<ThemeProps>`
  padding: 1.5rem 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

const ProjectTitle = styled.h3<ThemeProps>`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
`;

const ProjectCategory = styled.div<ThemeProps>`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  
  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};
    margin-right: 0.5rem;
  }
`;

const ProjectDescription = styled.p<ThemeProps>`
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const CardButtonWrapper = styled.div`
  margin-top: auto;
`;

// Overlay Components
const FullOverlay = styled.div<OverlayProps & ThemeProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(25, 27, 29, 0.97);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: start;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.4s ease;
  backdrop-filter: blur(5px);
  padding: 2rem;
  overflow-y: auto;
`;

const OverlayContent = styled.div<ThemeProps>`
  width: 80%;
  max-width: 1200px;
  background-color: ${props => props.theme.colors.background};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  margin: 2rem 0; /* Adiciona margem acima e abaixo */
  position: relative;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 90%;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 95%;
    margin: 1rem 0;
  }
`;
// Carousel with improved 4:3 ratio
const CarouselContainer = styled.div<ThemeProps>`
  width: 100%;
  position: relative;
  height: 0;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding-top: 75%; /* 4:3 Aspect Ratio for mobile */
  }
  
  .swiper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    overflow: hidden;
  }
  
  .swiper-slide {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
  
  .swiper-button-next, .swiper-button-prev {
    color: ${props => props.theme.colors.primary};
    background-color: rgba(255, 255, 255, 0.2);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    
    &:after {
      font-size: 20px;
    }
  }
  
  .swiper-pagination-bullet {
    background-color: rgba(255, 255, 255, 0.7);
  }
  
  .swiper-pagination-bullet-active {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const OverlayBody = styled.div<ThemeProps>`
  padding: 2.5rem;
  color: ${props => props.theme.colors.text};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.5rem;
  }
`;

const OverlayTitle = styled.h2<ThemeProps>`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.75rem;
  }
`;

const OverlayCategory = styled.div<ThemeProps>`
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background-color: rgba(252, 228, 132, 0.15);
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const OverlayDescription = styled.ul<ThemeProps>`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text};
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
`;

const TechItem = styled.span<ThemeProps>`
  padding: 0.4rem 1rem;
  background-color: rgba(34, 36, 38, 0.05);
  border-radius: 6px;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`;

const ButtonGroup = styled.div<ThemeProps>`
  display: flex;
  gap: 1rem;
  
  button {
    a {
      color: ${props => props.theme.colors.dark};
      text-decoration: none;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
  }
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 1.2rem;
    height: 2px;
    background-color: white;
  }
  
  &:before {
    transform: rotate(45deg);
  }
  
  &:after {
    transform: rotate(-45deg);
  }
`;

// Main Component
const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const [overlay, setOverlay] = useState<OverlayState>({
    isOpen: false,
    activeProject: null
  });
  
  // Handle scroll locking when overlay is open
  useEffect(() => {
    if (overlay.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [overlay.isOpen]);
  
  // Project data
  const projects: ProjectType[] = [
    {
      id: 1,
      title: t('projects.sollie.title'),
      category: 'WIX',
      shortDescription: t('projects.sollie.description'),
      description: Object.values(t('projects.sollie.longDescription', { returnObjects: true })),
      technologies: Object.values(t('projects.sollie.tech', { returnObjects: true })),
      images: [wix_home, wix_home2, wix_home3, wix_home4, wix_home5, produtos, produto_janela, onde_comprar, onde_comprar_janela, onde_estamos, onde_estamos_1, eventos, eventos_2, eventos_3, eventos_4, historia, seja_distribuidor, seja_distribuidor2, seja_distribuidor3, escola_de_beleza, escola_de_beleza2, escola_de_beleza3],
      demoUrl: 'https://www.sollieprofessional.com.br/',
    },
    {
      id: 2,
      title: t('projects.dbo.title'),
      category: 'Fullstack Python',
      shortDescription: t('projects.dbo.description'),
      description: Object.values(t('projects.dbo.longDescription', { returnObjects: true })),
      technologies: Object.values(t('projects.dbo.tech', { returnObjects: true })),
      images: [dbo_home, dbo_home2, dbo_registrar, recuperarsenha, login, skillcalculator, baixar, ranking, painel_conta, painel_donate, painel_donate_pix, painel_donate_cartao, painel_config, painel_estilos, painel_sorteio],
      demoUrl: 'https://knightzonline.com/',
    },
    {
      id: 3,
      title: t('projects.stakehouse.title'),
      category: 'Web Development BootStrap',
      shortDescription: t('projects.stakehouse.description'),
      description: Object.values(t('projects.stakehouse.longDescription', { returnObjects: true })),
      technologies: Object.values(t('projects.stakehouse.tech', { returnObjects: true })),
      images: [stake_home, stake_eventos, stake_cardapio, stake_contato],
      demoUrl: 'https://stake-house.vercel.app/'
    }
  ];
  
  // Event handlers
  const handleViewDetailsClick = (projectId: number) => {
    setOverlay({
      isOpen: true,
      activeProject: projectId
    });
  };
  
  const handleCloseOverlay = () => {
    setOverlay({
      isOpen: false,
      activeProject: null
    });
  };
  
  // Get active project for overlay
  const activeProject = overlay.activeProject !== null 
    ? projects.find(p => p.id === overlay.activeProject) 
    : null;
  
  return (
    <ProjectsSectionWrapper id="projects">
      <Container>
        {/* Section Header */}
        <SectionHeader>
          <SectionTitle>{t('projects.title', 'Projetos em Destaque')}</SectionTitle>
        </SectionHeader>
        
        {/* Projects Grid */}
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImage bgImage={project.images[0]} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectCategory>{project.category}</ProjectCategory>
                <ProjectDescription>{project.shortDescription}</ProjectDescription>
                <CardButtonWrapper>
                  <Button 
                    variant="primary" 
                    onClick={() => handleViewDetailsClick(project.id)}
                  >
                    {t('projects.viewDetails', 'Ver Detalhes')}
                  </Button>
                </CardButtonWrapper>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
        
        {/* Project Details Overlay */}
        <FullOverlay isOpen={overlay.isOpen} onClick={handleCloseOverlay}>
          {activeProject && (
            <OverlayContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={handleCloseOverlay} aria-label="Close overlay" />
              
              {/* Image Carousel */}
              <CarouselContainer>
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  loop={true}
                >
                  {activeProject.images.map((image, index) => (
                    <SwiperSlide 
                      key={index} 
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  ))}
                </Swiper>
              </CarouselContainer>
              
              {/* Project Details */}
              <OverlayBody>
                <OverlayCategory>{activeProject.category}</OverlayCategory>
                <OverlayTitle>{activeProject.title}</OverlayTitle>
                <OverlayDescription>
                  {activeProject.description.map((paragraph, idx) => (
                    <li key={idx}>{paragraph}</li>
                  ))}
                </OverlayDescription>
                
                {/* Technologies Used */}
                <TechList>
                  {activeProject.technologies.map((tech, index) => (
                    <TechItem key={index}>{tech}</TechItem>
                  ))}
                </TechList>
                
                {/* Action Buttons */}
                <ButtonGroup>
                  {activeProject.demoUrl && (
                    <Button variant="primary">
                      <a 
                        target="_blank" 
                        href={activeProject.demoUrl} 
                        rel="noopener noreferrer"
                      >
                        Ver Projeto
                      </a>
                    </Button>
                  )}
                </ButtonGroup>
              </OverlayBody>
            </OverlayContent>
          )}
        </FullOverlay>
      </Container>
    </ProjectsSectionWrapper>
  );
};

export default ProjectsSection;