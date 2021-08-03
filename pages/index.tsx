import Image from "next/image";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";

import { motion } from "framer-motion";

// @ts-ignore
import Image1 from "../public/img-1.jpg";
// @ts-ignore
import Image2 from "../public/img-2.jpg";
// @ts-ignore
import Image3 from "../public/img-3.jpg";
// @ts-ignore
import Image4 from "../public/img-4.jpg";

const settings = {
  fade: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

export default function Home() {
  return (
    <Box
      width="100%"
      height="100%"
      as={motion.div}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Slider {...settings}>
        <Box w="100vw" h="100vh" position="relative">
          <Image
            alt="image-1"
            src={Image1}
            layout="fill"
            objectFit="cover"
            priority={true}
            placeholder="blur"
          />
        </Box>
        <Box w="100vw" h="100vh" position="relative">
          <Image
            alt="image-2"
            src={Image2}
            layout="fill"
            objectFit="cover"
            priority={true}
            placeholder="blur"
          />
        </Box>
        <Box w="100vw" h="100vh" position="relative">
          <Image
            alt="image-3"
            src={Image3}
            layout="fill"
            objectFit="cover"
            priority={true}
            placeholder="blur"
          />
        </Box>
        <Box w="100vw" h="100vh" position="relative">
          <Image
            alt="image-4"
            src={Image4}
            layout="fill"
            objectFit="cover"
            priority={true}
            placeholder="blur"
          />
        </Box>
      </Slider>
    </Box>
  );
}
