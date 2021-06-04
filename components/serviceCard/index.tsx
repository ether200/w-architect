import React from "react";
import Image from "next/image";

import { Stack, Box, Heading, Text, Icon } from "@chakra-ui/react";

import { AiOutlineMail, AiOutlinePhone, AiOutlineFile } from "react-icons/ai";

type Props = {
  reverse?: boolean;
  imagePath: string;
  contact?: boolean;
};

const ServiceCard: React.FC<Props> = ({ reverse, imagePath, contact }) => {
  return (
    <Stack
      height={700}
      width="100%"
      direction={{
        base: "column-reverse",
        lg: reverse ? "row-reverse" : "row",
      }}
      justifyContent="center"
      alignItems="center"
    >
      {/* Image Container */}
      <Box
        width={{ base: "100%", lg: "50%" }}
        position="relative"
        height={{ base: "200%", lg: "100%" }}
      >
        <Image alt="image-5" src={imagePath} layout="fill" objectFit="cover" />
      </Box>
      {/* Text Container */}
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
        {/* Contact Container */}
        {contact && (
          <Stack
            direction="row"
            width="100%"
            justifyContent="space-between"
            color="gray.600"
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Icon as={AiOutlineMail} height={8} width={8} />
              <Text>ggwpdiaf@gmail.com</Text>
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Icon as={AiOutlinePhone} height={8} width={8} />
              <Text>+5411 3333-3333</Text>
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Icon as={AiOutlineFile} height={8} width={8} />
              <Text>Curriculum</Text>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default ServiceCard;
