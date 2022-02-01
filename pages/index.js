import {
  VStack,
  Center,
  Box,
  Spacer,
} from '@chakra-ui/react'
import AboutMe from '../src/components/about-me'
import Header from '../src/components/header'
import Bio from '../src/components/bio'
import FeaturedWorks from '../src/components/featured-works'
import CurrentDoings from '../src/components/doings/current-doings'
import PastDoings from '../src/components/doings/past-doings'
import { Container } from '../src/components/Container'
import {useState, useEffect} from 'react'
import NextLink from 'next/link'

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    
    <Center>
      <Container>
        <Box w="100%" mt={2}><Header/></Box>
        <Box w="100%" mb="3rem"><AboutMe /></Box>
        <Box w="100%" my="3rem"><Bio /></Box>
        <Box w="100%" my="3rem"><FeaturedWorks/></Box>
        <Box w="100%" my="3rem"><CurrentDoings/></Box>
        <Box w="100%" my="3rem"><PastDoings/></Box>
      </Container>
    </Center>
    
  ) 
}