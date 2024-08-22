import React from "react";
import Wrapper from "./Wrapper";
import { instaPosts } from "@/constants/data";
import Image from "next/image";
import { BsInstagram, BsThreeDots } from "react-icons/bs";

const Insta = () => {
  return (
    <div className="bg-gradient-to-t from-sky">
      <Wrapper>
        <div className="flex flex-col items-center gap-8 py-12">
          <h2 className="text-3xl sm:text-4xl font-semibold sm:mb-0">
            Check out @foodieland on Instagram
          </h2>
          <p className="text-[#5d5c5c] text-center px-0 sm:px-0 md:px-8 lg:px-14 max-w-full sm:max-w-3xl lg:max-w-[800px]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {instaPosts.map((post, index) => (
            <div key={index} className="bg-white m-3">
              <div className="">
                <div className="flex items-center justify-between bg-white p-2">
                  <div className="flex items-center gap-3">
                    <Image
                      src={post.profile}
                      alt="profile"
                      height={40}
                      width={40}
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <p className="font-bold">Foodieland.</p>
                        <Image
                          src="/images/insta/bluetick.svg"
                          alt="tick"
                          height={19}
                          width={19}
                        />
                      </div>
                      <p className="text-sm">Tokyo, Japan</p>
                    </div>
                  </div>
                  <BsThreeDots className="ml-auto" />
                </div>
                <div className="relative w-full h-64">
                  <Image
                    src={post.image}
                    alt="post"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>

                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-3 py-3">
                    <Image
                      src="/images/insta/Like.svg"
                      alt="like"
                      height={19}
                      width={19}
                    />
                    <Image
                      src="/images/insta/Comment.svg"
                      alt="like"
                      height={19}
                      width={19}
                    />
                    <Image
                      src="/images/insta/Messanger.svg"
                      alt="like"
                      height={19}
                      width={19}
                    />
                  </div>

                  {/* Center the Pagination Icon */}
                  <div className="flex-1 flex justify-center">
                    <Image
                      src="/images/insta/Pagination.svg"
                      alt="pagination"
                      height={19}
                      width={19}
                    />
                  </div>

                  <div>
                    <Image
                      src="/images/insta/Save.svg"
                      alt="save"
                      height={19}
                      width={19}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-1 px-2">
                  <Image
                    src="/images/insta/Oval.svg"
                    alt="like"
                    height={19}
                    width={19}
                  />
                  <p className="text-sm">
                    Liked by <span className="font-bold">craig_love </span>and{" "}
                    <span className="font-bold">44,686</span>
                  </p>
                </div>
                <p className="text-sm px-2">
                  <span className="font-bold">Foodieland.</span>
                  {post.comment}
                </p>
                <p className="px-2 my-3 text-sm text-gray-400">September 19</p>
              </div>
            </div>
          ))}
        </div>
        <button className="text-sm bg-black text-white lg:px-5 lg:py-3 px-3 py-2 rounded-lg flex items-center lg:gap-3 gap-2 mx-auto my-10">
          Visit Our Instagram <BsInstagram />
        </button>
      </Wrapper>
    </div>
  );
};

export default Insta;
