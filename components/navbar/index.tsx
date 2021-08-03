import React from "react";
import Link from "next/link";

import {
  Box,
  Stack,
  Heading,
  Link as ChakraLink,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

import CenterContainer from "../centerContainer";
import NavigationDrawer from "./NavigationDrawer";

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOnTop, setIsOnTop] = React.useState(true);

  React.useEffect(() => {
    const handleNavbarColor = () =>
      window.scrollY >= 80 ? setIsOnTop(false) : setIsOnTop(true);

    window.addEventListener("scroll", handleNavbarColor);

    return () => window.removeEventListener("scroll", handleNavbarColor);
  }, [isOnTop]);

  return (
    <Box
      w="100%"
      height={20}
      shadow={!isOnTop ? "md" : undefined}
      position="sticky"
      top="0"
      zIndex="3"
      bgColor={isOnTop ? "black" : "white"}
    >
      <CenterContainer>
        {/* Navbar */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          height="100%"
          color={isOnTop ? "gray.100" : "gray.900"}
        >
          {/* Logo */}
          <Link href="/">
            <Heading
              fontSize="2xl"
              fontFamily="Dancing Script"
              cursor="pointer"
            >
              Wal
            </Heading>
          </Link>
          {/* Navbar links */}
          <Stack
            direction="row"
            spacing={12}
            display={{ base: "none", md: "flex" }}
            textTransform="uppercase"
            letterSpacing={1}
            fontWeight="bold"
            fontSize="xs"
            color={isOnTop ? "gray.100" : "gray.900"}
          >
            <ChakraLink as={Link} href="/">
              Home
            </ChakraLink>
            <ChakraLink as={Link} href="/servicios">
              Servicios
            </ChakraLink>
            <ChakraLink as={Link} href="/trabajos">
              Trabajos
            </ChakraLink>
            <ChakraLink as={Link} href="/contacto">
              Contacto
            </ChakraLink>
          </Stack>
          {/* Menu Icon */}
          <Stack display={{ base: "flex", md: "none" }}>
            <Icon
              as={FiMenu}
              h={6}
              w={6}
              onClick={onOpen}
              cursor="pointer"
              color={isOnTop ? "gray.100" : "gray.900"}
            />
          </Stack>
        </Stack>
        {/* Drawer */}
        <NavigationDrawer isOpen={isOpen} onClose={onClose} />
      </CenterContainer>
    </Box>
  );
};

export default Navbar;
