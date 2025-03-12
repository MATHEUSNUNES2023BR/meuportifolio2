import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Logo from '../atoms/Logo';
import NavItem from '../molecules/NavItem';
import Container from '../atoms/Container';

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

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <>
      <HeaderWrapper className={isScrolled ? 'scrolled' : ''}>
        <Container>
          <HeaderContent>
            <Logo />
            <Nav>
              <NavItem to="/" label={t('nav.home')} />
              <NavItem to="/services" label={t('nav.services')} />
              <NavItem to="/projects" label={t('nav.projects')} />
              <NavItem to="/contact" label={t('nav.contact')} />
            </Nav>
            <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
              <i className="fas fa-bars"></i>
            </MobileMenuButton>
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
        </MobileNav>
      </MobileMenu>
    </>
  );
};

export default Header;