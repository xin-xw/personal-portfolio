import { Button, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function ButtonLink({
  button_text,
  website,
  bg_color,
  font_color,
}) {
  return (
    <Button variant="solid" bg={bg_color ? bg_color : ""}>
      <NextLink px={2} py={1} rounded={"md"} href={website} passHref>
        <Text color={font_color} textDecoration={"none"}>
          {button_text}
        </Text>
      </NextLink>
    </Button>
  );
}
