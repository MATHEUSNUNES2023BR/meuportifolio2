import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Raleway:wght@300;400;600;800&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.primary};
    line-height: 1.6;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.secondary};
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  a {
    text-decoration: none;
    color: ${theme.colors.primary};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${theme.colors.secondary};
    }
  }
  
  button {
    background: transparent;
    border: 2px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    padding: 0.75rem 1.5rem;
    font-family: ${theme.fonts.primary};
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.background};
    }
  }
`;

export default GlobalStyles;