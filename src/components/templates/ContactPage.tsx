import { SEO } from "../../SEO";
import ContactSection from "../organisms/ContactSection";
import MainLayout from "./MainLayout";

const ContactPage: React.FC = () => {
  return(
    <MainLayout>
      <SEO title="MATHEUS BARROS | Contato" description="Entre em contato conosco" keywords="programador, desenvolvedor web, suporte técnico, design, ti" />
      <ContactSection />
    </MainLayout>
  )
}

export default ContactPage;