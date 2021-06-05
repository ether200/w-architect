import React from "react";

import { Box } from "@chakra-ui/react";
import CenterContainer from "../components/centerContainer";
import ServiceCard from "../components/serviceCard";

const Contact: React.FC = () => {
  return (
    <Box width="100%" height="100%" my={4}>
      <CenterContainer>
        <ServiceCard imagePath="/img-5.jpg" contact />
      </CenterContainer>
    </Box>
  );
};

export default Contact;
