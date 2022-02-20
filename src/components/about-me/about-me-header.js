import {
  Stack,
  Heading,
  Flex,
  Box,
  Image,
  useMediaQuery,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import React from "react";
import AboutMeContact from "./about-me-contact";
// import TypeWriter from "../typewriter";

export default function AboutMeHeader() {
  const { colorMode } = useColorMode();
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Stack>
      <Flex direction={isMinWidth ? "row" : "column"} mt={isMinWidth ? 15 : 0}>
        <Image
          src={
            colorMode === "dark"
              ? "/media/about-me/pfp-night-mode.svg"
              : "/media/about-me/pfp-facing-right.svg"
          }
          alt="Cartoon Picture Happy"
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="none"
          width="100px"
          height="160px"
          mt="3"
          display={isMinWidth ? "none" : "block"}
        />

        <Image
          src={
            colorMode === "dark"
              ? "/media/about-me/pfp-night-mode.svg"
              : "/media/about-me/pfp-facing-right.svg"
          }
          alt="Cartoon Picture Happy"
          backgroundColor="transparent"
          boxShadow="none"
          height="280px"
          display={isMinWidth ? "block" : "none"}
        />
        <Spacer></Spacer>
        <Box my={isMinWidth ? 20 : 3}>
          <Heading
            fontSize="4xl"
            align={isMinWidth ? "right" : "left"}
            mt={isMinWidth ? -5 : 0}
          >
            {/* {"/about-me"} */}
            {"About Me"}
          </Heading>
          <AboutMeContact />
        </Box>
      </Flex>
    </Stack>
  );
}
