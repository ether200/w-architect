import React from "react";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { dummyProjects } from "../../data/projects";

import {
  Box,
  Grid,
  Heading,
  Text,
  GridItem,
  Stack,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import CenterContainer from "../../components/centerContainer";

import { GoLocation } from "react-icons/go";
import { MdDateRange } from "react-icons/md";
import { FaWaveSquare } from "react-icons/fa";

import ProjectGrid from "../../components/projectView/ProjectGrid";

const Proyecto = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box height="100%" width="100%" my={4}>
      <CenterContainer>
        <ProjectGrid />
      </CenterContainer>
    </Box>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: dummyProjects.map((dummyProject) => ({
      params: { slug: dummyProject.slug },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = dummyProjects.filter(
    (dummyProject) => dummyProject.slug === params?.slug
  );
  return {
    props: {
      project,
    },
  };
};
