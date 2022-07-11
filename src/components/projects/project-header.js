import { Box, Heading, Image, Stack, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import TypeWriter from "../typewriter";
import ProjectList from "./projects";

export default function ProjectHeader() {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Stack>
      <Stack mt={isMinWidth ? 15 : 0}>
        <Box align={"center"}>
          <Image
            src="/media/projects/project-header-img.svg"
            alt="Project Header Picture"
            backgroundColor="transparent"
            boxShadow="none"
            height="300px"
            mt="0"
            display={isMinWidth ? "none" : "block"}
          />
        </Box>
        <Box>
          <Image
            src="/media/projects/project-header-img.svg"
            alt="Profile Picture"
            backgroundColor="transparent"
            boxShadow="none"
            height="385px"
            mt="-5"
            mx="auto"
            display={isMinWidth ? "block" : "none"}
          />
        </Box>

        <Box my={isMinWidth ? 10 : 3}>
          <Heading my={"2"} fontSize="4xl" fontWeight="bold">
            {"Featured projects"}
          </Heading>
        </Box>
      </Stack>
      <Box>
        <ProjectList></ProjectList>
      </Box>
    </Stack>
  );
}
