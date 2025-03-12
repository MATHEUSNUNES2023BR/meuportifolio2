import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
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
  .logo{
    width: 60px;
  }
`;


const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  return (
    <LogoWrapper to="/" size={size}>
      <img className='logo' src={logo} alt='Minha Logo'/>
    </LogoWrapper>
  );
};

export default Logo;