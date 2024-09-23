"use client";

import LoadingSpinner from "@/components/ui/loading-spinner";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Pictures() {
  const [max, setMax] = useState(8);
  const hasNextPage = max < pictures.length;
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView && hasNextPage) {
      const timeout = setTimeout(() => setMax(max + 8), 200);
      return () => clearTimeout(timeout);
    }
  }, [inView, hasNextPage]);

  console.log(inView);
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl mt-4">
      {pictures.slice(0, max).map((x, i) => (
        <div key={i} className="aspect-square w-full relative">
          <Image
            src={x}
            className="bg-gray-300"
            fill
            alt="bolo feito com amor"
          />
          <Link
            href="/contact"
            className="absolute opacity-0 hover:opacity-80 bg-[#262321] w-full h-full transition-all duration-300 text-white flex justify-center items-center text-lg"
          >
            Encomende Já
          </Link>
        </div>
      ))}
      {hasNextPage && (
        <div
          ref={ref}
          className="flex justify-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4"
        >
          <LoadingSpinner className="h-10 w-10 stroke-gray-500 mt-2 sm:mt-4" />
        </div>
      )}
    </div>
  );
}

const pictures = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/Pic(1).jpg",
  "/gallery/Pic(2).jpg",
  "/gallery/Pic(3).jpg",
  "/gallery/Pic(4).jpg",
  "/gallery/Pic(5).jpg",
  "/gallery/Pic(6).jpg",
  "/gallery/Pic(7).jpg",
  "/gallery/Pic(8).jpg",
  "/gallery/Pic(9).jpg",
  "/gallery/Pic(10).jpg",
  "/gallery/Pic(11).jpg",
  "/gallery/Pic(12).jpg",
  "/gallery/Pic(13).jpg",
  "/gallery/Pic(14).jpg",
  "/gallery/Pic(15).jpg",
  "/gallery/Pic(16).jpg",
];
