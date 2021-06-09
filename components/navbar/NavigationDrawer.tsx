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
            textTransform="capitalize"
          >
            <Button
              variant="link"
              onClick={() => handleNavigation("/")}
              color="white"
              fontWeight="normal"
            >
              Home
            </Button>
            <Button
              variant="link"
              onClick={() => handleNavigation("/servicios")}
              color="white"
              fontWeight="normal"
            >
              Servicios
            </Button>
            <Button
              variant="link"
              onClick={() => handleNavigation("/trabajos")}
              color="white"
              fontWeight="normal"
            >
              Trabajos
            </Button>
            <Button
              variant="link"
              onClick={() => handleNavigation("/contacto")}
              color="white"
              fontWeight="normal"
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
