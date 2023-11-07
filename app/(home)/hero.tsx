import React from "react";
import { Button } from "@/app/components/ui";
function Hero() {
  return (
    <section>
      <div className="text-center">
        <div className="">
          <h1 className="mb-10 text-3xl lg:text-8xl">
            Ship your idea,
            <br />
            start reciving payment
          </h1>
          <p className="text-xl">
            All the technical support you need to turn your idea into a SaaS
            business and sarting earning money
          </p>
        </div>
        <div className="mt-10">
          <Button className="w-36 font-semibold uppercase">Book a Call</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
