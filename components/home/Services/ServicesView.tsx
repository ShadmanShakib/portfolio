import React from "react";
import ServiceCard from "./ServiceCard";
import { ServicesData } from "./ServiceData";
import { map } from "underscore";
function ServicesView() {
  return (
    <section>
      <h1 className="mb-10 text-center text-3xl font-semibold text-white">
        My Services
      </h1>

      <div className="grid gap-6 xl:grid-cols-3">
        {map(ServicesData, (service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default ServicesView;
