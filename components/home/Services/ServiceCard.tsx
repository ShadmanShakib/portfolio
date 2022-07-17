import React from "react";
import { ServiceCardProps } from "./Services.types";
import {
  IoCodeSlash,
  IoLogoAppleAppstore,
  IoCloudCircleOutline,
} from "react-icons/io5";
function ServiceCard(props: ServiceCardProps) {
  const {
    service: { title, description, id, varient },
  } = props;
  const icon =
    varient === "web" ? (
      <IoCodeSlash size={30} />
    ) : varient === "mobile" ? (
      <IoLogoAppleAppstore size={30} />
    ) : varient === "api" ? (
      <IoCloudCircleOutline size={30} />
    ) : null;
  return (
    <article
      className="flex flex-col  rounded-sm bg-white p-4 shadow-lg"
      key={id}
    >
      <div>{icon}</div>

      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{description}</p>
    </article>
  );
}

export default ServiceCard;
