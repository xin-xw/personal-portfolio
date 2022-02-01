import { VStack, HStack, Stack, Heading, Flex, Box, Text, Image, useMediaQuery, IconButton, Button, Spacer, colorMode, useColorMode, Center, useColorModeValue  } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import React from 'react'
import NextLink from 'next/link'

function ProjectCardItem({ title, desc, icon, ...rest }) {
  const colors = useColorModeValue('#fff', '#000')
  const bgColors = useColorModeValue('linear-gradient(315deg, #485461 0%, #28313b 74%)', 'none')
  return (
    <Flex direction="column">
      <Box
        maxHeight="500px"
        p={3}
        color={[bgColors]}
        bgColor={[bgColors]}
        borderWidth='1px'
        {...rest}
      >
        
        <Center>
        <VStack>
        <HStack>
          <Image width="50px" height="50px" src={icon} alt={title} p={1}></Image>  
          <Heading fontSize='2xl'>{title}</Heading>
        </HStack>
        <Text>{desc}</Text>
        </VStack>
      </Center>
      
      </Box>
    
    </Flex>
  )
}

export default function FeaturedWorks() {
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
      <Box my={2.5}> <Heading fontSize="3xl" fontWeight="bold">Featured Works</Heading> </Box>
      <Stack direction={isMinWidth ? "row" : "column"} spacing={3} align="center">
        <ProjectCardItem 
        title="Explorify" 
        desc="Explorify aims to unleash the potential of their API. Provided your favorite songs, Explorify aims to recommend you other similar tracks (if there is sufficient information). But, the cool thing is - Spotify's API also allows you to customize your final matches with specific track attributes such as: danceability, energy, popularity, tempo, and more."
        icon="/explorify.svg"
        ></ProjectCardItem>
        
        <ProjectCardItem 
        title="$plice" 
        desc="Spotify provides developers a Recommendation API that can be found here, disguised away from the public audience. Essentially, Explorify aims to unleash the potential of their API. Provided your favorite songs, Explorify aims to recommend you other similar tracks (if there is sufficient information). But, the cool thing is - Spotify's API also allows you to customize your final matches with specific track attributes such as: danceability, energy, popularity, tempo, and more." 
        icon="/explorify.svg"
        ></ProjectCardItem>
        
        <ProjectCardItem 
        title="Portfolio Version 1" 
        desc="Spotify provides developers a Recommendation API that can be found here, disguised away from the public audience. Essentially, Explorify aims to unleash the potential of their API. Provided your favorite songs, Explorify aims to recommend you other similar tracks (if there is sufficient information). But, the cool thing is - Spotify's API also allows you to customize your final matches with specific track attributes such as: danceability, energy, popularity, tempo, and more." 
        icon="/explorify.svg"
        ></ProjectCardItem>
      </Stack>
  </Stack>
  </Flex>

  )
}
