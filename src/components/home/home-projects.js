import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { useEffect, useState } from "react";
import ActionButton from "../action-button";
import ProjectCardItem from "../projects/project-card-template";

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
            Recent projects
          </Heading>
        </Box>

        <Stack
          direction={isMinWidth ? "column" : "column"}
          spacing={5}
          align="center"
        >
          <ProjectCardItem
            title="ment-to-be"
            desc={
              "An application that aims to match computer science students with industry professionals. Our goal for this platform was to provide an open space for students to gain more clarity and guidance towards their future. Students can gain more information about specific fields within the industry such as: front-end, back-end, full stack, machine learning, and more! This is also an open space for any career advice as well as any questions they may have throughout their job/internship recruiting process."
            }
            icon="/media/home/projects-menttobe-icon.png"
            tags={["React.js", "Express.js", "MongoDB", "ChakraUI"]}
            gh_link={"https://github.com/xinwng/ment-to-be"}
          ></ProjectCardItem>

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
        </Stack>

        <Box>
          <NextLink href={"/projects"} passHref>
            <ActionButton mt={1.5}>
              <Text fontWeight="bold" size="sm">
                {"View all projects →"}
              </Text>
            </ActionButton>
          </NextLink>
        </Box>
      </Stack>
    </Flex>
  );
}
