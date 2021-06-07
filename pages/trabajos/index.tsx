import React from "react";

import { SimpleGrid } from "@chakra-ui/react";
import ProjectPreview from "../../components/projectPreview";
import CenterContainer from "../../components/centerContainer";

import { dummyProjects } from "../../data/projects";

const Projects: React.FC = () => {
  return (
    <>
      <CenterContainer>
        <SimpleGrid minChildWidth="325px" my={4} gap={4}>
          {dummyProjects.map((dummyProject) => (
            <ProjectPreview
              imgSrc={dummyProject.poster}
              titulo={dummyProject.titulo}
              slug={dummyProject.slug}
              key={dummyProject.titulo}
            />
          ))}
        </SimpleGrid>
      </CenterContainer>
    </>
  );
};

export default Projects;
