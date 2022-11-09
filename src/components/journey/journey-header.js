import { Box, Heading, Image, Stack, useMediaQuery, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import TypeWriter from "../typewriter";
// import ProjectList from "./projects";
import PastDoings from "../home/past-doings";
import CurrentDoings from "../home/current-doings";

export default function JourneyHeader() {
  const { colorMode } = useColorMode();
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
        <Box mt={-3} mb={-2}>
          <Heading fontSize="3xl" fontWeight="bold">
            {"Currently,"}
          </Heading>
        </Box>
        <Box w="100%" my="3rem">
          <CurrentDoings />
        </Box>
        <Box align={"center"}>
          <Image
            src={
              colorMode === "dark"
                ? "/media/journey/journey-night.svg"
                : "/media/journey/journey.svg"
            }
            alt="Journey image"
            backgroundColor="transparent"
            boxShadow="none"
            height="150px"
            mt="0"
            display={isMinWidth ? "none" : "block"}
          />
        </Box>
        <Box>
          <Image
            src={
              colorMode === "dark"
                ? "/media/journey/journey-night.svg"
                : "/media/journey/journey.svg"
            }
            alt="Journey image"
            backgroundColor="transparent"
            boxShadow="none"
            height="385px"
            mt="-20"
            mx="-6"
            mb="-20"
            display={isMinWidth ? "block" : "none"}
          />
        </Box>
        <Box my={isMinWidth ? 0 : 0}>
          {/* <Heading my={"0"} fontSize="4xl" fontWeight="bold" textAlign={"right"}>
            {"Journey"}
          </Heading> */}
        </Box>

        <Box>

          <Box w="100%" my="-1">
            <PastDoings />
          </Box>
        </Box>
      </Stack>
      <Box>

      </Box>
    </Stack>
  );
}
