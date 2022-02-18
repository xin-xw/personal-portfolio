import { Box, useMediaQuery } from "@chakra-ui/react";
import Profile from "../src/Components/home/home-profile";
import Header from "../src/Components/navbar";
import Bio from "../src/Components/home/home-bio";
import HomeProjects from "../src/Components/home/home-projects";
import CurrentDoings from "../src/Components/home/doings/current-doings";
import PastDoings from "../src/Components/home/doings/past-doings";
import { Container } from "../src/Components/Container";
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
        <HomeProjects />
      </Box>
      <Box w="100%" my="3rem">
        <CurrentDoings />
      </Box>
      <Box w="100%" my="3rem">
        <PastDoings />
      </Box>
    </Container>
  );
}
