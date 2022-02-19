import { getRecentTracks } from "./spotify-api";

export default async (_, res) => {
  const response = await getRecentTracks();
  // if (response.status === 204 || response.status > 400) {
  //   return res.status(200).json({ isPlaying: false });
  // }

  const songs = await response.json();

  if (songs.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const most_recent_songs = songs.items[0];
  const is_playing = most_recent_songs.is_playing;
  const title = most_recent_songs.track.name;
  const artist = most_recent_songs.track.artists
    .map((_artist) => _artist.name)
    .shift();
  const song_url = most_recent_songs.track.external_urls.spotify;
  const album = most_recent_songs.track.album.name;
  const album_img_url = most_recent_songs.track.album.images[0].url;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json({
    is_playing,
    title,
    artist,
    song_url,
    album,
    album_img_url,
  });
};
