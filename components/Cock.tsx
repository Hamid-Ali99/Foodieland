import Image from "next/image";

import Wrapper from "./Wrapper";

const Chef = () => {
  return (
    <div className="py-12">
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center justify-center gap-24">
          <div className="flex flex-col mb-8 md:mb-0 md:gap-6 gap-4 lg:gap-8">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-0 leading-[1.2] md:leading-[1.2] lg:leading-[1.4]">
              Everyone can be a chef in their own kitchen
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold w-fit">
              Learn More
            </button>
          </div>
          <div className="relative w-full  h-80 md:h-96 bg-gradient-to-t from-sky rounded-2xl sm:rounded-3xl">
            <Image
              src="/images/chef.png"
              alt="chef"
              layout="fill"
              objectFit="contain"
              className="scale-[1]"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Chef;
