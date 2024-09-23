"use client";
import { Button } from "@/components/ui/layout/button";
import Image from "next/image";
import Link from "next/link";
import leckerli from "./fonts/leckerli";
import saira from "./fonts/saira";

// const poiret = Poiret_One({
//   subsets: ["latin"],
//   weight: ["400"],
// });

export default function Cta() {
  return (
    <article className="pb-6 w-full flex max-w-screen-xl gap-4 text-[#342e2a]">
      <div className="flex flex-col h-full justify-center gap-1 w-full md:w-6/12 lg:w-7/12">
        <span
          className={`text-2xl sm:text-3xl md:text-2xl lg:text-4xl ${saira.className} font-light`}
        >
          Os melhores
        </span>
        <span
          className={`text-[2.5rem] sm:text-6xl md:text-5xl lg:text-7xl font-bold ${leckerli.className} text-[#342e2a]`}
        >
          Bolos de Aniversário
        </span>
        <span
          className={`text-xl sm:text-3xl md:text-2xl lg:text-4xl ${saira.className} font-light`}
        >
          Cupcakes, Tartes, Semifrios, e muito mais...
        </span>
        <Button asChild>
          <Link
            className={`text-base sm:text-xl md:text-lg lg:text-xl w-min ${saira.className} h-auto p-1 px-3 sm:p-2 sm:px-4 font-light mt-2 sm:mt-6`}
            href="/contact"
          >
            PEDIR ORÇAMENTO
          </Link>
        </Button>
      </div>
      <div className="hidden ml-auto h-full md:flex flex-col justify-center items-end relative md:w-6/12 lg:w-5/12">
        {/* <div className="aspect-[1096/1103] w-[93.5%] relative"> */}
        <div className="aspect-[2508/2625] relative w-full">
          <Image
            className="p-[8%]"
            src="/cake13.png"
            alt="delicious cake"
            fill
          />
        </div>
        {/* <div className="aspect-[1096/1103] w-full absolute top-0 right-0">
            <Image
              className="pointer-events-none select-none"
              src="/cake-border.svg"
              alt="design detail"
              fill
            />
          </div> */}
        {/* <div className="aspect-[315/384] absolute bottom-0 left-[-15%] w-[18.5%] -z-10">
            <Image src="/gift.svg" alt="design detail" fill />
          </div> */}
        {/* <Image
            src="/gift.svg"
            alt="design detail"
            width={315 / 2.75}
            height={384 / 2.75}
            className="pointer-events-none select-none absolute bottom-0 left-[-6.25rem]"
          /> */}
        {/* </div> */}
      </div>
    </article>
  );
}
