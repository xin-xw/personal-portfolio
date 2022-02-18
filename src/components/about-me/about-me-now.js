import {
  IconButton,
  VStack,
  Stack,
  Heading,
  Flex,
  Box,
  Text,
  HStack,
  useMediaQuery,
  Center,
  useColorMode,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import React from "react";
import SocialMediaIcons from "../about-me/about-me-social-media-icons.js";
import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import ActionButton from "../action-button";
import AboutMeSpotifyFetcher from "./about-me-spotify.js";

function TextLink2({ link, name, icon, ...rest }) {
  const { colorMode, toggleColorMode } = useColorMode("black", "white");
  return (
    <NextLink href={link} passHref>
      <IconButton
        as="a"
        // leftIcon={icon}
        target="_blank"
        fontWeight="normal"
        variant="link"
        color={colorMode === "dark" ? "white" : "dark"}
      >
        <Text color={colorMode === "dark" ? "white" : "dark"}>{name} </Text>
      </IconButton>
    </NextLink>
  );
}
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
