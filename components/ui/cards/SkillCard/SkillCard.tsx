import React from "react";
import { ISkillCard } from "./types";

function SkillCard(props: ISkillCard): JSX.Element {
  const { title, src } = props;
  return (
    <div className="inline-block mx-3">
      <div className="w-44  rounded-md justify-start pl-4 shadow-md flex items-center h-16 bg-white ">
        <img className="h-10 mr-3  w-10   " src={src} alt={title} />
        <div className="">{title}</div>
      </div>
    </div>
  );
}

export default SkillCard;
