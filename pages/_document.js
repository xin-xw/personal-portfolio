import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../src/theme";
import { ColorModeScript } from "@chakra-ui/react";

export default class DocumentB extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="website icon" href="/media/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
