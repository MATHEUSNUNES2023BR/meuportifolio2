import MainLayout from '../templates/MainLayout';
import Hero from '../organisms/Hero';
import AboutSection from '../organisms/AboutSection';
import { SEO } from '../../SEO';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <SEO title="MATHEUS BARROS | Inicio" description="Serviços especializados em suporte técnico, desenvolvimento web, automação de tarefas, SEO e design. Soluções eficientes e personalizadas para otimizar seu negócio e presença digital." keywords="programador, desenvolvedor web, suporte técnico, design, ti" />
      <Hero />
      <AboutSection />
    </MainLayout>
  );
};

export default HomePage;