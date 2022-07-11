import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  LinkBox,
  Spacer,
  Stack,
  Tag,
  TagLabel,
  Text,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";

function ProjectCardItem({ title, desc, icon, tags, gh_link, ...rest }) {
  const { colorMode } = useColorMode();
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);
  const github_border_colors = useColorModeValue("black", "white");
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
        spacing={4}
      >
        <Box p={2} position="relative" overflow={"hidden"}>
          <HStack>
            <Box mb={3}>
              <Image
                height="45px"
                width="45px"
                layout="fixed"
                src={icon}
                alt={title}
              ></Image>
              <Text my={1} fontWeight="bold" fontSize="2xl">
                {title}
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box>
              <VStack mt={-5}>
                <NextLink
                  href={gh_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    alignItems="center"
                    position={"relative"}
                    cursor="pointer"
                    border={"1px solid"}
                    borderRadius={"3px"}
                    borderColor={github_border_colors}
                    textTransform={"uppercase"}
                    padding={"0px 5px "}
                    transition={"all .2s ease"}
                    transition-timing-function="spring(4 100 10 10)"
                    _hover={{
                      transform: "translateY(-3px)",
                      shadow: "lg",
                    }}
                  >
                    <HStack>
                      {/* {isMinWidth && (
                      <Text fontSize={"xs"} textTransform={"uppercase"}>
                        {"Learn more"}
                      </Text>
                    )} */}

                      <Icon as={FiGithub} align={"center"} boxSize={"18px"} />
                    </HStack>
                  </Button>
                </NextLink>
              </VStack>
            </Box>
          </HStack>

          <VStack align="start" justify="flex-start">
            <HStack>
              <Stack>
                <Text mt={isMinWidth ? "0" : "1"} fontSize="md">
                  {desc}
                </Text>
                <Stack isInline overflow={"hidden"} overflowWrap={false}>
                  <Box my={2}>
                    {tags.map((tag) => (
                      <Tag
                        key={tag}
                        borderRadius="sm"
                        variant="outline"
                        mr={2}
                        mt={isMinWidth ? "0" : "3"}
                      >
                        <TagLabel>
                          <Text color={github_border_colors} fontSize={"sm"}>
                            {tag}
                          </Text>
                        </TagLabel>
                      </Tag>
                    ))}
                  </Box>
                </Stack>
              </Stack>
            </HStack>
          </VStack>
        </Box>
      </HStack>
    </LinkBox>
  );
}

export default ProjectCardItem;
