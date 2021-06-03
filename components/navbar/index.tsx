import React from "react";
import Link from "next/link";

import { Box, Stack, Text, Link as ChakraLink } from "@chakra-ui/react";

import CenterContainer from "../centerContainer";

const Navbar: React.FC = () => {
  return (
    <Box w="100%" backgroundColor="gray.50" height={20} shadow="md">
      <CenterContainer>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          height="100%"
        >
          <Text fontSize="2xl" fontWeight="extrabold">
            W
          </Text>
          <Stack direction="row" spacing={8}>
            <ChakraLink as={Link} href="/">
              Home
            </ChakraLink>
            <ChakraLink as={Link} href="/proyectos">
              Proyectos
            </ChakraLink>
            <ChakraLink as={Link} href="/servicios">
              Servicios
            </ChakraLink>
            <ChakraLink as={Link} href="/contacto">
              Contacto
            </ChakraLink>
          </Stack>
        </Stack>
      </CenterContainer>
    </Box>
  );
};

export default Navbar;
