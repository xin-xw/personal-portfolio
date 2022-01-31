
import { Stack, Heading, Flex, Box, Text, Image, useMediaQuery, Spacer, colorMode, useColorMode  } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
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
          direction={isMinWidth ? "row" : "column"}>
            {/* Mobile Display */}
            <Image
              src="/AvatarImg.jpg"
              alt="Profile Picture"
              borderRadius='full'
              backgroundColor="transparent" 
              boxShadow="md"
              width="100px"
              height="100px"
              mt="20"
              display={isMinWidth ? "none" : "block"}/>
            <Box mt={isMinWidth ? 7 : 5}>
              <Heading fontSize="4xl" fontWeight="bold">Hey, I'm Xin. 👋</Heading>
              <Text my={2}>Incoming Software Engineer @ <strong>VMware</strong></Text>
              <Text my={2} color={isDark ? "gray.200" : "gray.500"}>UCR '22 Computer Science w/ Business Applications</Text>
            </Box>
            {/* Desktop Display */}
            <Spacer/>
            <Image
              src="/AvatarImg.jpg"
              alt="Profile Picture"
              borderRadius='full'
              backgroundColor="transparent" 
              boxShadow="md"
              width="125px"
              height="125px"
              my="auto"
              mx="auto"
              display={isMinWidth ? "block" : "none"}/>
          </Flex>
        </Stack>
  )
}
