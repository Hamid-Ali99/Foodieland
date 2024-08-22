import React from "react";
import Image from "next/image";
import { FaClock } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlinePlayCircleFilled } from "react-icons/md";

import Wrapper from "./Wrapper";

const Hero = () => {
  return (
    <div className="py-8">
      <Wrapper>
        <div className="rounded-3xl overflow-hidden flex flex-col lg:flex-row bg-pink-200 h-[78vh]">
          {/* left */}
          <div className="left bg-sky px-5 py-5 lg:px-10 lg:py-5 w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <button className="flex items-center gap-3 rounded-3xl bg-white px-4 py-2.5 my-7 text-sm">
                <Image
                  src="/images/pil-img.png"
                  alt="pil-img"
                  height={13}
                  width={13}
                />
                <span className="text-black font-bold">Hot Recipes</span>
              </button>
              <h1 className="font-semibold text-3xl md:text-4xl lg:text-6xl lg:leading-snug text-black">
                Spicy delicious chicken wings
              </h1>
              <p className="text-black pt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex gap-3 py-7">
                <button className="flex items-center gap-3 rounded-3xl bg-[#0000000e] px-4 py-2.5 text-sm">
                  <FaClock />
                  <span className="text-black font-medium">30 Minutes</span>
                </button>
                <button className="flex items-center gap-3 rounded-3xl bg-[#0000000e] px-4 py-2.5 text-sm">
                  <ImSpoonKnife />
                  <span className="text-black font-medium">Chicken</span>
                </button>
              </div>
            </div>

            <div className="bottom flex flex-row items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/profile.png"
                  alt="profile"
                  width={50}
                  height={50}
                />
                <div>
                  <h5 className="font-semibold">John Smith</h5>
                  <p className="text-sm text-gray-600">15 March 2022</p>
                </div>
              </div>
              <div>
                <button className="text-sm bg-black text-white px-3 py-2 lg:px-5 lg:py-3 rounded-lg flex items-center gap-2 lg:gap-3">
                  View Recipes <MdOutlinePlayCircleFilled size={24} />
                </button>
              </div>
            </div>
          </div>

          <div className="right w-full lg:w-1/2">
            <Image
              src="/images/hero-img.png"
              alt="hero-img"
              height={600}
              width={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
