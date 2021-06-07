import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animation";

type Props = {
  imgSrc: string;
  titulo: string;
  slug: string;
};

const ProjectPreview: React.FC<Props> = ({ imgSrc, titulo, slug }) => {
  const [isInside, setIsInside] = React.useState<boolean>(false);

  return (
    <Link href={`/trabajos/${slug}`}>
      <Box
        height="400px"
        cursor="pointer"
        position="relative"
        onMouseEnter={() => setIsInside((state) => !state)}
        onMouseLeave={() => setIsInside((state) => !state)}
        as={motion.div}
        variants={fadeInUp}
      >
        <Image alt={titulo} src={imgSrc} layout="fill" objectFit="cover" />
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
            {titulo}
          </Heading>
          {/* Underline */}
          <Box w={12} h="0.5" backgroundColor="white" marginTop={4}></Box>
        </Box>
      </Box>
    </Link>
  );
};

export default ProjectPreview;
