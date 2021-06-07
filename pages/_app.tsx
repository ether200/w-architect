import theme from "../theme";
import "@fontsource/raleway/600.css";
import "@fontsource/lato/400.css";
import "../styles/globals.css";
import "../styles/slick.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const { route } = useRouter();

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
      {route !== "/" && <Footer />}
    </ChakraProvider>
  );
}
export default MyApp;
