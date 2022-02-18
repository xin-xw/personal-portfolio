import { Heading, Flex, Box, useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import React from "react";
import AboutMeSpotifyFetcher from "./about-me-spotify.js";

export default function Bio() {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Flex direction="column">
      <Box my={1}>
        <Heading fontSize="3xl" fontWeight="bold">
          At this moment
        </Heading>
      </Box>

      <AboutMeSpotifyFetcher />
    </Flex>
  );
}
