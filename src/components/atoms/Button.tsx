import styled from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  padding: ${props => {
    switch (props.size) {
      case 'small': return '0.5rem 1rem';
      case 'large': return '1rem 2rem';
      default: return '0.75rem 1.5rem';
    }
  }};
  font-size: ${props => {
    switch (props.size) {
      case 'small': return '0.875rem';
      case 'large': return '1.25rem';
      default: return '1rem';
    }
  }};
  border: 2px solid ${props => {
    switch (props.variant) {
      case 'secondary': return props.theme.colors.secondary;
      case 'outline': return props.theme.colors.primary;
      default: return props.theme.colors.primary;
    }
  }};
  background-color: ${props => {
    switch (props.variant) {
      case 'secondary': return props.theme.colors.secondary;
      case 'outline': return 'transparent';
      default: return props.theme.colors.primary;
    }
  }};
  color: ${props => {
    switch (props.variant) {
      case 'outline': return props.theme.colors.primary;
      default: return props.theme.colors.background;
    }
  }};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;

  &:hover {
    background-color: ${props => {
      switch (props.variant) {
        case 'secondary': return props.theme.colors.tertiary;
        case 'outline': return props.theme.colors.primary;
        default: return props.theme.colors.secondary;
      }
    }};
    color: ${props => props.variant === 'outline' ? props.theme.colors.background : props.theme.colors.background};
  }
`;

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  onClick 
}) => {
  return (
    <StyledButton variant={variant} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
