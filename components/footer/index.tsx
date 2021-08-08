import React from "react";
import Link from 'next/link';

import { Box, Stack, Heading, Link as ChakraLink, Icon } from "@chakra-ui/react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

import CenterContainer from "../centerContainer";

const Footer: React.FC = () => {
  return (
    <Box
      w="100%"
      backgroundColor="black"
      height={20}
      shadow="md"
      marginTop="auto"
    >
      <CenterContainer>
        <Stack
          direction="row-reverse"
          justifyContent="space-between"
          alignItems="center"
          height="100%"
          color="gray.600"
        >
          <Link href="/">
            <Heading
              fontSize="2xl"
              fontFamily="Dancing Script"
              cursor="pointer"
            >
              Wal
            </Heading>
          </Link>
          <Stack direction="row" spacing={8}>
            <ChakraLink href="https://www.facebook.com/" isExternal>
              <Icon as={FaFacebookSquare} w={6} h={6} />
            </ChakraLink>
            <ChakraLink href="https://www.instagram.com/" isExternal>
              <Icon as={FaInstagramSquare} w={6} h={6} />
            </ChakraLink>
            <ChakraLink href="https://www.linkedin.com/" isExternal>
              <Icon as={FaLinkedin} w={6} h={6} />
            </ChakraLink>
          </Stack>
        </Stack>
      </CenterContainer>
    </Box>
  );
};

export default Footer;
