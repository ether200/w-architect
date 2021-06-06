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
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import CenterContainer from "../centerContainer";

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="100%" backgroundColor="gray.100" height={20} shadow="md">
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
            textTransform="uppercase"
            fontSize="sm"
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
            <Icon as={FiMenu} h={6} w={6} onClick={onOpen} cursor="pointer" />
          </Stack>
        </Stack>
        <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bgColor="black">
            <DrawerHeader>
              <DrawerCloseButton color="white" />
            </DrawerHeader>
            <DrawerBody>
              <Stack
                direction="column"
                spacing={4}
                padding={4}
                alignItems="center"
                divider={<Divider />}
                color="white"
                textTransform="uppercase"
                fontSize="sm"
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
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </CenterContainer>
    </Box>
  );
};

export default Navbar;
