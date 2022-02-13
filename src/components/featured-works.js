import { Tag, TagLabel, VStack, HStack, Stack, Heading, Flex, Box, Text, Image, useMediaQuery, IconButton, Button, Spacer, colorMode, useColorMode, Center, useColorModeValue  } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import React from 'react'
import NextLink from 'next/link'
import ActionButton from './action-button';

function ProjectCardItem({ title, desc, icon, tags, ...rest}) {
  const colors = useColorModeValue('black', 'white')
  const bgColors = useColorModeValue('linear-gradient(315deg, #485461 0%, #28313b 74%)', 'none')
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);
  
  useEffect(() => {
    if(desktopQuery !== isMinWidth){
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery])
  
  return (
    <Flex direction="column" >
      <Box
        // maxHeight="400px"
        p={5}
        // color={[bgColors]}
        // bgColor={[bgColors]}
        shadow="sm"
        // borderColor={[colors]}
        borderWidth='2.5px'
        borderRadius="sm"
        {...rest}
        overflow="hidden"
      >
        
        <HStack>
          <Image width="70px" height="65px" mx={1} src={icon} alt={title} ></Image>  
            <Box p={2}>
            <Heading fontSize='xl'>{title}</Heading>
            <Box my={2.5}>
            <Stack spacing={2} isInline overflow={"hidden"} overflowWrap={false} >
              <Box>
              {tags.map(tag => (
                <Tag mr={1.5} my={isMinWidth ? ".5" : "1"} size="md" key={tag}>
                  <TagLabel>{tag}</TagLabel>
                </Tag>
              ))}
              </Box>
            </Stack>
            </Box>
            <Text align="justify">{desc}</Text>
            </Box>
        </HStack>
          
      
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
        <Box my={1}> 
          <Heading fontSize="3xl" fontWeight="bold">Works</Heading> 
        </Box>
        
        <Stack direction={isMinWidth ? "column" : "column"} spacing={5} align="center">
          <ProjectCardItem 
          title="Explorify" 
          desc="Explorify aims to unleash the potential of Spotify's API. Provided your favorite songs, Explorify aims to recommend you other similar tracks based on specific track attributes."
          icon="/explorify.png"
          tags={["Express.js", "React.js", "AWS EC2", "PM2", "Nginx", "CI/CD"]}
          mt={2}
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

      <Box>
        <NextLink href={'https://www.google.com'} passHref>
          <ActionButton mt={1.5}>
            <Text fontWeight="bold" size="sm">
              {'More projects →'}
            </Text>
          </ActionButton>
        </NextLink>
      </Box>
    
        
    </Stack>
  </Flex>

  )
}
