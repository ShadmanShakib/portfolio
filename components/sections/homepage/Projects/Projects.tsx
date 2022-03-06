/* eslint-disable @next/next/no-img-element */
import React from "react";
import _ from "underscore";
import type { ProjectProps } from "./types";

function Projects(props: ProjectProps) {
  const { playlist } = props;
  return (
    <>
      <h1 className="text-white text-3xl text-center">Projects</h1>

      <div className="grid grid-cols-3">
        {_.map(playlist.items, (item) => {
          const { id, snippet } = item;
          const { title, description, publishedAt, thumbnails } = snippet;
          return (
            <div key={id} className="text-white">
              <img src={thumbnails.medium.url} alt={title} />
              <div className="">
                <h1 className="text-xl">{title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
