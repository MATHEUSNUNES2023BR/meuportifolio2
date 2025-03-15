import { SEO } from "../../SEO";
import ServicesSection from "../organisms/ServicesSection";
import MainLayout from "./MainLayout"

const ServicesPage: React.FC = () => {
  return(
    <MainLayout>
      <SEO title="MATHEUS BARROS | Serviços" description="Conheça os serviços oferecidos, focados em soluções personalizadas e eficientes para atender às suas necessidades tecnológicas e digitais." keywords="programador, desenvolvedor web, suporte técnico, design, ti" />
      <ServicesSection />
    </MainLayout>
  )
}
export default ServicesPage;