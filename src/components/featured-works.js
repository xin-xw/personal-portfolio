import { Tag, TagLabel, VStack, HStack, Stack, Heading, Flex, Box, Text, Image, useMediaQuery, IconButton, Button, Spacer, colorMode, useColorMode, Center, useColorModeValue  } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import React from 'react'
import NextLink from 'next/link'

function ProjectCardItem({ title, desc, icon, tags, ...rest}) {
  const colors = useColorModeValue('#fff', '#000')
  const bgColors = useColorModeValue('linear-gradient(315deg, #485461 0%, #28313b 74%)', 'none')
  return (
    <Flex direction="column" >
      <Box
        maxHeight="350px"
        p={5}
        color={[bgColors]}
        bgColor={[bgColors]}
        shadow="sm"
        borderWidth='1.5px'
        {...rest}
      >
        
        {/* <Center> */}
        
        <HStack>
          <Image width="70px" height="65px" mx={1} src={icon} alt={title} ></Image>  
          <Stack>
            <Box p={2}>
            <Heading fontSize='xl'>{title}</Heading>
            <HStack spacing={4}>
              {tags}.map((tag) => (
                <Tag size="sm" variant="outline" colorScheme="red">{tags}</Tag>
              )
            </HStack>
            <Text align="justify">{desc}</Text>
            </Box>
          </Stack>
          
          
        </HStack>
          
        
        
      {/* </Center> */}
      
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
      <Box my={1}> <Heading fontSize="3xl" fontWeight="bold">Recent Projects</Heading> </Box>
      <Stack direction={isMinWidth ? "column" : "column"} spacing={5} align="center">
        <ProjectCardItem 
        title="Explorify" 
        desc="Explorify aims to unleash the potential of Spotify's API. Provided your favorite songs, Explorify aims to recommend you other similar tracks based on specific track attributes."
        icon="/explorify.png"
        tags={["Express.js", "React.js", "AWS EC2", "PM2", "Nginx", "CI/CD"]}
        ></ProjectCardItem>
        
        <ProjectCardItem 
        title="$plice" 
        desc="The premise of this application entails the idea to easily split the check when dining out with friends or family. Users can select the restaurant they choose and the menu for the respective restaurant will display. Each user will select the food they ordered and pass it along to the next person, and the total for each user will output."
        icon="/splice.png"
        tags={["C++", "Google Test Framework", "CI/CD"]}
        ></ProjectCardItem>
        
        <ProjectCardItem 
        title="Portfolio (Past)" 
        desc= "During Spring Break 2021, I took my first venture towards front-end development and learned ReactJS, HTML, CSS, and Sass and created my first portfolio. Ever since then, I really do enjoy the short-term gratification React.js gives me with their instant compile times."
        icon="/portfolio-v1.png"
        tags={["React.js", "HTML", "Sass", "Javascript", "Material UI"]}
        ></ProjectCardItem>
      </Stack>
  </Stack>
  </Flex>

  )
}
