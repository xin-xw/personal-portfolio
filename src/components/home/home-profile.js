import {
  Stack,
  Heading,
  Flex,
  Box,
  Text,
  Image,
  useMediaQuery,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import React from "react";

export default function HomeProfile() {
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
          src="/media/home/pfp-mobile.svg"
          alt="Profile Picture"
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
            {"Xin Wang"}
          </Heading>
          {/* <Text my={1.5}>{"Incoming Software Engineer @ VMware"}</Text> */}
          <Text my={2} fontWeight={"500"}>
            {"Software Engineer @ VMware"}
          </Text>
          <Text my={2} fontWeight={"500"}>
            {"☁️ VMware on Cloud (VMC) POD Team"}
          </Text>

          <Text my={2} color={colorMode === "dark" ? "gray.300" : "gray.700"}>
            {"📍 San Francisco Bay Area"}
          </Text>
        </Box>

        <Spacer />
        <Image
          src="/media/home/pfp-desktop.svg"
          alt="Profile Picture"
          backgroundColor="transparent"
          boxShadow="none"
          height="385px"
          mt="auto"
          mx="auto"
          display={isMinWidth ? "block" : "none"}
        />
      </Flex>
    </Stack>
  );
}
