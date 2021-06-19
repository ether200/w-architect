import React from "react";
import { useRouter } from "next/router";

import {
  Stack,
  Button,
  Divider,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const NavigationDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const router = useRouter();

  function handleNavigation(path: string) {
    onClose();
    router.push(path);
  }

  return (
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
          >
            <Button
              variant="link"
              onClick={() => handleNavigation("/")}
              color="white"
              textTransform="uppercase"
              fontSize="xs"
              letterSpacing={1}
              fontWeight="bold"
            >
              Home
            </Button>
            <Button
              variant="link"
              onClick={() => handleNavigation("/servicios")}
              color="white"
              textTransform="uppercase"
              fontSize="xs"
              letterSpacing={1}
              fontWeight="bold"
            >
              Servicios
            </Button>
            <Button
              variant="link"
              onClick={() => handleNavigation("/trabajos")}
              color="white"
              textTransform="uppercase"
              fontSize="xs"
              letterSpacing={1}
              fontWeight="bold"
            >
              Trabajos
            </Button>
            <Button
              variant="link"
              onClick={() => handleNavigation("/contacto")}
              color="white"
              textTransform="uppercase"
              fontSize="xs"
              letterSpacing={1}
              fontWeight="bold"
            >
              Contacto
            </Button>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default NavigationDrawer;
