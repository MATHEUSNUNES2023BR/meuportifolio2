import styled from 'styled-components';

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const SocialLinks: React.FC = () => {
  return (
    <SocialLinksContainer>
      <SocialLink href="https://github.com/MATHEUSNUNES2023BR" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/matheusnunesdebarros/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </SocialLink>
      <SocialLink href="mailto:matheustiservicos@gmail.com">
        <i className="fas fa-envelope"></i>
      </SocialLink>
      <SocialLink href="https://api.whatsapp.com/send?phone=5562991166071" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </SocialLink>
    </SocialLinksContainer>
  );
};

export default SocialLinks;