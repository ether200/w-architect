import React from "react";

import { SimpleGrid, Box } from "@chakra-ui/react";
import ProjectPreview from "../../components/projectPreview";
import CenterContainer from "../../components/centerContainer";

import { dummyProjects } from "../../data/projects";
import { motion } from "framer-motion";
import { stagger } from "../../animation";

const Projects: React.FC = () => {
  return (
    <Box
      height="100%"
      width="100%"
      my={4}
      as={motion.div}
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
    >
      <CenterContainer>
        <SimpleGrid
          minChildWidth="325px"
          gap={4}
          as={motion.div}
          variants={stagger}
        >
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
