import { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Text,
  IconButton,
  Button,
  useColorMode,
  useMediaQuery,
  Spacer,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import NextLink from "next/link";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);
  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  const router = useRouter();
  const [hamburgerShow, setHamburgerShow] = useState(false);
  const toggleMenu = () => setHamburgerShow(!hamburgerShow);

  return (
    <Flex position="static">
      <Flex
        as="nav"
        pos="sticky"
        my={10}
        mx={-9}
        align="flex-start"
        justify="space-between"
        wrap="wrap"
        w="85%"
      >
        <Box
          display={{ base: "block", md: "none" }}
          mx={10}
          my={2}
          onClick={toggleMenu}
        >
          {hamburgerShow ? <CloseIcon /> : <HamburgerIcon />}
        </Box>

        <Box
          display={{ base: hamburgerShow ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Flex
            align="flex-start"
            justify={["flex-start", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            mx={5}
            my={0}
            pt={[4, 4, 0, 0]}
          >
            <NextLink href="/" passHref>
              <Button
                variant={router.pathname === "/" ? "solid" : "ghost"}
                // color={router.pathname === '/' ? useColorModeValue("none", "none") : useColorModeValue("#000000", "#ffffff")}
                fontWeight={router.pathname === "/" ? "bold" : "normal"}
                // fontWeight="bold"
                fontSize="15px"
                to="/"
              >
                {router.pathname === "/" ? <u>Home</u> : <Text>Home</Text>}
              </Button>
            </NextLink>

            {/* <NextLink href="/projects" passHref>
              <Button
                variant={router.pathname === "/projects" ? "solid" : "ghost"}
                // color={router.pathname === '/' ? useColorModeValue("none", "none") : useColorModeValue("#000000", "#ffffff")}
                fontWeight={router.pathname === "/projects" ? "bold" : "normal"}
                // fontWeight="bold"
                fontSize="15px"
                to="/projects"
              >
                {router.pathname === "/projects" ? (
                  <u>Projects</u>
                ) : (
                  <Text>Projects</Text>
                )}
              </Button>
            </NextLink> */}

            {/* <NextLink href="https://www.github.com/xinwng" passHref>
              <Button
                as="a"
                target="_blank"
                fontWeight="bold"
                fontSize="14px"
                variant="ghost"
              >
                GitHub
              </Button>
            </NextLink> */}

            {/* <NextLink href="/Xin_Wang_Resume.pdf" passHref> */}
            <NextLink href="/about-me" passHref>
              <Button
                variant={router.pathname === "/about-me" ? "solid" : "ghost"}
                // color={router.pathname === './connect-with-me' ? useColorModeValue("blue.300", "blue.700") : useColorModeValue("#000000", "#ffffff")}
                fontWeight={router.pathname === "/about-me" ? "bold" : "normal"}
                // fontWeight="bold"
                fontSize="15px"
                to="/about-me"
              >
                {router.pathname === "/about-me" ? (
                  <u>About Me</u>
                ) : (
                  <Text>About Me</Text>
                )}
              </Button>
            </NextLink>

            <NextLink
              href={
                "https://docs.google.com/document/d/1Bn9X08IqlF0gKhTlndLoVqKNHnDfQH9ue9peZ7Qvalk/edit?usp=sharing"
              }
              passHref
            >
              <Button
                as="a"
                target="_blank"
                variant={
                  router.pathname === "/Xin_Wang_Resume.pdf" ? "solid" : "ghost"
                }
                // color={router.pathname === './resume' ? useColorModeValue("blue.500", "blue.700") : useColorModeValue("#000000", "#ffffff")}
                // fontWeight={
                // router.pathname === "/Xin_Wang_Resume.pdf" ? "bold" : "normal"
                // }
                fontWeight="normal"
                fontSize="15px"
                to="https://docs.google.com/document/d/1Bn9X08IqlF0gKhTlndLoVqKNHnDfQH9ue9peZ7Qvalk/edit?usp=sharing"
              >
                Resume
              </Button>
            </NextLink>
          </Flex>
        </Box>
      </Flex>
      <Spacer />
      {/* Need to fix based on mobile or not  */}
      <IconButton
        mx={0}
        my={10}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        borderRadius="sm"
        variant="outline"
      />
    </Flex>
  );
};

export default NavBar;
