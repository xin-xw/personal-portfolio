import { Heading, Flex, Box, useMediaQuery, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import React from "react";
import AboutMeSpotifyRecentSongs from "./about-me-spotify-recent-songs.js";
import AboutMeSpotifyTopTracks from "./about-me-spotify-top-tracks-mapping.js";

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
      <Box my={4}>
        <Heading fontSize="3xl" fontWeight="bold">
          {"Music"}
        </Heading>
      </Box>

      <Box mt={0}>
        <Text fontSize="1.3rem" fontWeight="bold">
          {"Right now, I'm listening to..."}
        </Text>
      </Box>

      <Box>
        <AboutMeSpotifyRecentSongs />
      </Box>

      <Box mt={8}>
        <Text fontSize="1.3rem" fontWeight="bold">
          {"My top tracks for this month"}
        </Text>
        <Box>
          <AboutMeSpotifyTopTracks />
        </Box>
      </Box>
    </Flex>
  );
}
