import React from "react";
import { star } from "../assets/icons";
import Reveal from "../Framer/Reveal";
const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <Reveal>
      <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} className="w-[280px] h-[280px]" alt={name} />
        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="font-montserrat leading-normal text-xl text-slate-gray">
            (4.5)
          </p>
        </div>
        <h3
          className="mt-2 text-2xl font-semibold
         leading-normal font-palanquin"
        >
          {name}
        </h3>
        <p
          className="mt-2 font-semibold font-montserrat 
        text-coral-red text-2xl"
        >
          {price}
        </p>
      </div>
    </Reveal>
  );
};

export default PopularProductCard;
