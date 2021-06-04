import React from "react";

import { Container } from "@chakra-ui/react";

const CenterContainer: React.FC = ({ children }) => {
  return (
    <Container maxW="container.xl" height="100%" px={{ base: 4, md: 8 }}>
      {children}
    </Container>
  );
};

export default CenterContainer;
