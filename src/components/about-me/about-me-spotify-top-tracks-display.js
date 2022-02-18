import {
  Flex,
  HStack,
  Box,
  Text,
  Spacer,
  Divider,
  useColorMode,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

function TrackTemplate({ ranking, song_name, artist_name, spotify_url }) {
  const { colorMode } = useColorMode();
  return (
    <LinkBox>
      <Flex direction={"row"}>
        <HStack
          overflow={"hidden"}
          verticalAlign={"center"}
          transition="all 0.2s"
          transition-timing-function="spring(3 100 10 10)"
          _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
        >
          <Flex>
            <HStack>
              <Box>
                <Text>{ranking + "."}</Text>
              </Box>
              <Spacer />
              <Flex direction="column">
                <LinkOverlay href={spotify_url} isExternal></LinkOverlay>
                <Box>
                  <Text fontSize="md" fontWeight={"bold"}>
                    {song_name}
                  </Text>
                </Box>
                <Box>
                  <Text
                    color={colorMode === "dark" ? "gray.300" : "gray.700"}
                    fontSize="xs"
                  >
                    {artist_name}
                  </Text>
                </Box>
              </Flex>
            </HStack>
          </Flex>
        </HStack>
      </Flex>
    </LinkBox>
  );
}

export default function AboutMeSpotifyTopTracks(track) {
  return (
    <Flex direction={"column"}>
      <Box my={3}>
        <TrackTemplate
          ranking={track.ranking}
          song_name={track.title}
          artist_name={track.artist}
          spotify_url={track.song_url}
        ></TrackTemplate>
      </Box>
      <Divider />
    </Flex>

    // <Table variant="simple">
    //   <TableCaption>Top Tracks</TableCaption>
    //   <Thead>
    //     <Tr>
    //       <Th isNumeric>Ranking</Th>
    //       <Th>Song Title</Th>
    //       <Th>Artist</Th>
    //     </Tr>
    //   </Thead>
    //   <Tbody>
    //     <Tr>
    //       <Td>{track.ranking}</Td>
    //       <Td>{track.title}</Td>
    //       <Td>{track.artist}</Td>
    //     </Tr>
    //   </Tbody>
    //   {/* href={track.songUrl} */}
    // </Table>
  );
}
