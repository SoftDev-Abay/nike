import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
import Reveal from "../Framer/Reveal";

const Services = () => {
  return (
    <Reveal>
      <section
        className="max-container flex justify-center 
    flex-wrap gap-9"
      >
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </section>
    </Reveal>
  );
};

export default Services;
