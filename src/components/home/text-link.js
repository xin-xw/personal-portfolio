import { Text, IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

export default function TextLink({ link, name, icon }) {
  const { colorMode } = useColorMode("black", "white");
  return (
    <u>
      <NextLink href={link} passHref>
        <IconButton
          as="a"
          rightIcon={icon}
          target="_blank"
          fontWeight="normal"
          variant="link"
          color={colorMode === "dark" ? "white" : "dark"}
        >
          <Text
            fontWeight="bold"
            color={colorMode === "dark" ? "white" : "dark"}
          >
            {name}
          </Text>
        </IconButton>
      </NextLink>
    </u>
  );
}
