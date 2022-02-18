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
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import React from "react";
import NextLink from "next/link";
import { FiGithub } from "react-icons/fi";

function ProjectCardItem({ title, desc, icon, tags, gh_link, ...rest }) {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <LinkBox as="article" {...rest} mt={2}>
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
    // <Flex direction="column">
    //   <LinkBox
    //     as="article"
    //     p={6}
    //     borderWidth="2px"
    //     borderRadius="sm"
    //     {...rest}
    //     overflow="hidden"
    //     transition="all 0.4s"
    //     transition-timing-function="spring(3 100 10 10)"
    //     _hover={{ transform: "scale(1.025, 1.025)" }}
    //   >
    //     <LinkOverlay href={gh_link} isExternal></LinkOverlay>
    //     {isMinWidth ? (
    //       <Center>
    //         <VStack>
    //           <Box my={1}>
    //             <Image boxSize="80px" src={icon} alt={title}></Image>
    //           </Box>

    //           <Text fontWeight="700" fontSize="1.6em">
    //             {title}
    //           </Text>

    //           {/* <NextLink href={gh_link} passHref>
    //             <IconButton
    //               as="a"
    //               aria-label="Learn more on GitHub"
    //               target="_blank"
    //               borderRadius="sm"
    //               icon={<FiGithub />}
    //               variant="outline"
    //             />
    //           </NextLink> */}
    //         </VStack>
    //       </Center>
    //     ) : (
    //       <VStack>
    //         <Image
    //           boxSize={90}
    //           my={2.5}
    //           src={icon}
    //           alt={title}
    //           display={isMinWidth ? "none" : "block"}
    //         ></Image>
    //         <Text fontWeight="700" fontSize="1.6em">
    //           {title}
    //         </Text>
    //       </VStack>
    //     )}

    //     <Flex direction="column">
    //       <Box p={0}>
    //         <Box my={3}>
    //           <Stack isInline overflow={"hidden"} overflowWrap={false} my={3}>
    //             <Box>
    //               {tags.map((tag) => (
    //                 <Tag
    //                   borderWidth="1.5px"
    //                   mr={1.5}
    //                   my={isMinWidth ? ".5" : "1"}
    //                   key={tag}
    //                   borderRadius="sm"
    //                   variant="subtle"
    //                 >
    //                   <TagLabel fontSize="xs">{tag}</TagLabel>
    //                 </Tag>
    //               ))}
    //             </Box>
    //           </Stack>
    //         </Box>
    //         <Text my={3} fontSize="md" align="left">
    //           {desc}
    //         </Text>
    //       </Box>
    //     </Flex>
    //     {/* <NextLink href={gh_link} passHref>
    //       <Button
    //         as="a"
    //         aria-label="Learn more on GitHub"
    //         target="_blank"
    //         borderRadius="sm"
    //         leftIcon={<FiGithub />}
    //         variant="outline"
    //       ><Button/>
    //     </NextLink> */}
    //     <NextLink href={gh_link} passHref>
    //       <Box align="right">
    //         <Button
    //           bg="transparent"
    //           fontSize="md"
    //           borderRadius={0}
    //           variant="link"
    //           pl={0}
    //           pr={3}
    //           py={3}
    //           w="min-content"
    //           border="2px solid transparent"
    //           color="trueGray.500"
    //           fontWeight="regular"
    //           transition="0.35s ease-out"
    //           leftIcon={<FiGithub />}
    //           _hover={{
    //             border: "2px solid",
    //             pr: 3,
    //             pl: 3,
    //           }}
    //         >
    //           <Text fontWeight="bold" size="sm">
    //             {"Source →"}
    //           </Text>
    //         </Button>
    //       </Box>
    //     </NextLink>
    //   </LinkBox>
    // </Flex>
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
            desc="Splice was ideated through the idea to easily split the check when dining out with friends or family. Users can select the restaurant they choose and the menu for the respective restaurant will display. Each user will select the food they ordered and pass it along to the next person, and the total for each user will output."
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
