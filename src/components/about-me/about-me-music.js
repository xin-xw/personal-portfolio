import { Heading, Flex, Box, useMediaQuery, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import React from "react";
import AboutMeSpotifyRecentSongs from "./about-me-spotify-recent-songs.js";
import AboutMeSpotifyTopTracks from "./about-me-spotify-top-tracks-mapping.js";
import ActionButton from "../action-button.js";
import NextLink from "next/link";

export default function AboutMeMusic() {
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
        <AboutMeSpotifyRecentSongs />
        <Box>
          <NextLink
            href={
              "https://open.spotify.com/user/8grb62nlus2653d01p4bctwbd?si=a6193cff82514d8e"
            }
            passHref
          >
            <ActionButton as="a" target="_blank" mt={-2} mb={5}>
              <Text fontWeight="bold" size="md">
                {"Check out my Spotify profile →"}
              </Text>
            </ActionButton>
          </NextLink>
        </Box>
      </Box>

      <Box mt={3}>
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
