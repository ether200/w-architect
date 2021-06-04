import React from "react";
import Link from "next/link";

import {
  Box,
  Stack,
  Text,
  Link as ChakraLink,
  Icon,
  Collapse,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import CenterContainer from "../centerContainer";

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box w="100%" backgroundColor="gray.50" height={20} shadow="md">
      <CenterContainer>
        {/* Navbar */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          height="100%"
        >
          {/* Logo */}
          <Text fontSize="2xl" fontWeight="extrabold">
            W
          </Text>
          {/* Navbar links */}
          <Stack
            direction="row"
            spacing={8}
            display={{ base: "none", md: "flex" }}
          >
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
          {/* Menu Icon */}
          <Stack display={{ base: "flex", md: "none" }}>
            <Icon
              as={isOpen ? MdClose : FiMenu}
              h={6}
              w={6}
              onClick={onToggle}
              cursor="pointer"
            />
          </Stack>
        </Stack>
        <Collapse in={isOpen} animateOpacity>
          <Stack
            direction="column"
            spacing={4}
            padding={4}
            alignItems="center"
            divider={<Divider />}
            bgColor="black"
            position="relative"
            color="white"
            shadow="md"
            zIndex="3"
          >
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
          {/* <Box
            p="40px"
            color="white"
            bg="black"
            zIndex="2"
            position="relative"
            shadow="md"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            quibusdam?
          </Box> */}
        </Collapse>
      </CenterContainer>
    </Box>
  );
};

export default Navbar;
