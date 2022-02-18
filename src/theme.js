import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

import "@fontsource/ibm-plex-sans";
import "@fontsource/roboto";
import "@fontsource/inter";

const breakpoints = createBreakpoints({
  sm: "700px",
  md: "800px",
  lg: "800px",
  xl: "800px",
});

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f3f4f6", "#0D1013")(props),
      color: mode("#0D1013", "#f3f4f6")(props),
    },
  }),
};

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  fonts: {
    heading: "Inter",
    body: "IBM Plex Sans",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "22px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "42px",
    "6xl": "48px",
  },
  breakpoints,
  styles,
});

export default theme;
