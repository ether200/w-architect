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

type Props = {};

const ProjectGrid: React.FC<Props> = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Grid
      width="100%"
      height="100%"
      templateColumns="repeat(2, 1fr)"
      autoRows="192px"
      gap={4}
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
      >
        <Heading textTransform="uppercase">Project Title</Heading>
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
            <Text>380 m2</Text>
          </Stack>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Icon as={GoLocation} height={6} width={6} />
            <Text>Paso del Rey</Text>
          </Stack>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Icon as={MdDateRange} height={6} width={6} />
            <Text>2016</Text>
          </Stack>
        </Stack>
        <Text marginTop={12} textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          doloribus similique laborum, aut ad placeat libero aliquid
          perspiciatis maiores sequi enim ea nisi illo! Excepturi itaque
          repudiandae possimus culpa praesentium?
        </Text>
      </GridItem>
      {/* End of Description */}
      <GridItem
        rowSpan={isLargerThan768 ? 4 : 2}
        position="relative"
        rowStart={isLargerThan768 ? 2 : 4}
        colSpan={isLargerThan768 ? 1 : 2}
      >
        <Image alt="image-5" src="/img-1.jpg" layout="fill" objectFit="cover" />
      </GridItem>
      <GridItem
        rowSpan={isLargerThan768 ? 4 : 2}
        position="relative"
        colSpan={isLargerThan768 ? 1 : 2}
      >
        <Image alt="image-5" src="/img-2.jpg" layout="fill" objectFit="cover" />
      </GridItem>
      <GridItem
        rowSpan={isLargerThan768 ? 4 : 2}
        position="relative"
        colSpan={isLargerThan768 ? 1 : 2}
      >
        <Image alt="image-5" src="/img-3.jpg" layout="fill" objectFit="cover" />
      </GridItem>
      <GridItem
        rowSpan={isLargerThan768 ? 4 : 2}
        position="relative"
        colSpan={isLargerThan768 ? 1 : 2}
      >
        <Image alt="image-5" src="/img-4.jpg" layout="fill" objectFit="cover" />
      </GridItem>
      <GridItem
        rowSpan={isLargerThan768 ? 4 : 2}
        position="relative"
        colSpan={isLargerThan768 ? 1 : 2}
      >
        <Image alt="image-5" src="/img-5.jpg" layout="fill" objectFit="cover" />
      </GridItem>
      <GridItem
        rowSpan={isLargerThan768 ? 4 : 2}
        position="relative"
        colSpan={isLargerThan768 ? 1 : 2}
      >
        <Image alt="image-5" src="/img-6.jpg" layout="fill" objectFit="cover" />
      </GridItem>
      <GridItem
        rowSpan={isLargerThan768 ? 4 : 2}
        position="relative"
        colSpan={isLargerThan768 ? 1 : 2}
      >
        <Image alt="image-5" src="/img-7.jpg" layout="fill" objectFit="cover" />
      </GridItem>
    </Grid>
  );
};

export default ProjectGrid;
