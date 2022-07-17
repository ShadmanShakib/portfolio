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
      className="flex flex-col  rounded-sm bg-white p-6 shadow-lg  hover:shadow-lime-500"
      key={id}
    >
      <div className="mb-2">{icon}</div>
      <h2 className="mb-2 text-lg font-semibold">{title}</h2>
      <p className="text-sm">{description}</p>
    </article>
  );
}

export default ServiceCard;
