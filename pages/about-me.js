import { Box, useMediaQuery } from "@chakra-ui/react";
import NavBar from "../src/Components/navbar";
import { Container } from "../src/Components/Container";
import { useState, useEffect } from "react";
import AboutMeHeader from "../src/Components/about-me/about-me-header.js";
import AboutMeNow from "../src/Components/about-me/about-me-now";

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
