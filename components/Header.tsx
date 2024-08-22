"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { NavLinks } from "@/constants/data";
import { SiInstagram } from "react-icons/si";
import Wrapper from "./Wrapper";
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up by removing the overflow hidden when component unmounts or menu closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="border-b relative">
      <Wrapper>
        <nav className="flex items-center justify-between py-6">
          <Link href="/" className="z-50">
            <Image
              src="/images/Foodieland..png"
              alt="logo"
              width={115}
              height={80}
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center justify-center lg:gap-12 md:gap-8">
            {NavLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.link} className="text-[1rem] font-medium">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center justify-center gap-8">
            <Link href="/">
              <FaFacebookF size={20} />
            </Link>
            <Link href="/">
              <FaTwitter size={20} />
            </Link>
            <Link href="/">
              <SiInstagram size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden z-50">
            {isMenuOpen ? (
              <MdClose size={20} className="mr-4" />
            ) : (
              <AiOutlineMenuFold size={20} />
            )}
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } mt-20`}
          >
            <Wrapper>
              <div className="flex flex-col items-center justify-center">
                <ul className="flex flex-col items-center gap-6">
                  {NavLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className="text-xl font-medium"
                        onClick={toggleMenu}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center gap-8 mt-8 border-t-2 w-40 py-8">
                  <Link href="/">
                    <FaFacebookF size={24} />
                  </Link>
                  <Link href="/">
                    <FaTwitter size={24} />
                  </Link>
                  <Link href="/">
                    <SiInstagram size={24} />
                  </Link>
                </div>
              </div>
            </Wrapper>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Header;
