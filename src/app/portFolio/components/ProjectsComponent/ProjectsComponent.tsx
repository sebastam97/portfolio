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

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  repoUrl?: string;
  technologies: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Cloud Library',
    description:
      'Una biblioteca en la nube para gestionar y leer libros digitales, desarrollada con Next js y Tanstack.',
    imageUrl: `${import.meta.env.BASE_URL}BookStore.png`,
    liveUrl: 'https://sebastam97.github.io/cloudLibrary/',
    repoUrl: 'https://github.com/sebastam97/cloudLibrary',
    technologies: [
      'React',
      'TypeScript',
      'Tanstack',
      'Styled-Components',
      'Heroui',
      'Css'
    ]
  }
];

export const ProjectsComponent = () => {
  return (
    <ProjectsSection>
      <h2>Mis Proyectos</h2>
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
                  Ver Demo
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
