import {
  Tag,
  TagLabel,
  VStack,
  HStack,
  Stack,
  Heading,
  Flex,
  Box,
  Text,
  Image,
  useMediaQuery,
  IconButton,
  Spacer,
  LinkBox,
  useColorMode,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import React from "react";
import NextLink from "next/link";
import { FiGithub } from "react-icons/fi";

function ProjectCardItem({ title, desc, icon, tags, gh_link, ...rest }) {
  const { colorMode } = useColorMode();
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <LinkBox
      as="article"
      {...rest}
      mt={2}
      bgColor={colorMode === "dark" ? "brand.800" : "brand.200"}
    >
      <HStack
        p={5}
        borderWidth="2px"
        borderRadius="sm"
        overflow={"hidden"}
        textAlign="left"
        align="start"
        spacing={4}
        transition="all 0.2s"
        transition-timing-function="spring(3 100 10 10)"
        _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
      >
        <Box p={2} position="relative" overflow={"hidden"}>
          <Box mb={3}>
            <HStack>
              <Image
                height="40px"
                width="40px"
                layout="fixed"
                src={icon}
                alt={title}
              ></Image>
              <Text fontWeight="bold" fontSize="xl" noOfLines={2}>
                {title}
              </Text>
              <Spacer />
              <NextLink href={gh_link} passHref>
                <IconButton
                  as="a"
                  aria-label="Redirect to project's GitHub"
                  borderRadius={"sm"}
                  fontSize="2xl"
                  shadow="sm"
                  icon={<FiGithub />}
                  variant={"outline"}
                ></IconButton>
              </NextLink>
            </HStack>
          </Box>

          <VStack align="start" justify="flex-start" spacing={1}>
            <HStack>
              <VStack>
                <Text fontSize="md">{desc}</Text>
                <Stack isInline overflow={"hidden"} overflowWrap={false} mb={1}>
                  <Box mt={2}>
                    {tags.map((tag) => (
                      <Tag
                        borderWidth="1.5px"
                        mx={1}
                        my={1}
                        key={tag}
                        borderRadius="sm"
                        variant="subtle"
                      >
                        <TagLabel fontSize="sm">{tag}</TagLabel>
                      </Tag>
                    ))}
                  </Box>
                </Stack>
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </HStack>
    </LinkBox>
  );
}

export default function HomeProjects() {
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
            Projects
          </Heading>
        </Box>

        <Stack
          direction={isMinWidth ? "column" : "column"}
          spacing={5}
          align="center"
        >
          <ProjectCardItem
            title="Spotability"
            desc={
              "Ideated with 3 other colleagues a dating platform based on similarities detected through each other's music taste. Our application received 2 awards: Best Valentine's Day Hack and Best Design (UI) in competition against 160+ other participants at Binghamton University’s HackBU 2022. "
            }
            icon="/media/home/projects-spotability-icon.png"
            tags={[
              "React.js",
              "Django",
              "MongoDB",
              "ChakraUI",
              "Python3",
              "Figma",
            ]}
            gh_link={"https://github.com/xinwng/Spotability"}
          ></ProjectCardItem>

          <ProjectCardItem
            title="Explorify"
            desc="Explorify aims to unleash the potential of Spotify's Recommendation API. Provided your favorite songs along with specific track attributes such as: tempo, valence, energy, popularity, and more - the application aims to recommend you other similar tracks."
            icon="/media/home/projects-explorify-icon.png"
            tags={[
              "Express.js",
              "React.js",
              "AWS EC2",
              "PM2",
              "Nginx",
              "CI/CD",
            ]}
            gh_link={"https://github.com/xinwng/explorify"}
          ></ProjectCardItem>

          <ProjectCardItem
            title="$plice"
            desc="Splice was envisioned through yearning for a way that can easily split the bill when dining out with friends or family. Users can select the restaurant they are dining at and the menu for the respective restaurant will display. Each user will select the food they ordered and pass on the device to the next person. At the end, individualized bills will be generated for each user."
            icon="/media/home/projects-splice-icon.png"
            tags={[
              "C++",
              "Google Test Framework",
              "CI/CD",
              "Prototype",
              "Composite",
            ]}
            gh_link={"https://github.com/xinwng/splice"}
          ></ProjectCardItem>
        </Stack>

        <Box>
          {/* <NextLink href={"/projects"} passHref>
            <ActionButton mt={1.5}>
              <Text fontWeight="bold" size="sm">
                {"More projects →"}
              </Text>
            </ActionButton>
          </NextLink> */}
        </Box>
      </Stack>
    </Flex>
  );
}
