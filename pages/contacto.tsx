import React from "react";
import { gql } from "@apollo/client";
import client from "../apollo-client";

import { Box } from "@chakra-ui/react";
import CenterContainer from "../components/centerContainer";
import ServiceCard from "../components/serviceCard";

import { motion } from "framer-motion";

type Props = {
  contact: {
    Titulo: string;
    Descripcion: string;
    Email: string;
    Telefono: string;
    Curriculum: string;
    Imagen: [
      {
        url: string;
      }
    ];
  };
};

const Contact: React.FC<Props> = ({ contact }) => {
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
          title={contact.Titulo}
          description={contact.Descripcion}
          imagePath={contact.Imagen[0].url}
          contact={{
            Email: contact.Email,
            Curriculum: contact.Curriculum,
            Telefono: contact.Telefono,
          }}
        />
      </CenterContainer>
    </Box>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query getContact {
        contacto {
          Titulo
          Descripcion
          Email
          Telefono
          Curriculum
          Imagen {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      contact: data.contacto,
    },
  };
}

export default Contact;
