import React from "react";
import { ProjectCardProps } from "./Project.d";
function ProjectCard(props: ProjectCardProps) {
  const { title, thumbnail } = props;
  return (
    <article>
      {thumbnail && <img src={thumbnail} alt={title} />}
      <h1 className="text-white">{title}</h1>
    </article>
  );
}

export default ProjectCard;
