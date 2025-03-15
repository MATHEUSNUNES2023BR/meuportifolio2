// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles'
import './i18n';
import theme from './styles/theme';
import HomePage from './components/templates/HomePage';
import ServicesPage from './components/templates/ServicesPage';
import ProjectsPage from './components/templates/ProjectsPage';
import ContactPage from './components/templates/ContactPage';
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
