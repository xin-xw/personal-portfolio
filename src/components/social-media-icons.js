import Icon from '@chakra-ui/icon'
import { HStack, Center, Box, Flex, IconButton } from '@chakra-ui/layout'
import React from 'react'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { MdAlternateEmail, MdOutlinePictureAsPdf } from 'react-icons/md'

export default function SocialMediaIcons() {
    return (
        <Center>
        <HStack spacing="24">
            <IconButton
            variant="outline"
            variantColor="teal"
            aria-label="Call Sage"
            fontSize="20px"
            icon={MdAlternateEmail}
            />
            <Icon as={MdAlternateEmail} boxSize="30" />
            <Icon as={FaLinkedin} boxSize="30" />
            <Icon as={FaGithubSquare} boxSize="30" />
            <Icon as={MdOutlinePictureAsPdf} boxSize="30" />
        </HStack>
        </Center>
    )
}
