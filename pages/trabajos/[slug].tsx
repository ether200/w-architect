import React from "react";
import {
  GET_SINGLEWORK,
  GET_SINGLEWORK_SLUG,
  SingleWorkInfo,
  SingleWorkInfoData,
} from "../../lib";
import client from "../../apollo-client";
import { GetStaticProps } from "next";
import { Box } from "@chakra-ui/react";
import CenterContainer from "../../components/centerContainer";
import ProjectGrid from "../../components/projectView/ProjectGrid";

import { motion } from "framer-motion";

type Props = {
  trabajo: SingleWorkInfo;
};

const Proyecto: React.FC<Props> = ({ trabajo }) => {
  return (
    <Box
      height="100%"
      width="100%"
      my={4}
      as={motion.div}
      initial="initial"
      animate="animate"
    >
      <CenterContainer>
        <ProjectGrid project={trabajo} />
      </CenterContainer>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {
    data: { trabajos },
  } = await client.query<SingleWorkInfoData>({
    query: GET_SINGLEWORK,
    variables: { slug: params?.slug },
  });

  return {
    props: {
      trabajo: trabajos[0],
    },
  };
};

export async function getStaticPaths() {
  const {
    data: { trabajos },
  } = await client.query<SingleWorkInfoData>({
    query: GET_SINGLEWORK_SLUG,
  });

  return {
    paths: trabajos.map((trabajo) => ({
      params: { slug: trabajo.Slug },
    })),
    fallback: false,
  };
}

export default Proyecto;
