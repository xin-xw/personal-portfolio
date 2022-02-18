import {
  Flex,
  Box,
  Text,
  Image,
  Spacer,
  Icon,
  HStack,
  keyframes,
  Spinner,
  LinkBox,
  LinkOverlay,
  useMediaQuery,
} from "@chakra-ui/react";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { GiMusicalNotes } from "react-icons/gi";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export default function AboutMeSpotifyRecentSongs() {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify-get-recent-tracks", fetcher);
  const animation = `${spin} infinite 20s linear`;

  return (
    <LinkBox my={5} alignContent="center">
      <HStack
        p={5}
        borderWidth="2px"
        borderRadius="sm"
        overflow={"hidden"}
        mx="auto"
        my="auto"
        verticalAlign={"center"}
        transition="all 0.2s"
        transition-timing-function="spring(3 100 10 10)"
        _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
      >
        <LinkOverlay
          href={
            "https://open.spotify.com/user/8grb62nlus2653d01p4bctwbd?si=0edb0e622a8d4a1d"
          }
        ></LinkOverlay>
        <Box p={0} overflow={"hidden"}>
          <Flex direction="row" alignContent={"space-around"}>
            <HStack spacing={2}>
              <Icon
                as={GiMusicalNotes}
                height={isMinWidth ? "25px" : "17px"}
                width={isMinWidth ? "25px" : "17px"}
                alt="Now playing icon"
              />
              <Spacer />
              {data?.isPlaying ? (
                <Box>
                  <Spinner mx={3}></Spinner>
                </Box>
              ) : (
                <Box overflow={"hidden"}>
                  <Image
                    animation={animation}
                    mr={1.5}
                    width={isMinWidth ? "49px" : "23px"}
                    height={isMinWidth ? "49px" : "23px"}
                    borderRadius="full"
                    src={data?.albumImageUrl}
                    alt={data?.album}
                  />
                </Box>
              )}

              <Box textOverflow={"hidden"}>
                <Flex direction="column">
                  <Text fontWeight="bold" fontSize={isMinWidth ? "md" : "sm"}>
                    {data?.title}
                  </Text>

                  <Text fontSize={isMinWidth ? "sm" : "xs"}>
                    by {data?.artist}
                  </Text>
                </Flex>
              </Box>
            </HStack>
          </Flex>
        </Box>
      </HStack>
    </LinkBox>
  );
}
