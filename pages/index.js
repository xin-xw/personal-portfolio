import {
  VStack,
  Center,
  Box,
  Spacer,
} from '@chakra-ui/react'
import AboutMe from '../src/components/about-me'
import Header from '../src/components/header'
import Bio from '../src/components/bio'
import { Container } from '../src/components/Container'

export default function Home() {
  return (
    <Center>
      <Container>
        <Box><Header/></Box>
        <Box w="100%" mb="3rem"><AboutMe /></Box>
        <Box w="100%" mb="3rem"><Bio /></Box>
      </Container>
    </Center>
    
  ) 
}