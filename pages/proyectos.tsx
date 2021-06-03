import React from "react";

import { SimpleGrid } from "@chakra-ui/react";
import Project from "../components/project";
import Navbar from "../components/navbar";
import CenterContainer from "../components/centerContainer";

const Projects: React.FC = () => {
  return (
    <>
      <CenterContainer>
        <SimpleGrid minChildWidth="400px" py={12} gap={6}>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </SimpleGrid>
      </CenterContainer>
    </>
  );
};

export default Projects;
