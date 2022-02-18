import querystring from "querystring";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const token_endpoint = `https://accounts.spotify.com/api/token`;
const now_playing_endpoint = `https://api.spotify.com/v1/me/player/currently-playing`;
const recently_played_endpoint = `https://api.spotify.com/v1/me/player/recently-played`;
const get_top_tracks_endpoint = `https://api.spotify.com/v1/me/top/tracks`;

const getAccessToken = async () => {
  const response = await fetch(token_endpoint, {
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

  return fetch(now_playing_endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getRecentTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(recently_played_endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();
  return fetch(get_top_tracks_endpoint, {
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
