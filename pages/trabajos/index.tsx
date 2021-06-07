import React from "react";

import { SimpleGrid, Box } from "@chakra-ui/react";
import ProjectPreview from "../../components/projectPreview";
import CenterContainer from "../../components/centerContainer";

import { dummyProjects } from "../../data/projects";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  return (
    <Box
      height="100%"
      width="100%"
      my={4}
      as={motion.div}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <CenterContainer>
        <SimpleGrid minChildWidth="325px" gap={4}>
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
    </Box>
  );
};

export default Projects;
