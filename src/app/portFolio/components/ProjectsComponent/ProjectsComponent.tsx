import useGetProjects from './hooks/useGetProjects';
import {
  ProjectCard,
  ProjectContent,
  ProjectImage,
  ProjectLinks,
  ProjectsGrid,
  ProjectsSection,
  ProjectTitle,
  TechnologyBadge,
  TechnologyList
} from './styles/ProjectsComponent.styles';

export const ProjectsComponent = () => {
  const { projectsData } = useGetProjects();
  return (
    <ProjectsSection>
      <h2>Mis Proyectos y Colaboraciones</h2>
      <ProjectsGrid>
        {projectsData.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.imageUrl} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <p>{project.description}</p>
              <TechnologyList>
                {project.technologies.map((tech) => (
                  <TechnologyBadge key={tech}>{tech}</TechnologyBadge>
                ))}
              </TechnologyList>
              <ProjectLinks>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Projecto
                </a>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Código
                  </a>
                )}
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};
