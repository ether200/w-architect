import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Box, Text, Heading } from "@chakra-ui/react";

const Project: React.FC = () => {
  const [isInside, setIsInside] = React.useState<boolean>(false);

  return (
    <Link href="/proyecto">
      <Box
        height="400px"
        cursor="pointer"
        position="relative"
        onMouseEnter={() => setIsInside((state) => !state)}
        onMouseLeave={() => setIsInside((state) => !state)}
      >
        <Image alt="image-1" src="/img-1.jpg" layout="fill" objectFit="cover" />
        {/* Hover Modal */}
        <Box
          position="absolute"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          visibility={isInside ? "visible" : "hidden"}
          zIndex="1"
          top="0"
          left="0"
          bottom="0"
          right="0"
          backgroundColor="blackAlpha.700"
          color="white"
        >
          <Heading size="xs" textTransform="uppercase">
            Title goes here
          </Heading>
          {/* Underline */}
          <Box w={12} h="0.5" backgroundColor="white" marginTop={4}></Box>
        </Box>
      </Box>
    </Link>
  );
};

export default Project;
