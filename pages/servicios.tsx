import React from "react";
import { gql } from "@apollo/client";
import client from "../apollo-client";

import { Box } from "@chakra-ui/react";
import CenterContainer from "../components/centerContainer";
import ServiceCard from "../components/serviceCard";

import { motion } from "framer-motion";

export interface ServiceInterface {
  Descripcion: string;
  Imagen: {
    url: string;
  };
  Titulo: string;
  id: string;
}

type Props = {
  services: ServiceInterface[];
};

const Services: React.FC<Props> = ({ services }) => {
  console.log(services);

  return (
    <>
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
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              description={service.Descripcion}
              imagePath={service.Imagen.url}
              title={service.Titulo}
              reverse={+index % 2 === 0 ? true : null}
            />
          ))}
        </CenterContainer>
      </Box>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query getServices {
        servicios {
          id
          Titulo
          Imagen {
            url
          }
          Descripcion
        }
      }
    `,
  });

  return {
    props: {
      services: data.servicios,
    },
  };
}

export default Services;
