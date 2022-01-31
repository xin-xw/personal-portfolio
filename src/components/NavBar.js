import { useColorMode, Switch, Spacer, Flex, Button, IconButton, useColorModeValue, useMediaQuery  } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { HamburgerIcon, CloseIcon, MoonIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

export const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const [ mobileMenuCloseButton, changeMobileMenuCloseButton ] = useState('none')
    const isDark = colorMode === 'dark'

    const [desktopQuery] = useMediaQuery("(min-width: 700px)");
    const [isMinWidth, setIsMinWidth] = useState(false);
    useEffect(() => {
      if(desktopQuery !== isMinWidth){
        setIsMinWidth(desktopQuery);
      }
    }, [isMinWidth, desktopQuery])
    return (
      <Flex>
            <Flex
            position="relative"
            align="flex-start"
            top="1.1rem">

            {/* Desktop Navigation Bar */}
            <Flex display={isMinWidth ? "flex" : "none"}>
                <NextLink href="/" passHref>
                    <Button as="a" variant="ghost" size="md" aria-label="about-me" my={5} w="100%">
                      about me
                    </Button>
                </NextLink>

                <NextLink href="/featured-works" passHref>
                    <Button as="a" variant="ghost" size="md" aria-label="featured-works" my={5} w="175%">
                        featured works
                    </Button>
                </NextLink>

                <NextLink href="/resume" passHref>
                    <Button as="a" variant="ghost" size="md" aria-label="resume" my={5} w="100%">
                        resume
                    </Button>
                </NextLink>

                <NextLink href="/connect" passHref>
                    <Button as="a" variant="ghost" size="md"aria-label="connect" my={5} w="175%">
                        connect with me
                    </Button>
                </NextLink>
            </Flex>

            {/* Mobile Hambuger Menu */}
            <IconButton
                aria-label="Open Menu"
                size="md"
                icon={<HamburgerIcon/>}
                display={['flex','flex','none','none']}
                onClick={() => changeMobileMenuCloseButton('flex')}
            />
            <Flex
                display={mobileMenuCloseButton}
                w="100vw"
                h="100vh"
                zIndex={20}
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDir="column"
            >
                <Flex justify='flex-end'>
                    <IconButton
                    mt={2}
                    aria-label="Close Menu"
                    size="lg"
                    icon={<CloseIcon/>}
                    onClick={() => changeMobileMenuCloseButton('none')}
                    >
                    </IconButton>
                </Flex>

                <Flex
                    flexDir="column"
                    align="center"
                >
                    <NextLink href="/" passHref>
                        <Button as="a" variant="ghost" aria-label="about-me" my={5} w="100%">
                          about me
                        </Button>
                    </NextLink>

                    <NextLink href="/featured-works" passHref>
                        <Button as="a" variant="ghost" aria-label="featured-works" my={5} w="175%">
                            featured works
                        </Button>
                    </NextLink>

                    <NextLink href="/resume" passHref>
                        <Button as="a" variant="ghost" aria-label="resume" my={5} w="100%">
                            resume
                        </Button>
                    </NextLink>

                    <NextLink href="/connect" passHref>
                        <Button as="a" variant="ghost" aria-label="connect" my={5} w="175%">
                            connect with me
                        </Button>
                    </NextLink>
                </Flex>
                
            </Flex>
            <Spacer/>
            <IconButton icon={<MoonIcon/>} onClick={toggleColorMode} size="md"/>
            </Flex>
            
        </Flex>
    )
    // return (
    //     <Flex>
    //         <Flex
    //         position="relative"
    //         align="center"
    //         top="1.1rem">

    //         {/* Desktop Navigation Bar */}
    //         <Flex display={['none', 'none', 'flex', 'flex']}>
    //             <NextLink href="/" passHref>
    //                 <Button as="a" variant="ghost" size="md" aria-label="about-me" my={5} w="100%">
    //                   about me
    //                 </Button>
    //             </NextLink>

    //             <NextLink href="/featured-works" passHref>
    //                 <Button as="a" variant="ghost" size="md" aria-label="featured-works" my={5} w="175%">
    //                     featured works
    //                 </Button>
    //             </NextLink>

    //             <NextLink href="/resume" passHref>
    //                 <Button as="a" variant="ghost" size="md" aria-label="resume" my={5} w="100%">
    //                     resume
    //                 </Button>
    //             </NextLink>

    //             <NextLink href="/connect" passHref>
    //                 <Button as="a" variant="ghost" size="md"aria-label="connect" my={5} w="175%">
    //                     connect with me
    //                 </Button>
    //             </NextLink>
    //         </Flex>

    //         {/* Mobile Hambuger Menu */}
    //         <IconButton
    //             aria-label="Open Menu"
    //             size="md"
    //             icon={<HamburgerIcon/>}
    //             display={['flex','flex','none','none']}
    //             onClick={() => changeMobileMenuCloseButton('flex')}
    //         />
    //         <Flex
    //             display={mobileMenuCloseButton}
    //             w="100vw"
    //             h="100vh"
    //             zIndex={20}
    //             pos="fixed"
    //             top="0"
    //             left="0"
    //             overflowY="auto"
    //             flexDir="column"
    //         >
    //             <Flex justify='flex-end'>
    //                 <IconButton
    //                 mt={2}
    //                 aria-label="Close Menu"
    //                 size="lg"
    //                 icon={<CloseIcon/>}
    //                 onClick={() => changeMobileMenuCloseButton('none')}
    //                 >
    //                 </IconButton>
    //             </Flex>

    //             <Flex
    //                 flexDir="column"
    //                 align="center"
    //             >
    //                 <NextLink href="/" passHref>
    //                     <Button as="a" variant="ghost" aria-label="about-me" my={5} w="100%">
    //                       about me
    //                     </Button>
    //                 </NextLink>

    //                 <NextLink href="/featured-works" passHref>
    //                     <Button as="a" variant="ghost" aria-label="featured-works" my={5} w="175%">
    //                         featured works
    //                     </Button>
    //                 </NextLink>

    //                 <NextLink href="/resume" passHref>
    //                     <Button as="a" variant="ghost" aria-label="resume" my={5} w="100%">
    //                         resume
    //                     </Button>
    //                 </NextLink>

    //                 <NextLink href="/connect" passHref>
    //                     <Button as="a" variant="ghost" aria-label="connect" my={5} w="175%">
    //                         connect with me
    //                     </Button>
    //                 </NextLink>
    //             </Flex>
                
    //         </Flex>
    //         <Spacer/>
    //         <IconButton icon={<MoonIcon/>} onClick={toggleColorMode} size="md"/>
    //         </Flex>
            
    //     </Flex>
    // )
}