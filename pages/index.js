import { Box, useMediaQuery } from "@chakra-ui/react";
import Profile from "../src/components/home/home-profile";
import Header from "../src/components/navbar";
import Bio from "../src/components/home/home-bio";
import HomeProjects from "../src/components/home/home-projects";
import CurrentDoings from "../src/components/home/current-doings";
import PastDoings from "../src/components/home/past-doings";
import { Container } from "../src/components/container";
import { useState, useEffect } from "react";

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
        <Header />
      </Box>
      <Box w="100%">
        <Profile />
      </Box>
      <Box w="100%" mt={isMinWidth ? "-4rem" : "0rem"} mb="3rem">
        <Bio />
      </Box>
      <Box w="100%" my="3rem">
        <CurrentDoings />
      </Box>
      <Box w="100%" my="3rem">
        <HomeProjects />
      </Box>
      <Box w="100%" my="3rem">
        <PastDoings />
      </Box>
    </Container>
  );
}
