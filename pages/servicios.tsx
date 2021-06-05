import React from "react";

import { Box } from "@chakra-ui/react";
import CenterContainer from "../components/centerContainer";
import ServiceCard from "../components/serviceCard";

const Services: React.FC = () => {
  return (
    <>
      <Box height="100%" width="100%" my={4}>
        <CenterContainer>
          <ServiceCard imagePath="/img-5.jpg" />
          <ServiceCard imagePath="/img-6.jpg" reverse />
          <ServiceCard imagePath="/img-7.jpg" />
        </CenterContainer>
      </Box>
    </>
  );
};

export default Services;
