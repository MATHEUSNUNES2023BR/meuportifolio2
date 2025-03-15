import { SEO } from "../../SEO";
import ProjectsSection from "../organisms/ProjectsSection";
import MainLayout from "./MainLayout";

const ProjectsPage: React.FC = () => {
  return(
    <MainLayout>
      <SEO title="MATHEUS BARROS | Projetos" description="Confira meus projetos e veja na prática minhas soluções criativas e funcionais." keywords="programador, desenvolvedor web, suporte técnico, design, ti" />
      <ProjectsSection />
    </MainLayout>
  )
}

export default ProjectsPage;