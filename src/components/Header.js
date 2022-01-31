import { useState, useEffect } from 'react';
import { Flex, Box, Text, IconButton, Button, useColorMode, useColorModeValue, Spacer} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import Link from 'next/Link';

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
    
    const bgColor = {
        light: '#fff',
        dark: '#171717' // #1A202C
    }
    const router = useRouter();
    const isDark = colorMode === 'dark'
    const [hamburgerShow, setHamburgerShow] = useState(false);
    const toggleMenu = () => setHamburgerShow(!hamburgerShow);
    
    return (
    <Flex>
      <Flex
      my={10}
      mx={-5}
      as="nav"
      align="flex-start"
      justify="space-between"
      wrap="wrap"
      w="85%"
      >
        <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
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
          pt={[4, 4, 0, 0]}
          >
            <Link href="/" passHref>
            <Button 
            variant={router.pathname === '/' ? "solid" : "ghost"}
            color={router.pathname === '/' ? useColorModeValue("none", "none") : useColorModeValue("#000000", "#ffffff")}
            fontWeight={router.pathname === '/' ? "bold" : "normal"}
            to="/">
              about me
            </Button>
            </Link>
            
            <Link href="/featured-works" passHref>
            <Button 
            variant={router.pathname === '/featured-works' ? "solid" : "ghost"}
            color={router.pathname === '/featured-works' ? useColorModeValue("blue.500", "blue.700") : useColorModeValue("#000000", "#ffffff")}
            fontWeight={router.pathname === '/featured-works' ? "bold" : "normal"}
            to="/featured-works">
              featured works
            </Button>
            </Link>

            <Link href="/resume" passHref>
            <Button 
            variant={router.pathname === '/resume' ? "solid" : "ghost"}
            color={router.pathname === './resume' ? useColorModeValue("blue.500", "blue.700") : useColorModeValue("#000000", "#ffffff")}
            fontWeight={router.pathname === '/resume' ? "bold" : "normal"}
            to="/resume">
              resume
            </Button>
            </Link>

            <Link href="/connect-with-me" passHref>
            <Button 
            variant={router.pathname === '/connect-with-me' ? "solid" : "ghost"}
            color={router.pathname === './connect-with-me' ? useColorModeValue("blue.300", "blue.700") : useColorModeValue("#000000", "#ffffff")}
            fontWeight={router.pathname === '/connect-with-me' ? "bold" : "normal"}
            to="/connect-with-me">
              connect with me
            </Button>
            </Link>

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
    <IconButton mx={0} my={9} icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>} onClick={toggleColorMode}/>
    </Flex>
  );
};

export default Header;