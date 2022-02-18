import {
  Stack,
  Heading,
  Flex,
  Box,
  Text,
  Image,
  useMediaQuery,
  Spacer,
  colorMode,
  Center,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import NextLink from "next/link";
import React from "react";
// import TypeWriter from "../typewriter";

export default function ProjectHeader() {
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
        {/* Mobile Display */}

        <Image
          // src="/AvatarImg.jpg"
          src="./project-xin-profile-mobile.svg"
          alt="Cartoon Picture Smiling"
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="none"
          width="100px"
          height="160px"
          mt="3"
          display={isMinWidth ? "none" : "block"}
        />

        <Box my={isMinWidth ? 20 : 3}>
          <Heading fontSize="4xl" fontWeight="bold">
            {"/projects"}
          </Heading>
        </Box>

        <Spacer />
        <Image
          src="./project-xin-profile-desktop.svg"
          alt="Cartoon Picture Smiling"
          backgroundColor="transparent"
          boxShadow="none"
          height="280px"
          display={isMinWidth ? "block" : "none"}
        />
      </Flex>
    </Stack>
  );
}
