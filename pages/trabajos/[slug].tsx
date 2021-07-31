import React from "react";
import { gql, useQuery } from "@apollo/client";
import client from "../../apollo-client";
import { GetStaticPaths, GetStaticProps } from "next";
import { dummyProjects, ProjectI } from "../../data/projects";

import { Box } from "@chakra-ui/react";
import CenterContainer from "../../components/centerContainer";
import ProjectGrid from "../../components/projectView/ProjectGrid";

import { motion } from "framer-motion";

type Props = {
  trabajo: any;
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
        <h1>Dolar</h1>
      </CenterContainer>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params?.slug);

  const {
    data: { trabajos },
  } = await client.query({
    query: gql`
      query getTrabajo($slug: String!) {
        trabajos(where: { Slug: $slug }) {
          Titulo
          Descripcion
          Ciudad
          M2
          Year
          Imagenes {
            url
          }
        }
      }
    `,
    variables: { slug: params?.slug },
  });

  return {
    props: {
      trabajo: trabajos[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { trabajos },
  } = await client.query({
    query: gql`
      query getWorks {
        trabajos {
          Slug
        }
      }
    `,
  });

  return {
    paths: trabajos.map((trabajo: any) => ({
      params: { slug: trabajo.Slug },
    })),
    fallback: false,
  };
};

export default Proyecto;
