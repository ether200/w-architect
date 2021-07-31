import React from "react";
import { gql } from "@apollo/client";
import client from "../../apollo-client";

import { SimpleGrid, Box } from "@chakra-ui/react";
import ProjectPreview from "../../components/projectPreview";
import CenterContainer from "../../components/centerContainer";

import { dummyProjects } from "../../data/projects";
import { motion } from "framer-motion";
import { stagger } from "../../animation";

export interface WorkPreview {
  Slug: string;
  Titulo: string;
  id: string;
  Poster: {
    url: string;
  };
}

type Props = {
  works: WorkPreview[];
};

const Projects: React.FC<Props> = ({ works }) => {
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
          {works.map((work) => (
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
  const { data } = await client.query({
    query: gql`
      query getWorks {
        trabajos {
          id
          Titulo
          Slug
          Poster {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      works: data.trabajos,
    },
  };
}

export default Projects;
