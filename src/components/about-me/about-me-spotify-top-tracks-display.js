import {
  Flex,
  HStack,
  Box,
  Text,
  Spacer,
  Divider,
  useColorMode,
} from "@chakra-ui/react";

function TrackTemplate({ ranking, song_name, artist_name }) {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Flex direction={"row"}>
        <HStack>
          <Flex>
            <HStack>
              <Box>
                <Text>{ranking + "."}</Text>
              </Box>
              <Spacer />
              <Flex direction="column">
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
    </Box>
  );
}

export default function AboutMeSpotifyTopTracks(track) {
  return (
    <Flex direction={"column"} mt={1}>
      <Box my={3}>
        <TrackTemplate
          ranking={track.ranking}
          song_name={track.title}
          artist_name={track.artist}
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
