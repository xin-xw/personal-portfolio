import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Icon,
  Box,
  Button,
  Flex,
  IconButton,
  Spacer,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GoHome } from "react-icons/Go";

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
            mx={25}
            my={0}
            pt={[4, 4, 0, 0]}
          >
            <NextLink href="/" passHref>
              <Button
              ml={3}

              justify={"center"}
              borderRadius={3}
                // variant={router.pathname === "/" ? "solid" : "ghost"}
                // bg={"#fff"}
                // color={colorMode === "dark" ? "#000" : "normal"}
                // fontWeight={router.pathname === "/" ? "normal" : "normal"}
                // borderColor={router.pathname === "/" ? colorMode === "dark" ? "brand.100" : "brand.800" : "ghost"}
                // bgColor={{ color: colorMode === "dark" ? "#8c92ac" : "#8c92ac" }}

                // _hover={{
                //   bg: colorMode === "dark" ? "#8c92ac" : "#fff",
                //   color: colorMode === "dark" ? "brand.900" : "brand.900",
                // }}
                // fontSize="15px"
                // to="/"
                // mx={3}
                variant={router.pathname === "/" ? "solid" : "ghost"}
                // color={router.pathname === '/' ? useColorModeValue("none", "none") : useColorModeValue("#000000", "#ffffff")}
                fontWeight={router.pathname === "/" ? "bold" : "normal"}
                // fontWeight="bold"
                justifyContent={"center"}
                to="/"
                // bg={router.pathname === "/" ? colorMode === "dark" ? "brand.800" : "" : "#000"}
                bg={router.pathname === "/" ? (colorMode === "dark" ? "#3a3a3e" :"#ebebeb") : "none"}
                _hover={{

                  color: colorMode === "dark" ? "brand.100" : "brand.900",
                }}

              >
                {router.pathname === "/" ? (
                  <Text><Icon mb={-1} as={GoHome} align={"center"} boxSize={"20px"}  /></Text>
                ) : (
                  <Text><Icon mb={-1} as={GoHome} align={"center"} boxSize={"20px"} /></Text>
                )}
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
              mx={1}
                variant={router.pathname === "/about-me" ? "solid" : "ghost"}
                // color={router.pathname === './connect-with-me' ? useColorModeValue("blue.300", "blue.700") : useColorModeValue("#000000", "#ffffff")}
                fontWeight={router.pathname === "/about-me" ? "bold" : "normal"}
                // fontWeight="bold"
                fontSize="15px"
                to="/about-me"
              >

                {router.pathname === "/about-me" ? (

                   <Text>About Me</Text>
                ) : (
                  <Text>About Me</Text>
                )}
              </Button>
            </NextLink>

            <NextLink href="/journey" passHref>
              <Button
                            mx={1}
                variant={router.pathname === "/journey" ? "solid" : "ghost"}
                // color={router.pathname === './connect-with-me' ? useColorModeValue("blue.300", "blue.700") : useColorModeValue("#000000", "#ffffff")}
                fontWeight={router.pathname === "/journey" ? "bold" : "normal"}
                // fontWeight="bold"
                fontSize="15px"
                to="/journey"
              >
                {router.pathname === "/journey" ? (
                  <Text>Journey</Text>
                ) : (
                  <Text>Journey</Text>
                )}
              </Button>
            </NextLink>

            <NextLink href="/projects" passHref>
              <Button
                variant={router.pathname === "/projects" ? "solid" : "ghost"}
                fontWeight={router.pathname === "/projects" ? "bold" : "normal"}
                fontSize="15px"
                to="/projects"
              >
                <Text textDecoration={"none"}>
                  {router.pathname === "/projects" ? (
                    <Text>Projects</Text>
                  ) : (
                    <Text>Projects</Text>
                  )}
                </Text>
              </Button>
            </NextLink>

            <NextLink
              // href={
              //   "https://docs.google.com/document/d/1NMOKPUj2bnOsEr9lHlQVk1gquY1f___lRJTzfnOANn0/edit?usp=sharing"
              // }
              href={"/media/about-me/Xin_Wang_Resume.pdf"}
              passHref
            >
              <Button
                            mx={1}
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
                to="https://docs.google.com/document/d/1NMOKPUj2bnOsEr9lHlQVk1gquY1f___lRJTzfnOANn0/edit?usp=sharing"
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
        border={0}
      />
    </Flex>
  );
};

export default NavBar;
