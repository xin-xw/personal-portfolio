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
  useSystemColorMode: false,
}

const styles = {
    global: (props) => ({
      body: {
        bg: mode('white', '#121212')(props),
        color: mode('#121212', 'white')(props),
      },
    }),
  }

const overrides = {
  fontWeights:
  {
    normal: 400,
    medium: 700,
    bold: 900
  }
}
const theme = extendTheme({
  // fonts: {
  //   heading: "IBM Plex Sans",
  //   body: "IBM Plex Sans"
  // },
  fonts: {
    heading: "Inter",
    body: "IBM Plex Sans"
  },
  overrides,
  breakpoints,
  config,
  styles,
})

export default theme