import React from "react";
import Image from "next/image";

import { Stack, Box, Heading, Text } from "@chakra-ui/react";

type Props = {
  reverse?: boolean;
  imagePath: string;
};

const ServiceCard: React.FC<Props> = ({ reverse, imagePath }) => {
  return (
    <Stack
      height={700}
      width="100%"
      // flexDirection={reverse ? "row-reverse" : "row"}
      direction={{
        base: "column-reverse",
        lg: reverse ? "row-reverse" : "row",
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width={{ base: "100%", lg: "50%" }}
        position="relative"
        height={{ base: "200%", lg: "100%" }}
      >
        <Image alt="image-5" src={imagePath} layout="fill" objectFit="cover" />
      </Box>
      <Stack
        width={{ base: "100%", lg: "50%" }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        spacing={8}
        marginY="0 !important"
        paddingY={8}
        paddingX={{ base: 8, lg: 12 }}
      >
        <Heading
          alignSelf={{ base: "", lg: "start" }}
          textTransform="uppercase"
        >
          Service Title
        </Heading>
        <Box
          w={10}
          h="0.5"
          backgroundColor="black"
          alignSelf={{ base: "", lg: "start" }}
        ></Box>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          doloribus similique laborum, aut ad placeat libero aliquid
          perspiciatis maiores sequi enim ea nisi illo! Excepturi itaque
          repudiandae possimus culpa praesentium?
        </Text>
      </Stack>
    </Stack>
  );
};

export default ServiceCard;
