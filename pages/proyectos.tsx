import React from "react";

import { SimpleGrid } from "@chakra-ui/react";
import Project from "../components/projectPreview";
import CenterContainer from "../components/centerContainer";

const Projects: React.FC = () => {
  return (
    <>
      <CenterContainer>
        <SimpleGrid minChildWidth="325px" my={4} gap={4}>
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
