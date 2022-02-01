import { Stack, Heading, Flex, Box, Text, Image, useMediaQuery, Spacer, colorMode, Button, useColorMode, Center  } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import NextLink from 'next/link';
import React from 'react'

export default function AboutMe() {
  const isDark = colorMode == 'dark';
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);
  
  useEffect(() => {
    if(desktopQuery !== isMinWidth){
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery])
  
  return (
        <Stack>
          <Flex 
          direction={isMinWidth ? "row" : "column"} mt={isMinWidth ? 0 : 0}>
            {/* Mobile Display */}

            <Image
              src="/AvatarImg.jpg"
              alt="Profile Picture"
              borderRadius='full'
              backgroundColor="transparent" 
              boxShadow="lg"
              width="110px"
              height="110px"
              mt="3"
              display={isMinWidth ? "none" : "block"}/>
            
              <Box mt={isMinWidth ? 5 : 3}>
              <Heading fontSize="4xl" fontWeight="bold">Xin Wang</Heading>
              
              <Text my={2.5}>Incoming Software Engineer @ {' '}   
              <NextLink href="https://www.vmware.com" passHref>
                <Button
                as="a"
                target="_blank"
                fontWeight="normal"
                variant="link">
                <strong><u>VMware</u></strong>
                </Button>
              </NextLink>
              </Text>

              <Text my={2.5} color={isDark ? "gray.200" : "gray.500"}>📍 Los Angeles Metropolitan Area</Text>
            </Box>
            {/* Desktop Display */}
            <Spacer/>
            <Image
              src="/AvatarImg.jpg"
              alt="Profile Picture"
              borderRadius='full'
              backgroundColor="transparent" 
              boxShadow="lg"
              width="150px"
              height="150px"
              my="auto"
              mx="auto"
              display={isMinWidth ? "block" : "none"}/>
          </Flex>
          <Center>
          
          </Center>
        </Stack>
  )
}
