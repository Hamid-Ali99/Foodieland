// "use client";

import React, {
  //  useEffect,
  useState,
} from "react";
import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const imageUrl = {
  black:
    "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1920&q=75",
  white:
    "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-2.png%3Fv%3D1689798965&w=1920&q=75",
  blue: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-circles-blue.png%3Fv%3D1690003396&w=1920&q=75",
};

const colorVariants = ["black", "white", "blue"];
const sizeVariants = ["xs", "s", "m", "l", "xl"];

const ProductPage = ({
  searchParams,
}: {
  searchParams: { color: string; size: string };
}) => {
  // const router = useRouter();
  // const selectedColor = "black";
  // const selectedSize = "M";

  // const [selectedColor, setSelectedColor] = useState("black");
  // const [selectedSize, setSelectedSize] = useState("s");

  // const searchParams = useSearchParams();
  // const selectedColor = searchParams.get("color");
  // const selectedSize = searchParams.get("size");

  // for server-side rendering
  const selectedColor = (searchParams.color || "black") as string;
  const selectedSize = (searchParams.size || "s") as string;

  // useEffect(
  //   () => {
  // window.history.pushState(
  //   null,
  //   "",
  //   `?color=${selectedColor}&size=${selectedSize}`
  // );
  // router.push(`?color=${selectedColor}&size=${selectedSize}`, {
  //   scroll: false,
  // });
  //   },
  //   [
  //     // selectedColor, selectedSize, router
  //   ]
  // );

  return (
    <main className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="flex items-center bg-white rounded w-[96%] min-h-[75vh]">
        <div className="flex flex-[2] justify-center">
          <Image
            // @ts-ignore
            src={`${imageUrl[selectedColor]}`}
            alt="Product"
            width={622}
            height={550}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-semibold">Acme Circles T-Shirt</h3>
          <div className="bg-blue-500 text-white inline-block px-2 py-1 rounded-full mt-3 mb-10">
            $20.00 USD
          </div>
          <div>
            <div className="mb-3">
              <h2 className="text-xl uppercase mb-2">Color</h2>

              <div className="flex gap-2">
                {colorVariants.map((color, index) => (
                  <Link
                    // href={`?color=${color}&size=${selectedSize}`}
                    href={`?${new URLSearchParams({
                      color,
                      size: selectedSize,
                    })}`}
                    key={index}
                    className={`bg-gray-200 px-4 py-1 rounded-full border ${
                      selectedColor === color
                        ? "border-blue-500"
                        : "border-gray-200"
                    }`}
                    // onClick={() => setSelectedColor(color)}
                  >
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <h2 className="text-xl uppercase mb-2">Color</h2>

              <div className="flex gap-2">
                {sizeVariants.map((size, index) => (
                  <Link
                    // href={`?color=${selectedColor}&size=${size}`}
                    href={`?${new URLSearchParams({
                      color: selectedColor,
                      size,
                    })}`}
                    key={index}
                    className={`bg-gray-200 px-4 py-1 rounded-full border ${
                      selectedSize === size
                        ? "border-blue-500"
                        : "border-gray-200"
                    }`}
                    // onClick={() => setSelectedSize(size)}
                  >
                    {size.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
