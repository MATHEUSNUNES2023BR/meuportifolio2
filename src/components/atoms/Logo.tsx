import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const LogoWrapper = styled(Link)<LogoProps>`
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: 700;
  font-size: ${props => {
    switch (props.size) {
      case 'small': return '1.5rem';
      case 'large': return '3rem';
      default: return '2rem';
    }
  }};
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const LogoCircle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:before {
    content: 'MB';
    font-family: ${props => props.theme.fonts.secondary};
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
  }
`;

const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  return (
    <LogoWrapper to="/" size={size}>
      <LogoCircle />
    </LogoWrapper>
  );
};

export default Logo;