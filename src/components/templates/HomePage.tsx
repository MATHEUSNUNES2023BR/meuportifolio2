import MainLayout from '../templates/MainLayout';
import Hero from '../organisms/Hero';
import AboutSection from '../organisms/AboutSection';
import ServicesSection from '../organisms/ServicesSection';
import ProjectsSection from '../organisms/ProjectsSection';
import ContactSection from '../organisms/ContactSection';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </MainLayout>
  );
};

export default HomePage;