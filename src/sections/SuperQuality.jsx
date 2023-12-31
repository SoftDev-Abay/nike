import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";
import Reveal from "../Framer/Reveal";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center
    max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin lg:max-w-lg text-4xl capitalize font-bold">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your sarisfaction.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Reveal>
          <img
            className="object-contain"
            src={shoe8}
            alt="shoe8"
            width={570}
            height={522}
          />
        </Reveal>
      </div>
    </section>
  );
};

export default SuperQuality;
