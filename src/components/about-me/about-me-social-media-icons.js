import {
  Button,
  Flex,
  useMediaQuery,
  useColorMode,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail, MdOutlinePictureAsPdf } from "react-icons/md";
import NextLink from "next/link";

export default function SocialMediaIcons() {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Flex direction="column" display={["block", "block", "block", "block"]}>
      <SimpleGrid columns={[2, 2, 2, 2]} spacing={5} mt={5}>
        <NextLink href="mailto: xinwng3@gmail.com" passHref>
          <Button
            as="a"
            target="_blank"
            size="md"
            leftIcon={<MdAlternateEmail />}
            borderRadius="sm"
            borderWidth="2px"
            colorScheme="grey"
            variant="outline"
            fontWeight="normal"
            // w="max-content"
            border="2px solid transparent"
            color="trueGray.500"
            transition="0.35s ease-out"
            _hover={{
              color: colorMode === "light" ? "red.500" : "red.200",
              border: "2px solid",
            }}
          >
            Mail
          </Button>
        </NextLink>

        <NextLink href="https://www.linkedin.com/in/xinwng" passHref>
          <Button
            as="a"
            target="_blank"
            size="md"
            leftIcon={<FaLinkedinIn />}
            borderRadius="sm"
            borderWidth="2px"
            colorScheme="grey"
            variant="outline"
            fontWeight="normal"
            // w="max-content"
            border="2px solid transparent"
            color="trueGray.500"
            transition="0.35s ease-out"
            _hover={{
              color: colorMode === "light" ? "blue.500" : "blue.200",
              border: "2px solid",
            }}
          >
            LinkedIn
          </Button>
        </NextLink>

        <NextLink href="https://www.github.com/xinwng" passHref>
          <Button
            as="a"
            target="_blank"
            size="md"
            leftIcon={<FaGithubAlt />}
            borderRadius="sm"
            borderWidth="2px"
            colorScheme="grey"
            variant="outline"
            fontWeight="normal"
            // w="min-content"
            border="2px solid transparent"
            color="trueGray.500"
            transition="0.35s ease-out"
            _hover={{
              color: colorMode === "light" ? "yellow.500" : "yellow.200",
              border: "2px solid",
            }}
          >
            GitHub
          </Button>
        </NextLink>

        <NextLink
          href="https://docs.google.com/document/d/1Bn9X08IqlF0gKhTlndLoVqKNHnDfQH9ue9peZ7Qvalk/edit?usp=sharing"
          passHref
        >
          <Button
            as="a"
            target="_blank"
            size="md"
            leftIcon={<MdOutlinePictureAsPdf />}
            borderRadius="sm"
            borderWidth="2px"
            colorScheme="grey"
            variant="outline"
            fontWeight="normal"
            // w="min-content"
            border="2px solid transparent"
            color="trueGray.500"
            // transition="0.35s ease-out"
            _hover={{
              color: colorMode === "light" ? "purple.500" : "purple.200",
              border: "2px solid",
            }}
          >
            Resume
          </Button>
        </NextLink>
      </SimpleGrid>
    </Flex>
  );
}
