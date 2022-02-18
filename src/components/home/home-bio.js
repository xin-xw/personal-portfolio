import {
  IconButton,
  VStack,
  Stack,
  Heading,
  Flex,
  Box,
  Text,
  useMediaQuery,
  useColorMode,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import React from "react";
import SocialMediaIcons from "../about-me/about-me-social-media-icons.js";
import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import ActionButton from "../action-button";

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
    <Flex>
      <Stack>
        <Box my={1}>
          <Heading fontSize="3xl" fontWeight="bold">
            Bio
          </Heading>
        </Box>
        <VStack>
          <Box textAlign="left">
            <Text>
              {
                "Hi! I'm Xin (pronounced like “Shin”) - I love to build great things with great people while having a great time. I enjoy learning, expanding my arsenal of toolsets, and using my knowledge and capabilities to aid and impact others!"
              }
            </Text>
          </Box>

          <Box textAlign="left">
            <Text>
              {
                "Outside of work, I enjoy spending time with my friends, traveling, city-exploring, discovering music, and snowboarding (which I recently picked up)! If you want to chat, you can always reach out to me at: "
              }
              <u>
                <TextLink2
                  link="mailto: xinwng3@gmail.com"
                  name="xinwng3@gmail.com"
                  icon={<ExternalLinkIcon />}
                ></TextLink2>
              </u>
              {"."}
            </Text>
          </Box>
        </VStack>

        {/* <Center>
        <SocialMediaIcons/>
      </Center> */}

        <Box>
          <NextLink href={"/about-me"} passHref>
            <ActionButton mt={1.5}>
              <Text fontWeight="bold" size="sm">
                {"More about me →"}
              </Text>
            </ActionButton>
          </NextLink>
        </Box>
      </Stack>
    </Flex>
  );
}
