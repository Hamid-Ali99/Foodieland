import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <div className="">
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center justify-between py-7 pb-12 border-b-2">
          {/* Logo and Text Section */}
          <div className="flex flex-col gap-5 items-center md:items-start">
            <Image
              src="/images/Foodieland..png"
              alt="logo"
              width={115}
              height={80}
            />
            <p className="text-gray-500 text-center md:text-left w-full">
              Lorem ipsum dolor sit amet, consectetuipisicing elit,
            </p>
          </div>

          {/* Navigation Section */}
          <div className="mt-8 md:mt-0">
            <ul className="flex flex-col md:flex-row items-center font-semibold text-sm gap-4 md:gap-6">
              <li>
                <Link href="/">Recipes</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">About us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6">
          {/* Center-aligned Text */}
          <div className="flex-grow">
            <p className="text-gray-500 text-left sm:text-center">
              © 2023 Foodieland. All rights reserved.
            </p>
          </div>

          {/* Icons Aligned to the Right */}
          <div className="flex items-center justify-center gap-4 sm:gap-5 md:gap-8 ml-auto">
            <Link href="/">
              <FaFacebookF className="text-xl sm:text-2xl" />
            </Link>
            <Link href="/">
              <FaTwitter className="text-xl sm:text-2xl" />
            </Link>
            <Link href="/">
              <SiInstagram className="text-xl sm:text-2xl" />
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
