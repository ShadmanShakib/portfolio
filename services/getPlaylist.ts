export default async function getPlaylist() {
  const YOUTUBE_PLAYLIST_ITEMS_API =
    "https://www.googleapis.com/youtube/v3/playlistItems";

  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLQQpv-6Xxb2kKiyDd-s3gNkxp72hbbjDb&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  );

  const playlist = await res.json();

  return { playlist };
}
