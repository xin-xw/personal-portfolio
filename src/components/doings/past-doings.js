import { VStack, HStack, Stack, Heading, Flex, Box, Text, Image, useMediaQuery, IconButton, Button, Spacer, colorMode, useColorMode, Center, useColorModeValue, Icon, color  } from '@chakra-ui/react';
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
      
      <Text fontSize="15px" fontWeight="bold" color={colorMode === 'dark' ? "white" : "dark"}>{name}</Text>
      </IconButton>
    </NextLink>
    </u>
  )
}

export default function PastDoings() {
  
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
          Past
        </Heading> 
      </Box>

        <Flex align="flex-start" direction="column">
          <Box textAlign="justify" my={1}>
            <Text>
              {'• '}<strong>{'Best Valentine\'s Day Hack & Best Design (UI)'}</strong>{' out of 150+ participants @ '}
              <TextLink link="https://hackbu.org" name="HackBU 2022" icon={<ExternalLinkIcon/>}></TextLink>
              {' for creating '}
              <TextLink link="https://github.com/xinwng/HACKBU2022" name="Spotability" icon={<ExternalLinkIcon/>}>
              </TextLink>{' - an app that attempts to match and discover couples based on each other\'s music taste, using technologies including React.js, Python, Django, MongoDB'}
            </Text>
          </Box>

          <Box textAlign="justify" my={1}>
            <Text>
              {'• '}<strong>{'Invited participant @ JP Morgan Chase & Co.\'s'}</strong>{' '}
              <TextLink link="https://careers.jpmorgan.com/us/en/students/programs/code-for-good" name="Code for Good" icon={<ExternalLinkIcon/>}></TextLink>
              {' creating a full-stack application utilizing Flask, React.js, and SQLite to iterate, develop, and provide an interface for a non-profit organization (GLSEN) sourcing bullying and harassment policies across education agencies nationwide'}
            </Text>
          </Box>

          <Box textAlign="justify" my={1}>
            <Text>
              {'• '}<strong>{'Software Engineer Intern'}</strong>{' @ '}
              <TextLink link="https://vistendo.com/" name="Vistendo" icon={<ExternalLinkIcon/>}></TextLink>
              {', receiving lots and lots of guidance and mentorship on front-end programming, AWS, SFTP & SCP protocols - and how they all tie in together to help Vistendo achieve their mission'}
            </Text>
          </Box>

          <Box textAlign="justify" my={1}>
            <Text>
              {'• '}<strong>{'Computer Scientist & Subteam Co-Lead'}</strong>{' @ '}
              <TextLink link="https://vistendo.com/" name="NASA L'Space MCA" icon={<ExternalLinkIcon/>}></TextLink>
              {' researching and designing a payload system with a group of students, exploring the Venusian atmosphere and abiding by a $250 million budget constraint'}
            </Text>
          </Box>
      
      </Flex>
    
    </Flex>

  )
}
