import React from "react";
import Image from "next/image";

import { Box, Heading } from "@chakra-ui/react";

const Project: React.FC = () => {
  const [isInside, setIsInside] = React.useState<boolean>(false);

  return (
    <Box
      height="400px"
      position="relative"
      cursor="pointer"
      onMouseEnter={() => setIsInside((state) => !state)}
      onMouseLeave={() => setIsInside((state) => !state)}
    >
      <Box w="100%" h="100%" zIndex="1" position="relative">
        <Image alt="image-1" src="/img-1.jpg" layout="fill" objectFit="cover" />
      </Box>
      {/* Hover Modal */}
      <Box
        position="absolute"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        visibility={isInside ? "visible" : "hidden"}
        zIndex="2"
        top="0"
        left="0"
        bottom="0"
        right="0"
        backgroundColor="blackAlpha.700"
        color="white"
      >
        <Heading>Title goes here</Heading>
        {/* Underline */}
        <Box w={12} h="0.5" backgroundColor="white" marginTop={4}></Box>
      </Box>
    </Box>
  );
};

export default Project;
