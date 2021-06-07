import React from "react";

import { Box } from "@chakra-ui/react";
import CenterContainer from "../components/centerContainer";
import ServiceCard from "../components/serviceCard";

import { motion } from "framer-motion";

const Contact: React.FC = () => {
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
        <ServiceCard imagePath="/img-5.jpg" contact />
      </CenterContainer>
    </Box>
  );
};

export default Contact;
