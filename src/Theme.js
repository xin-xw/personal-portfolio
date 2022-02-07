import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { mode } from '@chakra-ui/theme-tools';
import "@fontsource/ibm-plex-sans";
import "@fontsource/roboto";
import "@fontsource/inter";

const breakpoints = createBreakpoints({
  sm: '700px',
  md: '800px',
  lg: '800px',
  xl: '800px',
})

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const styles = {
    global: (props) => ({
      body: {
        bg: mode('#f9fafb', '#121212')(props),
        color: mode('black', 'white')(props),
        fontSize: '15px',
      },
    }),
  }

const fonts = {
  fonts: {
    heading: "Inter",
    body: "Roboto"
  },
  fontWeights:
  {
    normal: 300,
    medium: 600,
    bold: 800
  }, 
}

const theme = extendTheme({
  fonts,
  breakpoints,
  config,
  styles,
})

export default theme