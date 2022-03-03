import React from "react";
import type { ProjectProps } from "./types";
import { getPlaylist } from "services";
function Projects(props: ProjectProps) {
  const YOUTUBE_PLAYLIST_ITEMS_API =
    "https://www.googleapis.com/youtube/v3/playlistItems";
  const getData = () => {
    fetch(
      `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLQQpv-6Xxb2kKiyDd-s3gNkxp72hbbjDb&key=AIzaSyAD80m78dgVwCSO1Kff2_z7Z3i1dU_vLgY`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      Projects
      <pre>{JSON.stringify(props.playlist, null, 2)}</pre>
      <button className="bg-white p-10" onClick={getPlaylist}>
        Get Data
      </button>
    </div>
  );
}

export default Projects;
