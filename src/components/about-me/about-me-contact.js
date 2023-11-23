import {
  Button,
  Flex,
  SimpleGrid,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail, MdOutlinePictureAsPdf } from "react-icons/md";

export default function AboutMeContact() {
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
        <NextLink href="mailto: xinw.1215@gmail.com" passHref>
          <Button
            as="a"
            target="_blank"
            size="md"
            leftIcon={<MdAlternateEmail />}
            borderRadius="sm"
            borderWidth="1px"
            colorScheme="grey"
            variant="outline"
            fontWeight="bold"
            border="2px solid transparent"
            _hover={{
              background: colorMode === "light" ? "red.400" : "red.100",
              color: colorMode === "light" ? "black" : "black",
              border: "1px solid",
              borderColor: "transparent",
            }}
          >
            <Text fontSize="sm" fontWeight="bold">
              {"Send an email"}
            </Text>
          </Button>
        </NextLink>

        <NextLink href="https://www.linkedin.com/in/xin-xw" passHref>
          <Button
            as="a"
            target="_blank"
            size="md"
            leftIcon={<FaLinkedinIn />}
            borderRadius="sm"
            borderWidth="1px"
            colorScheme="grey"
            variant="outline"
            fontWeight="bold"
            border="2px solid transparent"
            _hover={{
              background: colorMode === "light" ? "blue.400" : "blue.100",
              color: colorMode === "light" ? "black" : "black",
              border: "1px solid",
              borderColor: "transparent",
            }}
          >
            <Text fontSize="sm" fontWeight="bold">
              {"View LinkedIn"}
            </Text>
          </Button>
        </NextLink>

        <NextLink href="https://www.github.com/xinwang-git" passHref>
          <Button
            as="a"
            target="_blank"
            size="md"
            leftIcon={<FaGithubAlt />}
            borderRadius="sm"
            borderWidth="1px"
            colorScheme="grey"
            variant="outline"
            fontWeight="bold"
            border="2px solid transparent"
            _hover={{
              background: colorMode === "light" ? "green.400" : "yellow.100",
              color: colorMode === "light" ? "black" : "black",
              border: "1px solid",
              borderColor: "transparent",
            }}
          >
            <Text fontSize="sm" fontWeight="bold">
              {"View GitHub"}
            </Text>
          </Button>
        </NextLink>

        <NextLink
          href="https://docs.google.com/document/d/1Ld-drRK9V-yjHRZtF-PoIMOLE2WeN2Xz2JhVvVXU2S4/edit?usp=sharing"
          // href={"/media/about-me/Xin_Wang_Resume.pdf"
          passHref
        >
          <Button
            as="a"
            target="_blank"
            size="md"
            leftIcon={<MdOutlinePictureAsPdf />}
            borderRadius="sm"
            borderWidth="1px"
            colorScheme="grey"
            variant="outline"
            fontWeight="bold"
            border="2px solid transparent"
            _hover={{
              background: colorMode === "light" ? "purple.400" : "purple.100",
              color: colorMode === "light" ? "black" : "black",
              border: "1px solid",
              borderColor: "transparent",
            }}
          >
            <Text fontSize="sm" fontWeight="bold">
              {"View resume"}
            </Text>
          </Button>
        </NextLink>
      </SimpleGrid>
    </Flex>
  );
}
