import { VStack, Stack, Heading, Flex, Box, Text, Image, useMediaQuery, Center, IconButton, Button, Spacer, colorMode, useColorMode  } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import React from 'react'
import SocialMediaIcons from './social-media-icons.js';

export default function Bio() {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);
  
  useEffect(() => {
    if(desktopQuery !== isMinWidth){
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery])
  
  return (
  <Flex>
  <Stack>
      <Box my={1}> <Heading fontSize="3xl" fontWeight="bold">Bio</Heading> </Box>
      <VStack >
      <Box textAlign="justify">
      <Text>
        Hello! I’m Xin (pronounced like “Shin”) 👋 - 
        I have a simple goal: to build great things with great people while having a great time.
        I enjoy learning, expanding my arsenal of toolsets, and using my knowledge to aid and impact others in any way possible. 
        </Text>
        </Box>
      
      <Box textAlign="justify">
       <Text>
        Outside of work, I enjoy spending time with my friends 🧑‍🤝‍🧑, traveling 🧳, city-exploring 🌃, discovering music 🎷, and snowboarding 🏂 (which I recently picked up).
        If you want to chat or connect, feel free and reach out to me!
      </Text> 
      </Box>
      </VStack>
      
      <Center>
      <SocialMediaIcons/>
      </Center>
    </Stack>
  </Flex>

  )
}
