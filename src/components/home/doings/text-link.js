import { VStack, HStack, Stack, Heading, Flex, Box, Text, Image, useMediaQuery, IconButton, Button, Spacer, colorMode, useColorMode, Divider, UnorderedList, ListItem, ListIcon, Center, useColorModeValue, Icon, color  } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import React from 'react'
import NextLink from 'next/link'
import { ExternalLinkIcon, SmallAddIcon, PlusSquareIcon } from '@chakra-ui/icons';

export default function TextLink ({link, name, icon, ...rest})
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
      >
      <Text fontWeight="bold" color={colorMode === 'dark' ? "white" : "dark"}>{name}
      </Text>
      </IconButton>
    </NextLink>
    </u>
  )
}