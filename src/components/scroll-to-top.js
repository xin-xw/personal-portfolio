import React, { useEffect, useState } from "react";
import {
  IconButton,
  Flex,
  useMediaQuery,
  useColorMode,
} from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

export default function ScrollToTop() {
  const { colorMode } = useColorMode();
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  const [is_visible, set_is_visible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  useEffect(() => {
    // Button is displayed after scrolling for 300 pixels
    const toggle_visible = () => {
      if (window.pageYOffset > 300) {
        set_is_visible(true);
      } else {
        set_is_visible(false);
      }
    };

    window.addEventListener("scroll", toggle_visible);

    return () => window.removeEventListener("scroll", toggle_visible);
  }, []);

  return (
    <Flex
      bottom={"55"}
      right={"8"}
      position="fixed"
      display={"block"}
      zIndex={1}
    >
      {is_visible && (
        <IconButton
          onClick={scrollToTop}
          aria-label="scroll to top"
          icon={<ArrowUpIcon />}
          fontSize={isMinWidth ? "3xl" : "2xl"}
          // bgColor="white"
          // color="black"
          variant="solid"
          size={isMinWidth ? "lg" : "md"}
          shadow="md"
          // borderWidth="2px"
          borderRadius={"full"}
          borderColor={colorMode === "dark" ? "white" : "black"}
        />
      )}
    </Flex>
  );
}
