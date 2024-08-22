import React from "react";
import Image from "next/image";

import Wrapper from "./Wrapper";
import { CategoriesData } from "@/constants/data";

const Categories = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex flex-col sm:flex-row items-center justify-between py-8 sm:py-12">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-0">
            Categories
          </h2>
          <div>
            <button className="text-sm font-semibold bg-sky text-black px-4 sm:px-5 py-2 sm:py-3 rounded-lg flex items-center gap-2 sm:gap-3">
              View All Categories
            </button>
          </div>
        </div>
        <div className="categories my-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {CategoriesData.map((item, index) => {
              // Apply different gradient color based on category name
              const gradientColor =
                item.name === "Vegan"
                  ? "from-[#98da6c33]"
                  : item.name === "Meat"
                  ? "from-[#ff8a6521]"
                  : item.name === "Dessert"
                  ? "from-[#ffcc7030]"
                  : item.name === "Breakfast"
                  ? "from-[#70824621]"
                  : "from-[#0000000f]";

              return (
                <div
                  key={index}
                  className={`w-full flex flex-col items-center bg-gradient-to-t from-[#f0efef90] px-4 sm:px-6 py-4 sm:py-6 rounded-2xl sm:rounded-3xl space-y-4 sm:space-y-6 ${gradientColor}
                  `}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <p className="font-semibold text-center">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Categories;
