import { VStack, Stack, Heading, Flex, Box, Text, Image, useMediaQuery, Button, Spacer, colorMode, useColorMode  } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import React from 'react'
import NextLink from 'next/link'
import SocialMediaIcons from './social-media-icons.js';

export default function Bio() {
  return (
  <Stack>
      <Heading fontSize="4xl" fontWeight="bold">Bio</Heading>
      <VStack>
      <Box textAlign="justify">
      <Text>
        Nice to meet you! I’m Xin (pronounced like “Shin”)! 
        I’m currently a 4th year undergraduate student studying Computer Science with Business Applications @{' '}
        <NextLink href="https://www.ucr.edu" passHref>
          <Button
          as="a"
          target="_blank"
          fontWeight="normal"
          variant="link">
          <strong><u>University of California, Riverside</u></strong>
          </Button>
        </NextLink>
        , slated to graduate this June.
        I firmly believe that if you try, try, try, and try again - you are bound to reach a solution. 
        I enjoy learning, expanding my arsenal of skill sets, and using my knowledge to aid and impact others in anyway possible. 
      </Text>
      </Box>
      <Box textAlign="justify">
       <Text>
        Outside of coding, I enjoy spending time with my friends 🧑‍🤝‍🧑, traveling 🧳, city-exploring 🌃, discovering music 🎷, and snowboarding 🏂 (which I recently picked up).
        If you want to chat or connect, feel free and reach out to me!
      </Text> 
      </Box>
      </VStack>
    </Stack>

  )
}
