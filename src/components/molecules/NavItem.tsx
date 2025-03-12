import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  to: string;
  label: string;
}

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  padding: 0.5rem 1rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1rem;
    right: 1rem;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover:after,
  &.active:after {
    transform: scaleX(1);
  }
`;

const NavItem: React.FC<NavItemProps> = ({ to, label }) => {
  return (
    <StyledNavLink to={to}>{label}</StyledNavLink>
  );
};

export default NavItem;
