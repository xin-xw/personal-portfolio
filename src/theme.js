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

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f9fafb", "#121212")(props),
      color: mode("black", "white")(props),
    },
  }),
};

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "IBM Plex Sans",
  },
  breakpoints,
  config,
  styles,
});

export default theme;