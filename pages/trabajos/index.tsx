import React from "react";
import { GET_WORKPREVIEW_INFO, WorkPreviewInfoData } from "../../lib";
import client from "../../apollo-client";

import { SimpleGrid, Box } from "@chakra-ui/react";
import ProjectPreview from "../../components/projectPreview";
import CenterContainer from "../../components/centerContainer";

import { motion } from "framer-motion";
import { stagger } from "../../animation";

const Projects: React.FC<WorkPreviewInfoData> = ({ trabajos }) => {
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
          {trabajos.map((work) => (
            <ProjectPreview
              imgSrc={work.Poster.url}
              titulo={work.Titulo}
              slug={work.Slug}
              key={work.id}
            />
          ))}
        </SimpleGrid>
      </CenterContainer>
    </Box>
  );
};

export async function getStaticProps() {
  const { data } = await client.query<WorkPreviewInfoData>({
    query: GET_WORKPREVIEW_INFO,
  });

  return {
    props: {
      trabajos: data.trabajos,
    },
  };
}

export default Projects;
