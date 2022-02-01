import { useState, useEffect } from 'react';
import { Flex, Box, Text, IconButton, Button, useColorMode, useColorModeValue, useMediaQuery, Spacer} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

// const MenuItem = ({ children, isLast, to = '/' }) => {
//   const router = useRouter();
//   const [curPath, setCurPath] = useState(" ");
  
//   useEffect(() => {
//       setCurPath(router.pathname);
//   }, [router.pathname])
//   console.log(curPath)
//   return (
//     <Text
//       mb={{ base: isLast ? 0 : 5, sm: 0 }}
//       mr={{ base: 0, sm: isLast ? 0 : 5 }}
//       display="block"
//       // fontWeight="bold"
//     >
//       <Link href={to}>
//         {/* <Button as="a" variant="link" size="md" aria-label={children} color={router.pathname === curPath ? "yellow" : "black"}>
//           {children}
//         </Button> */}
//       </Link>
//     </Text>
//   );
// };

const Header = (props) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const [desktopQuery] = useMediaQuery("(min-width: 700px)");
    const [isMinWidth, setIsMinWidth] = useState(false);
    useEffect(() => {
    if(desktopQuery !== isMinWidth){
      setIsMinWidth(desktopQuery);
    }
    }, [isMinWidth, desktopQuery])
    
    const router = useRouter();
    const [hamburgerShow, setHamburgerShow] = useState(false);
    const toggleMenu = () => setHamburgerShow(!hamburgerShow);
    
    return (
    <Flex position="static">
      <Flex
      pos="relative"
      
      my={10}
      mx={-10}
      as="nav"
      align="flex-start"
      justify="space-between"
      wrap="wrap"
      w="85%"
      >
        <Box display={{ base: 'block', md: 'none' }} mx={10} my={2} onClick={toggleMenu}>
          {hamburgerShow ? <CloseIcon /> : <HamburgerIcon />}
        </Box>

        <Box
        display={{ base: hamburgerShow ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
        >
          <Flex
          align="flex-start"
          justify={['flex-start', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          mx={5}
          my={0}
          pt={[4, 4, 0, 0]}
          >
            <NextLink href="/" passHref>
            <Button 
            variant={router.pathname === '/' ? "solid" : "ghost"}
            // color={router.pathname === '/' ? useColorModeValue("none", "none") : useColorModeValue("#000000", "#ffffff")}
            // fontWeight={router.pathname === '/' ? "bold" : "normal"}
            fontWeight="bold"
            fontSize="14px"
            to="/">
              About Me
            </Button>
            </NextLink>
            
            <NextLink href="/featured-works" passHref>
            <Button 
            variant={router.pathname === '/featured-works' ? "solid" : "ghost"}
            // color={router.pathname === '/featured-works' ? useColorModeValue("blue.500", "blue.700") : useColorModeValue("#000000", "#ffffff")}
            // fontWeight={router.pathname === '/featured-works' ? "bold" : "normal"}
            fontWeight="bold"
            fontSize="14px"
            to="/featured-works">
              Featured Works
            </Button>
            </NextLink>

            <NextLink href="https://www.github.com/xinwng" passHref>
              <Button
              as="a"
              target="_blank"
              fontWeight="bold"
              fontSize="14px"
              variant="ghost">
                GitHub
              </Button>
            </NextLink>

            <NextLink href="/Xin_Wang_Resume.pdf" passHref>
            <Button 
              as="a"
              target="_blank"
              variant={router.pathname === '/Xin_Wang_Resume.pdf' ? "solid" : "ghost"}
              // color={router.pathname === './resume' ? useColorModeValue("blue.500", "blue.700") : useColorModeValue("#000000", "#ffffff")}
              // fontWeight={router.pathname === '/Xin_Wang_Resume.pdf' ? "bold" : "bold"}
              fontWeight="bold"
              fontSize="14px"
              to="/Xin_Wang_Resume.pdf">
              Resume
            </Button>
            </NextLink>

            <NextLink href="/connect-with-me" passHref>
            <Button 
            variant={router.pathname === '/connect-with-me' ? "solid" : "ghost"}
            // color={router.pathname === './connect-with-me' ? useColorModeValue("blue.300", "blue.700") : useColorModeValue("#000000", "#ffffff")}
            // fontWeight={router.pathname === '/connect-with-me' ? "bold" : "normal"}
            fontWeight="bold"
            fontSize="14px"
            to="/connect-with-me">
              Connect With Me
            </Button>
            </NextLink>

            {/* <MenuItem to="/">about me</MenuItem> */}
            {/* <MenuItem to="/resume">resume</MenuItem> */}
            {/* <MenuItem to="/featured-works">featured works</MenuItem> */}
            {/* <MenuItem to="/connect-with-me" isLast> */}
              {/* connect with me */}
            {/* </MenuItem> */}
          </Flex>
          
        </Box>
      
    </Flex>
    <Spacer/> 
    {/* Need to fix based on mobile or not  */}
    <IconButton mx={0} my={10} icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>} onClick={toggleColorMode}/>
    </Flex>
  );
};

export default Header;