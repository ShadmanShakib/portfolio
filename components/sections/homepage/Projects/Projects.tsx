import React from "react";
import type { ProjectProps } from "./types";
import { getPlaylist } from "services";
function Projects(props: ProjectProps) {
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
