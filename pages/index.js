import {
  VStack,
  Center,
  Box,
  Spacer,
  useMediaQuery
} from '@chakra-ui/react'
import Profile from '../src/components/profile'
import Header from '../src/components/header'
import Bio from '../src/components/bio'
import FeaturedWorks from '../src/components/featured-works'
import CurrentDoings from '../src/components/doings/current-doings'
import PastDoings from '../src/components/doings/past-doings'
import { Container } from '../src/components/Container'
import {useState, useEffect} from 'react'
import NextLink from 'next/link'

export default function Home() {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);
  
  useEffect(() => {
    if(desktopQuery !== isMinWidth){
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery])

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
        <Box w="100%" mb={2}><Header/></Box>
        <Box w="100%"><Profile /></Box>
        <Box w="100%" mt={isMinWidth ? "-4rem" : "0rem"} mb="3rem"><Bio /></Box>
        <Box w="100%" my="3rem"><FeaturedWorks/></Box>
        <Box w="100%" my="3rem"><CurrentDoings /></Box>
        <Box w="100%" my="3rem"><PastDoings/></Box>
      </Container>
    </Center>
    
  ) 
}