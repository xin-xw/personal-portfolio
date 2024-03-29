import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/ibm-plex-sans";
import "@fontsource/roboto";

const breakpoints = createBreakpoints({
  sm: "700px",
  md: "800px",
  lg: "800px",
  xl: "800px",
});

const styles = {
  global: (props) => ({
    body: {
      bg: mode("brand.100", "brand.900")(props),
      color: mode("brand.900", "brand.100")(props),
    },
  }),
};

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f4f5f6",
      200: "#F5F5F5",
      800: "#0D1013",
      900: "#0D1013",
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Inter",
    body: "Roboto",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "22px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "42px",
    "6xl": "48px",
  },
  breakpoints,
  styles,
});

export default theme;
