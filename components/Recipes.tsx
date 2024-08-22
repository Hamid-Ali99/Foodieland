import React from "react";
import Image from "next/image";
import { FaClock } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { FaHeart } from "react-icons/fa";

import Wrapper from "./Wrapper";
import { RecipesData } from "@/constants/data";

const Recipes = () => {
  return (
    <div className="overflow-x-hidden">
      <Wrapper>
        <div className="flex flex-col items-center gap-8 py-12">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-0">
            Simple and tasty recipes
          </h2>
          <p className="text-[#5d5c5c] text-center px-4 sm:px-8 lg:px-14 max-w-full sm:max-w-3xl lg:max-w-[800px]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 lg:py-12">
          {RecipesData.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-sky rounded-3xl overflow-hidden shadow-sm "
            >
              <div className="relative h-44 md:h-52 lg:h-64 rounded-md p-4 m-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
                <div className="absolute top-2 right-2 bg-white rounded-full p-2">
                  <FaHeart
                    className={`${
                      item.hasLiked ? "text-[#FF6363]" : "text-gray-300"
                    } text-lg`}
                  />
                </div>
              </div>
              <div className="p-4">
                <h2 className="font-bold text-xl md:text-2xl mb-3">
                  {item.name}
                </h2>
                <div className="flex items-center text-sm pb-4">
                  <FaClock className="mr-2" />
                  <span className="mr-4">{item.time}</span>
                  <ImSpoonKnife className="mr-2" />
                  <span>{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Recipes;
