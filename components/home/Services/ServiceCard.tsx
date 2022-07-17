import React from "react";
import { ServiceCardProps } from "./Services.types";
import { IoCodeSlash } from "react-icons/io5";
function ServiceCard(props: ServiceCardProps) {
  const {
    service: { title, description, id, varient },
  } = props;
  return (
    <article
      className="flex flex-col items-center justify-center rounded-sm bg-white p-4 shadow-lg"
      key={id}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{description}</p>
    </article>
  );
}

export default ServiceCard;
