import { Box, Heading, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import ActionButton from "../src/components/action-button";
import { Container } from "../src/components/container";
import CurrentDoings from "../src/components/home/current-doings";
import Bio from "../src/components/home/home-bio";
import Profile from "../src/components/home/home-profile";
import HomeProjects from "../src/components/home/home-projects";
import Header from "../src/components/navbar";

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
        <Stack >
          <Box >
            <Heading fontSize="3xl" fontWeight="bold" my={1} >
              Bio
            </Heading>
          </Box>
          <Box>
            <Bio />
          </Box>
          <Box>
            <NextLink href={"/about-me"} passHref>
              <ActionButton mt={0}>
                <Text fontWeight="bold" size="sm">
                  {"More about me →"}
                </Text>
              </ActionButton>
            </NextLink>
          </Box>
        </Stack>

      </Box>

      <Box w="100%" my="3rem">
        <Stack>
          <Heading fontSize="3xl" fontWeight="bold" my={-2}>
            At this moment
          </Heading>
        <CurrentDoings />
          <Box>
            <NextLink href={"/journey"} passHref>
              <ActionButton mt={-1}>
                <Text fontWeight="bold" size="sm">
                  {"Past experiences →"}
                </Text>
              </ActionButton>
            </NextLink>
          </Box>
        </Stack>
      </Box>

      <Box w="100%" my="3rem">
        <Stack>
          <Box>
        <HomeProjects />
          </Box>
          <Box>
            <NextLink href={"/projects"} passHref>
              <ActionButton mt={1}>
                <Text fontWeight="bold" size="sm">
                  {"View all projects →"}
                </Text>
              </ActionButton>
            </NextLink>
          </Box>
        </Stack>
      </Box>

    </Container>
  );
}
