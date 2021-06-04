import "../styles/globals.css";
import "../styles/slick.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  const { route } = useRouter();

  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      {route !== "/" && <Footer />}
    </ChakraProvider>
  );
}
export default MyApp;
