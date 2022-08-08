import React from "react";
import ServiceCard from "./ServiceCard";
import { ServicesData } from "./ServiceData";
import { map } from "underscore";
import { Heading } from "components/ui";
function ServicesView() {
  return (
    <section className="py-5">
      <Heading>My Services</Heading>

      <div className="grid gap-6 xl:grid-cols-3">
        {map(ServicesData, (service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default ServicesView;
