export default async function getPlaylist() {
  const YOUTUBE_PLAYLIST_ITEMS_API =
    "https://www.googleapis.com/youtube/v3/playlistItems";

  fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLQQpv-6Xxb2kKiyDd-s3gNkxp72hbbjDb&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
}
