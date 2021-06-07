import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { dummyProjects, ProjectI } from "../../data/projects";

import { Box } from "@chakra-ui/react";
import CenterContainer from "../../components/centerContainer";
import ProjectGrid from "../../components/projectView/ProjectGrid";

type Props = {
  project: ProjectI;
};

const Proyecto: React.FC<Props> = ({ project }) => {
  return (
    <Box height="100%" width="100%" my={4}>
      <CenterContainer>
        <ProjectGrid project={project} />
      </CenterContainer>
    </Box>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: dummyProjects.map((dummyProject) => ({
      params: { slug: dummyProject.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filteredProject = dummyProjects.filter(
    (dummyProject) => dummyProject.slug === params?.slug
  );
  return {
    props: {
      project: filteredProject[0],
    },
  };
};

export default Proyecto;
