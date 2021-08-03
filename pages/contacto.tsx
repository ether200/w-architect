import React from "react";
import client from "../apollo-client";
import { GET_CONTACT_INFO, ContactInfo } from "../lib/index";

import { Box } from "@chakra-ui/react";
import CenterContainer from "../components/centerContainer";
import ServiceCard from "../components/serviceCard";

import { motion } from "framer-motion";

const Contact: React.FC<ContactInfo> = ({ contacto }) => {
  return (
    <Box
      width="100%"
      height="100%"
      my={4}
      as={motion.div}
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
    >
      <CenterContainer>
        <ServiceCard
          title={contacto.Titulo}
          description={contacto.Descripcion}
          imagePath={contacto.Imagen[0].url}
          contact={{
            Email: contacto.Email,
            Curriculum: contacto.Curriculum,
            Telefono: contacto.Telefono,
          }}
        />
      </CenterContainer>
    </Box>
  );
};

export async function getStaticProps() {
  const { data } = await client.query<ContactInfo>({
    query: GET_CONTACT_INFO,
  });

  return {
    props: {
      contacto: data.contacto,
    },
  };
}

export default Contact;
