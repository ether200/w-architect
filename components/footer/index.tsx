import React from "react";

import { Box, Stack, Heading, Link, Icon } from "@chakra-ui/react";
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
            <Heading fontSize="lg" cursor="pointer">
              W
            </Heading>
          </Link>
          <Stack direction="row" spacing={8}>
            <Link href="/" isExternal>
              <Icon as={FaFacebookSquare} w={6} h={6} />
            </Link>
            <Link href="/" isExternal>
              <Icon as={FaInstagramSquare} w={6} h={6} />
            </Link>
            <Link href="/" isExternal>
              <Icon as={FaLinkedin} w={6} h={6} />
            </Link>
          </Stack>
        </Stack>
      </CenterContainer>
    </Box>
  );
};

export default Footer;
