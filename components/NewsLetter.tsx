import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <div className="py-20">
      <Wrapper>
        <div className="rounded-3xl bg-sky relative p-6 sm:p-10">
          <div className="text-center flex flex-col gap-7 items-center py-10">
            <h2 className="text-3xl sm:text-4xl font-semibold mt-3 mb-4 sm:mb-0">
              Deliciousness to your inbox
            </h2>
            <p className="w-full sm:w-2/3 lg:w-1/2 text-gray-600 mb-8 sm:mb-16">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident molestias quos perspiciatis mollitia minima voluptatem
              fuga totam! Ratione, maiores? Cupiditate!
            </p>
            <div className="bg-white rounded-xl flex flex-col sm:flex-row items-center justify-between px-4 py-2 w-full sm:w-2/3 lg:w-1/3 mb-3 z-50">
              <input
                type="text"
                placeholder="Your email address..."
                className="bg-transparent outline-none w-full sm:w-auto mb-4 sm:mb-0 sm:flex-1"
              />
              <button className="bg-black text-white rounded-2xl px-9 py-3 w-full sm:w-auto">
                Subscribe
              </button>
            </div>
            <Image
              src="/images/salad.png"
              alt="salad"
              width={333}
              height={333}
              className="absolute bottom-0 left-0 rounded-3xl hidden sm:block"
            />
            <Image
              src="/images/Photo-plate.png"
              alt="plate"
              width={199}
              height={199}
              className="absolute bottom-0 right-0 rounded-3xl hidden sm:block"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default NewsLetter;
