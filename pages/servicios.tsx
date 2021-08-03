import React from "react";
import { GET_SERVICES_INFO, ServiceInfoData } from "../lib/index";
import client from "../apollo-client";

import { Box } from "@chakra-ui/react";
import CenterContainer from "../components/centerContainer";
import ServiceCard from "../components/serviceCard";

import { motion } from "framer-motion";

const Services: React.FC<ServiceInfoData> = ({ servicios }) => {
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
          {servicios.map((service, index) => (
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
  const { data } = await client.query<ServiceInfoData>({
    query: GET_SERVICES_INFO,
  });

  return {
    props: {
      servicios: data.servicios,
    },
  };
}

export default Services;
