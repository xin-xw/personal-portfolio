import useSWR from "swr";
import AboutMeSpotifyTopTracks from "./about-me-spotify-top-tracks-display";

export default function AboutMeSpotifyTopTracksMapping() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify-get-top-tracks", fetcher);

  if (!data) {
    return null;
  }

  return (
    <>
      {data.tracks.map((track, index) => (
        <AboutMeSpotifyTopTracks
          ranking={index + 1}
          key={track.songUrl}
          {...track}
        />
      ))}
    </>
  );
}
