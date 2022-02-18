import { VStack, Center, Box, Spacer, useMediaQuery } from "@chakra-ui/react";
import Profile from "../src/components/home/home-profile";
import Header from "../src/components/navbar";
import Bio from "../src/components/home/home-bio";
import HomeProjects from "../src/components/home/home-projects";
import CurrentDoings from "../src/components/home/doings/current-doings";
import PastDoings from "../src/components/home/doings/past-doings";
import { Container } from "../src/components/Container";
import { useState, useEffect } from "react";
import NextLink from "next/link";

export default function Home() {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
