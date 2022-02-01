import { VStack, HStack, Stack, Heading, Flex, Box, Text, Image, useMediaQuery, IconButton, Button, Spacer, colorMode, useColorMode, Center, useColorModeValue  } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import React from 'react'
import NextLink from 'next/link'


export default function CurrentDoings() {
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
      <Box my={2.5}> <Heading fontSize="3xl" fontWeight="bold">Current</Heading> </Box>
  </Stack>
  </Flex>

  )
}
