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
} from "@chakra-ui/react";
import useSWR from "swr";
import { GiMusicalNotes } from "react-icons/gi";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export default function AboutMeSpotifyRecentSongs() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);
  const animation = `${spin} infinite 20s linear`;

  return (
    <Box mt={2} alignContent="center">
      <HStack
        p={5}
        borderWidth="2px"
        borderRadius="sm"
        overflow={"hidden"}
        mx="auto"
        my="auto"
      >
        <Box p={2} overflow={"hidden"}>
          <Flex direction="row">
            <HStack spacing={3}>
              <Icon
                as={GiMusicalNotes}
                height="27px"
                width="27px"
                alt="Now playing icon"
              />
              <Spacer />
              {data?.isPlaying ? (
                <Spinner></Spinner>
              ) : (
                <Image
                  animation={animation}
                  mr={3}
                  boxSize="55px"
                  borderRadius="full"
                  src={data?.albumImageUrl}
                  alt={data?.album}
                />
              )}

              <Box>
                <Flex direction="column">
                  <Text fontWeight="bold" fontSize="lg">
                    {data?.title}
                  </Text>
                  <Text fontSize="md">by {data?.artist}</Text>
                </Flex>
              </Box>
            </HStack>
          </Flex>
        </Box>
      </HStack>
    </Box>
  );
}
