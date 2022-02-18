import querystring from "querystring";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getRecentTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
// export default async (_, res) => {
//   // const response = await getNowPlaying();
//   const recently_played_response = await getRecentTracks();

//   // if (response.status === 204 || response.status > 400) {
//   //   return res.status(200).json({ isPlaying: false });
//   // }

//   // const song = await response.json();
//   // const isPlaying = song.is_playing;
//   // const title = song.item.name;
//   // const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
//   // const album = song.item.album.name;
//   // const albumImageUrl = song.item.album.images[0].url;
//   // const songUrl = song.item.external_urls.spotify;

//   if (
//     recently_played_response.status === 204 ||
//     recently_played_response.status > 400
//   ) {
//     return res.status(200).json({ isPlaying: false });
//   }

//   const rp_songs = await recently_played_response.json();
//   const rp_top_song = rp_songs.items[0];
//   const rp_is_playing = rp_songs.is_playing;
//   const rp_song_title = rp_songs.track.name;
//   const rp_artist = rp_songs.track.artists
//     .map((_artist) => _artist.name)
//     .shift();
//   const rp_song_url = rp_songs.track.external_urls.spotify;

//   console.log(rp_songs);
//   return res.status(200).json({
//     // album,
//     // albumImageUrl,
//     // artist,
//     // isPlaying,
//     // songUrl,
//     // title,
//     rp_top_song,
//     rp_is_playing,
//     rp_song_title,
//     rp_artist,
//     rp_song_url,
//   });
// };

export default async (_, res) => {
  const response = await getRecentTracks();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const songs = await response.json();

  if (songs.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const mostRecentSong = songs.items[0];
  const isPlaying = mostRecentSong.is_playing;
  const title = mostRecentSong.track.name;
  const artist = mostRecentSong.track.artists
    .map((_artist) => _artist.name)
    .shift();
  const songUrl = mostRecentSong.track.external_urls.spotify;
  const album = mostRecentSong.track.album.name;
  const albumImageUrl = mostRecentSong.track.album.images[0].url;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );
  console.log(songs, albumImageUrl, album);
  return res
    .status(200)
    .json({ isPlaying, title, artist, songUrl, album, albumImageUrl });
};
