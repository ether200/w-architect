import React from "react";
import Image from "next/image";
import { SingleWorkInfo, WorkImages } from "../../lib";

import { GoLocation } from "react-icons/go";
import { MdDateRange } from "react-icons/md";
import { FaWaveSquare } from "react-icons/fa";

import {
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { stagger, fadeInUp } from "../../animation";

type Props = {
  project: SingleWorkInfo;
};

const ProjectGrid: React.FC<Props> = ({ project }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  function renderImages(images: WorkImages[]) {
    return images.map((imgSrc, i) => (
      <GridItem
        rowSpan={isLargerThan768 ? 4 : 2}
        position="relative"
        colSpan={isLargerThan768 ? 1 : 2}
        key={imgSrc.url}
        rowStart={i === 0 ? (isLargerThan768 ? 2 : 4) : undefined}
        as={motion.div}
        variants={fadeInUp}
      >
        <Image
          alt={imgSrc.url}
          src={imgSrc.url}
          layout="fill"
          objectFit="cover"
        />
      </GridItem>
    ));
  }

  return (
    <Grid
      width="100%"
      height="100%"
      templateColumns="repeat(2, 1fr)"
      autoRows="192px"
      gap={4}
      as={motion.div}
      variants={stagger}
    >
      {/* Start of description */}
      <GridItem
        rowSpan={3}
        colSpan={isLargerThan768 ? 1 : 2}
        colStart={isLargerThan768 ? 2 : 1}
        p={4}
        backgroundColor="black"
        color="gray.100"
        as={motion.div}
        variants={fadeInUp}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
          width="100%"
          as={motion.div}
          variants={stagger}
          spacing={8}
        >
          <Heading textTransform="uppercase" as={motion.h2} variants={fadeInUp}>
            {project.Titulo}
          </Heading>
          {/* Icons Container */}
          <Stack
            direction="row"
            width="100%"
            justifyContent="space-around"
            alignItems="center"
            as={motion.div}
            variants={stagger}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              as={motion.div}
              variants={fadeInUp}
            >
              <Icon as={FaWaveSquare} height={6} width={6} />
              <Text>{project.M2}</Text>
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              as={motion.div}
              variants={fadeInUp}
            >
              <Icon as={GoLocation} height={6} width={6} />
              <Text>{project.Ciudad}</Text>
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              as={motion.div}
              variants={fadeInUp}
            >
              <Icon as={MdDateRange} height={6} width={6} />
              <Text>{project.Year}</Text>
            </Stack>
          </Stack>
          <Text
            marginTop={12}
            textAlign="center"
            as={motion.p}
            variants={fadeInUp}
          >
            {project.Descripcion}
          </Text>
        </Stack>
      </GridItem>
      {/* End of Description */}

      {renderImages(project.Imagenes)}
    </Grid>
  );
};

export default ProjectGrid;
