import Head from "next/head";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme";
import ScrollToTop from "../src/components/scroll-to-top";
import { Box } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ScrollToTop></ScrollToTop>
      <Head>
        <title>Xin Wang</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico/" />
      </Head>

      <Component {...pageProps} />
      <Box mb={50}></Box>
    </ChakraProvider>
  );
}

export default MyApp;
