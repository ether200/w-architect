export interface ProjectI {
  titulo: string;
  descripcion: string;
  lugar: string;
  año: string;
  m2: string;
  poster: string;
  imagenes: string[];
  slug: string;
}

const project: ProjectI = {
  titulo: "Project",
  descripcion:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
  lugar: "Paso del Rey",
  año: "2015",
  m2: "300 m2",
  poster: "/img-1.jpg",
  imagenes: [
    "/img-1.jpg",
    "/img-2.jpg",
    "/img-3.jpg",
    "/img-4.jpg",
    "/img-5.jpg",
    "/img-6.jpg",
    "/img-7.jpg",
  ],
  slug: "project-1",
};

export const dummyProjects: ProjectI[] = new Array(7)
  .fill(project)
  .map((p, i) => {
    const modifiedProject = { ...p };
    modifiedProject.titulo = `Project ${i + 1}`;
    modifiedProject.poster = `/img-${i + 1}.jpg`;
    modifiedProject.slug = `project-${i + 1}`;
    return modifiedProject;
  });
