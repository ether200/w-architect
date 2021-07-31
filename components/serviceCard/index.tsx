import React from "react";
import Image from "next/image";

import {
  Stack,
  Box,
  Heading,
  Text,
  Icon,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { AiOutlineMail, AiOutlinePhone, AiOutlineFile } from "react-icons/ai";

import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../animation";

type Props = {
  reverse?: boolean | null;
  imagePath: string;
  contact?: {
    Email: string;
    Telefono: string;
    Curriculum: string;
  };
  description: string;
  title: string;
};

const ServiceCard: React.FC<Props> = ({
  reverse,
  imagePath,
  contact,
  description,
  title,
}) => {
  return (
    <Stack
      height={800}
      width="100%"
      direction={{
        base: "column-reverse",
        lg: reverse ? "row-reverse" : "row",
      }}
      justifyContent="center"
      alignItems="center"
      _notLast={{
        marginBottom: 4,
      }}
      as={motion.div}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: [0.6, -0.5, 0.01, 0.99],
        },
      }}
    >
      {/* Image Container */}
      <Box
        width={{ base: "100%", lg: "50%" }}
        position="relative"
        height={{ base: `${!contact ? "50%" : "30%"}`, lg: "100%" }}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
      >
        <Image alt="image-5" src={imagePath} layout="fill" objectFit="cover" />
      </Box>
      {/* Text Container */}
      <Stack
        width={{ base: "100%", lg: "50%" }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height={{ base: `${!contact ? "50%" : "70%"}`, lg: "100%" }}
        spacing={{ base: "4", md: "8" }}
        paddingY={8}
        paddingX={{ base: 8, lg: 12 }}
        bgColor="gray.100"
        margin="0 !important"
        as={motion.div}
        variants={stagger}
      >
        <Heading
          alignSelf={{ base: "", lg: "start" }}
          textTransform="uppercase"
          as={motion.h2}
          variants={fadeInUp}
          color="gray.900"
        >
          {title}
        </Heading>
        <Box
          w={10}
          h="0.5"
          backgroundColor="gray.900"
          alignSelf={{ base: "", lg: "start" }}
          as={motion.div}
          variants={fadeInUp}
        ></Box>
        <Text
          textAlign={{ base: "center", md: "left" }}
          as={motion.p}
          variants={fadeInUp}
          color="gray.900"
        >
          {description}
        </Text>
        {/* Contact Container */}
        {contact && (
          <Stack
            direction={{ base: "column", md: "row" }}
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            color="gray.600"
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
              <Icon as={AiOutlineMail} height={8} width={8} />
              <Text>{contact.Email}</Text>
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              as={motion.div}
              variants={fadeInUp}
            >
              <Icon as={AiOutlinePhone} height={8} width={8} />
              <Text>{contact.Telefono}</Text>
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              as={motion.div}
              variants={fadeInUp}
            >
              <Icon as={AiOutlineFile} height={8} width={8} />
              <Text>
                <ChakraLink href={contact.Curriculum} isExternal>
                  Curriculum
                </ChakraLink>
              </Text>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default ServiceCard;
