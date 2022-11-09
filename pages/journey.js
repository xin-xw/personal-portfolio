import { Box, useMediaQuery } from "@chakra-ui/react";
import NavBar from "../src/components/navbar";
import { Container } from "../src/components/container";
import { useState, useEffect } from "react";
import ProjectHeader from "../src/components/projects/project-header";
import JourneyHeader from "../src/components/journey/journey-header";

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
        <JourneyHeader />
      </Box>
    </Container>
  );
}
