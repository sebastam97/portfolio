function useGetProjects() {
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
    },
    {
      id: 2,
      title: 'Smiofi-Profesionales',
      description:
        'Una aplicacion web para gestionar casos con firma electronica, desarrollada con React 18 y Firestore.',
      imageUrl: `${import.meta.env.BASE_URL}Smiofi.png`,
      liveUrl: 'https://www.smiofi.com/app/profesional',
      repoUrl: '',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material UI', 'Css']
    },
    {
      id: 3,
      title: 'Smiofi-Clientes',
      description:
        'Una aplicacion web para gestionar casos para clientes con firma electronica, desarrollada con React 18 y Firestore.',
      imageUrl: `${import.meta.env.BASE_URL}smiofi-clientes.png`,
      liveUrl: 'https://www.smiofi.com/app/invitado',
      repoUrl: '',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material UI', 'Css']
    },
    {
      id: 4,
      title: 'Generated Image Profile',
      description:
        'Una aplicación web que utiliza IA (Gemini 2.5 Flash) para generar fotos de perfil profesionales a partir de selfies, ideal para LinkedIn.',
      imageUrl: `${import.meta.env.BASE_URL}generate-image.jpg`,
      liveUrl: 'https://sebastam97.github.io/generated-ImageProfile/',
      repoUrl: 'https://github.com/sebastam97/generated-ImageProfile',
      technologies: ['React', 'TypeScript', 'Gemini AI', 'Vite']
    }
  ];

  return {
    projectsData
  };
}

export default useGetProjects;
