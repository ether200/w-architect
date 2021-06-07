import React from "react";
import Image from "next/image";

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
import { ProjectI } from "../../data/projects";

import { motion } from "framer-motion";
import { stagger, fadeInUp } from "../../animation";

type Props = {
  project: ProjectI;
};

const ProjectGrid: React.FC<Props> = ({ project }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  function renderImages(images: string[]) {
    return images.map((imgSrc, i) => (
      <GridItem
        rowSpan={isLargerThan768 ? 4 : 2}
        position="relative"
        colSpan={isLargerThan768 ? 1 : 2}
        key={imgSrc}
        rowStart={i === 0 ? (isLargerThan768 ? 2 : 4) : undefined}
        as={motion.div}
        variants={fadeInUp}
      >
        <Image alt={imgSrc} src={imgSrc} layout="fill" objectFit="cover" />
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
        bgColor="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="100%"
        p={4}
        backgroundColor="black"
        color="white"
        as={motion.div}
        variants={fadeInUp}
      >
        <Heading textTransform="uppercase">{project.titulo}</Heading>
        {/* Icons Container */}
        <Stack
          direction="row"
          width="100%"
          justifyContent="space-around"
          alignItems="center"
          marginTop={12}
        >
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Icon as={FaWaveSquare} height={6} width={6} />
            <Text>{project.m2}</Text>
          </Stack>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Icon as={GoLocation} height={6} width={6} />
            <Text>{project.lugar}</Text>
          </Stack>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Icon as={MdDateRange} height={6} width={6} />
            <Text>{project.año}</Text>
          </Stack>
        </Stack>
        <Text marginTop={12} textAlign="center">
          {project.descripcion}
        </Text>
      </GridItem>
      {/* End of Description */}

      {renderImages(project.imagenes)}
    </Grid>
  );
};

export default ProjectGrid;
