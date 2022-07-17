import React from "react";
import ServiceCard from "./ServiceCard";
import { ServicesData } from "./ServiceData";
import { map } from "underscore";
function ServicesView() {
  return (
    <section>
      <h1>Services I provide</h1>
      <p>I provide services in the following areas:</p>
      <div className="grid gap-6 xl:grid-cols-3">
        {map(ServicesData, (service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default ServicesView;
