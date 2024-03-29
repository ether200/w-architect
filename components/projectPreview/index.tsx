import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Box, Heading } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { fadeInUp } from "../../animation";

type Props = {
  imgSrc: string;
  titulo: string;
  slug: string;
};

const ProjectPreview: React.FC<Props> = ({ imgSrc, titulo, slug }) => {
  const controls = useAnimation();

  return (
    <Link href={`/trabajos/${slug}`}>
      <Box
        height="400px"
        cursor="pointer"
        position="relative"
        onMouseEnter={() => controls.start("visible")}
        onMouseLeave={() => controls.start("hidden")}
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
          initial="hidden"
          zIndex="1"
          top="0"
          left="0"
          bottom="0"
          right="0"
          backgroundColor="blackAlpha.700"
          color="white"
          animate={controls}
          variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
          as={motion.div}
        >
          <Heading
            size="xs"
            textTransform="uppercase"
            as={motion.h2}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 60, opacity: 1 },
            }}
            animate={controls}
          >
            {titulo}
          </Heading>
          {/* Underline */}
          <Box
            w={12}
            h="0.5"
            backgroundColor="white"
            marginTop={4}
            as={motion.div}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 60, opacity: 1 },
            }}
            animate={controls}
          ></Box>
        </Box>
      </Box>
    </Link>
  );
};

export default ProjectPreview;
