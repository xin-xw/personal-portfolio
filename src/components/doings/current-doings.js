import { VStack, HStack, Stack, Heading, Flex, Box, Text, Image, useMediaQuery, IconButton, Button, Spacer, colorMode, useColorMode, Center, useColorModeValue, Icon  } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import React from 'react'
import NextLink from 'next/link'
import { ExternalLinkIcon, SmallAddIcon, PlusSquareIcon } from '@chakra-ui/icons';

function TextLink ({link, name, icon, ...rest})
{
  const { colorMode, toggleColorMode } = useColorMode('black', 'white');
  return (
    <u>
    <NextLink href={link} passHref>
      <IconButton
      as="a"
      rightIcon={icon}
      target="_blank"
      fontWeight="normal"
      variant="link"
      color={colorMode === 'dark' ? "white" : "dark"}
      _hover={colorMode === 'dark' ? "blue" : "dark"}>
      <Text fontSize="15px" fontWeight="bold" color={colorMode === 'dark' ? "white" : "dark"}>{name}
      </Text>
      </IconButton>
    </NextLink>
    </u>
  )
}

export default function CurrentDoings() {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);
  
  useEffect(() => {
    if(desktopQuery !== isMinWidth){
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery])
  
  return (
    <Flex direction="column">
    
      <Box my={1}> 
        <Heading fontSize="3xl" fontWeight="bold">
          Current
        </Heading> 
      </Box>

        <Flex align="flex-start" direction="column">
          <Box textAlign="justify" my={1}>
            <Text>
              {'• '}<strong>{'Full-time Computer Science with Business Applications Student'}</strong>{' @ '}
              <TextLink link="https://www.ucr.edu" name="UCR" icon={<ExternalLinkIcon/>}></TextLink>
            </Text>
          </Box>

          <Box textAlign="justify" my={1}>
            <Text>
              {'• '}<strong>{'Incoming Software Engineer'}</strong>{' @ '}
              <TextLink link="https://www.vmware.com" name="VMware" icon={<ExternalLinkIcon/>}></TextLink>
            </Text>
          </Box>

          <Box textAlign="justify" my={1}>
            <Text>
              {'• '}<strong>{'Content Developer'}</strong>{' @ '}
              <TextLink link="https://www.zybooks.com/about-us/" name="zyBooks" icon={<ExternalLinkIcon/>}></TextLink>
            </Text>
          </Box>
      
      </Flex>
    
    </Flex>

  )
}
