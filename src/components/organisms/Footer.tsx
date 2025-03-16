import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Container from '../atoms/Container';
import Logo from '../atoms/Logo';
import SocialLinks from '../molecules/SocialLinks';

const FooterWrapper = styled.footer`
  padding: 4rem 0 1rem;
  background-color: ${props => props.theme.colors.dark};
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    align-items: center;
  }
`;

const FooterLogo = styled.div`
  margin-bottom: 1.5rem;
`;

const FooterAbout = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.light};
  opacity: 0.7;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const FooterTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 2rem;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    &:after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    align-items: center;
  }
`;

const FooterLink = styled.li`
  a {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.light};
    opacity: 0.7;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 1;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
  margin-top: 3rem;
  border-top: 1px solid rgba(252, 228, 132, 0.1);
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.light};
  opacity: 0.7;
`;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterColumn>
            <FooterLogo>
              <Logo size="small" />
            </FooterLogo>
            <FooterAbout>
              {t('footer.description')}
            </FooterAbout>
            <SocialLinks />
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>{t('footer.l')}</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="/">{t('nav.home')}</a></FooterLink>
              <FooterLink><a href="/services">{t('nav.services')}</a></FooterLink>
              <FooterLink><a href="/projects">{t('nav.projects')}</a></FooterLink>
              <FooterLink><a href="/contact">{t('nav.contact')}</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>{t('footer.s')}</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="/services">{t('services.web.title')}</a></FooterLink>
              <FooterLink><a href="/services">{t('services.suporte.title')}</a></FooterLink>
              <FooterLink><a href="/services">{t('services.design.title')}</a></FooterLink>
              <FooterLink><a href="/services">{t('services.seo.title')}</a></FooterLink>
              <FooterLink><a href="/services">{t('services.automacao.title')}</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>{t('footer.c')}</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <a href="tel:+5562991166071">
                  <i className="fas fa-phone"></i> (62) 9 9116-6071
                </a>
              </FooterLink>
              <FooterLink>
                <a href="mailto:matheustiservicos@gmail.com">
                  <i className="fas fa-envelope"></i> matheustiservicos@gmail.com
                </a>
              </FooterLink>
              <FooterLink>
                <a href="https://www.matheusbarrosti.com">
                  <i className="fas fa-globe"></i> www.matheusbarrosti.com
                </a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterContent>
        
        <FooterBottom>
          <Copyright>&copy; {t('footer.right')} </Copyright>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;