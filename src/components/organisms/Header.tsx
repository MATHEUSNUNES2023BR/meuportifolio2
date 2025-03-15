import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Logo from '../atoms/Logo';
import NavItem from '../molecules/NavItem';
import Container from '../atoms/Container';
import brasil from '../../assets/flags/icons8-brazil-96.png';
import espanha from '../../assets/flags/icons8-spain-96.png';
import usa from '../../assets/flags/icons8-usa-96.png';
const HeaderWrapper = styled.header`
  padding: 1.5rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background-color 0.3s ease;
  
  &.scrolled {
    background-color: rgba(34, 36, 38, 0.95);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  max-width: 300px;
  background-color: ${props => props.theme.colors.background};
  padding: 2rem;
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s ease;
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  
  a {
    font-size: 1.25rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  cursor: pointer;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 150;
`;

// Componentes novos para seleção de idioma
const LanguageSelector = styled.div`
  position: relative;
  margin-left: 1.5rem;
`;

const LanguageButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const LanguageDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${props => props.theme.colors.background};
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  gap: 0.5rem;
  z-index: 110;
  min-width: 120px;
`;

const LanguageOption = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.text};
  font-size: 0.875rem;
  white-space: nowrap;
  width: 100%;
  text-align: left;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const FlagImage = styled.img`
  width: 20px;
  height: 15px;
  object-fit: cover;
  border-radius: 2px;
`;

const LanguageLabel = styled.span`
  margin-left: 0.5rem;
`;

const MobileLanguageOptions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: center;
`;

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-selector')) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  // Mapeamento de idiomas com suas respectivas bandeiras
  const languages = [
    { code: 'pt-BR', flag: brasil, label: 'BR' },
    { code: 'es', flag: espanha, label: 'ES' },
    { code: 'en', flag: usa, label: 'US' }
  ];

  // Encontra o idioma atual
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <>
      <HeaderWrapper className={isScrolled ? 'scrolled' : ''}>
        <Container>
          <HeaderContent>
            <Logo />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Nav>
                <NavItem to="/" label={t('nav.home')} />
                <NavItem to="/services" label={t('nav.services')} />
                <NavItem to="/projects" label={t('nav.projects')} />
                <NavItem to="/contact" label={t('nav.contact')} />
              </Nav>
              
              {/* Seletor de idioma */}
              <LanguageSelector className="language-selector">
                <LanguageButton onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}>
                  <FlagImage src={currentLanguage.flag} alt={currentLanguage.code} />
                  <LanguageLabel>{currentLanguage.label}</LanguageLabel>
                  <i className={`fas fa-chevron-${isLanguageDropdownOpen ? 'up' : 'down'}`} style={{ fontSize: '0.75rem' }}></i>
                </LanguageButton>
                <LanguageDropdown isOpen={isLanguageDropdownOpen}>
                  {languages.map(lang => (
                    <LanguageOption key={lang.code} onClick={() => changeLanguage(lang.code)}>
                      <FlagImage src={lang.flag} alt={lang.code} />
                      <LanguageLabel>{lang.label}</LanguageLabel>
                    </LanguageOption>
                  ))}
                </LanguageDropdown>
              </LanguageSelector>
              
              <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
                <i className="fas fa-bars"></i>
              </MobileMenuButton>
            </div>
          </HeaderContent>
        </Container>
      </HeaderWrapper>

      <Overlay 
        isOpen={isMobileMenuOpen} 
        onClick={() => setIsMobileMenuOpen(false)} 
      />
      
      <MobileMenu isOpen={isMobileMenuOpen}>
        <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
          <i className="fas fa-times"></i>
        </CloseButton>
        <MobileNav>
          <NavItem to="/" label={t('nav.home')} />
          <NavItem to="/services" label={t('nav.services')} />
          <NavItem to="/projects" label={t('nav.projects')} />
          <NavItem to="/contact" label={t('nav.contact')} />
          
          {/* Opções de idioma no menu mobile */}
          <MobileLanguageOptions>
            {languages.map(lang => (
              <LanguageOption key={lang.code} onClick={() => changeLanguage(lang.code)}>
                <FlagImage src={lang.flag} alt={lang.code} />
                <LanguageLabel>{lang.label}</LanguageLabel>
              </LanguageOption>
            ))}
          </MobileLanguageOptions>
        </MobileNav>
      </MobileMenu>
    </>
  );
};

export default Header;  