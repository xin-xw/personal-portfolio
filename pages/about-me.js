import { VStack, Center, Box, Spacer, useMediaQuery } from "@chakra-ui/react";
import NavBar from "../src/components/navbar";
import { Container } from "../src/components/Container";
import { useState, useEffect } from "react";
import AboutMeHeader from "../src/components/about-me/about-me-header.js";
import AboutMeNow from "../src/components/about-me/about-me-now";

export default function Home() {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Container>
      <Box w="100%" mb={2}>
        <NavBar />
      </Box>
      <Box w="100%" my={2}>
        <AboutMeHeader />
      </Box>
      <Box w="100%" my={2}>
        <AboutMeNow />
      </Box>
    </Container>
  );
}
